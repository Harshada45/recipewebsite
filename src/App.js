import logo from "./logo.svg";
// import "./App.scss";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import RecipeList from "./components/Recipe/RecipeList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import RecipeDescription from "./components/recipedescription/RecipeDescription";
import ShowItem from "./components/Recipe/ShowItem";
import Main from "./components/Main/Main";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import AddToCard from "./components/Addtocard/AddToCard";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main/>}/>
        <Route path="/header" element={<Header />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route exact path="/description/:id" element={<RecipeDescription />} />
        <Route path="/showitem/:id" element={<ShowItem />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/addtocard" element={<AddToCard/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
