import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../../src/components/ui/dropdown-menu"
import { Button } from "../ui/button"

export const TodoFilterDropdown = () => {
    const [position, setPosition] = useState("bottom")
  return (
    <div><DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" className="bg-violet-700 hover:bg-violet-700 " >Filter</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu></div>
  )
}
