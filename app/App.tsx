import RootNavigation from '@app/lib/navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
