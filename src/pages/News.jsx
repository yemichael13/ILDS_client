import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageMotion from "../components/motion/PageMotion";
import Reveal from "../components/motion/Reveal";

const News = () => {
    return (
        <div>
            <Navbar />
            <PageMotion>
            
            <Reveal className="mt-24 px-6 md:px-20">
              <h1 className="text-4xl md:text-6xl font-bold">News</h1>
            </Reveal>
            <Footer />
        </PageMotion>
        </div>
        
    )
}

export default News;