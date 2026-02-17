import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = ({ produtos, favoritos, favoritar, adicionarAoCarrinho }) => {
  const dispatch = useDispatch()

  const produtoEstaNosFavoritos = (produto) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  const dispatchAdicionarAoCarrinho = (produto) => {
    dispatch(addItem(produto))
  }

  const handleAdicionarAoCarrinho =
    adicionarAoCarrinho ?? dispatchAdicionarAoCarrinho

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          favoritar={favoritar}
          aoComprar={handleAdicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
