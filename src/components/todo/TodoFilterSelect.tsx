import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../src/components/ui/select"
import { useAppDispatch } from "../../redux/hook";
import { filterByPriority } from "../../redux/features/todoSlice";


export const TodoFilterSelect = () => {
    const dispatch=useAppDispatch()
    const handleFilter=(value:string)=>{
        dispatch(filterByPriority(value))
    }
  return (
    <Select onValueChange={(value)=>handleFilter(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
