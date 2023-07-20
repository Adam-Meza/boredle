import { StyleSheet, Text, View } from "react-native";
import { defaultState } from "./deafultState";
import Row from "./Components/Row";
import Keyboard from "./Components/Keyboard";

export default function Page() {

  const rowOne = <Row squareData={defaultState.filter(square => square.row === 1)}/>
  const rowTwo = <Row squareData={defaultState.filter(square => square.row === 2)}/>
  const rowThree = <Row squareData={defaultState.filter(square => square.row === 3)}/>
  const rowFour = <Row squareData={defaultState.filter(square => square.row === 4)}/>
  const rowFive = <Row squareData={defaultState.filter(square => square.row === 5)}/>
  const rowSix =  <Row squareData={defaultState.filter(square => square.row === 6)}/>

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
      <Keyboard/>
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
