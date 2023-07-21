import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoardSquare = ({row, id, value, status}) => {
  let squareStyles = [styles.boardSquare];
  let textStyles = [styles.squareText]

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
  }

  const flattenedBoxStyles = StyleSheet.flatten(squareStyles);
  const flattenedTextStyles = StyleSheet.flatten(textStyles)

  return (
    <View 
      row={row}
      id={id}
      style={flattenedBoxStyles}
      key={id}
      >
      <Text style={flattenedTextStyles}>
        {value.toUpperCase()}
      </Text>
    </View>
  )
}

export default BoardSquare

const styles = StyleSheet.create({
  boardSquare: {
    borderWidth: 1,
    borderColor: "lightgray",
    height: 50,
    width: 50,
    margin: 6,
    justifyContent:"center",
    alignItems: "center",
  }, 
  squareText: {
    color: "grey",
    fontSize: 26
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
    // backgroundColor: "black",
  },
  inactiveBox: {
    borderColor: "lightgray",
  },
  incorrectBox: {
    backgroundColor: "lightgray"
  },
  inactiveText: {
    color: "white"
  },
  correctBox: {
    backgroundColor: "#537308",
    borderColor:"#537308"
  },
  closeText: {
    color: "white"
  },
  closeBox: {
    borderColor: "#f2c41d",
    backgroundColor: "#f2c41d"
  }
})