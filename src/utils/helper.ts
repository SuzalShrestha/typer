export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0);
};
export const calculateErrors = (actual: string, expected: string) => {
  const expectedChars = expected.split("");
  return expectedChars.reduce((errors, expectedChar, index) => {
    const actualChar = actual[index];
    if (expectedChar !== actualChar) {
      return errors + 1;
    }
    return errors;
  }, 0);
};
export const calculateAccuracyPercentage = (errors: number, total: number) => {
  if (total > 0) {
    const corrects = total - errors;
    return (corrects / total) * 100;
  }
  return 0;
};
