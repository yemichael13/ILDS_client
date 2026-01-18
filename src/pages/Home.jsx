import React from "react";
import Hero from "../components/home/Hero";
import What_We_Do from "../components/home/What_We_Do"
import Why_ILSD from "../components/home/Why_ILSD";
import How_It_Works from "../components/home/How_It_Works";
import Impact from "../components/home/Impact";
import Latest_News from "../components/home/Latest_News";
import Contact from "../components/home/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div>
            <Navbar />
            <section id="hero">
                <Hero />
            </section>
            <section id="what_we_do">
                <What_We_Do />
            </section>
            <section id="why_ilsd">
                <Why_ILSD />
            </section>
            <section id="how_it_works">
                <How_It_Works />
            </section>
            <section id="impact">
                <Impact />
            </section>
            <section id="lates_news">
                <Latest_News />
            </section>
            <section id="contact">
                <Contact />
            </section>
            
            <Footer />
            
        </div>
    )
}

export default Home;