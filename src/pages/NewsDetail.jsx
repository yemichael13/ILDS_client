import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";
import { postsAPI, getFileUrl } from "../utils/api";

const NewsDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await postsAPI.getBySlug(slug);
        setPost(data);
        setError(null);
      } catch (err) {
        setError("Post not found");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getFilesByType = (files, type) => {
    if (!files) return [];
    return files.filter((f) => f.file_type === type);
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <PageMotion>
          <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="text-center text-gray-600 text-xl py-20">
              Loading post...
            </div>
          </div>
          <Footer />
        </PageMotion>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div>
        <Navbar />
        <PageMotion>
          <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="text-center text-red-600 text-xl py-20">
              {error || "Post not found"}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/news"
                className="text-green-700 hover:underline font-semibold"
              >
                ← Back to News
              </Link>
            </div>
          </div>
          <Footer />
        </PageMotion>
      </div>
    );
  }

  const images = getFilesByType(post.files, "image");
  const videos = getFilesByType(post.files, "video");
  const documents = getFilesByType(post.files, "document");

  return (
    <div>
      <Navbar />
      <PageMotion>
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Back button */}
            <Reveal>
              <Link
                to="/news"
                className="inline-flex items-center text-green-700 hover:text-green-800 font-semibold mb-8 transition-colors"
              >
                ← Back to News
              </Link>
            </Reveal>

            {/* Post header */}
            <Reveal>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Featured image */}
                {images.length > 0 && (
                  <img
                    src={getFileUrl(images[0].file_path)}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                )}

                <div className="p-6 md:p-10">
                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
                    {post.title}
                  </h1>

                  {/* Date */}
                  <div className="text-gray-500 text-sm mb-6">
                    Published on {formatDate(post.created_at)}
                  </div>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-xl text-gray-700 mb-8 font-medium italic">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Content */}
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {post.content}
                  </div>

                  {/* Additional images */}
                  {images.length > 1 && (
                    <Reveal delay={0.2}>
                      <div className="mt-10">
                        <h3 className="text-2xl font-bold text-green-700 mb-6">
                          Gallery
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {images.slice(1).map((image) => (
                            <img
                              key={image.id}
                              src={getFileUrl(image.file_path)}
                              alt={image.file_name}
                              className="w-full h-auto rounded-lg shadow-md"
                            />
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )}

                  {/* Videos */}
                  {videos.length > 0 && (
                    <Reveal delay={0.3}>
                      <div className="mt-10">
                        <h3 className="text-2xl font-bold text-green-700 mb-6">
                          Videos
                        </h3>
                        <div className="space-y-4">
                          {videos.map((video) => (
                            <video
                              key={video.id}
                              controls
                              className="w-full rounded-lg shadow-md"
                            >
                              <source
                                src={getFileUrl(video.file_path)}
                                type={video.mime_type}
                              />
                              Your browser does not support the video tag.
                            </video>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )}

                  {/* Documents */}
                  {documents.length > 0 && (
                    <Reveal delay={0.4}>
                      <div className="mt-10">
                        <h3 className="text-2xl font-bold text-green-700 mb-6">
                          Documents
                        </h3>
                        <div className="space-y-3">
                          {documents.map((doc) => (
                            <a
                              key={doc.id}
                              href={getFileUrl(doc.file_path)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              <span className="text-green-700 font-semibold">
                                📄 {doc.file_name}
                              </span>
                              <span className="text-sm text-gray-500 ml-auto">
                                Download
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  )}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
        <Footer />
      </PageMotion>
    </div>
  );
};

export default NewsDetail;
