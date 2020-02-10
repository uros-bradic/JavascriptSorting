import React from "react";

export default class ArraySort extends React.Component {
  state = {
    inputArrayText: "",
    numberToInsert: "",
    sortedArray: null,
    indexOfInsertedNumber: null
  };

  textToArray = text => {
    const array = text.replace(/\s/g, "").split(",");
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!isNaN(array[i]) && array[i] !== "") {
        newArray.push(Number(array[i]));
      }
    }
    return newArray;
  };

  bubbleSort = array => {
    const arrayClone = [...array];
    const len = arrayClone.length;
    let isArrayChanged;
    do {
      isArrayChanged = false;
      for (let i = 0; i < len; i++) {
        if (arrayClone[i] > arrayClone[i + 1]) {
          let memo = arrayClone[i];
          arrayClone[i] = arrayClone[i + 1];
          arrayClone[i + 1] = memo;
          isArrayChanged = true;
        }
      }
    } while (isArrayChanged);
    return arrayClone;
  };

  quickSort = arr => {
    const array = [...arr];
    if (array.length <= 1) return array;
    const pivot = array[array.length - 1];
    let smallerThanPivot = [];
    let largerThanPivot = [];
    for (let i = 0; i < array.length - 1; i++) {
      array[i] < pivot
        ? smallerThanPivot.push(array[i])
        : largerThanPivot.push(array[i]);
    }

    return [
      ...this.quickSort(smallerThanPivot),
      pivot,
      ...this.quickSort(largerThanPivot)
    ];
  };

  insertionSort = arr => {
    const array = [...arr];
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) {
          let splicedNumber = array.splice(i, 1);
          array.splice(j, 0, splicedNumber[0]);
          break;
        }
      }
    }

    return array;
  };

  mergeArrays = (arr1, arr2) => {
    const array = [];
    while (arr1.length !== 0 && arr1.length !== 0) {
      if (arr1[0] < arr2[0]) {
        array.push(arr1[0]);
        arr1.shift();
      } else {
        array.push(arr2[0]);
        arr2.shift();
      }
    }
    return array.concat(arr1, arr2);
  };

  mergeSort = arr => {
    if (arr.length >= 1) return arr;
    const array = [...arr];
    const arrayMiddleIndex = Math.floor(array.length / 2);
    const leftArrayPart = array.slice(0, arrayMiddleIndex);
    const rightArrayPart = array.slice(arrayMiddleIndex, array.length);

    return this.mergeArrays(
      this.mergeSort(leftArrayPart),
      this.mergeSort(rightArrayPart)
    );
  };

  handleClick = e => {
    e.preventDefault();
    if (
      !this.state.inputArrayText ||
      !this.state.numberToInsert ||
      isNaN(this.state.numberToInsert)
    )
      return;

    const result = this.textToArray(
      this.state.inputArrayText + "," + this.state.numberToInsert
    );

    const sortedArray = result.sort((a, b) => {
      return a - b;
    });

    console.log("Bubble sort:" + this.bubbleSort(result));
    console.log("Quick sort:" + this.quickSort(result));
    console.log("Insertion sort:" + this.insertionSort(result));
    console.log("Merge sort:" + this.mergeSort(result));

    const indexOfInsertedNumber = sortedArray.indexOf(
      Number(this.state.numberToInsert)
    );

    this.setState({
      sortedArray,
      indexOfInsertedNumber
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ inputArrayText: e.target.value });
  };

  handleChangeNumberToInsert = e => {
    e.preventDefault();
    this.setState({ numberToInsert: e.target.value });
  };

  render() {
    return (
      <div className="result">
        <form>
          <fieldset>
            <label>Please enter array of integers separated with commas:</label>
            <input
              className="input input__array"
              type="text"
              onChange={this.handleChange}
              value={this.state.inputArrayText}
              placeholder="1,3,6,8"
            />
          </fieldset>
          <fieldset>
            <label>Please enter number to insert:</label>
            <input
              className="input input__number"
              type="text"
              onChange={this.handleChangeNumberToInsert}
              value={this.state.numberToInsert}
            />
          </fieldset>
          <fieldset className="button">
            <button type="submit" onClick={this.handleClick}>
              Sort
            </button>
          </fieldset>
        </form>
        <div>
          {this.state.sortedArray
            ? "Sorted array is: " + this.state.sortedArray
            : null}
        </div>
        <div>
          {this.state.indexOfInsertedNumber ||
          this.state.indexOfInsertedNumber === 0
            ? "Number is inserted to position " +
              this.state.indexOfInsertedNumber
            : null}
        </div>
      </div>
    );
  }
}
