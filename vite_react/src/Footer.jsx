import './index.css'

import { Link } from 'react-router-dom';


export default function Footer({children, to}) {
  return (
    <>
      <div>
        <Link to={to}>{children}</Link>
      </div>
    </>
  )
}