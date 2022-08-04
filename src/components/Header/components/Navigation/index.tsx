import React from 'react'
import InfoLink from '../../../InfoLink'
import styles from "./index.module.css"

function Navigation() {
  return (
    <>
			<div className={styles.navigation}>
				<div >
					<InfoLink text={"Chat with us"} styleName={styles.contacts}/>
					<span className={styles.contacts}>+420 336 775 665</span>
					<span>info@freshnesecom.com</span>
				</div>
				
				<div>
					<InfoLink text="Blog" />
					<InfoLink text="About Us" styleName={styles.links}/>
					<InfoLink text="Careers" styleName={styles.links}/>
				</div>
			</div>
			<hr />
    </>
    
  )
}

export default Navigation