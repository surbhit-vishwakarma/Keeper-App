import React from "react";
import "./Footer.css";

let currentDate = new Date();
let year = currentDate.getFullYear();

function Footer() {
  return (
    <footer>
      <p>© Surbhit {year}</p>
    </footer>
  );
}

export default Footer;
