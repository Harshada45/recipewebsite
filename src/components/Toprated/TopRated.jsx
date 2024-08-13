import React,{useState,useEffect} from 'react'
import styles from './style.module.scss'
import {
    IoMdClock,
    IoMdThumbsUp,
  } from "react-icons/io";

const TopRated = () => {
    const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchData = () => {
        fetch("https://dummyjson.com/recipes")
          .then((res) => res.json())
          .then((data) => {
            setRecipes(data.recipes);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Error fetching recipes:", err);
            setError(err);
            setLoading(false);
          });
      };
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <div>
        <div className={styles.middletop}>
          <h4>Top Rated</h4>
          <div className={styles.mainfooter}>
            {recipes.length === 0 ? (
              <div>No Data Found</div>
            ) : (
              recipes.map((fitem, index) => (
                <div className={styles.maincontent}>
                  <div className={styles.imgbox}>
                    <img src={fitem.image} alt="img" />
                  </div>
                  <div className={styles.contentbox}>
                    <div className={styles.label}>
                      <IoMdThumbsUp /> {fitem.name}
                    </div>
                    <div className={styles.label}>
                      <IoMdClock /> {fitem.mealType}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
    </div>
  )
}

export default TopRated