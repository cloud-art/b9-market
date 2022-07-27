import React from 'react'
import styles from "./index.module.css"

interface IProps{
    text: string,
    link?: string,
    styleName?: string
}


const InfoLink: React.FC<IProps> = ({ text, link, styleName }) =>{
	const style: string = styleName? styles.link + " " + styleName: styles.link

  return (
    <a href={link? link: "#"} className={style}>{text}</a>
  )
}

export default InfoLink