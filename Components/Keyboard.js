import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Keyboard = ({updateGuess, submitGuess, backspace}) => {
  const handleLetterKeyPress = (letter) => {
    updateGuess(letter)
  };

  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => (
    <TouchableOpacity
      key={letter}
      style={styles.button}
      onPress={() => handleLetterKeyPress(letter)}
    >
      <Text style={styles.buttonText}>{letter}</Text>
    </TouchableOpacity>
  ));

  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter) => (
    <TouchableOpacity
      key={letter}
      style={styles.button}
      onPress={() => handleLetterKeyPress(letter)}
    >
      <Text style={styles.buttonText}>{letter}</Text>
    </TouchableOpacity>
  ));

  const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => (
    <TouchableOpacity
      key={letter}
      style={styles.button}
      onPress={() => handleLetterKeyPress(letter)}
    >
      <Text style={styles.buttonText}>{letter}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.keyRow}>{row1}</View>
      <View style={styles.keyRow}>{row2}</View>
      <View style ={styles.keyRow}>
        <View style={styles.keyRow}>{row3}</View>
        <TouchableOpacity style={styles.submitButton } onPress={()=> submitGuess()}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton } onPress={()=> backspace()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 3,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "black"
  },
  submitButton: {
    marginHorizontal: 3,
    padding: 6,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    height: 42,
    alignItems: "center",
    justifyContent: "center"
  },
  backButton: {
    marginHorizontal: 3,
    padding: 6,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    height: 42,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Keyboard;