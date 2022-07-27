import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from '../../Layouts/AppLayout';
import Homepage from "../../pages/Homepage"
import Category from "../../pages/Category"
import Description from "../../pages/Description"

function Router() {
  return (
    <Routes>
        <Route path={"/"} element={<AppLayout/>}>
            <Route  path={"/"} element={<Homepage/>}/>
            <Route path={"category"} element={<Category/>} />
            <Route path={"description"} element={<Description/>}/>
        </Route>
    </Routes>
  )
}

export default Router