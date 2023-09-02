import { Box, Container, Text } from '@app/components';
import { APP_TITLE } from '@app/constants/string.constants';
import React from 'react';

const App: React.FC = () => {
  return (
    <Container safeTop headerProps={{ title: APP_TITLE }} headerShown={true}>
      <Box flex={1} justifyContent='center' alignItems='center'>
        <Text variant='heading1'>Theme setup</Text>
      </Box>
    </Container>
  );
};

export default App;
