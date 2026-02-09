import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../store/cartSlice'

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeItem(id))
    }

    const handleClear = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.title} - ${item.price}
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {items.length > 0 && <button onClick={handleClear}>Clear Cart</button>}
        </div>
    )
}

export default Cart
