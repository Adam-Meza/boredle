import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import BoardSquare from './BoardSquare'

const Row = ({squareData}) => {
  const squares = squareData.map(id => {
    return (
      <BoardSquare 
        row={squareData.row}
        id={id.id}
        style={ styles.boardSquare }
        key={id.id}
        value = {id.value.toUpperCase()}
      />
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
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
})