import './index.css'

import { Link } from 'react-router-dom';


export function Link_other({ children, to }) {
  return (
    <>
      <div >
        <Link to={to}>{children}</Link>
      </div>
    </>
  )
}

export function Navbar(){
  return (
    <>
      <nav className="nav" >
        <Link to='/Default'> Apps </Link>
        <Link to='/'> Home </Link>
      </nav>
    </>
  )
}


export default function Header() {
  return (
    <>
      <div className='flex' >

        <div className='header'>
          <h1 className='text-6xl' > React + Tailwind </h1>
        </div>
        <Navbar />
        
      </div>
    </>
  )
}


