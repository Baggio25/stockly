"use client";

import { Badge } from "@/components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

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
];
