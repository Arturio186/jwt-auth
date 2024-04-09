import { Navigate } from "react-router-dom";

import { LOGIN_ROUTE, REGISTER_ROUTE } from "#utils/consts"
import { MAIN_ROUTE } from "#utils/consts"

import IRoute from "#interfaces/IRoute";

import Login from '#pages/Login';
import Register from '#pages/Register';
import Main from '#pages/Main';

export const publicRoutes : Array<IRoute> = [
    {path: LOGIN_ROUTE, element: <Login/>, title: "Авторизация"},
    {path: REGISTER_ROUTE, element: <Register/>, title: "Регистрация"},
    {path: '*', element: <Navigate to={LOGIN_ROUTE}/>, title: "Переадресация"}
]

export const privateRoutes : Array<IRoute> = [
    {path: MAIN_ROUTE, element: <Main/>, title: "Главная"},
    {path: '*', element: <Navigate to={MAIN_ROUTE}/>, title: "Переадресация"}
]