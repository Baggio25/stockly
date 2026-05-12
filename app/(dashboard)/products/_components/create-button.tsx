"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { PlusIcon } from "lucide-react";

import UpsertProductDialogContent from "./upsert-dialog-content";
import { useState } from "react";

const CreateProductButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-green-700">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </DialogTrigger>
      <UpsertProductDialogContent onSuccess={() => setDialogIsOpen(false)} />
    </Dialog>
  );
};

export default CreateProductButton;
