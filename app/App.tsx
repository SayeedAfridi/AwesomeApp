import React from 'react';
import { Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
      }}>
      <Text testID='hello'>Dev env setup</Text>
    </View>
  );
};

export default App;
