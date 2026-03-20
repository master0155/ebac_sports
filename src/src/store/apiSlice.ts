import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type ProdutoApi = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-ebac.vercel.app/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProdutoApi[], void>({
      query: () => `ebac_sports`
    })
  })
})

export const { useGetProductsQuery } = apiSlice
