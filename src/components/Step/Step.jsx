import {Title, Divider, Checkbox, SimpleGrid, Button} from '@mantine/core';
import {useForm} from '@mantine/form';

const Step = ({data}) => {
  const form = useForm();

  console.log(form.values)

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Title order={3}>{data.title}</Title>

      <Divider my="sm" variant="dotted"/>

      <SimpleGrid cols={1} verticalSpacing="lg">
        {data.questions.map((question, idx) => (
          <Checkbox
            key={`q${idx}`}
            label={question}
            size="md"
            {...form.getInputProps(`q${idx}`, { type: 'checkbox' })}
          />
        ))}
      </SimpleGrid>

      <Divider my="sm" variant="dotted"/>

      <Button type="submit" size="md">Далее</Button>
    </form>
  )
}

export default Step;
