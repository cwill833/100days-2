import React from 'react'
import styles from './Header.module.scss'
import mealsImage from '../../assets/meals.jpeg'
import { HeaderCartButton } from './HeaderCartButton'

export const Header = () => (
  <>
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </header>
    <div className={styles['main-image']}>
      <img src={mealsImage} alt="table full of food"/>
    </div>
  </>
)