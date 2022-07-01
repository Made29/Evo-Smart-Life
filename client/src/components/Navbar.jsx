import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="h-[10%] flex">
            <div className=" w-[20%] h-[100%]">
                <h1 className=" h-full flex justify-center items-center text-white text-xl">
                    Evo Smart Life Store
                </h1>
            </div>
            <div className="w-[80%] text-right mr-5">
                <Link to={"/"}>
                    <button className="h-full w-32 hover:bg-blue-500 text-white font-bold">
                        Product List
                    </button>
                </Link>
                <Link to={"/order-list"}>
                    <button className="h-full w-32 hover:bg-blue-500 text-white font-bold">
                        Order List
                    </button>
                </Link>
            </div>
        </div>
    );
}
