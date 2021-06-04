import React from 'react'
import styles from './MealItem.module.scss'

export const MealItem = props => {
  const price = `$${props.price.toFixed(2)}`
  return (
    <li key={props.key} className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
        </div>
      <div></div>
    </li>
  )
}
