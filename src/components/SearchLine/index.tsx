import React from 'react'
import styles from "./index.module.css"

import DropDownList from '../DropDonwList'
import magnifier from "../../assets/icons/magnifier.png"

function Search() {
  const labelDDStyles = {
    "font-weight": "700",
    "font-size": "17px"
  }

  return (
    <div className={styles.search}>
      <DropDownList label="All categories" labelStyle={labelDDStyles}/>
      <div className={styles.line}></div>
      <form action="" className={styles.searchForm}>
        <div className={styles.searchForm}>
          <input className={styles.searchLine} placeholder={"Search Products, categories ..."} type="search" />
          <button className={styles.searchButton}>
            <img src={magnifier} className={styles.magnifier}/>
          </button>
        </div>
      </form> 
    </div>
  )
}

export default Search