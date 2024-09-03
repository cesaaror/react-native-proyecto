import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';

const CounterSection = () => {
  const [counters, setCounters] = useState({
    counter1: new Animated.Value(0),
    counter2: new Animated.Value(0),
    counter3: new Animated.Value(0),
  });

  useEffect(() => {
    startCounterAnimation('counter1', 194, 2000);
    startCounterAnimation('counter2', 2000, 2000);
    startCounterAnimation('counter3', 15, 1000);
  }, []);

  const startCounterAnimation = (counterName, endValue, duration) => {
    Animated.timing(counters[counterName], {
      toValue: endValue,
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterBox}>
        <Animated.Text style={styles.counter}>{counters.counter1}</Animated.Text>
        <LottieView
          style={styles.lottie}
          source={require('./assets/animations/counter1.json')}
          autoPlay
          loop={false}
        />
        <Text>ERFOLGREICHE PROJEKTE</Text>
      </View>

      <View style={styles.counterBox}>
        <Animated.Text style={styles.counter}>{counters.counter2}</Animated.Text>
        <LottieView
          style={styles.lottie}
          source={require('./assets/animations/counter2.json')}
          autoPlay
          loop={false}
        />
        <Text>GRÜNDUNGSJAHR</Text>
      </View>

      <View style={styles.counterBox}>
        <Animated.Text style={styles.counter}>{counters.counter3}</Animated.Text>
        <LottieView
          style={styles.lottie}
          source={require('./assets/animations/counter3.json')}
          autoPlay
          loop={false}
        />
        <Text>MITARBEITER</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 20,
    },
    counterBox: {
      alignItems: 'center',
      textAlign: 'center',
      padding: 20,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      margin: 10,
    },
    counter: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#007BFF',
    },
    lottie: {
      width: 100,
      height: 100,
    },
    description: {
      marginTop: 10,
      fontSize: 16,
      color: '#333',
    },
  });
  
  export default CounterSection;