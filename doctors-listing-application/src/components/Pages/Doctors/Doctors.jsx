import React from "react";
import "./Doctors.css";
import doc1 from "../../../assets/images/doctors-1.jpg";
import doc2 from "../../../assets/images/doctors-2.jpg";
import doc3 from "../../../assets/images/doctors-3.jpg";
import doc4 from "../../../assets/images/doctors-4.jpg";

const Doctors = () => {
  const doctors = [
    { name: "Atha Smith", role: "Chief Medical Officer", img: doc1 },
    { name: "John White", role: "Anesthesiologist", img: doc2 },
    { name: "Umika Loha", role: "Cardiology", img: doc3 },
    { name: "Daimy Smith", role: "Neurosurgeon", img: doc4 },
  ];

  return (
    <section className="doctors">
      {doctors.map((doc, i) => (
        <div className="card" key={i}>
          <img src={doc.img} alt={doc.name} />
          <h3>{doc.name}</h3>
          <p>{doc.role}</p>
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
      ))}
    </section>
  );
};

export default Doctors;
