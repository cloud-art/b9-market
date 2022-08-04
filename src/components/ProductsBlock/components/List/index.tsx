import React from 'react'
import styles from "./index.module.css"

interface IProps{
  styleProps?: object
}

const List: React.FC<IProps> = ({ styleProps }) =>{
  return (
    <div className={styles.list}>
      <div className={styles.view}>
        <div className={styles.title}>Category menu</div>
        <div className={styles.listItems}>
          <a href="#">Bakery</a>
          <a href="#">Fruit and vegetables</a>
          <a href="#">Meat and fish</a>
          <a href="#">Drinks</a>
          <a href="#">Kitchen</a>
        </div>
      </div>
      
      <button className={styles.button}> 
        More categories
      </button>
    </div>
  )
}

export default List

