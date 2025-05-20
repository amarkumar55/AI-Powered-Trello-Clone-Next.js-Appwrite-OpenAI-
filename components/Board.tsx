"use client";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import { Client } from "appwrite";
import { useEffect } from "react";
import { useBoardStore } from "@/store/BoardStore";
import { number } from "prop-types";
import { start } from "repl";

export default function Board() {
  const [board, getBoard, setBoardState, updateTodoInDB] = useBoardStore(
    (state) => [
      state.board,
      state.getBoard,
      state.setBoardState,
      state.updateTodoInDB,
    ]
  );

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;
    if (!destination) return;
  
    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoardState({ ...board, columns: rearrangedColumns });
      return;
    }
  
    const startCol = board.columns.get(source.droppableId);
    const finishCol = board.columns.get(destination.droppableId);
    if (!startCol || !finishCol) return;
  
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
  
    const newStartTodos = Array.from(startCol.todos);
    const [movedTodo] = newStartTodos.splice(source.index, 1);
  
    if (startCol === finishCol) {
      newStartTodos.splice(destination.index, 0, movedTodo);
      const newCol = { ...startCol, todos: newStartTodos };
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newCol);
      setBoardState({ ...board, columns: newColumns });
    } else {
      const newFinishTodos = Array.from(finishCol.todos);
      newFinishTodos.splice(destination.index, 0, movedTodo);
  
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, { ...startCol, todos: newStartTodos });
      newColumns.set(finishCol.id, { ...finishCol, todos: newFinishTodos });
  
      updateTodoInDB(movedTodo, finishCol.id);
      setBoardState({ ...board, columns: newColumns });
    }
  };
  
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-4  gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
