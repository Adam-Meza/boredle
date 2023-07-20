import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Keyboard = () => {
  const handlePress = (letter) => {
    // Handle the onPress event for each letter
    console.log(`Pressed ${letter}`);
  };

  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => (
    <TouchableOpacity
      key={letter}
      style={styles.button}
      onPress={() => handlePress(letter)}
    >
      <Text style={styles.buttonText}>{letter}</Text>
    </TouchableOpacity>
  ));

  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter) => (
    <TouchableOpacity
      key={letter}
      style={styles.button}
      onPress={() => handlePress(letter)}
    >
      <Text style={styles.buttonText}>{letter}</Text>
    </TouchableOpacity>
  ));

  const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => (
    <TouchableOpacity
      key={letter}
      style={styles.button}
      onPress={() => handlePress(letter)}
    >
      <Text style={styles.buttonText}>{letter}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.keyRow}>{row1}</View>
      <View style={styles.keyRow}>{row2}</View>
      <View style={styles.keyRow}>{row3}</View>
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
    marginHorizontal: 4,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "black"
  },
});

export default Keyboard;