import React from 'react'
import { Route, Routes } from "react-router-dom";

import AppLayout from '../../Layouts/AppLayout';
import { authRoutes, publicRoutes } from './routes';
import Homepage from "../../pages/Homepage"
import Category from "../../pages/Category"
import Description from "../../pages/Description"

function Router() {
  const isAuth = false

  return (
    <Routes>
      <Route path={"/"} element={<AppLayout/>}>
        {isAuth && authRoutes.map(({ path, Component }) => 
          <Route path={path} element={<Component/>} />
        )}
        {publicRoutes.map(({ path, Component }) => 
          <Route path={path} element={<Component/>} />
        )}
      </Route>
    </Routes>
  )
}

export default Router