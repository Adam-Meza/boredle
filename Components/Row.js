import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import BoardSquare from './BoardSquare';

const Row = ({squareData}) => {
  const squares = squareData.map(square => {
    return (
      <BoardSquare
        status={square.status}
        row={squareData.row}
        id={square.id}
        style={styles.boardSquare }
        key={square.id}
        value = {square.value}
      />
    );
  });

  return (
    <View style={styles.row}>
      {squares}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({ 
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});