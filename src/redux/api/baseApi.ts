import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (query) => {
                const params = new URLSearchParams();

                if (query?.search) {
                    params.append("searchValue", query.search);
                }

                if (query?.category) {
                    params.append("category", query.category);
                }

                if (query?.minPrice) {
                    params.append("minPrice", query.minPrice);
                }

                if (query?.maxPrice) {
                    params.append("maxPrice", query.maxPrice);
                }

                if (query?.sort) {
                    params.append("sort", query.sort);
                }

                return {
                    url: `/products?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Products"],
        }),
    }),
});

export const {
    useGetProductsQuery,
} = baseApi;
