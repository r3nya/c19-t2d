import { useState, useEffect } from 'react';
import { Title, Divider, Checkbox, SimpleGrid, Button, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';

import { RESULT_OPTION_3 } from 'src/constants/data';

const MAX_STEPS = 3;

const valueChecker = ({ counter, formValues }) => counter === formValues.length && formValues.every(Boolean);

const Step = ({ data, currentStep, setCurrentStep }) => {
  const [modalText, setModalText] = useState(data.result);
  const form = useForm();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    form.reset();
    setModalText(data.result);
  }, [currentStep]);

  const handleSubmit = (values) => {
    if (valueChecker({ counter: data.questions.length, formValues: Object.values(values) })) {
      open();
    } else {
      if (currentStep < MAX_STEPS) {
        setCurrentStep(currentStep + 1);
      } else {
        setModalText(RESULT_OPTION_3);
        open();
      }
    }
  };

  const handleCloseModal = () => {
    close();
    setCurrentStep(0);
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Результат"
        overlayProps={{
          opacity: 0.55,
          blur: 3,
        }}
        centered
        onClose={handleCloseModal}
      >
        <Text fz="lg">{modalText}</Text>
      </Modal>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Title order={3}>{data.title}</Title>

        <Divider
          my="sm"
          variant="dotted"
        />

        <SimpleGrid
          cols={1}
          verticalSpacing="lg"
        >
          {data.questions.map((question, idx) => (
            <Checkbox
              key={`q${idx}`}
              label={question}
              size="md"
              {...form.getInputProps(`q${idx}`, { type: 'checkbox' })}
            />
          ))}
        </SimpleGrid>

        <Divider
          my="sm"
          variant="dotted"
        />

        <Button
          type="submit"
          size="md"
        >
          Далее
        </Button>
      </form>
    </>
  );
};

export default Step;
