"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon, Sprout, Sun } from "lucide-react";
import React from "react";
import { toEtrianDate } from "../_utils/etrian-utils";

function EtrianCalendar() {
  const today = new Date();
  const todaysEtrianDate = toEtrianDate(today);

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-2">
        <p className="mt-0">本日は</p>
        <p className="mt-0">
          <span className="text-xs text-muted-foreground">
            {todaysEtrianDate.month.kana}
          </span>
          <br />
          <span className="font-bold">{`${todaysEtrianDate.month.name} ${todaysEtrianDate.day && `${todaysEtrianDate.day} 日`}`}</span>
        </p>
        <p className="mt-0">です！</p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="date" className="flex gap-1">
            <Sun size={16} />
            太陽暦
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-40 justify-between font-normal"
              >
                {date ? format(date, "yyyy-MM-dd") : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
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
        {/* <ArrowRight size={16} /> */}
        <div className="flex flex-col gap-2">
          <Label className="flex gap-1">
            <Sprout size={16} />
            世界樹暦
          </Label>
          <div>
            <Button
              variant="secondary"
              className="w-40 cursor-default select-text justify-between font-normal"
            >
              {date ? toEtrianDate(date).month.name : ""}{" "}
              {date && toEtrianDate(date).day
                ? `${toEtrianDate(date).day} 日`
                : ""}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { EtrianCalendar };
