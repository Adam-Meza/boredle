import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoardSquare = ({row, id, value, status}) => {
  let squareStyles = [styles.boardSquare];
  let textStyles = [styles.squareText]

  switch (status) {
    case 'active':
      console.log('came here')
      textStyles.push(styles.activeText);
      squareStyles.push(styles.activeBox);
      break;
    case 'close':
      textStyles.push(styles.close)
      squareStyles.push(styles.closeBox);
      break;
    case 'correct':
      squareStyles.push(styles.correctBox);
      break;
    case 'wrong':
      squareStyles.push(styles.incorrectBox);
      break;
    default:
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
    borderColor: "grey",
    height: 60,
    width: 60,
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
  inactiveText: {

  },
  incorrectText: {

  },
  correctText: {

  },
  activeBox: {
    borderColor: "black"
    // backgroundColor: "black",
  },
  inactiveBox: {

  },
  incorrectBox: {

  },
  correctBox: {

  },
  
})