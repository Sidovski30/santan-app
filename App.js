import React, {useState, useEffect} from 'react';
import * as Analytics from 'expo-firebase-analytics';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('Hello, guys');
  useEffect(() => {
    console.log('Analytics initialized:', Analytics);
    console.log('Analytics.logEvent exists:', typeof Analytics.logEvent);
  }, []);

  const handleButtonClick = async () => {
    setText('You pressed the button');
  
    console.log('Logging button_click event...');
  
    try {
      await Analytics.logEvent('button_click', {
        button_name: 'Click Button',
        action: 'pressed',
      });
      console.log('✅ Event button_click sent to Firebase');
    } catch (error) {
      console.error('❌ Error logging event:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
        title="Click"
        onPress={handleButtonClick}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
