import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

// api

const getContacts = async () => {
  let data = [];
  await axios
    .get('https://65b36193770d43aba479a2f2.mockapi.io/users')
    .then((res) => {
      data = res.data;
    });
  return data;
};

const getContactDetails = async (contactId) => {
  let data = [];
  await axios
    .get(`https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`)
    .then((res) => {
      data = res.data;
    });
  return data;
};

const deleteContact = async (contactId) => {
  let data = [];
  await axios
    .delete(`https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`)
    .then((res) => {
      data = res.data;
    });
  return data;
};

const addContact = async (payload) => {
  let data = [];
  await axios
    .post(`https://65b36193770d43aba479a2f2.mockapi.io/users`, payload)
    .then((res) => {
      data = res.data;
    });
  return data;
};

// query

export function useContacts() {
  return useQuery({
    queryKey: ['Contacts', 'List'],
    queryFn: getContacts,
  });
}

export function useContactDetails(id) {
  return useQuery({
    queryKey: ['Contacts', 'Detail', id],
    queryFn: () => getContactDetails(id),
  });
}

// mutation

export function useDeleteContact() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: async (data, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ['Contacts', 'Detail', variables.id],
      });
      await queryClient.invalidateQueries({ queryKey: ['Contacts', 'List'] });
    },
  });
}

export function useAddContact() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => addContact(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['Contacts', 'List'] });
    },
  });
}
