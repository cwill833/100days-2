import React from 'react'
import styles from './Card.module.scss'

export const Card = props => <div className={styles.card}>{props.children}</div>
