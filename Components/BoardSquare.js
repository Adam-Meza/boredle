import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoardSquare = ({row, id, value}) => {

  return (
    <View 
      row={row}
      id={id}
      style={styles.boardSquare }
      key={id}
      >
      <Text style={styles.squareText}>
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
  active: {
    color: "black"
  },
  inactive: {

  },
  incorrect: {

  },
  correct: {

  }
})