import React from "react";
import CheckOut from "../../component/checkout/CheckOut";
import DefaultLayout from "../../component/layout/DafaultLayout";
const Profile = () => {
  return (
    <DefaultLayout>
      <div className="profile-page">
        {" "}
        <CheckOut />{" "}
      </div>
    </DefaultLayout>
  );
};

export default Profile;
