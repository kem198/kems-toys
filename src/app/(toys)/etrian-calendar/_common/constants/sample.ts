import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";

export const sampleEtrians: Etrian[] = [
  {
    id: "sample-medic",
    name: "メディ子",
    dateOfBirth: {
      month: "皇帝ノ月",
      day: 1,
    },
    affiliations: ["アトラス", "エトリア"],
    orderNum: 0,
    memo: "ずうずうしい！",
  },
  {
    id: "sample-paladin",
    name: "ししょー",
    dateOfBirth: {
      month: "皇帝ノ月",
      day: 1,
    },
    affiliations: ["アトラス", "エトリア"],
    orderNum: 1,
    memo: "ウルトラCだろう…私もそう思う",
  },
  {
    id: "sample-gunner",
    name: "ガン子",
    dateOfBirth: {
      month: "皇帝ノ月",
      day: 1,
    },
    affiliations: ["アトラス", "ハイ・ラガード"],
    orderNum: 2,
    memo: "私のフィギュアで3倍売れる",
  },
];
