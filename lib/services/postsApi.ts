import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "@/lib/types/postsTypes";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
