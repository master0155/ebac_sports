import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ebac-fake-api.vercel.app/api/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
            query: () => `ebac_sports`,
        }),
    }),
});

export const { useGetProductsQuery } = apiSlice;
