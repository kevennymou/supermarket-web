import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import store from "./store";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PrivateRoute from "./componentes/PrivateRoute";
import AdminRoute from "./componentes/AdminRoute";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrder from "./screens/PlaceOrder";
import Order from "./screens/Order";
import Profile from "./screens/Profile";
import OrderList from "./screens/admin/OrderList";
import ProductList from "./screens/admin/ProductList";
import ProductEditor from "./screens/admin/ProductEditor";
import UserList from "./screens/admin/UserList";
import UserEdit from "./screens/admin/UserEdit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        {/* mudei isso para minusculo so pra testar */}
        <Route path="/order/:id" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderList" element={<OrderList />} />
        <Route path="/admin/productList" element={<ProductList />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditor />} />
        <Route path="/admin/userlist" element={<UserList />} />
        <Route path="/admin/user/:id/edit" element={<UserEdit />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
