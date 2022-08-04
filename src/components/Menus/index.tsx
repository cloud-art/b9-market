import React from 'react'
import styles from "./index.module.css"

import DropDownList from "../DropDonwList"

interface IProps{
    categories: Array<string>
}


const Menus: React.FC<IProps> = ({ categories }) =>{
  const labelDDStyle = {
    "font-weight": "300",
    "font-size": "17px"
  }

  return (
    <div className={styles.menus}>
        {categories.map((item, index) => (
            <DropDownList label={item} styleProps={{padding: "0 50px 0 0"}} labelStyle={labelDDStyle}/>
        ))}
    </div>
  )
}

export default Menus