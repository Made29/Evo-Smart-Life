import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ProductListPage from './view/ProductListPage';
import OrderListPage from './view/OrderListPage';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/order-list" element={<OrderListPage />} />
      </Routes>
    </div>
  );
}

export default App;
