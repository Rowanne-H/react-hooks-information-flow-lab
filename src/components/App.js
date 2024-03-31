import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }  

  const [selectedCategory, setSelectedCategory] = useState("All");
  function  handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }
  
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
      <ShoppingList items={itemData}  selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange}/>
    </div>
  );
}

export default App;
