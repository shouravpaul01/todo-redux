import { FormEvent, useEffect, useState } from "react";
import { Input } from "../../src/components/ui/input";
import { Label } from "../../src/components/ui/label";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addtodo, updateTodo } from "../../redux/features/todoSlice";
import { TTodo } from "./todo.instance";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../src/components/ui/radio-group";

type TAddEditProps = {
  editData?: TTodo | null;
};
export const AddEditForm = ({ editData }: TAddEditProps) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);
console.log(priority)
  useEffect(() => {
    if (editData) {
      setId(editData.id);
      setTitle(editData.title);
      setdescription(editData.description);
      setPriority(editData.priority);
      console.log(editData.priority,'ee')
     
      
    }
  }, [editData]);
  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    const todoId = todos?.length > 0 ? `todo-${todos?.length + 1}` : "todo-1";
    const taskDetails = {
      id: todoId,
      title: title,
      description: description,
      priority:priority
    };
    dispatch(addtodo(taskDetails));
  };
  const handleUpdateTodo = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails = {
      id: id,
      title: title,
      description: description,
      priority:priority
    };
    console.log(taskDetails);
    dispatch(updateTodo(taskDetails));
  };
  return (
    <form onSubmit={editData ? handleUpdateTodo : handleAddTask}>
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
        <div>
          <Label htmlFor="description" className="">
            Priority
          </Label>

          <RadioGroup value={priority} onValueChange={(value) => setPriority(value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem  value="high" id="high" />
              <Label htmlFor="r1">High</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium"  />
              <Label htmlFor="r2">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="low" />
              <Label htmlFor="r3">Low</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Button type="submit" className="bg-primary-gradient">
        {editData ? "Update" : "Add"}
      </Button>
    </form>
  );
};
