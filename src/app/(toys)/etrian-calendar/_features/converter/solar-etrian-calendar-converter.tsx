"use client";

import {
  etrianDayOptionValues,
  etrianMonthOptionValues,
} from "@/app/(toys)/etrian-calendar/_common/constants/date";
import { toEtrianDate } from "@/app/(toys)/etrian-calendar/_common/utils/etrian-utils";
import { UNSET_SELECT_VALUE } from "@/app/(toys)/etrian-calendar/_features/registry/schemas/registry-form-schema";
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
import { format } from "date-fns";
import { ArrowRightLeft, ChevronDownIcon, Sprout, Sun } from "lucide-react";
import React, { useState } from "react";

export function ToEtrianCalendarConverter() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

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
              selected={date}
              captionLayout="dropdown"
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
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <ItemContent className="flex flex-row flex-wrap gap-4">
      <div className="flex flex-1 flex-col gap-2">
        <Label className="flex items-center gap-1">
          <Sprout size={16} />
          世界樹暦
        </Label>
        <div className="flex gap-2">
          <Select value={UNSET_SELECT_VALUE}>
            <SelectTrigger id="etrian-birth-month">
              <SelectValue placeholder={etrianMonthOptionValues[0]} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={UNSET_SELECT_VALUE}>
                {UNSET_SELECT_VALUE}
              </SelectItem>
              {etrianMonthOptionValues.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={UNSET_SELECT_VALUE}>
            <SelectTrigger id="etrian-birth-day">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={UNSET_SELECT_VALUE}>
                {UNSET_SELECT_VALUE}
              </SelectItem>
              {etrianDayOptionValues.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="date" className="flex items-center gap-1">
          <Sun size={16} />
          太陽暦
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

export function SolarEtrianCalendarConverter() {
  const [isShowToEtrian, setIsShowToEtrian] = useState(true);
  return (
    <div className="flex flex-col items-center gap-2">
      <Item variant="outline" className="w-full">
        {isShowToEtrian ? (
          <ToEtrianCalendarConverter />
        ) : (
          <ToSolarCalendarConverter />
        )}
      </Item>

      <Button
        variant="secondary"
        size="icon"
        className="rounded-full"
        onClick={() => {
          setIsShowToEtrian(!isShowToEtrian);
        }}
      >
        <ArrowRightLeft />
      </Button>
    </div>
  );
}
