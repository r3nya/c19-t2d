import { AppShell, Container } from '@mantine/core';

import HeaderComponent from './Header';

const Shell = ({ children }) => {
  return (
    <AppShell
      padding="md"
      header={<HeaderComponent />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colors.gray[0] },
      })}
    >
      <Container px={0}>
        {children}
      </Container>
    </AppShell>
  );
};

export default Shell;
