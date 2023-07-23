import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
const windowWidth = Dimensions.get('window').width;

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
    alignItems: "flex-end",
    width: "100%",
    height: 50, 
    borderBottomWidth: .7,
    borderBottomColor: "#f2c41d",
    paddingBottom: 6,
  },
  headerText: {
    fontSize: 22,
    marginLeft: windowWidth < 500 ? 20 : 40, 
  },
  button: {
    marginRight: windowWidth < 500 ? 20 : 40, 
    fontSize: 14,
    borderWidth: .5,
    padding: 6,
    borderColor: "#4b7774",
    marginBottom: 3,
  }
});