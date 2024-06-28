
import { removeTodo, toggleComplete } from "../../redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../src/components/ui/table";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/button";
import { AddEditForm } from "./AddEditForm";
import { TodoFilterDropdown } from "./TodoFilterDropdown";
import { useState } from "react";
import { TTodo } from "./todo.instance";

export const TodoContainer = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);

  const [editData, setEditData] = useState<TTodo | null>(null);

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };
  const handleGetTodoById = (id: string) => {
    const findTodo= todos.find((todo) => todo.id == id);
    setEditData(findTodo || null);
  };
  return (
    <div className="p-7">
      <div className="flex justify-between ">
        <Modal triggerBtn={<Button>Add Task</Button>} contentTitle="Add Task">
          <AddEditForm />
        </Modal>
        <TodoFilterDropdown />
      </div>
      <Table className="my-4">
        {todos.length <= 0 && (
          <TableCaption className="text-base">Task not found!.</TableCaption>
        )}
        <TableHeader>
          <TableRow className="bg-gray-200">
            <TableHead className="w-[100px]"></TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos?.map((todo, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <input
                  type="checkbox"
                  name="complete"
                  id="complete"
                  value={todo.id}
                  onChange={(e) => handleComplete(e.target.value)}
                />
              </TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.description}</TableCell>
              <TableCell>
                <div>
                  {todo.isCompleted ? (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full">
                      Done
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full">
                      Pending
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell className="flex gap-2">
                <Modal
                  triggerBtn={
                    <Button
                      className="bg-blue-700 px-2"
                      onClick={() => handleGetTodoById(todo.id)}
                    >
                      {" "}
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Button>
                  }
                  contentTitle="Edit Task"
                >
                  <AddEditForm  editData={editData}/>
                </Modal>

                <Button
                  className="bg-red-500 px-2"
                  onClick={() => handleDelete(todo.id)}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
