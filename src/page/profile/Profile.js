import React from 'react'
import DefaultLayout from '../../component/layout/DafaultLayout'
import UserProfile from '../../component/userprofile/UserProfile'
const Profile = () => {
    return (
        <DefaultLayout>
      <div className="profile-page"> <UserProfile/> </div>
        </DefaultLayout>
    )
}

export default Profile
