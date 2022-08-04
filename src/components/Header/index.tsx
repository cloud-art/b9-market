import React from 'react'
import styles from "./index.module.css"

import HeaderNav from "../HeaderNav"
import IconLink from '../IconLink'
import Menus from '../Menus'
import SearchLine from "../SearchLine"

import person from "../../assets/icons/person.png"
import shoppingBasket from "../../assets/icons/shoppingBasket.png"

function Header() {
  const category = ["Bakery", "Fruit and vegetables", "Meat and fish", " Drinks", "Kitchen", "Special nutrition", "Baby", "Pharmacy"]

  return (
    <div>
        <HeaderNav />
        <div className={styles.header}>
          <div className={styles.grid}>
            <h1 className={styles.brand}><a>Freshnesecom</a></h1>
              <SearchLine />
              <div className={styles.possibilities}>
                <IconLink icon={person}/>
                <IconLink icon={shoppingBasket} styleProps={{padding: "0 0 0 50px"}}/>
              </div>
          </div>
        </div>
        <div className={styles.menu}>
          <Menus categories={category} />
        </div>
    </div>
  )
}

export default Header