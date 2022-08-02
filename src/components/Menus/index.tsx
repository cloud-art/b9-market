import React from 'react'
import styles from "./index.module.css"

import DropDownList from "../DropDonwList"

interface IProps{
    categories: Array<string>
}


const Menus: React.FC<IProps> = ({ categories }) =>{
  return (
    <div className={styles.menus}>
        {categories.map((item, index) => (
            <DropDownList label={item} styleProps={{padding: "0 50px 0 0"}}/>
        ))}
    </div>
  )
}

export default Menus