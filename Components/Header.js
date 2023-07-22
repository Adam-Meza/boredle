import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({startNewGame}) => {
  const handlePress = () => {
    startNewGame();
  };
  
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Boredle</Text>
      <TouchableOpacity onPress={() => handlePress()}>
        <Text style={styles.button}>
          New Game
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50, 
    borderBottomWidth: .5,
    borderBottomColor: "grey"
  },
  headerText: {
    fontSize: 22,
    marginLeft: 20,
  },
  button: {
    marginRight: 20,
    fontSize: 14,
    borderWidth: .5,
    padding: 6,
    borderColor: "grey"
  }
});