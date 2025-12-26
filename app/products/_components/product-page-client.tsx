"use client";

import LayoutList from "@/app/_components/layout-list";
import { useState } from "react";

import { DataTable } from "@/app/_components/ui/data-table";
import { productTableColumns } from "./table-columns";
import { Product } from "@prisma/client";
import { ProductForm } from "./product-form";

interface ProductsPageClientProps {
  products: Product[];
}

export default function ProductsPageClient({
  products,
}: ProductsPageClientProps) {
  const [open, setOpen] = useState(false);

  return (
    <LayoutList
      tituloSpan="Produtos"
      tituloH2="Gestão de produtos"
      labelBotao="Novo produto"
      dialogTitle="Cadastro de produto"
      open={open}
      onOpenChange={setOpen}
      dialogContent={<ProductForm onSuccess={() => setOpen(false)} />}
    >
      <DataTable columns={productTableColumns} data={products} />
    </LayoutList>
  );
}
