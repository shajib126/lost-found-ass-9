import ProfileQuery from '@/utils/ProfileQuery'
import Link from 'next/link'


const Navbar = () => {
  
  return (
    <div className="navbar bg-[#1010101A]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>About Us</a>
          
        </li>
        <li>
          <Link href='/found-items'>Found Items</Link>
          <li><Link href='/lost-items'>Lost Items</Link></li>
        </li>
      </ul>
    </div>
    <Link href='/' className="btn btn-ghost text-xl">Lost&Found</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
       <a href="">About Us</a>
      </li>
      <li><Link href='/found-items'>Found Items</Link></li>
      <li><Link href='/lost-items'>Lost Items</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <ProfileQuery/>
  </div>
</div>
  )
}

export default Navbar