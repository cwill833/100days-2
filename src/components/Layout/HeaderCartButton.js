import React from 'react'
import { CartIcon } from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.scss'
export const HeaderCartButton = () => {

  return(
    <button className={`${styles.button} ${styles.bump}`}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}