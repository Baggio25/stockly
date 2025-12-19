import LayoutList from "../_components/layout-list";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";

import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <LayoutList
      tituloSpan="Produtos"
      tituloH2="Gestão de produtos"
      labelBotao="Novo produto"
    >
      <DataTable columns={productTableColumns} data={products} />
    </LayoutList>
  );
};

export default ProductsPage;
