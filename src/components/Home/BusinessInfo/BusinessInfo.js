import {
    faClock,
    faMapMarker,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InfoCard from "../InfoCard/InfoCard";
const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 24/7",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our location",
    description: "New york, USA",
    icon: faMapMarker,
    background: "secondary",
  },
  {
    title: "Call Us now",
    description: "+15154857423",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
