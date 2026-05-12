"use client";

import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Product } from "@prisma/client";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
  ClipboardCopyIcon,
  EditIcon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";
import DeleteProductDialogContent from "./delete-product-dialog-content";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  } else {
    return "Esgotado";
  }
};

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right tabular-nums">Valor unitário</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("price")}</div>
    ),
  },
  {
    accessorKey: "stock",
    header: () => <div className="text-right">Estoque</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("stock")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;
      const label = getStatusLabel(product.status);

      return (
        <Badge
          variant={label === "Em estoque" ? "default" : "destructive"}
          className={`${label === "Em estoque" ? "bg-[#00A180]" : ""}`}
        >
          {label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"}>
                <MoreHorizontalIcon size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer gap-1.5"
                onClick={() => navigator.clipboard.writeText(product.id)}
              >
                <ClipboardCopyIcon size={16} />
                Copiar ID
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer gap-1.5"
                onClick={() => {}}
              >
                <EditIcon size={16} />
                Editar
              </DropdownMenuItem>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem className="cursor-pointer gap-1.5">
                  <TrashIcon size={16} />
                  Excluir
                </DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <DeleteProductDialogContent productId={product.id} />
        </AlertDialog>
      );
    },
  },
];
