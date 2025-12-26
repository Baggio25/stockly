import { getProducts } from "../_data-access/product/get-products";
import ProductPageClient from "./_components/product-page-client";

const ProductsPage = async () => {
  const products = await getProducts();

  return <ProductPageClient products={products} />;
};

export default ProductsPage;
