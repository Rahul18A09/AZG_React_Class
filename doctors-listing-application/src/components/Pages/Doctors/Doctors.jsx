import React from "react";
import "./Doctors.css";
import doc1 from "../../../assets/images/doctors-1.jpg";
import doc2 from "../../../assets/images/doctors-2.jpg";
import doc3 from "../../../assets/images/doctors-3.jpg";
import doc4 from "../../../assets/images/doctors-4.jpg";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctorsData = [
    {
      id: "1",
      name: "Atha Smith",
      post: "Chief Medical Officer",
      info: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.",
      image: doc1,
    },
    {
      id: "2",
      name: "John White",
      post: "Anesthesiologist",
      info: "Aenean ac turpis ante. Mauris velit sapien.",
      image: doc2,
    },
    {
      id: "3",
      name: "Umika Loha",
      post: "Cardiology",
      info: "Curabitur luctus eleifend odio. Phasellus placerat mi.",
      image: doc3,
    },
    {
      id: "4",
      name: "Daimy Smith",
      post: "Neurosurgeon",
      info: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.",
      image: doc4,
    },
  ];

  return (
    <section className="doctors">
      {doctorsData.map((doc, id) => (
        <div className="card" key={id}>
          <img src={doc.image} alt={doc.name} />
          <div className="card-content">
            <h3>{doc.name}</h3>
            <p>{doc.post}</p>
            <p>{doc.info}</p>
            <p className="link">
              <Link to={String(doc.id)}>View Profile</Link>
            </p>
            <div className="socials">
              <span>
                <i className="ri-twitter-fill"></i>
              </span>
              <span>
                <i className="ri-facebook-circle-fill"></i>
              </span>
              <span>
                <i className="ri-instagram-line"></i>
              </span>
              <span>
                <i className="ri-linkedin-box-fill"></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Doctors;
