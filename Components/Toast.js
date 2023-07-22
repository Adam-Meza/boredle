import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Toast = ({ message, visible, hideToast }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    padding: 10,
  },
  message: {
    color: 'white',
  },
});

export default Toast;
