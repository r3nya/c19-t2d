import { AppShell, Navbar, Header, Group, ActionIcon, useMantineColorScheme, Box, rem } from '@mantine/core';

import HeaderComponent from './Header'

const Shell = ({ children }) => {
  return (
    <AppShell
      padding="md"

      header={<HeaderComponent />}
      styles={(theme) => ({
        main: {backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]},
      })}
    >
      {children}
    </AppShell>
  )
}

export default Shell;
