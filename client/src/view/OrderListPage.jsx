import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllOrders } from "../store/actions/orderAction";

export default function OrderListPage() {
    const { orders } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllOrders());
    }, [dispatch]);

    let taxt = 0;
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        console.log("orders[i]: ", orders[i]);
        taxt += orders[i].salesTaxes;
        console.log("taxt: ", taxt);
        total += orders[i].price;
    }

    return (
        <div className="h-screen bg-gradient-to-r from-blue-800 to-blue-600">
            <Navbar />

            <div className="h-[90%] flex justify-center">
                <div className="bg-white h-full w-[35%] rounded-xl p-2 shadow-2xl">
                    <h1 className="font-bold text-xl">Order List</h1>
                    <table className="w-full table-auto">
                        <thead>
                            <tr>
                                <th>qty</th>
                                <th>name</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((el) => (
                                <tr>
                                    <td>1</td>
                                    <td className="text-left">{el.name}</td>
                                    <td>{parseFloat(el.price).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pt-5">
                        <div className="flex space-x-5 ">
                            <h1 className="text-left w-[50%]">Sales Taxet:</h1>
                            <h1 className="text-right font-bold w-[50%]">{taxt.toFixed(2)}</h1>
                        </div>
                        <div className="flex space-x-5 ">
                            <h1 className="text-left w-[50%]">Total:</h1>
                            <h1 className="text-right font-bold w-[50%]">{total.toFixed(2)}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
