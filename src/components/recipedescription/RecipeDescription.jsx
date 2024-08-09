import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

const RecipeDescription = () => {
  const [showdesc, setShowDesc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDescData = () => {
    fetch('https://dummyjson.com/recipes/1')
      .then((res) => res.json())
      .then((data) => {
        setShowDesc(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipe description", err);
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDescData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="container">
        <div className={styles.recipedesc}>
          {showdesc && showdesc.length === 0 ? (
           
            <div>No Data Found</div>
          ) : (
            showdesc &&
            showdesc.map((item, index) => (
              <div key={index}>
                
                <div className={styles.leftsection}>{item.ingredients}</div>
                <div className={styles.rightsection}>dfg</div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeDescription;
