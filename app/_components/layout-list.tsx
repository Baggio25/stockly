import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ILayoutList {
  tituloSpan: string;
  tituloH2: string;
  labelBotao: string;
  dialogTitle: string;
  dialogDescription?: string;
  dialogContent: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const LayoutList = ({
  tituloSpan,
  tituloH2,
  labelBotao,
  dialogTitle,
  dialogDescription = "Insira as informações de cadastro",
  dialogContent,
  open,
  onOpenChange,
  children,
}: ILayoutList) => {
  return (
    <div className="mx-4 my-4 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-green-600">
            {tituloSpan}
          </span>
          <h2 className="text-xl font-semibold text-slate-500">{tituloH2}</h2>
        </div>
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-green-600 hover:bg-slate-500">
              <PlusIcon size={20} />
              {labelBotao}
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{dialogTitle}</DialogTitle>
              <DialogDescription>{dialogDescription}</DialogDescription>
            </DialogHeader>
            {dialogContent}
          </DialogContent>
        </Dialog>
      </div>

      {children}
    </div>
  );
};

export default LayoutList;
