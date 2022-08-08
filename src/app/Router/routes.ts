import Admin from "../../pages/Admin"
import Basket from "../../pages/Basket"
import Category from "../../pages/Category"
import Description from "../../pages/Description"
import Details from "../../pages/Details"
import Homepage from "../../pages/Homepage"
import IRouter from "../../types/IRouter"

import { ADMIN_ROUTE, BASKET_ROUTE, CATEGORY_ROUTE, DETAILS_ROUTE, HOMEPAGE_ROUTE, DESCRIPTION_ROUTE } from "../../utils/consts"

export const authRoutes: Array<IRouter> = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]


export const publicRoutes: Array<IRouter> = [
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
    },
    {
        path: CATEGORY_ROUTE,
        Component: Category
    },
    {
        path: DETAILS_ROUTE,
        Component: Details
    },
    {
        path: DESCRIPTION_ROUTE,
        Component: Description
    },
]