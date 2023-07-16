import { MantineProvider } from '@mantine/core';

import Shell from './components/Shell';
import Start from './components/Start';

function App() {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        // fontFamily: 'Open Sans, sans serif',
        spacing: { xs: '1rem', sm: '1.2rem', md: '1.8rem', lg: '2.2rem', xl: '2.8rem' },
      }}
    >
      <Shell>
        <Start />
      </Shell>
    </MantineProvider>
  );
}

export default App;
