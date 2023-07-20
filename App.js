import { StyleSheet, Text, View } from "react-native";
import { defaultState } from "./deafultState";
import Row from "./Components/Row";
import Keyboard from "./Components/Keyboard";
import { useState, useEffect } from "react";

export default function Page() {
  // State
  const [boardState, setBoard]= useState(defaultState),
    [currentWord, setWord] = useState("spank"),
    [currentLetters, setLetters] = useState(currentWord.split()),
    [currentRow, setRow] = useState(1),
    [currentSquare, setSquare] = useState({id: 10, value: '', status: "inactive", row: 1}),
    [currentGuess, setGuess] = useState([])
  
  // Row Components
  const rowOne = <Row squareData={boardState.filter(square => square.row === 1)}/>,
    rowTwo = <Row squareData={boardState.filter(square => square.row === 2)}/>,
    rowThree = <Row squareData={boardState.filter(square => square.row === 3)}/>,
    rowFour = <Row squareData={boardState.filter(square => square.row === 4)}/>,
    rowFive = <Row squareData={boardState.filter(square => square.row === 5)}/>,
    rowSix =  <Row squareData={boardState.filter(square => square.row === 6)}/>;

  //Event Handlers
  const updateBoardStare = (letter) => {
    setBoard((previousState) => {
      return previousState.map(square => {
        if (square.id === currentSquare.id) {
          return { id: square.id, value: letter, status: "active", row: currentRow }
        }
        return square
      })
    })
  }

  const updateGuess = (letter) => {
    setGuess(previousState => [...previousState, letter])
    updateBoardStare(letter)
    setSquare((previousState) => {
      console.log(previousState)
      if (previousState.id.toString().slice(-1) === '4') {
        return previousState
      } else {
        return boardState.find(square => square.id === previousState.id + 1)
      }
    })
  }

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        { rowOne }
        { rowTwo }
        { rowThree }
        { rowFour }
        { rowFive }
        { rowSix }
      </View>
      <Keyboard updateGuess={updateGuess}/>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    justifyContent: "space-evenly",
    height: "100%"
  },
  container: {
    // flex: 1,
    alignItems: "center",
    padding: 0,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  boardSquare: {
    borderWidth: 1,
    borderColor: "fefefe",
    height: 60,
    width: 60,
    margin: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  }
});
