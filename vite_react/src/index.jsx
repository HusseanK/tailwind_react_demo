import './index.css'

import { Link, Outlet } from 'react-router-dom';

import Footer from './Footer.jsx';


export default function App() {
    return (
        <>
            {/* will create header later */}
            <div className='nav'>
                <h1> My Page </h1>
            </div>

            {/* Renders each page */}
            <Outlet />
            <Footer><Link to='/Default'>Apps</Link><Link to='/'>Home</Link></Footer>
        </>
    )
}