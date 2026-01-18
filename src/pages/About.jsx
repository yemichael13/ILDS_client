import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Who_We_Are from "../components/about/Who_We_Are";
import Mission_Vision_Value from "../components/about/Mission_Vision_Value";
import Service_Area from "../components/about/Service_Area";
import Our_Team from "../components/about/Our_Team";

const About = () => {
    return (
        <div>
            <Navbar />
            <section id="who_we_are">
                <Who_We_Are />
            </section>
            <section id="mission">
                <Mission_Vision_Value />
            </section>
            <section id="service-area">
                <Service_Area />
            </section>
            <section id="our-team">
                <Our_Team />
            </section>
            <Footer />
        </div>
    )
}

export default About;