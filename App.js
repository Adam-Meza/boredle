import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { defaultState } from "./deafultState";
import Row from "./Components/Row";
import Keyboard from "./Components/Keyboard";
import { useState, useEffect } from "react";
import { words, getRandomWord } from "./words";
import Header from "./Components/Header";
import _ from 'lodash';

export default function Page() {
  // State
  const [boardState, setBoard]= useState(defaultState),
        [currentWord, setWord] = useState(getRandomWord()),
        [currentLetters, setLetters] = useState(currentWord.split('')),
        [currentRow, setRow] = useState(1),
        [currentSquare, setSquare] = useState({id: 10, value: '', status: "inactive", row: 1}),
        [currentGuess, setGuess] = useState([]),
        [guessedLetters, setGuessedLetters] = useState([])
  
  // Row Components
  const rowOne = <Row squareData={boardState.filter(square => square.row === 1)}/>,
        rowTwo = <Row squareData={boardState.filter(square => square.row === 2)}/>,
        rowThree = <Row squareData={boardState.filter(square => square.row === 3)}/>,
        rowFour = <Row squareData={boardState.filter(square => square.row === 4)}/>,
        rowFive = <Row squareData={boardState.filter(square => square.row === 5)}/>,
        rowSix =  <Row squareData={boardState.filter(square => square.row === 6)}/>;

  //Atomic Functions
  const checkForWin = () => {
    return currentGuess.join("") === currentLetters.join("") ? true : false;
  };

  const checkForRealWord = (guess) => {
    return words.some(word => word === guess) ? true : false
  };

  //Event Handlers
  const updateGuess = (letter) => {
    if (currentGuess.length < 5) {
      setGuess(previousState => [...previousState, letter]);
      setBoard(previousState => {
        return previousState.map(square => {
          if (square.id === currentSquare.id) {
            square.status = "active";
            square.value = letter;
            return square
          }
          return square
        });
      });

      if (currentSquare.id % 10 !== 4) {
        setSquare(previousState => boardState.find(square => square.id === previousState.id + 1))
      } 
    };
  };

  const checkLetter = (state) => {
    console.log(currentLetters, currentGuess)
      return state.map(square => {

        if (square.value === currentLetters[square.id % 10] 
          && currentRow === square.row) {
            square.status = 'correct';
            return square;

        } else if (
          square.value !== currentLetters[square.id % 10]
          && currentLetters.includes(square.value)
          && currentRow === square.row) {
            square.status = "close";
            return square;

        } else if (!currentLetters.includes(square.value)
          && currentRow === square.row) {
            square.status = "incorrect";
            return square;

        } else {
          return square;
        };
    });
  };

  const submitGuess = () => {
    if(checkForWin()) {
      setBoard(previousState => checkLetter(previousState))
        console.log("congrats!");
          //end game squence

      } else if (currentGuess.length < 5) {
        console.log("too short");

      } else if (!checkForRealWord(currentGuess.join(""))) {
        console.log('word was no good');

      } else {
        setGuessedLetters(previousState => [...previousState, ...currentGuess]);
        setGuess([]);
        setBoard(previousState => checkLetter(previousState));
        setRow(previousState => currentRow !== 6 ? previousState + 1 : previousState);
        setSquare(boardState.find(square => square.id === (currentRow + 1) * 10));
      
        if (currentRow === 6) {
          //end game squence
        }
      }
  }

  const backspace = () => {
    if (currentSquare.id % 10 !== 0) {
      setGuess(previousState => [...previousState.slice(0, -1)]);
      const idToMatch = currentSquare.id % 10 === 4 
                    && currentGuess.length === 5 ? 
                    currentSquare.id : currentSquare.id - 1;

      setBoard(previousState => {
        return previousState.map(square => {
          if (square.id === idToMatch) {
            square.value = "";
            square.status = "inactive";
            return square;
          };
          return square;
        })
      });
      setSquare({id: idToMatch, value: "", status: "inactive", row: currentRow});
    };
  };

  const startNewGame = () => {
    setWord(getRandomWord());
    setLetters(currentWord.split(""));
    setRow(1);
    setSquare({id: 10, value: '', status: "inactive", row: 1});
    setGuess([]);
    setGuessedLetters([])
    setBoard([
      {id: 10, status: "inactive", row: 1, value: ""},
      {id: 11, status: "inactive", row: 1, value: ""},
      {id: 12, status: "inactive", row: 1, value: ""},
      {id: 13, status: "inactive", row: 1, value: ""},
      {id: 14, status: "inactive", row: 1, value: ""},
      {id: 20, status: "inactive", row: 2, value: ""},
      {id: 21, status: "inactive", row: 2, value: ""},
      {id: 22, status: "inactive", row: 2, value: ""},
      {id: 23, status: "inactive", row: 2, value: ""},
      {id: 24, status: "inactive", row: 2, value: ""},
      {id: 30, status: "inactive", row: 3, value: ""},
      {id: 31, status: "inactive", row: 3, value: ""},
      {id: 32, status: "inactive", row: 3, value: ""},
      {id: 33, status: "inactive", row: 3, value: ""},
      {id: 34, status: "inactive", row: 3, value: ""},
      {id: 40, status: "inactive", row: 4, value: ""},
      {id: 41, status: "inactive", row: 4, value: ""},
      {id: 42, status: "inactive", row: 4, value: ""},
      {id: 43, status: "inactive", row: 4, value: ""},
      {id: 44, status: "inactive", row: 4, value: ""},
      {id: 50, status: "inactive", row: 5, value: ""},
      {id: 51, status: "inactive", row: 5, value: ""},
      {id: 52, status: "inactive", row: 5, value: ""},
      {id: 53, status: "inactive", row: 5, value: ""},
      {id: 54, status: "inactive", row: 5, value: ""},
      {id: 60, status: "inactive", row: 6, value: ""},
      {id: 61, status: "inactive", row: 6, value: ""},
      {id: 62, status: "inactive", row: 6, value: ""},
      {id: 63, status: "inactive", row: 6, value: ""},
      {id: 64, status: "inactive", row: 6, value: ""},
    ])
  }

  return (
    <SafeAreaView>
      <View style={styles.app}>
        <Header startNewGame={startNewGame}/>
        <View style={styles.container}>
          { rowOne }
          { rowTwo }
          { rowThree }
          { rowFour }
          { rowFive }
          { rowSix }
        </View>
        <Keyboard
          currentWord = {currentWord}
          guessedLetters={guessedLetters}
          updateGuess={updateGuess}
          submitGuess={submitGuess}
          backspace={backspace}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    justifyContent: "space-between",
    height: "100%"
  },
  container: {
    alignItems: "center",
    padding: 0,
  }
});
