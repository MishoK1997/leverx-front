import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Employee } from "../../types";

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://api.otter.ge/" }),

  tagTypes: ["Users", "UserDetail"],

  endpoints: (builder) => ({
    // GET /users
    getUsers: builder.query<Employee[], void>({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Users" as const, id: _id })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),

    // GET /users/:id
    getUserDetail: builder.query<Employee, string>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: "UserDetail", id }],
    }),

    // PATCH /users/:id
    // Used for your role change
    updateUserRole: builder.mutation<Employee, { id: string; role: string }>({
      query: ({ id, role }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Users", id: "LIST" },
        { type: "UserDetail", id },
      ],
    }),
    // Used for update user
    updateUser: builder.mutation<Employee,{ id: string; data: Partial<Employee> }>({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "UserDetail", id },
        { type: "Users", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserDetailQuery,
  useUpdateUserRoleMutation,
  useUpdateUserMutation,
} = usersApi;
