import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Toast = ({ message, visibility, setToastVisibility }) => {
  useEffect(() => {
    if (visibility) {
      const timer = setTimeout(() => {
        setToastVisibility(false);
      }, 2000);

      return () => clearTimeout(timer);
    };
  }, [visibility]);

  if (!visibility) {
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    transform: [{ translateX: '50%' }],
    backgroundColor: 'black',
    padding: 10,
    width: "50%",
    alignSelf: "center",
    justifyContent: 'center',
    alignItems:'center',
  },
  message: {
    color: 'white',
  },
});

export default Toast;
