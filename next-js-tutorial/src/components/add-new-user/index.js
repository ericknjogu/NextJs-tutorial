"use client";

import { addNewUserForm } from "@/app/utils";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function AddNewUser() {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add User</Button>
      <Dialog
        open={openPopup}
        onOpenChange={setOpenPopup}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add A New User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {addNewUserForm.map((item, index) => (
              <div
                className="mb-5"
                key={index}
              >
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor={item.name}
                    className="text-right"
                  >
                    {item.label}
                  </Label>
                  <Input
                    id={item.name}
                    className="col-span-3"
                    placeHolder={item.placeholder}
                  />
                </div>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
