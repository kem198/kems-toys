import {
  etrianMonths,
  etrianNewYearsEve,
} from "@/app/(toys)/etrian-registry/_constants/month";

export type EtrianMonthName = (typeof etrianMonths)[number]["name"];
export type EtrianMonthNameKana = (typeof etrianMonths)[number]["kana"];
export type EtrianNewYearsEveName = (typeof etrianNewYearsEve)["name"];
export type EtrianNewYearsEveNameKana = (typeof etrianNewYearsEve)["kana"];
export type EtrianDay =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28;

export type Etrian = {
  id: string;
  name: string;
  dateOfBirth: {
    month?: EtrianMonthName | EtrianNewYearsEveName;
    day?: EtrianDay;
  };
  affiliations: string[];
  orderNum: number;
};
