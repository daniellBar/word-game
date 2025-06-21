import { useMutation, type MutationOptions } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const validateWord = (word: string) => axios.get(`${url}${word}`);

export const useValidateWord = (
  options?: Omit<MutationOptions<AxiosResponse, Error, string>, "mutationFn">
) => {
  return useMutation({
    mutationFn: (word: string) => validateWord(word),
    ...options,
  });
};
