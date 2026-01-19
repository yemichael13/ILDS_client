import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import What_We_Provide from "../components/services/What_We_Provide";
import How_It_Works from "../components/services/How_It_Works";
import Quality from "../components/services/Quality_Assurance";

const Services = () => {
    return (
        <div>
            <Navbar />
            <section id="what_we_provide">
                <What_We_Provide />
            </section>
            <section id="how_it_works">
                <How_It_Works />
            </section>
            <section id="quality_assuarance">
                <Quality />
            </section>
            <Footer />
        </div>
    )
}

export default Services;