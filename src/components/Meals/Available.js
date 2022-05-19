import { Card } from '../UI/Card'
import cls from './Available.module.css'
import { MealsItem } from './mealsItem/mealsItem'

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
]

export function Available() {
  




  const mealsList = DUMMY_MEALS.map((el) => (
    <MealsItem
      name={el.name}
      key={el.id}
      id={el.id}
      description={el.description}
      price={el.price}
      dummyMeals={DUMMY_MEALS}
     
    />
  ))
  return (
    <section className={cls.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}
