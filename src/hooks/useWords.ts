import { faker } from "@faker-js/faker";
import { useState, useCallback } from "react";
function generateWords(count: number) {
  return faker.lorem.words(count);
}
function useWords(count: number) {
  const [words, setWords] = useState<string>(generateWords(count));
  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);
  return { words, updateWords };
}
export default useWords;
