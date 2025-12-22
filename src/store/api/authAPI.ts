import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Employee } from "../../types";

export interface AuthResponse {
  user: Employee;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

/**
 * Create an API: @signIn and @signUp
 */

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://api.otter.ge/" }),

  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, SignInRequest>({
      query: (credentials) => ({
        url: "/sign-in",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    signUp: builder.mutation<AuthResponse, SignUpRequest>({
      query: (data) => ({
        url: "/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
