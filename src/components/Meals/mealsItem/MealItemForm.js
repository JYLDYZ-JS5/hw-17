import Input from '../../UI/Input/Input'
import cls from './MealItemForm.module.css'
import { forwardRef } from 'react'

export const MealItemForm =forwardRef( (props,ref)=>{
  return (
    <form  className={cls.form}>
      <Input
        ref={ref} 
        label="Amount"
        input={{
          id:props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+Add</button>
    </form>
  )
})
