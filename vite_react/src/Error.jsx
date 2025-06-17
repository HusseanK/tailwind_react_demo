import { Link } from "react-router-dom";

export default function NotFoundPage() {

    return <div className="flex flex-col gap-2 text-2xl">404 Not Found
    <Link to='/'>Home</Link>
    </div>;
};