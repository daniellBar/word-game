import { useCallback, useRef, useState } from "react";
import { LETTER_COUNT } from "./consts";
import type { FinalStatus, Status } from "./types";
import { useValidateWord } from "./GamePage.api";

export const useGameHandlers = () => {
  const [letterCount, setLetterCount] = useState(LETTER_COUNT);
  const [letters, setLetters] = useState<string[]>([]);
  const [status, setStatus] = useState<Status | null>(null);

  // this is a cache for not sending a new request for a word which was already sent
  // lets say for example if there is a limit for api requests from the server
  const validatedWords = useRef<Map<string, FinalStatus>>(new Map());

  // in this simple case i could have just created a try catch and axios.get inside the onEnter
  // but using react query is more powerful and cleaner in my opinion
  // it gives me a pending state and no need for try catch
  const { mutate, isPending } = useValidateWord({
    onSuccess: (_data, word) => {
      setStatus("success");
      validatedWords.current.set(word, "success");
    },
    onError: (_error, word) => {
      setStatus("error");
      validatedWords.current.set(word, "error");
    },
  });

  const onChar = useCallback(
    (char: string) => {
      if (letters.length < letterCount) {
        setLetters((prev) => [...prev, char]);
        setStatus(null);
      }
    },
    [letters, letterCount]
  );

  const onBackspace = useCallback(() => {
    setLetters((prev) => prev.slice(0, -1));
    setStatus(null);
  }, []);

  const onEnter = useCallback(() => {
    if (letters.length !== letterCount) {
      setStatus("error");
      return;
    }
    const word = letters.join("").toLowerCase();

    const cached = validatedWords.current.get(word);

    if (cached) {
      setStatus(cached);
      return;
    }

    mutate(word);
  }, [letters, mutate, letterCount]);

  const setNewLetterCount = useCallback((count: number) => {
    setLetterCount(count);
    setLetters([]);
    setStatus(null);
  }, []);

  return {
    letters,
    status: isPending ? "pending" : status,
    onChar,
    onBackspace,
    onEnter,
    letterCount,
    setLetterCount:setNewLetterCount,
    disabled: isPending,
  };
};
