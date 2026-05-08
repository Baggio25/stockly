import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";

import { PlusIcon } from "lucide-react";
import { productTableColumns } from "./_components/table-column";
import { getProducts } from "@/app/_data-access/product/get-products";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 rounded-xl bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-sm font-semibold text-green-600">Produtos</span>
          <h2 className="text-2xl font-semibold">Gestão de produtos</h2>
        </div>

        <Button className="gap-2 bg-green-700">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </div>

      <div className="">
        <DataTable columns={productTableColumns} data={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
