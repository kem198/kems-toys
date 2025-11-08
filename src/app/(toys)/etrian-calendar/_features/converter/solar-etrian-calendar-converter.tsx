"use client";

import { etrianMonthOptionValues } from "@/app/(toys)/etrian-calendar/_common/constants/date";
import {
  EtrianDay,
  EtrianMonthName,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import {
  toEtrianDate,
  toSolarDate,
} from "@/app/(toys)/etrian-calendar/_common/utils/etrian-utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Item, ItemContent } from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { isLeapYear } from "@/utilities/date-utils";
import { format } from "date-fns";
import { ArrowRightLeft, ChevronDownIcon, Sprout, Sun } from "lucide-react";
import React, { useState } from "react";

export function ToEtrianCalendarConverter() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const startMonth = new Date(2007, 0);
  const currentYear = new Date().getFullYear();
  const endMonth = new Date(currentYear + 4, 11);

  return (
    <ItemContent className="flex flex-row flex-wrap gap-4">
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="date" className="flex items-center gap-1">
          <Sun size={16} />
          太陽暦
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-full justify-between font-normal"
            >
              {date ? format(date, "yyyy-MM-dd") : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              captionLayout="dropdown"
              selected={date}
              defaultMonth={date}
              startMonth={startMonth}
              endMonth={endMonth}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <Label className="flex items-center gap-1">
          <Sprout size={16} />
          世界樹暦
        </Label>
        <div>
          <Button
            variant="secondary"
            className="w-full cursor-default select-text justify-between font-normal"
          >
            {date ? toEtrianDate(date).month.name : ""}{" "}
            {date && toEtrianDate(date).day
              ? `${toEtrianDate(date).day} 日`
              : ""}
          </Button>
        </div>
      </div>
    </ItemContent>
  );
}

export function ToSolarCalendarConverter() {
  const today = new Date();
  const todayEtrian = toEtrianDate(today);

  const [selectedYear, setSelectedYear] = React.useState<string>(
    String(today.getFullYear()),
  );
  const [selectedMonth, setSelectedMonth] = React.useState<string>(
    todayEtrian.month.name,
  );
  const [selectedDay, setSelectedDay] = React.useState<string>(
    String(todayEtrian.day),
  );
  const [solarDate, setSolarDate] = React.useState<Date | undefined>(today);

  let maxDay = 28;

  // 鬼乎ノ日の場合、選択肢を平年は 1 日、閏年は 1, 2 日にする
  const isNewYearsEve = selectedMonth === "鬼乎ノ日";
  const isLeap = isLeapYear(new Date(parseInt(selectedYear, 10), 0, 1));
  if (isNewYearsEve) {
    maxDay = isLeap ? 2 : 1;
  }

  // 年の選択肢
  const startYear = 2007;
  const endYear = today.getFullYear() + 4;
  const yearOptions = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i,
  );

  React.useEffect(() => {
    if (isNewYearsEve) {
      const currentDay = parseInt(selectedDay, 10);
      // 鬼乎ノ日が選択されたら選択中の日を 1 日にする
      if (isLeap) {
        if (currentDay > 2) {
          // 閏年では 3 日以上の時のみ発火する (2 日から変更できなくなるため)
          setSelectedDay("1");
        }
      } else {
        setSelectedDay("1");
      }
    }
  }, [isNewYearsEve, isLeap, selectedDay]);

  React.useEffect(() => {
    if (!selectedYear || !selectedMonth || !selectedDay) {
      setSolarDate(undefined);
      return;
    }

    try {
      const year = parseInt(selectedYear, 10);
      const day = parseInt(selectedDay, 10);
      if (Number.isNaN(year) || Number.isNaN(day) || day < 1 || day > maxDay) {
        setSolarDate(undefined);
        return;
      }

      const date: Date = toSolarDate({
        year,
        month: selectedMonth as EtrianMonthName,
        day: day as EtrianDay,
      });
      setSolarDate(date);
    } catch {
      setSolarDate(undefined);
    }
  }, [selectedYear, selectedMonth, selectedDay, maxDay]);

  return (
    <ItemContent className="flex flex-row flex-wrap gap-4">
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="etrian-month" className="flex items-center gap-1">
          <Sprout size={16} />
          世界樹暦
        </Label>
        <div className="flex w-full flex-wrap items-center gap-2">
          <div className="flex flex-1 items-center gap-2">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger id="etrian-year" className="w-full">
                <SelectValue placeholder="年" />
              </SelectTrigger>
              <SelectContent>
                {yearOptions.map((year) => (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            年
          </div>

          <div className="flex flex-1 items-center gap-2">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger id="etrian-month" className="w-full">
                <SelectValue placeholder="月を選択" />
              </SelectTrigger>
              <SelectContent>
                {etrianMonthOptionValues.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-1 items-center gap-2">
            <Select value={selectedDay} onValueChange={setSelectedDay}>
              <SelectTrigger id="etrian-day" className="w-full">
                <SelectValue placeholder="日" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: maxDay }, (_, i) => i + 1).map((day) => (
                  <SelectItem key={day} value={String(day)}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            日
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="date" className="flex items-center gap-1">
          <Sun size={16} />
          太陽暦
        </Label>
        <Button
          variant="secondary"
          id="date"
          className="w-full cursor-default justify-between font-normal"
        >
          {solarDate
            ? format(solarDate, "yyyy-MM-dd")
            : "日付を選択してください"}
        </Button>
      </div>
    </ItemContent>
  );
}

export function SolarEtrianCalendarConverter() {
  const [isShowToEtrian, setIsShowToEtrian] = useState(true);
  return (
    <div className="flex flex-col items-end gap-2">
      <Item variant="outline" className="w-full">
        {isShowToEtrian ? (
          <ToEtrianCalendarConverter />
        ) : (
          <ToSolarCalendarConverter />
        )}
      </Item>

      <Button
        variant="secondary"
        onClick={() => {
          setIsShowToEtrian(!isShowToEtrian);
        }}
      >
        <ArrowRightLeft />
        入れ替える
      </Button>
    </div>
  );
}
