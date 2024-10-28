const NUMBER_REGEX = /^\d*$/;
export const isNumber = (value: string) => NUMBER_REGEX.test(value);
