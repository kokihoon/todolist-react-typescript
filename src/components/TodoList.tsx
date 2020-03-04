import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemDataParams } from "../store/modules/todos";

interface Props {
  input: string;
  todoItems: TodoItemDataParams[];
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onEdit(id: number): void;
  onModify(id:number, e: React.ChangeEvent<HTMLInputElement>): void;

}

const TodoList: React.SFC<Props> = ({
    input,
    todoItems,
    onCreate,
    onRemove,
    onToggle,
    onChange,
    onEdit,
    onModify
  }) => {
    const todoItemList = todoItems.map(todo => 
        todo ? (
      <TodoItem
        key={todo.id}
        key1={todo.id}
        done={todo.done}
        edit={todo.edit}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        onEdit={()=> onEdit(todo.id)}
        onModify={onModify}
        text={todo.text}

      />
    ) : null);
    return (
      <div>
        <form onSubmit={(e: React.FormEvent<HTMLElement>) => {
            e.preventDefault();
            onCreate();
        }}>
          <input className="form-input padding" onChange={onChange} value={input} placeholder="무엇을 해야 하나요?"/>
        </form>
        <ul>{todoItemList}</ul>

      </div>
    );
  };
  
  export default TodoList;