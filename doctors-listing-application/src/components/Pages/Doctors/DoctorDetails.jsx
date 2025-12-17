import { Component } from "lucide-react";
import React from "react";
import "./DoctorDetails.css";
import { useParams } from "react-router-dom";
import doc1 from "../../../assets/images/doctors-1.jpg";
import doc2 from "../../../assets/images/doctors-2.jpg";
import doc3 from "../../../assets/images/doctors-3.jpg";
import doc4 from "../../../assets/images/doctors-4.jpg";

const DoctorDetails = () => {
  const { id } = useParams();

  const doctorsData = {
    1: {
      id: "1",
      name: "Atha Smith",
      post: "Chief Medical Officer",
      experience: "15 Years",
      info: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
      image: doc1,
    },
    2: {
      id: "2",
      name: "John White",
      post: "Anesthesiologist",
      experience: "12 Years",
      info: "Aenean ac turpis ante. Mauris velit sapien.",
      image: doc2,
    },
    3: {
      id: "3",
      name: "Umika Loha",
      post: "Cardiology",
      experience: "10 Years",
      info: "Curabitur luctus eleifend odio. Phasellus placerat mi.",
      image: doc3,
    },
    4: {
      id: "4",
      name: "Daimy Smith",
      post: "Neurosurgeon",
      experience: "12 Years",
      info: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.",
      image: doc4,
    },
  };

  const doctor = doctorsData[id];

  if (!doctor) {
    return <h2 style={{ padding: "40px" }}>Doctor not found</h2>;
  }

  return (
    <div className="doctor-details" style={{ padding: "40px" }}>
      <div className="doctor-img">
        <img src={doctor.image} alt={doctor.name} />
      </div>

      <div className="doctor-details-content">
        <h2>{doctor.name}</h2>
        <p>{doctor.id}</p>
        <p>
          <strong>Specialization:</strong> {doctor.post}
        </p>
        <p>
          <strong>Experience:</strong> {doctor.experience}
        </p>
        <p>{doctor.info}</p>
      </div>
    </div>
  );
};

export default DoctorDetails;
