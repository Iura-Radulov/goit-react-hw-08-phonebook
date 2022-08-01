import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62de460079b9f8c30ab61bac.mockapi.io/' }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query(name, phone) {
        return {
          url: `/contacts`,
          method: 'POST',
          body: {
            name,
            phone,
          },
        };
      },
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } =
  contactApi;
