import { Title, Group, Box, rem } from '@mantine/core';
import { Hearts } from 'tabler-icons-react';

const Header = () => {
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `${rem(1)} solid ${theme.colors.gray[2]}`,
      })}
    >
      <Group position="apart">
        <Hearts
          size={48}
          strokeWidth={2}
          color="tomato"
        />
      </Group>

      <Group position="apart">
        <Title order={3}>Выявление показания к ИТ для пациентов с СП2 И COVID19</Title>
      </Group>
    </Box>
  );
};

export default Header;
