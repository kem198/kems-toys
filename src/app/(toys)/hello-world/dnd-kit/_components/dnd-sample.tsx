"use client";

import { Button } from "@/components/ui/button";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

type DroppableProps = {
  children: ReactNode;
};

function Droppable({ children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    backgroundColor: isOver ? "yellow" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex h-20 w-80 items-center justify-center bg-zinc-200"
    >
      {children}
    </div>
  );
}

type DraggableProps = {
  children: ReactNode;
};

function Draggable({ children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="h-10 w-40"
    >
      {children}
    </Button>
  );
}

export function DndSample() {
  return (
    <DndContext>
      <div className="flex w-40 flex-col gap-4">
        <Droppable>Droppable</Droppable>
        <Draggable>Draggable</Draggable>
      </div>
    </DndContext>
  );
}
