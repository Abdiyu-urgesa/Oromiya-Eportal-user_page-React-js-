import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer_wrapper">
      <div className="footer_top">
        <Link className="fo_top_link">About E-Services</Link>
        <Link className="fo_top_link">Contact us</Link>
        <Link className="fo_top_link">FAQ</Link>
        <Link className="fo_top_link">Terms & Policy</Link>
      </div>
      <div className="footer_mid">
        <div className="fo_mid_container">
          <h4 className="fo_mid_title">About Electronic Service Portal</h4>
          <p className="fo_mid_discription">
            The Ethiopian Government Electronic Services Portal has been
            developed to provide electronic public services to citizens,
            non-citizens, businesses, and governmental & non-governmental
            organizations.
          </p>
        </div>

        <div className="fo_mid_container">
          <h4 className="fo_mid_title">Important links</h4>
          <p className="fo_mid_discription">www.mint.gov.et</p>
        </div>

        <div className="fo_mid_container">
          <h4 className="fo_mid_title">Contact Us</h4>
          <p className="fo_mid_discription">
            +(251)-11-1264994<br></br>
            2490 In the compound of old ERPA Building, Arada Subcity, Behind
            Lycee G / Mariam School, Churchill Road Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="fo_copyright">
          © Copyright 2023 Ministry of Innovation and Technology, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
