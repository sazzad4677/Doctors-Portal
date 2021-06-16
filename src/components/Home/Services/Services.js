import React from "react";
import cavity from "../../../images/cavity.png";
import floride from "../../../images/floride.png";
import whitening from "../../../images/whitening.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const serviceData = [
  {
    name: "Fluoride Treatment",
    img: floride,
  },
  {
    name: "Cavity Filling",
    img: cavity,
  },
  {
    name: "Teeth whitening",
    img: whitening,
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#3A4256" }}>Our Services</h5>
        <h2 style={{ color: "#1CC7C1" }}>Services we Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
