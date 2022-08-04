import React from 'react'
import styles from "./index.module.css"

import DropDownList from '../DropDonwList'
import Navigation from "./components/Navigation"
import IconLink from '../IconLink'
import Menus from './components/Menus'
import Search from "../Search"

import person from "../../assets/icons/person.png"
import shoppingBasket from "../../assets/icons/shoppingBasket.png"

function Header() {
  const category = ["Bakery", "Fruit and vegetables", "Meat and fish", " Drinks", "Kitchen", "Special nutrition", "Baby", "Pharmacy"]
  
  const labelDDStyles = {
    "font-weight": "700",
    "font-size": "17px"
  }

  return (
    <div>
        <Navigation />
        <div className={styles.header}>
          <div className={styles.grid}>
            <h1 className={styles.brand}><a>Freshnesecom</a></h1>
            <div className={styles.search}>
              <div className={styles.dropDownList}>
                <DropDownList label="All categories"/>
              </div>
              <div className={styles.line}></div>
              <div className={styles.searchLine}>
                <Search />
              </div>
            </div>
            <div className={styles.possibilities}>
              <IconLink icon={person}/>
              <IconLink icon={shoppingBasket} styleProps={{padding: "0 0 0 50px"}}/>
            </div>
          </div>
        </div>
        <Menus categories={category} />
    </div>
  )
}

export default Header