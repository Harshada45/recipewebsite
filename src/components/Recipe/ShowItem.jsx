import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.scss";
import Header from "../Header/Header";
import RecipeList from "./RecipeList";
import Footer from "../Footer/Footer";

const ShowItem = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data, "data 1 -->");
      setRecipes((prev) => [...prev, data]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
    <div>
      <Header />
      {/* click on item and display this only this item */}
      <div className="container">
        <div className={styles.showproduct}>
          <div className={styles.flexbox}>
            {recipes.length === 0 ? (
              <div>No Data Found</div>
            ) : (
              recipes.map((items, index) => (
                <div className={styles.flexItem}>
                  <div>
                    <img src={items.image} alt={items.name} />
                  </div>
                  <span>{items.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <RecipeList/>
     
    </div>
     <Footer/>
     </>
  );
};

export default ShowItem;
