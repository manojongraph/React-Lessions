import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import About from "./Components/About";
import Admin from "./Components/Admin";
import FeaturedProducts from "./Components/FeaturedProducts";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewProducts from "./Components/NewProducts";
import NoMatch from "./Components/NoMatch";
import OrderSummery from "./Components/OrderSummery";
import Products from "./Components/Products";
import Profile from "./Components/Profile";
import Users from "./Components/Users";
import UserDetails from "./UserDetails";
import { AuthProvider } from "./Components/auth";
import Login from "./Login";
import RequiredAuth from "./Components/RequiredAuth";
const LazyAbout = React.lazy(() => import("./Components/About"));
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading ...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummery />}></Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />}></Route>
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="profile" element={<RequiredAuth><Profile /></RequiredAuth>}></Route>
        <Route path="login" element={<Login />}></Route>


      </Routes>
    </AuthProvider>
  );
}

export default App;
// if you want to render a child on parent url use index
// react routes firstly search for exact route then search for dynaic route
