import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Tabs from './components/Tabs';
import RecipeList from './components/RecipeList';


function App() {
  return (
    <div className="App">
     <Header/>
     <Tabs/>
     <RecipeList/>
    </div>

  );
}

export default App;
