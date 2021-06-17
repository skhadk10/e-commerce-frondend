import React from "react";
import DefaultLayout from "../../component/layout/DafaultLayout";
import ProfileList from "../../component/profile-list/ProfileList";
const Profile = () => {
  return (
    <DefaultLayout>
      <div className="profile-page">
        <ProfileList />
      </div>
    </DefaultLayout>
  );
};

export default Profile;
