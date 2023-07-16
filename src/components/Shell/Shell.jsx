import { AppShell } from '@mantine/core';

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
      {children}
    </AppShell>
  );
};

export default Shell;
