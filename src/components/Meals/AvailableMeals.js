import React from 'react'
import { Card } from '../UI/Card';
import styles from './AvailableMeals.module.scss'
import { MealItem } from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export const AvailableMeals = () => (
  <section className={styles.meals}>
    <Card>
      <ul>
        {DUMMY_MEALS.map(obj =>
          <MealItem 
            key={obj.id} 
            name={obj.name} 
            description={obj.description} 
            price={obj.price}>
            {obj.name}
          </MealItem>
        )}
      </ul>

    </Card>
  </section>
)