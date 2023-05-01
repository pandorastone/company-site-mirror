import { Link } from "react-router-dom";

export default function ProductError(){
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="text-center text-lg">
        <p>Product not found</p>
        <Link to="/collections">Return to collections</Link>
      </div>
    </div>
  )
}