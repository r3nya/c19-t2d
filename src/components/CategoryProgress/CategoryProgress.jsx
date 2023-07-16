import { Progress } from '@mantine/core';

const progressSections = [
  { value: 25, color: 'pink', label: '1' },
  { value: 25, color: 'grape', label: '2' },
  { value: 25, color: 'violet', label: '3' },
  { value: 25, color: 'cyan', label: '4' },
];

const getProgressValue = (currentStep) => progressSections.slice(0, currentStep + 1);

const CategoryProgress = ({ currentStep }) => {
  return (
    <Progress
      size="xl"
      sections={getProgressValue(currentStep)}
    />
  );
};

export default CategoryProgress;
