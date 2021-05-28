import React from "react";
import DefaultLayout from "../../component/layout/DafaultLayout.js";
import ProductListTable from "../../component/productListTable/ProductListTable";
const ProductDisplay = () => {
  return (
    <DefaultLayout>
      hello there this is product display
      <ProductListTable />
    </DefaultLayout>
  );
};

export default ProductDisplay;
