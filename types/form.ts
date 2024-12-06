import { FieldValues, RegisterOptions } from 'react-hook-form';

export type Rules =
  | Omit<
      RegisterOptions<FieldValues, string>,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
  | undefined;
