import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
//Ecommerce Pages
import AddProduct from "../pages/Ecommerce/AddProduct";
import Products from "../pages/Ecommerce/Products";

const authProtectedRoutes = [

	{ path: "/dashboard", component: Dashboard },
	//Ecommerce
	{ path: "/ecommerce-add-product", component: AddProduct },
	{ path: "/ecommerce-products", component: Products },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
	{ path: "/auth-lock-screen", component: AuthLockScreen },
];

export { authProtectedRoutes, publicRoutes };