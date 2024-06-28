import { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../src/components/ui/dialog";


type TContainerProps = {
    children: ReactNode;
    triggerBtn:string | ReactNode;
    contentTitle:string;
  };
export const Modal = ({children,triggerBtn,contentTitle}:TContainerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerBtn}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{contentTitle}</DialogTitle>
        </DialogHeader>

       {children}
      </DialogContent>
    </Dialog>
  )
}
