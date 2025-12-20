// src/store/baseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// RTK Query API
export const baseApi = createApi({
  reducerPath: 'baseApi', // уникальное имя редьюсера
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001', // proxy в vite.config.js → перенаправление на json-server:3001
  }),
  tagTypes: ['User'], // используем для кэширования
  endpoints: (builder) => ({
    // Получить всех пользователей
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    // Добавить нового пользователя
    addUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    // Обновить пользователя
    updateUser: builder.mutation<User, Partial<User> & Pick<User, 'id'>>({
      query: ({ id, ...body }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    // Удалить пользователя
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

// Генерируем hooks для компонентов React
export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = baseApi;

// Тип интерфейса пользователя
export interface User {
  id: number;
  name: string;
}
