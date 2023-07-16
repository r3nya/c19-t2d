import { useState } from "react";
import { Text, Paper } from '@mantine/core';

import { DATA } from '../../constants/data';
import Step from '../Step';

const Start = () => {
  const [currentStep, setCurrentStep] = useState(3);

  return (
    <Paper shadow="xs" p="md">
      <Step data={DATA[currentStep]} />
    </Paper>
  );
}

export default Start;
