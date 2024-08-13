import React from "react";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import RecipeList from "../Recipe/RecipeList";
import TopRated from "../Toprated/TopRated";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Tabs />
        <RecipeList />
        <TopRated />
      </div>
      <Footer />
    </>
  );
};

export default Main;
