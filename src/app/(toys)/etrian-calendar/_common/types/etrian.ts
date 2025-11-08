import {
  etrianDays,
  etrianMonths,
  etrianNewYearsEve,
} from "@/app/(toys)/etrian-calendar/_common/constants/date";

export type EtrianMonthName = (typeof etrianMonths)[number]["name"];
export type EtrianMonthNameKana = (typeof etrianMonths)[number]["kana"];
export type EtrianMonthNameWithNewYearsEve =
  | EtrianMonthName
  | EtrianNewYearsEveName;
export type EtrianNewYearsEveName = (typeof etrianNewYearsEve)["name"];
export type EtrianNewYearsEveNameKana = (typeof etrianNewYearsEve)["kana"];

export type EtrianDay = (typeof etrianDays)[number];

export type EtrianDateOfBirth = {
  month?: EtrianMonthNameWithNewYearsEve;
  day?: EtrianDay;
};

export type Etrian = {
  id: string;
  name: string;
  dateOfBirth: EtrianDateOfBirth;
  affiliations: string[];
  order: number;
  memo?: string;
};
