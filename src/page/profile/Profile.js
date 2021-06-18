import React from "react";
import UserProfile from "../../component/userprofile/UserProfile";
import DefaultLayout from "../../component/layout/DafaultLayout";
const Profile = () => {
  return (
    <DefaultLayout>
      <div className="profile-page">
        <UserProfile />
      </div>
    </DefaultLayout>
  );
};

export default Profile;
