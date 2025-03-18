import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Color component that updates navbar when clicked
const Color = ({ color, setSelectedColor, selectedColor }) => {
  return (
    <div
      className={`${color} ${selectedColor === color ? "selected" : ""}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

//add PropTypes to fix warnings
Color.propTypes = {
  color: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

const App = () => {
  // State for the selected color
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor || "None"}</div>
      </div>
      <div id="colors-list">
        {/* Passing selectedColor so clicking adds a border */}
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      </div>
    </div>
  );
};

export default App;
