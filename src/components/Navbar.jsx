import React, { useContext, useEffect, useRef, useState } from "react";

import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";
import { toast } from "react-toastify";

const Navbar = () => {
  // const { user } = useUser();
  const { user } = useContext(UserContext);

  const [ispop, setIspop] = useState(false);
  const popRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popRef.current && !popRef.current.contains(e.target)) {
        setIspop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-16 bg-violet-600 px-[15%] flex items-center justify-between">
      <div className="text-2xl font-semibold">
        <Link to={"/"}>Secure Auth System</Link>
      </div>
      <div className="flex items-center gap-x-20 relative">
        <div>
          <ul className="flex gap-x-10 capitalize">
            <li className="cursor-pointer :hover:text-black">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
        {!user ? (
          <Link to={"/auth/login"}>
            <span className="px-5 py-2 border rounded-xl hover:bg-white hover:text-violet-500 ">
              Get Start
            </span>
          </Link>
        ) : (
          <div
            className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden cursor-pointer"
            onClick={() => setIspop((prev) => !prev)}
          >
            <img
              src={user?.picture}
              alt=""
              className="w-full h-full object-fill"
            />
          </div>
        )}
        {ispop && <LogoutPop popRef={popRef} />}
      </div>
    </div>
  );
};

const LogoutPop = ({ popRef }) => {
  const navigate = useNavigate();
  <Navigate to={"/"} />;
  const { setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      const res = await axios.post(
        "/api/v1/auth/logout",
        {},
        { withCredentials: true }
      );
      if (res.data?.code == "LOGOUT_SUCCESSFULLY") {
        setUser(null);
        // alert("Logout successfully");
        navigate("/auth/login");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(`Error logout api :: ${err.message}`);
    }
  };

  return (
    <div
      ref={popRef}
      className="w-48 px-2 py-2 absolute top-14 right-0 text-zinc-500  border border-gray-700 rounded-md bg-gray-900 transition-all duration-300 ease-in-out"
    >
      <ul>
        <Link to="/profile">
          <li className="px-5 py-1 hover:bg-gray-800 rounded-md">
            <i className="bi bi-person-circle mr-3 "></i>Profile
          </li>
        </Link>
        <li className="px-5 py-1 hover:bg-gray-800 rounded-md">
          <i className="bi bi-pencil-square mr-3 "></i>Edit Profile
        </li>
        <li
          className="px-5 py-1 hover:bg-gray-800 rounded-md"
          onClick={() => logout()}
        >
          <i className="bi bi-box-arrow-right mr-3 "></i>Logout
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
