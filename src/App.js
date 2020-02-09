import React from "react";
import ArraySort from "./components/ArraySort";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Coding Challenge 1 + sorting exercises</h1>
      <div>
        <p>
          Return the lowest index at which a value (second argument) should be
          inserted into an array (first argument) once it has been sorted. The
          returned value should be a number.
        </p>
        <p>
          For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because
          it is greater than 1 (which has index 0), but less than 2 (which has
          index 1).
        </p>
        <p>
          Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once
          the array has been sorted it will look like [3, 5, 20] and 19 is less
          than 20 (index 2) and greater than 5 (index 1).
        </p>
      </div>
      <ArraySort />
    </div>
  );
}
