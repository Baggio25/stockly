import LayoutList from "../_components/layout-list";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await db.product.findMany({});
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
