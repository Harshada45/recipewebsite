import React from "react";
import {ImSpoonKnife} from 'react-icons/im'
import styles from './style.module.scss'

const Header = () => {
  return (
    <header
      className={styles.header}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
      }}
    >
      <div className={styles.layer}>
        <div className={styles.container}>
          <nav className={styles.logowrapper}>
            <div className={styles.logo}>
              <ImSpoonKnife className={styles.brand} />
            </div>
          </nav>
          <div className={styles.headertext}>
            <h1>Recipe App Reactjs</h1>
            <p>Let's have fun building this app together...</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
