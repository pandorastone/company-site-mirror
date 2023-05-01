import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
            <div className="h-screen flex justify-center items-center">
                <div className="text-center">
                    <div className="text-2xl font-bold mb-4">Error! Page not found</div>
                    <Link to="/">Return to Home Page</Link>
                </div>
            </div>
    )
}