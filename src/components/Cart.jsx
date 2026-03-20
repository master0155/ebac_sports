import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../src/store/cartSlice'

const Cart = () => {
    const items = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
    dispatch(removeItem(id))
}

    const handleClear = () => {
    dispatch(clearCart())
}

return (
    <div>
        <h2>Carrinho</h2>
        {items.length === 0 ? (
        <p>Seu carrinho esta vazio</p>
    ) : (
        <ul>
        {items.map((item) => (
            <li key={item.id}>
            {item.nome} - R$ {item.preco}
            <button onClick={() => handleRemove(item.id)}>Remover</button>
            </li>
        ))}
        </ul>
    )}
    {items.length > 0 && (
        <button onClick={handleClear}>Limpar carrinho</button>
    )}
    </div>
)
}

export default Cart
