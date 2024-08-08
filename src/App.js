import logo from "./logo.svg";
// import "./App.scss";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import RecipeList from "./components/Recipe/RecipeList";

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <RecipeList />
    </div>
  );
}

export default App;
