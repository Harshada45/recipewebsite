import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function RecipeDescription() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
  const { id } = useParams();


  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data,'data 1 -->')
      setData((prev)=>[...prev,data])
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleBack=()=>{
    navigate("/")
  }

  return (
    <>
      <div className="container">
        <div className={styles.recipedesc}>
          {console.log(data,'data -->')}
          {data &&
            data.map((item, index) => (
               <>
               {console.log(item,'item -->')}
                <div key={index}>
                <div className={styles.productdesc}>
                  <div className={styles.leftsection}>
                    <p>{item.ingredients}</p>
                    <p>{item.instructions}</p>

                    <div className="mt-5"><button onClick={handleBack} className="btn btn-primary">Back</button></div>
                  </div>
                  <div className={styles.rightsection}>
                    <img src={item.image} />
                  </div>
                </div>
              </div>
               </>
              
            ))}
        </div>
      </div>
    </>
  );
}
export default RecipeDescription;
