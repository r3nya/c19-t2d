import { Title, Group, Box, rem, Container } from '@mantine/core';
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

      <Container>
        <Title order={3}>Выявление показания к инсулинотерапии (ИТ) для пациентов с сахарным диабетом 2 типа (СД2) И COVID-19</Title>
      </Container>
    </Box>
  );
};

export default Header;
