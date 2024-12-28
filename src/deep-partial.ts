// https://stackoverflow.com/questions/61132262/typescript-deep-partial
export type DeepPartial<T> = T extends object
  ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  : T;
