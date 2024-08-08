import React from "react";
import { GiFruitBowl, GiNoodles, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import { CiPizza } from "react-icons/ci";
import styles from "./style.module.scss";

const Tabs = () => {
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
      <div className={styles.recipebanner}>
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
      </div>

      <nav>
			<div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
				<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
				<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
				<button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
			</div>
		</nav>
		<div class="tab-content p-3 border bg-light" id="nav-tabContent">
			<div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
				<p><strong>This is some placeholder content the Home tab's associated content.</strong>
					Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
					classes to control the content visibility and styling. You can use it with tabs, pills, and any
					other <code>.nav</code>-powered navigation.</p>
			</div>
			<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
				<p><strong>This is some placeholder content the Profile tab's associated content.</strong>
					Clicking another tab will toggle the visibility of this one for the next.
					The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
					tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
			</div>
			<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
				<p><strong>This is some placeholder content the Contact tab's associated content.</strong>
					Clicking another tab will toggle the visibility of this one for the next.
					The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
					tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
			</div>
		</div>
	</div>
    
  );
};

export default Tabs;
