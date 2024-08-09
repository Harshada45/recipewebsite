import React, { useState } from "react";
import { GiFruitBowl, GiNoodles, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { CiPizza } from "react-icons/ci";
import styles from "./style.module.scss";

const Tabs = () => {
  const tabs = [
    {
      id: "Pizza",
      label: "Pizza",
      icon: <CiPizza />,
      title: "Pizza",
      img: "https://cdn.dummyjson.com/recipe-images/1.webp",
      desc: "Fresh ground pepper",
    },
    {
      id: "Noodles",
      label: "Noodles",
      icon: <GiNoodles />,
      title: "Noodles",
      img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80",
    },
    {
      id: "Desert",
      label: "Desert",
      icon: <GiFruitBowl />,
      title: "Desert",
      img: "https://cdn.dummyjson.com/recipe-images/23.webp",
    },
    {
      id: "Icecream",
      label: "Icecream",
      icon: <MdOutlineIcecream />,
      title: "Icecream",
      img: "https://cdn.dummyjson.com/recipe-images/22.webp",
    },
  ];

  const [activetab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="container">
      <h1 className={styles.recipeHeading}>What would you like to have!</h1>
      <div className={styles.tabs}>
        <div className={styles.tablist}>
          <CiPizza />
          <span>Pizza</span>
        </div>
        <div className={styles.tablist}>
          <GiNoodles />
          <span>Noodles</span>
        </div>
        <div className={styles.tablist}>
          <GiFruitBowl />
          <span>Desert</span>
        </div>
        <div className={styles.tablist}>
          <MdOutlineIcecream />
          <span>ice cream</span>
        </div>
      </div>
      {/* <div className={styles.recipebanner}>
        <div className={styles.leftcol}>
          <span>Italian</span>
          <h1>White Pizza</h1>
          <p>
            <strong>Recipe by:</strong>
            <small>Food52</small>
          </p>
          <h3>Ingredients</h3>
          <div className={styles.ingredients}>
            <ul>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rightcol}>
          <div className={styles.imagewrapper}>
            <img
              src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <div className="nav nav-tabs tabpage">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-link ${activetab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
       
      </div>
      <div className="tab-content">
        {tabs.map((tab) =>
            activetab === tab.id && (
              <div key={tab.id} className="tab-pane active">
                <div className={styles.recipebanner}>
                  <div className={styles.leftcol}>
                    <h1>{tab.title}</h1>
                    <p>
                      <strong>Recipe by:</strong>
                      <small>Food52</small>
                    </p>
                    <h3>Ingredients</h3>
                    <div className={styles.ingredients}>
                      <ul>
                        <li>
                          <GiCheckMark size="18px" color="#6fcb9f" />
                          &nbsp;<span>Fresh ground pepper</span>
                        </li>
                        <li>
                          <GiCheckMark size="18px" color="#6fcb9f" />
                          &nbsp;<span>Fresh ground pepper</span>
                        </li>
                        <li>
                          <GiCheckMark size="18px" color="#6fcb9f" />
                          &nbsp;<span>Fresh ground pepper</span>
                        </li>
                        <li>
                          <GiCheckMark size="18px" color="#6fcb9f" />
                          &nbsp;<span>Fresh ground pepper</span>
                        </li>
                        <li>
                          <GiCheckMark size="18px" color="#6fcb9f" />
                          &nbsp;<span>Fresh ground pepper</span>
                        </li>
                        <li>
                          <GiCheckMark size="18px" color="#6fcb9f" />
                          &nbsp;<span>Fresh ground pepper</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.rightcol}>
                    <div className={styles.imagewrapper}>
                      <img src={tab.img} />
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
