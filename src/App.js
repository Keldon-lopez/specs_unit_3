import "./App.css";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />}/>
        <Route path="newRecipe" element={<NewRecipeScreen />}/>
        <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      {/* This is where you will code for some of Part 1. */}
      <Footer />
      <h1>HI</h1>
    </div>
  );
}

export default App;
