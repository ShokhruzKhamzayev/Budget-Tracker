import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"

type PageProps = {
    button: React.ReactNode,
    children: React.ReactNode
}

export default function DialogReusable({button, children}: PageProps) {
  return (
    <Dialog>
      <DialogTrigger>
        {button}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {/* <DialogHeader>
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
        </DialogFooter> */}
        {children}
      </DialogContent>
    </Dialog>
  )
}
