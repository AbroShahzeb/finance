import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const AddEditBudget = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Edit Profile</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-row items-center gap-4 justify-between">
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">Name</div>
          <div className="grid grid-cols-4 items-center gap-4">Username</div>
        </div>
        <DialogFooter>
          <button>Save changes</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
