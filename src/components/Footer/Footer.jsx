import React from 'react'
import styles from './style.module.scss'
import {
    IoLogoFacebook,
    IoLogoInstagram,
  } from "react-icons/io";
  import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
         <footer>
          <div className={styles.footercontent}>
            <div className={styles.socialmedia}>
              <IoLogoFacebook /> <IoLogoInstagram /> <FaXTwitter />
            </div>
            <div className={styles.publishemnt}>
              <p>
                <a href="/">Advertising</a>
              </p>
              <p>
                <a href="/">Terms & Conditions</a>
              </p>
              <p>
                <a href="/">Privacy Policy</a>
              </p>
              <p>
                <a href="/">Hosted by DigitalOcean</a>
              </p>
            </div>

            <div className={styles.copyright}>
              © Copyright 2024 Recipes WordPress Theme — Powered by WordPress
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer