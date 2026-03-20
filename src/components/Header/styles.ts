import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  margin: 80px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;

  h1 {
    font-size: 18px;
    flex: 1;
    font-style: italic;
    color: ${cores.corFundo};
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 18px;
      margin-right: 8px;
      margin-left: 16px;
    }

    span {
      color: ${cores.corFundo};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 16px;
    }
  }
`

export const ClearButton = styled.button`
  margin-left: 16px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid ${cores.corFundo};
  background: transparent;
  color: ${cores.corFundo};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${cores.corFundo};
    color: ${cores.corPrincipal};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 12px;
  }
`
