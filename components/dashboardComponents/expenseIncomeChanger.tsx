import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import DialogReusable from "./dialogReusable";

export default function ExpenseIncomeChanger() {
  return (
    <div className="flex flex-col gap-[15px] sticky bottom-0 w-fit ml-auto pb-[30px] pr-[30px]">
      <DialogReusable
        button={
          <div className="bg-green-400 w-[60px] h-[60px] font-semibold text-[25px] rounded-full flex justify-center items-center">
            +
          </div>
        }
      >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogReusable>
      <DialogReusable
        button={
          <div className="bg-red-400 w-[60px] h-[60px] font-semibold text-[25px] rounded-full flex justify-center items-center">
            -
          </div>
        }
      >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogReusable>
    </div>
  );
}
