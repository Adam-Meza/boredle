import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;

const BoardSquare = ({row, id, value, status}) => {
  let squareStyles = [styles.boardSquare];
  let textStyles = [styles.squareText];

  switch (status) {
    case 'active':
      textStyles.push(styles.activeText);
      squareStyles.push(styles.activeBox);
      break;
    case 'close':
      textStyles.push(styles.closeText)
      squareStyles.push(styles.closeBox);
      break;
    case 'correct':
      textStyles.push(styles.correctText);
      squareStyles.push(styles.correctBox);
      break;
    case 'incorrect':
      textStyles.push(styles.incorrectText)
      squareStyles.push(styles.incorrectBox);
      break;
    default:
      textStyles.push(styles.inactiveText);
      squareStyles.push(styles.inactiveBox);
      break;
  };

  const flattenedBoxStyles = StyleSheet.flatten(squareStyles);
  const flattenedTextStyles = StyleSheet.flatten(textStyles);

  return (
    <View 
      row={row}
      id={id}
      style={flattenedBoxStyles}
      key={id}
      >
      <Text style={flattenedTextStyles}>
        {value}
      </Text>
    </View>
  );
};

export default BoardSquare

const styles = StyleSheet.create({
  boardSquare: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: windowWidth < 500 ? 55 : 70,
    width: windowWidth < 500 ? 55 : 70,
    margin: 3.5,
    justifyContent:"center",
    alignItems: "center",
  }, 
  squareText: {
    color: "grey",
    fontSize: 26,
    fontWeight:"bold"
  },
  activeText: {
    color: "black"
  },
  incorrectText: {
    color: "white"
  },
  correctText: {
    color:"white"
  },
  activeBox: {
    borderColor: "black"
  },
  inactiveBox: {
    borderColor: "lightgray",
  },
  incorrectBox: {
    backgroundColor: "lightgray",
    borderColor:"lightgray",
  },
  inactiveText: {
    color: "white"
  },
  correctBox: {
    backgroundColor: "#4b7774",
    borderColor:"#4b7774"
  },
  closeText: {
    color: "white"
  },
  closeBox: {
    borderColor: "#f2c41d",
    backgroundColor: "#f2c41d"
  }
});