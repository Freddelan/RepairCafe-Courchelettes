// Membres.jsx
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../scss/membres.scss";

const Membres = () => {
  const membres = [
    { nom: "Patrick COEUGNET", rôle: "Président" },
    { nom: "Michel BENEZIT", rôle: "Secrétaire" },
  ];

  return (
    <div className="container-membres">
      <Navigation />
      <div className="content">
        <h2>Notre Équipe</h2>
        <ul className="membres-list">
          {membres.map((membre, index) => (
            <li key={index}>
              <strong>{membre.nom}</strong> - {membre.rôle}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Membres;
