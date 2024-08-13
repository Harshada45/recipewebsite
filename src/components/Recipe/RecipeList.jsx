import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { FaThumbsUp, FaClock } from "react-icons";

import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import TopRated from "../Toprated/TopRated";

const RecipeList = ({ item, text, maxLength = 100  }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isvisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  const divRef = useRef(null);

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

  const handleClick = (id) => {
    navigate(`/description/${id}`);
  };

  const handleProduct = (id) => {
    navigate(`/showitem/${id}`);
  };

  const handleInputClick = () => {
    setIsVisible(true); // This will open the div when input is clicked
  };

  const handleClickOutside = (event) => {
    // Close the div if the click is outside the input and the results div
    if (
      divRef.current &&
      !divRef.current.contains(event.target) &&
      inputRef.current &&
      !inputRef.current.contains(event.target)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  

  return (
    <>
      <div className="container">
        <div className={styles.headingline}>
          <strong>Search Recipes</strong>
          <div className={styles.searchcontainer}>
            <div className={styles.inputwrapper}>
              <input
                type="text"
                placeholder="Search your recipe"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={handleInputClick}
                ref={inputRef}
              />
              <button>
                <BsSearch onClick={handleProduct}/>
              </button>
            </div>
            {isvisible && (
              <div className={styles.suggestionitem} ref={divRef}>
                <div className={styles.productitem}>
                  <ul>
                    {handleSearch.map((item, index) => (
                      <li onChange={(e) => setSearchTerm(e.target.value)} onClick={() => handleProduct(item.id)}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

           
          </div>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className={styles.flexbox}>
            {recipes.length === 0 ? (
              <div>No Data Found</div>
            ) : (
              recipes.map((item, index) => (
                <div key={index} className={styles.flexItem}>
                  <div onClick={() => handleClick(item.id)}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))
            )}
          </div>
        )}



        {/* onChange search the item  */}
        {/* {loading ? (
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
                  <div onClick={() => handleClick(item.id)}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))
            )}
          </div>
        )} */}

        
      </div>
    </>
  );
};

export default RecipeList;
