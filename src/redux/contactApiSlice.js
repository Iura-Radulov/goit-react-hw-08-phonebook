import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log(token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      console.log(headers);
      return headers;
    },
  }),
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
// baseUrl: 'https://62de460079b9f8c30ab61bac.mockapi.io/'
