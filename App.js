import { SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
import { defaultState } from "./deafultState";
import Row from "./Components/Row";
import Keyboard from "./Components/Keyboard";
import { useState } from "react";
import { words, getRandomWord } from "./words";
import Header from "./Components/Header";
import ModalComponent from "./Components/ModalComponent";
import Toast from "./Components/Toast";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Page() {
  const
        // Basic Gameplay States
        [boardState, setBoard]= useState(defaultState),
        [currentWord, setWord] = useState(getRandomWord()),
        [currentLetters, setLetters] = useState(currentWord.split('')),
        [currentRow, setRow] = useState(1),
        [currentSquare, setSquare] = useState({id: 10, value: '', status: "inactive", row: 1}),
        [currentGuess, setGuess] = useState([]),
        [guessedWords, setGuessedWords] = useState([]),

        //Keyboard States
        [guessedLetters, setGuessedLetters] = useState([]),
        [correctLetters, setCorrectLetters] = useState([]),
        [closeLetters, setCloseLetters] = useState([]),

        //Display States
        [modalVisible, setModalVisible] = useState(false),
        [modalMessage, setModalMessage] = useState(""),
        [toastVisibility, setToastVisibility] = useState(false),
        [toastMessage, setToastMessage] = useState(""),
        [disableKeyboard, setKeyboardDisable] = useState(false);
  
  //Atomic Functions
  const checkForWin = () => {
    return currentGuess.join("") === currentLetters.join("") ? true : false;
  };

  const checkForRealWord = (guess) => {
    return words.some(word => word === guess) ? true : false;
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const startNewGame = () => {
    const newWord = getRandomWord();
    setWord(newWord);
    setLetters(newWord.split(""));
    setRow(1);
    setSquare({id: 10, value: '', status: "inactive", row: 1});
    setGuess([]);
    setGuessedWords([])
    setGuessedLetters([]);
    setCloseLetters([]);
    setCorrectLetters([])
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
    ]);
  };
  
  //Event Handlers
  const updateGuess = (letter) => {
    if(!disableKeyboard && currentGuess.length < 5) {
      setGuess(previousState => [...previousState, letter]);
      setBoard(previousState => {
        return previousState.map(square => {
          if (square.id === currentSquare.id) {
            square.status = "active";
            square.value = letter;
            return square;
          };
          return square;
        });
      });

      if (currentSquare.id % 10 !== 4) {
        setSquare(previousState => boardState.find(square => square.id === previousState.id + 1));
      } 
    };
  };

  const checkLetter = (state) => {
    console.log(currentLetters, currentGuess);
      return state.map(square => {

        if (square.value === currentLetters[square.id % 10] 
          && currentRow === square.row) {
            setCorrectLetters(previousState => [...previousState, square.value]);
            square.status = 'correct';
            return square;

        } else if (
          square.value !== currentLetters[square.id % 10]
          && currentLetters.includes(square.value)
          && currentRow === square.row) {
            setCloseLetters(previousState => [...previousState, square.value]);
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
    if (!disableKeyboard) {
      if(checkForWin()) {
        setBoard(previousState => checkLetter(previousState))

        const timer = setTimeout(() => {
          openModal()
          setModalMessage([`Congradulations`, `You Win!`, `🫡`])
        }, 2000);

        return () => clearTimeout(timer);
  
      } else if (currentGuess.length < 5) {
        setToastVisibility(true)
        setToastMessage("Guess was too short")

      } else if (!checkForRealWord(currentGuess.join(""))) {
        setToastVisibility(true);
        setToastMessage("Not a valid word");

      } else if (guessedWords.includes(currentGuess.join(""))) {
        setToastVisibility(true);
        setToastMessage("You already guessed that");

      } else {
        setGuessedLetters(previousState => [...previousState, ...currentGuess]);
        setGuessedWords(previousState => [...previousState, currentGuess.join("")])
        setGuess([]);
        setBoard(previousState => checkLetter(previousState));
        setRow(previousState => currentRow !== 6 ? previousState + 1 : previousState);
        setSquare(boardState.find(square => square.id === (currentRow + 1) * 10));
      
        if (currentRow === 6) {
          setKeyboardDisable(true)

          const timer = setTimeout(() => {
            openModal();
            setModalMessage([`So close! The word was:`,  `${currentWord}`, '😔']);
          }, 2000);

          return () => clearTimeout(timer);
        };
      };
    };
  };

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

  const accountForDoubles = (squares) => {
    return squares.map(square => {
      if (square.status === "close"
          && squares.find(activeSquare => activeSquare.status === "correct"
            && activeSquare.value === square.value)
          && currentLetters.filter(letter => letter === square.value).length < 2
      ) {
        square.status = 'incorrect';
        return square;
      } else {
        return square;
      };
    });
  };

    // Row Components
    const boardRows = [1, 2 , 3, 4, 5, 6].map(number => {
      return <Row
                  squareData={boardState.filter(square => square.row === number)}
                  accountForDoubles={accountForDoubles}
                  key={number}
              />;
    });
  

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.app}>
        <Header startNewGame={startNewGame}/>
        <Toast 
          message={toastMessage}
          visibility={toastVisibility}
          setToastVisibility={setToastVisibility}
        />
        <View style={styles.boardContainer}>
          <View style={styles.container}>
            {boardRows}
          </View>
          <Keyboard
            currentWord={currentWord}
            guessedLetters={guessedLetters}
            updateGuess={updateGuess}
            submitGuess={submitGuess}
            backspace={backspace}
            disableKeyboard={disableKeyboard}
            correctLetters={correctLetters}
            closeLetters={closeLetters}
          />
        </View>
        <ModalComponent
          setKeyboardDisable={setKeyboardDisable}
          startNewGame={startNewGame}
          closeModal={closeModal}
          visibility={modalVisible}
          message={modalMessage}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    justifyContent: windowWidth < 500 ? "space-between" : "space-between",
    alignItems:"center",
    height: "100%",
    width: "100%"
  },
  container: {
    alignItems: "center",
    padding: 0,
  },
  mainWrapper: {
    width: '100%',
    height: windowWidth < 500 ? "100%" : '90%',
  },
  boardContainer: {
    height: "100%",
    justifyContent:"space-evenly"
  }
});
