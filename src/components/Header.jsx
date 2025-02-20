import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 620) {
      setScreenSize(true);
    } else {
      setScreenSize(false);
    }
  }, []);
  return (
    <nav className={styles.header}>
      <div className={styles.companyHeader}>
        <img
          src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F826156249%2F12417710737%2F1%2Foriginal.20240813-161019?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C270%2C1280%2C640&s=8d472541e8ab4ea7184f2279c4f12986"
          className={styles.companyLogo}
        />
        <h3 className={styles.companyName}>The Serious Business Company</h3>
      </div>
      <div className={styles.menu}>
        {screenSize ? (
          <div className={styles.dropdown}>
            <button className={styles.dropBtn}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
            <ul className={styles.dropdownContent}>
              <li>Home</li>
              <li>Contact Us</li>
              <li>Products</li>
              <li>Login</li>
            </ul>
          </div>
        ) : (
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Products</li>
            <li className={styles.login}>Login</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
