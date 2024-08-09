import React, { useState, useEffect ,} from "react";
import { BsSearch } from "react-icons/bs";
import { FaThumbsUp, FaClock } from "react-icons";
import {
  IoMdClock,
  IoMdThumbsUp,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import styles from './style.module.scss'
import { useNavigate } from "react-router-dom";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

   const navigate = useNavigate();

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

  // search functionality
  const handleSearch = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = () => {
    navigate("/description");
  };

  return (
    <>
      <div className="container">
        <div className={styles.headingline}>
          <strong>Search Recipes</strong>
          <div className={styles.inputwrapper}>
            <input
              type="text"
              placeholder="Search your recipe"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <BsSearch />
            </button>
          </div>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className={styles.flexbox}>
            {handleSearch.length === 0 ? (
              <div>No Data Found</div>
            ) : (
              handleSearch.map((item, index) => (
                <div key={index} className={styles.flexItem}>
                  <div onClick={handleClick}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))
            )}
          </div>
        )}

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

        <footer>
          <div className={styles.footercontent}>
            <div className={styles.socialmedia}>
              <IoLogoFacebook /> <IoLogoInstagram /> <FaXTwitter />
            </div>
            <div className={styles.publishemnt }>
              <p>
                <a href="/">
                  Advertising
                </a>
              </p>
              <p>
                <a href="/">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="/">
                  Privacy Policy
                </a>
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
    </>
  );
};

export default RecipeList;
