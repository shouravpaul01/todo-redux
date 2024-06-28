import { FormEvent, useEffect, useState } from "react";
import { Input } from "../../src/components/ui/input"
import { Label } from "../../src/components/ui/label"
import { Button } from "../ui/button"
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addtodo, updateTodo } from "../../redux/features/todoSlice";
import { TTodo } from "./todo.instance";

type TAddEditProps={
    editData?:TTodo | null
}
export const AddEditForm = ({editData}:TAddEditProps) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const dispatch = useAppDispatch();
    const {todos}=useAppSelector((state)=>state.todos)

    useEffect(()=>{
        if (editData) {
            setId(editData.id)
            setTitle(editData.title)
            setdescription(editData.description)
        }
    },[editData])
    const handleAddTask = (e: FormEvent) => {
      e.preventDefault();
      const todoId=todos?.length>0?`todo-${todos?.length+1}`:'todo-1'
      const taskDetails = {
        id:todoId,
        title: title,
        description: description,
      };
      dispatch(addtodo(taskDetails));
    };
    const handleUpdateTodo = (e: FormEvent) => {
        e.preventDefault();
        const taskDetails = {
            id:id,
            title: title,
            description: description,
          };
          console.log(taskDetails)
          dispatch(updateTodo(taskDetails));
      };
  return (
    <form onSubmit={editData?handleUpdateTodo:handleAddTask}>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Title
        </Label>
        <Input
          id="title"
          defaultValue={title}
          onBlur={(e) => setTitle(e.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">
          Description
        </Label>
        <Input
          id="description"
          defaultValue={description}
          onBlur={(e) => setdescription(e.target.value)}
          className="col-span-3"
        />
      </div>
    </div>
    
      <Button type="submit">{editData?'Update':'Add'}</Button>
    
  </form>
  )
}
