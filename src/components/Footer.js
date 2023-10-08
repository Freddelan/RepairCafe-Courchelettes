import React from "react";
import facebook from "../media/facebook-logo-2019.png";
import "../scss/footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="page-footer">
      {/* <div className="logoFacebook">
        <Link to="https://www.facebook.com/RepairCafeFrance" target="_blank">
          <img className="facebook" src={facebook} alt="logo de facebook" />
        </Link>
      </div> */}
      <div className="section">
        {/* <Link className="rgpd" to="/RGPD" target="_blank">
          RGPD
        </Link> */}
        <Link className="membres" to="/membres" target="_blank">
          Membres
        </Link>
      </div>
      <div className="copyright-container">
        <Link
          to="/"
          className="copyright"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p>&copy; 2023 Repair Café Courchelettes</p>
        </Link>
        <Link
          to="https://www.repaircafe.org/fr/"
          className="copyGeneral"
          target="_blank"
        >
          <p className="rpFrance">&copy; 2020 Repair Café France</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
