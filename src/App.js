import logo from "./logo.svg";
// import "./App.scss";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import RecipeList from "./components/Recipe/RecipeList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import RecipeDescription from "./components/recipedescription/RecipeDescription";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/tabs" element={<Tabs />}/>
        <Route path="/recipelist" element={<RecipeList />} />
        <Route exact path="/description/:id" element={<RecipeDescription />} />
      </Routes>
    </div>
  );
}

export default App;
