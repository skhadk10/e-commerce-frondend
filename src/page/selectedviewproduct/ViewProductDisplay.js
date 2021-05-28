import React from "react";
import DafaultLayout from "../../component/layout/DafaultLayout.js";

import ViewProductListTable from "../../component/viewproductListTable/viewProductListTable";
const ViewProductDisplay = () => {
  return (
    <DafaultLayout>
      hello there this is product display
      <ViewProductListTable />
    </DafaultLayout>
  );
};

export default ViewProductDisplay;
