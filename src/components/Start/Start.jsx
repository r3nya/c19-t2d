import { useState } from 'react';
import { Paper, Space } from '@mantine/core';

import { DATA } from 'src/constants/data';
import CategoryProgress from 'src/components/CategoryProgress';
import Step from '../Step';

const Start = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <CategoryProgress currentStep={currentStep} />

      <Space h="md" />

      <Paper
        shadow="xs"
        p="md"
      >
        <Step
          data={DATA[currentStep]}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </Paper>
    </>
  );
};

export default Start;
