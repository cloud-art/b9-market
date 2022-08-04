import React from 'react'
import styles from "./index.module.css"

import DropDownList from "../../../DropDonwList"

interface IProps{
    categories: Array<string>
}


const Menus: React.FC<IProps> = ({ categories }) =>{
  return (
    <div className={styles.menus}>
        {categories.map((item, index) => (
            <DropDownList label={item}/>
        ))}
    </div>
  )
}

export default Menus