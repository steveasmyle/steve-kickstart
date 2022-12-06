import { stripUnit } from "polished";

export const pxToNum = (value: string | number = 0): number =>
  Number(stripUnit(value));
