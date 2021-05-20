import React from "react";
import DefaultLayout from "../../component/layout/DafaultLayout";

import ViewProductListTable from "../../component/viewproductListTable/viewProductListTable";
const ViewProductDisplay = () => {
  return (
    <DefaultLayout>
      hello there this is product display
      <ViewProductListTable />
    </DefaultLayout>
  );
};

export default ViewProductDisplay;
