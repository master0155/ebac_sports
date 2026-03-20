import * as S from './styles'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { clearCart } from '../../src/store/cartSlice'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const dispatch = useDispatch()
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.cart.items
  ) as Produto[]

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
        {itensNoCarrinho.length > 0 && (
          <S.ClearButton onClick={() => dispatch(clearCart())} type="button">
            Limpar carrinho
          </S.ClearButton>
        )}
      </div>
    </S.Header>
  )
}

export default Header
