import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Row = ({squareData}) => {
  const squares = squareData.map(id => {
    return ( 
    <View 
      row={squareData.row}
      id={id.id}
      style={ styles.boardSquare }
      key={id.id}
      >{id.value}</View>
      )}
  )

  return (
    <View style={styles.row}>
      {squares}
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
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
})