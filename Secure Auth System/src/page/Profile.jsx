import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/Context";

const Profile = () => {
  const { user, loading } = useContext(UserContext);

  useEffect(() => {}, []);

  if (loading) return <p className="text-center mt-20">Loading user data...</p>;
  if (!user) return <p className="text-center mt-20">No user logged in.</p>;

  return (
    <div className="w-full h-full px-[15%]">
      <div className="my-5 p-5 bg-black/30 rounded-2xl flex gap-x-10">
        <div className="w-24 h-24 bg-zinc-800 rounded-full overflow-hidden">
          <img
            src={user.picture}
            className="w-full h-full scale-110 object-center"
            alt="avatar"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-zinc-500">
            {user.fname || "Full Name"}
          </h1>
          <p className="px-4 text-sm text-zinc-300">
            <i className="bi bi-envelope-at-fill mr-4"></i>
            {user.email || "example@gmail.com"}
          </p>
          <p className="px-4 text-sm text-zinc-300">
            <i className="bi bi-telephone-fill mr-4"></i>
            {user.phone || "+91 00000 00000"}
          </p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="my-5 p-5 bg-black/30 rounded-2xl">
        <div className="capitalize border-b border-gray-700">
          <p className="pb-5 text-xl font-semibold">Personal Information</p>
        </div>
        <div className="px-10 grid grid-cols-2">
          <div>
            <div className="mt-5">
              <span className="font-semibold">Full Name</span>
              <p className="text-gray-500">
                {(user.fname || "") + " " + (user.lname || "")}
              </p>
            </div>
            <div className="mt-5">
              <span className="font-semibold">Bio</span>
              <p className="text-gray-500">{user.bio || "No bio provided."}</p>
            </div>
            <div className="mt-5">
              <span className="font-semibold">Location</span>
              <p className="text-gray-500">{user.location || "Unknown"}</p>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <span className="font-semibold">Username</span>
              <p className="text-gray-500">{user.username || "username"}</p>
            </div>
            <div className="mt-5">
              <span className="font-semibold">Email</span>
              <p className="text-gray-500">{user.email}</p>
            </div>
            <div className="mt-5">
              <span className="font-semibold">Gender</span>
              <p className="text-gray-500">{user.gender || "N/A"}</p>
            </div>
            <div className="mt-5">
              <span className="font-semibold">Phone Number</span>
              <p className="text-gray-500">{user.phone || "Not provided"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
