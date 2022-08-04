import React from 'react'
import styles from "./index.module.css"

import magnifier from "../../assets/icons/magnifier.png"

function Search() {
  const labelDDStyles = {
    "font-weight": "700",
    "font-size": "17px"
  }

  return (
    <form action="" className={styles.searchForm}>
      <input className={styles.searchLine} placeholder={"Search Products, categories ..."} type="search" />
      <button className={styles.searchButton}>
        <img src={magnifier} className={styles.magnifier}/>
      </button>
    </form> 
  )
}

export default Search