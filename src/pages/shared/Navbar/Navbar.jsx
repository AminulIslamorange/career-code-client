import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext/AuthContext";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)


  const navMenu = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/'>Home</NavLink></li>
    {user && <><li><NavLink to='/myapplication'>MY Application</NavLink></li>
    </>}
     {user && <><li><NavLink to='/addJOb'>Add Job</NavLink></li>
    </>}
  </>


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })


  }






  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navMenu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {/* <img src=''alt="" /> */}
          <h3 className='text-3xl'>HireHub</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ? <><button onClick={handleLogOut}>LogOut</button></> : <>  <Link className='mr-4' to='/register'>Register</Link>
            <Link to='/signIn' className="btn">Sign In</Link></>
        }


      </div>
    </div>
  );
};

export default Navbar;