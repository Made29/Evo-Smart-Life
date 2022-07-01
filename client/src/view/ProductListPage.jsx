import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchAllProducts } from "../store/actions/productAction";
import { addProductToOrderList } from "../store/actions/orderAction";

export default function ProductListPage() {
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    const orderProduct = (productId) => {
        dispatch(addProductToOrderList(productId))
    }

    return (
        <div className="h-screen bg-gradient-to-r from-blue-800 to-blue-600">
            <Navbar />

            <div className="h-[90%]">
                <div className="bg-white h-full mx-5 rounded-xl p-2 space-y-1">
                    <h1 className="font-bold text-2xl">Product List</h1>
                    <table className="w-full table-auto">
                        <thead className="border-2">
                            <tr>
                                <th className=" w-10">Name</th>
                                <th className="border-l-2 w-10">Price</th>
                                <th className="border-l-2 w-10">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-2">
                            { products.map((el) => (
                            <tr>
                                <td className="text-left pl-2">{ el.name }</td>
                                <td className="border-l-2">{ el.price }</td>
                                <td className="border-l-2">
                                    <button className="bg-blue-200 p-2 hover:bg-blue-100 active:bg-blue-700 duration-200" onClick={() => orderProduct(el.id)}>
                                        add to order
                                    </button>
                                </td>
                            </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
