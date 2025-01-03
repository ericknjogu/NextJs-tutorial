"use client";

import { addNewUserForm, addNewUserFormInitialState } from "@/app/utils";
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
import { addNewUser } from "@/app/actions";
import { useRouter } from "next/router";

function AddNewUser() {
  const [openPopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUser() {
    const result = await addNewUser(addNewUserFormData, "/user-management");

    console.log(result);

    setOpenPopup(false);

    setAddNewUserFormData(addNewUserFormInitialState);
  }

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add User</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewUserFormData(addNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add A New User</DialogTitle>
          </DialogHeader>
          <form
            action={handleAddNewUser}
            className="grid gap-4 py-4"
          >
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
                    name={item.name}
                    className="col-span-3"
                    placeholder={item.placeholder}
                    type={item.type}
                    value={addNewUserFormData[item.name]}
                    onChange={(e) =>
                      setAddNewUserFormData({
                        ...addNewUserFormData,
                        [item.name]: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            ))}
            <DialogFooter>
              <Button
                className="disabled:opacity-45"
                disabled={!handleSaveButtonValid()}
                type="submit"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
