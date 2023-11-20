import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

//  import  "../component/CartStyle.css"

import {updateQuantity, removeItem} from '../Store/CartSlice'


export default function CartItem() {
    const cart = useSelector((state)=> state.cart)
    
    console.log(cart.list.category)
    
    const dispatch = useDispatch()
 
    const [quantity, setQuantity] = useState(cart?.quantity)
    
    const [totalPrice, setTotalPrice] = useState(cart?.price * +cart?.quantity)
    
    const handleChange = (e) => {
        const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1
        setQuantity(value)
    }

    const handleRemove = () => {
        dispatch(removeItem({id: cart?.id}))
    }

    useEffect(() => {
        setTotalPrice(cart?.price * quantity)
        dispatch(updateQuantity({id: cart?.id, quantity}))
    }, [quantity, cart?.price, cart?.id, dispatch])

    return( 
        <>
          
        <tr>
           <td style={{maxWidth: 450, textAlign: 'left'}}>
                <div className="d-flex align-items-center">
                    <img src={cart.image} alt=" image" style={{width: 100}} /> 
                    <p style={{marginLeft: 10}}>{cart.name}</p>
                </div>
            </td> 
            <td className="price">
                {cart.price}$
            </td>
            <td>
                <div className="d-flex align-items-center justify-content-center">
                    <button className="changeBtn" onClick={() => {
                        if (quantity > 1) {
                            setQuantity(pre => pre - 1)
                        }
                    }}>-</button>
                    <input type="number" value={quantity} className="input" onChange={handleChange} />
                    <button className="" onClick={() => setQuantity(pre => pre + 1)}>+</button>
                </div>
            </td>
            <td className= "price" style={{fontWeight: 'bold'}}>
                {totalPrice}$
            </td>
            <td>
                <Button variant="danger" onClick={handleRemove}><FaTrashAlt /></Button>
            </td>
        </tr>
        </>
    )
}