import {
  etrianMonths,
  etrianNewYearsEve,
} from "@/app/(toys)/etrian-registry/_constants/month";

export type EtrianMonthName = (typeof etrianMonths)[number]["name"];
export type EtrianMonthNameKana = (typeof etrianMonths)[number]["kana"];
export type EtrianNewYearsEveName = (typeof etrianNewYearsEve)["name"];
export type EtrianNewYearsEveNameKana = (typeof etrianNewYearsEve)["kana"];

export type Guild = {
  name: string;
};

export type Etrian = {
  id: string;
  name: string;
  guild: Guild[];
  orderNum: number;
  dateOfBirth?: {
    month: EtrianMonthName | EtrianNewYearsEveName;
    day?: number;
  };
};
