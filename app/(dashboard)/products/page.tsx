import { DataTable } from "@/components/ui/data-table";

import { getProducts } from "@/app/_data-access/product/get-products";
import { productTableColumns } from "./_components/table-column";
import AddProductButton from "./_components/add-product-button";

const ProductsPage = async () => {
  {
    /**
    Ex. com rota:

    const response = await fetch("http://localhost:3000/api/products");
    const products = response.json();
  */
  }

  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 rounded-xl bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-sm font-semibold text-green-600">Produtos</span>
          <h2 className="text-2xl font-semibold">Gestão de produtos</h2>
        </div>
        <AddProductButton />
      </div>

      <div className="">
        <DataTable
          columns={productTableColumns}
          data={JSON.parse(JSON.stringify(products))}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
