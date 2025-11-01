import {
  EtrianMonthName,
  EtrianNewYearsEveName,
} from "@/app/(toys)/etrian-calendar/_constants/month";

export type EtrianMonth = {
  name: string;
  kana: string;
};

export type Etrian = {
  id: string;
  name: string;
  birthOfDate: {
    month: EtrianMonthName | EtrianNewYearsEveName;
    date: number;
  };
  orderNum: number;
  guild: Guild[];
};

export type Guild = {
  name: string;
};
