import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ttt-logo.png";
import { useAuth } from "../../Contexts/Auth Context/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user } = useAuth();
  console.log(user);
  const manus = (
    <>
      <li className='font-semibold'>
        <Link to='/'>Home</Link>
      </li>
      <li className='font-semibold'>
        <Link to='/services'>Service</Link>
      </li>
      <li className='font-semibold'>
        <Link to='/blogs'>Blog</Link>
      </li>
    </>
  );
  return (
    <div className='navbar bg-neutral sticky top-0 z-50'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            {manus}
          </ul>
        </div>
        <Link to='/' className='w-40 btn btn-ghost normal-case'>
          <img src={logo} alt='' />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>{manus}</ul>
      </div>
      <div className='navbar-end'>
        {user?.uid ? (
          <div className='avatar md:w-11  mx-5 w-8 '>
            {user?.photoURL ? (
              <div className='w-12 rounded'>
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                />
              </div>
            ) : (
              <FaUserAlt />
            )}
          </div>
        ) : (
          <Link
            to='/login'
            className='btn btn-sm bg-[#EB6440] text-white hover:bg-[#F98E54]'>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
