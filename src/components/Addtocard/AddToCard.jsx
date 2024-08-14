import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const AddToCard = () => {
  return (
    <div>
      <div className={styles.additem}>
        <div className={styles.productaddress}>
          <div className={styles.itemdetails}>
            <div className={styles.address}>
              <span>From Saved Address</span>
            </div>
            <div className={styles.pincode}>
              <Link>Enter Delivery Pincode</Link>
            </div>
          </div>
          <div className={styles.productshow}>
            <div>
              <img src="https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=90" />
            </div>
            <div>dfgds</div>
          </div>
        </div>

        <div className={styles.pricedetails}>
          <h6>PRICE DETAILS</h6>

          <div className={styles.detailsitem}>
            <div className={styles.text}>Price</div>
            <div className={styles.text}>Rs:45000</div>
          </div>
          <div className={styles.detailsitem}>
            <div className={styles.text}>Discount</div>
            <div className={styles.text}>Rs:45000</div>
          </div>
          <div className={styles.detailsitem}>
            <div className={styles.text}>Delivery Charges</div>
            <div className={styles.text}>Rs:45000</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
