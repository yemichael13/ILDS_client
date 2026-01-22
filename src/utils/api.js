const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Generic API fetch function
 */
const fetchAPI = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * Posts API
 */
export const postsAPI = {
  // Get all posts
  getAll: () => fetchAPI('/posts'),

  // Get latest posts (limit defaults to 3)
  getLatest: (limit = 3) => fetchAPI(`/posts/latest?limit=${limit}`),

  // Get post by slug
  getBySlug: (slug) => fetchAPI(`/posts/${slug}`),
};

/**
 * Newsletter API
 */
export const newsletterAPI = {
  // Subscribe to newsletter
  subscribe: (email) =>
    fetchAPI('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
};

/**
 * Auth API
 */
export const authAPI = {
  // Admin login
  login: async (email, password) => {
    const url = `${API_BASE_URL}/auth/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    return data;
  },
};

/**
 * Admin Posts API (requires authentication)
 */
export const adminPostsAPI = {
  // Get all posts (admin - includes unpublished)
  getAll: async () => {
    const token = localStorage.getItem('adminToken');
    const url = `${API_BASE_URL}/posts`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    return data;
  },

  // Get post by ID (admin)
  getById: async (id) => {
    const token = localStorage.getItem('adminToken');
    const allPosts = await adminPostsAPI.getAll();
    const post = allPosts.find((p) => p.id === parseInt(id));
    if (!post) throw new Error('Post not found');
    return post;
  },

  // Create post with files
  create: async (postData, files = []) => {
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    if (postData.excerpt) formData.append('excerpt', postData.excerpt);
    if (postData.is_published !== undefined) {
      formData.append('is_published', postData.is_published);
    }

    files.forEach((file) => {
      formData.append('files', file);
    });

    const url = `${API_BASE_URL}/posts`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to create post');
    }
    return data;
  },

  // Update post
  update: async (id, postData, files = []) => {
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();
    if (postData.title) formData.append('title', postData.title);
    if (postData.content) formData.append('content', postData.content);
    if (postData.excerpt !== undefined) formData.append('excerpt', postData.excerpt);
    if (postData.is_published !== undefined) {
      formData.append('is_published', postData.is_published);
    }

    files.forEach((file) => {
      formData.append('files', file);
    });

    const url = `${API_BASE_URL}/posts/${id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update post');
    }
    return data;
  },

  // Delete post
  delete: async (id) => {
    const token = localStorage.getItem('adminToken');
    const url = `${API_BASE_URL}/posts/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete post');
    }
    return data;
  },
};

/**
 * Helper to get full file URL
 */
export const getFileUrl = (filePath) => {
  if (!filePath) return null;
  // If already a full URL, return as is
  if (filePath.startsWith('http')) return filePath;

  // Normalize Windows paths and ensure leading slash
  const normalized = filePath.replaceAll('\\', '/');
  const withLeadingSlash = normalized.startsWith('/') ? normalized : `/${normalized}`;

  // Otherwise, prepend API base URL
  const base = API_BASE_URL.replace('/api', '');
  return `${base}${withLeadingSlash}`;
};
