import { Link, useNavigate } from "react-router-dom"
import DataContext from "./context/DataContext"
import { useContext} from 'react'

export default function Item({ item }) {
  let { name, emoji, price, id } = item

  // const valueFromContext = useContext(DataContext)
  // valueFromContext ={ cart, setCart }

  const {cart,setCart} = useContext(DataContext)

  const handlePlus = () => {
    let newCart = { ...cart }
    // let cart4 = { "ab12": {...item,qty:1}  , "dsak":{...item,qty:7} }

    // אם קיים המוצר
    if (newCart[id]) {
      newCart[id].qty += 1
    }
    else {
      newCart[id] = { ...item, qty: 1 }
    }
    setCart(newCart)
  }

  const handleMinus = () => {
    if (cart[id]) {
      let newCart = { ...cart }
      if (newCart[id].qty > 1) {
        newCart[id].qty -= 1
      }
      else {
        delete newCart[id]
      }
      setCart(newCart)
    }
  }
  const nav = useNavigate()

  return (
    <div className='item'>

      <div onClick= {()=>nav("/items/"+id)}>
      <div>{name}</div>
      <div>{emoji}</div>
      <div>{price}</div>
      </div>

      <div className='buttons'>
        <button onClick={handlePlus}>+</button>
        <span>{cart&&cart[id]?.qty || 0}</span>
        <button onClick={handleMinus} >-</button>
      </div>
    </div>
  )
}
