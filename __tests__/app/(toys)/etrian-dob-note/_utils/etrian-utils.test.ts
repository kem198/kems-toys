import { toEtrianDate } from "@/app/(toys)/etrian-dob-note/_utils/etrian-utils";
import { describe, expect, it } from "vitest";

describe("etrian-utils tests", () => {
  describe("toEtrianDate() tests", () => {
    it("'2025-01-01 00:00:00' を与えた場合、'皇帝ノ月' を返すこと", () => {
      const realDate = new Date("2025-01-01 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "こうていのつき", name: "皇帝ノ月" },
      });
    });

    it("'2025-01-28 23:59:59' を与えた場合、'皇帝ノ月' を返すこと", () => {
      const realDate = new Date("2025-01-28 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "こうていのつき", name: "皇帝ノ月" },
      });
    });

    it("'2025-01-29 00:00:00' を与えた場合、'笛鼠ノ月' を返すこと", () => {
      const realDate = new Date("2025-01-29 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "ふえねずみのつき", name: "笛鼠ノ月" },
      });
    });

    it("'2025-02-25 23:59:59' を与えた場合、'笛鼠ノ月' を返すこと", () => {
      const realDate = new Date("2025-02-25 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "ふえねずみのつき", name: "笛鼠ノ月" },
      });
    });

    it("'2025-02-26 00:00:00' を与えた場合、'天牛ノ月' を返すこと", () => {
      const realDate = new Date("2025-02-26 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "てんぎゅうのつき", name: "天牛ノ月" },
      });
    });

    it("'2025-03-25 23:59:59' を与えた場合、'天牛ノ月' を返すこと", () => {
      const realDate = new Date("2025-03-25 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "てんぎゅうのつき", name: "天牛ノ月" },
      });
    });

    it("'2025-03-26 00:00:00' を与えた場合、'王虎ノ月' を返すこと", () => {
      const realDate = new Date("2025-03-26 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "おうこのつき", name: "王虎ノ月" },
      });
    });

    it("'2025-04-22 23:59:59' を与えた場合、'王虎ノ月' を返すこと", () => {
      const realDate = new Date("2025-04-22 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "おうこのつき", name: "王虎ノ月" },
      });
    });

    it("'2025-04-23 00:00:00' を与えた場合、'素兎ノ月' を返すこと", () => {
      const realDate = new Date("2025-04-23 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "すうさぎのつき", name: "素兎ノ月" },
      });
    });

    it("'2025-05-20 23:59:59' を与えた場合、'素兎ノ月' を返すこと", () => {
      const realDate = new Date("2025-05-20 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "すうさぎのつき", name: "素兎ノ月" },
      });
    });

    it("'2025-05-21 00:00:00' を与えた場合、'虹竜ノ月' を返すこと", () => {
      const realDate = new Date("2025-05-21 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "にじりゅうのつき", name: "虹竜ノ月" },
      });
    });

    it("'2025-06-17 23:59:59' を与えた場合、'虹竜ノ月' を返すこと", () => {
      const realDate = new Date("2025-06-17 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "にじりゅうのつき", name: "虹竜ノ月" },
      });
    });

    it("'2025-06-18 00:00:00' を与えた場合、'白蛇ノ月' を返すこと", () => {
      const realDate = new Date("2025-06-18 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "しろへびのつき", name: "白蛇ノ月" },
      });
    });

    it("'2025-07-15 23:59:59' を与えた場合、'白蛇ノ月' を返すこと", () => {
      const realDate = new Date("2025-07-15 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "しろへびのつき", name: "白蛇ノ月" },
      });
    });

    it("'2025-07-16 00:00:00' を与えた場合、'風馬ノ月' を返すこと", () => {
      const realDate = new Date("2025-07-16 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "ふうまのつき", name: "風馬ノ月" },
      });
    });

    it("'2025-08-12 23:59:59' を与えた場合、'風馬ノ月' を返すこと", () => {
      const realDate = new Date("2025-08-12 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "ふうまのつき", name: "風馬ノ月" },
      });
    });

    it("'2025-08-13 00:00:00' を与えた場合、'金羊ノ月' を返すこと", () => {
      const realDate = new Date("2025-08-13 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "きんようのつき", name: "金羊ノ月" },
      });
    });

    it("'2025-09-09 23:59:59' を与えた場合、'金羊ノ月' を返すこと", () => {
      const realDate = new Date("2025-09-09 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "きんようのつき", name: "金羊ノ月" },
      });
    });

    it("'2025-09-10 00:00:00' を与えた場合、'飛猴ノ月' を返すこと", () => {
      const realDate = new Date("2025-09-10 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "ひろうのつき", name: "飛猴ノ月" },
      });
    });

    it("'2025-10-07 23:59:59' を与えた場合、'飛猴ノ月' を返すこと", () => {
      const realDate = new Date("2025-10-07 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "ひろうのつき", name: "飛猴ノ月" },
      });
    });

    it("'2025-10-08 00:00:00' を与えた場合、'火鳥ノ月' を返すこと", () => {
      const realDate = new Date("2025-10-08 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "かちょうのつき", name: "火鳥ノ月" },
      });
    });

    it("'2025-11-04 23:59:59' を与えた場合、'火鳥ノ月' を返すこと", () => {
      const realDate = new Date("2025-11-04 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "かちょうのつき", name: "火鳥ノ月" },
      });
    });

    it("'2025-11-05 00:00:00' を与えた場合、'戌神ノ月' を返すこと", () => {
      const realDate = new Date("2025-11-05 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "いぬがみのつき", name: "戌神ノ月" },
      });
    });

    it("'2025-12-02 23:59:59' を与えた場合、'戌神ノ月' を返すこと", () => {
      const realDate = new Date("2025-12-02 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "いぬがみのつき", name: "戌神ノ月" },
      });
    });

    it("'2025-12-03 00:00:00' を与えた場合、'怒猪ノ月' を返すこと", () => {
      const realDate = new Date("2025-12-03 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 1,
        month: { kana: "どちょのつき", name: "怒猪ノ月" },
      });
    });

    it("'2025-12-30 23:59:59' を与えた場合、'怒猪ノ月' を返すこと", () => {
      const realDate = new Date("2025-12-30 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        day: 28,
        month: { kana: "どちょのつき", name: "怒猪ノ月" },
      });
    });

    it("'2025-12-31 00:00:00' を与えた場合、'鬼乎ノ日' を返すこと", () => {
      const realDate = new Date("2025-12-31 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        month: { kana: "ものかのひ", name: "鬼乎ノ日" },
      });
    });

    it("'2025-12-31 23:59:59' を与えた場合、'鬼乎ノ日' を返すこと", () => {
      const realDate = new Date("2025-12-31 23:59:59");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        month: { kana: "ものかのひ", name: "鬼乎ノ日" },
      });
    });

    it("'2024-12-31 00:00:00' (閏年最終日) を与えた場合、'鬼乎ノ日' を返すこと", () => {
      const realDate = new Date("2024-12-31 00:00:00");
      const etrianDate = toEtrianDate(realDate);
      expect(etrianDate).toEqual({
        month: { kana: "ものかのひ", name: "鬼乎ノ日" },
      });
    });
  });
});
