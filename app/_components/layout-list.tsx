import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

interface ILayoutList {
  tituloSpan: string;
  tituloH2: string;
  labelBotao: string;
  children: React.ReactNode;
}

const LayoutList = ({
  tituloSpan,
  tituloH2,
  labelBotao,
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
        <Button className="gap-2 bg-green-600 hover:bg-slate-500">
          <PlusIcon size={20} />
          {labelBotao}
        </Button>
      </div>

      {children}
    </div>
  );
};

export default LayoutList;
