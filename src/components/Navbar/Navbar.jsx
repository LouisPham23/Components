import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClicked = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-indigo-100">
      <div className="bg-indigo-100 flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <MdAccountBalance className="h-8 w-8 text-gray-800 block" />
          <h1 className="text-indigo-700 font-bold">Bank On</h1>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-800 hover:text-white focus:text-white focus:outline-none"
          >
            {!isOpen && (
              <IoIosMenu className="h-8 w-8" onClick={() => handleClicked()} />
            )}
            {isOpen && (
              <AiOutlineClose
                className="h-8 w-8"
                onClick={() => handleClicked()}
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} px-5 pt-2 pb-4 sm:block"`}
      >
        <Link
          className="block text-gray-800 text-center hover:bg-gray-400 rounded"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block text-gray-800 text-center hover:bg-gray-400 rounded"
          to="/"
        >
          Balance
        </Link>
        <Link
          className="block text-gray-800 text-center hover:bg-gray-400 rounded"
          to="/"
        >
          Credit Cards
        </Link>
        <Link
          className="block text-gray-800 text-center hover:bg-gray-400 rounded"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="block text-gray-800 text-center hover:bg-gray-400 rounded"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
