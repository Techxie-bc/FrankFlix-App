import React from "react";
import { UserAuth } from "../context/AuthContext";
// import SavedShows from "../components/SavedShows";

const Account = () => {
  const { user } = UserAuth();

  return (
    <>
      <div className="text-white flex h-screen justify-center items-center">
        <img
          className="h-[100px] object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzI2BZL1iRc5AAFQUivo16GABs0RF9sbWyg&usqp=CAU"
          alt="/"
        />

        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{user?.email}</h1>
        </div>
      </div>
      {/* <SavedShows /> */}
    </>
  );
};

export default Account;
