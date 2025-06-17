import './index.css'

import { Outlet } from 'react-router-dom';

import Header from './Header.jsx';


export default function App() {
    return (
        <>
            {/* will create header later */}
            <Header></Header>
            {/* Renders each page */}
            <Outlet />
        </>
    )
}