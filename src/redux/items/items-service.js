import axios from 'axios';

export const fetchDelete = async id => {
  const { data } = await axios.delete(
    `https://63188f38f6b281877c6fecd4.mockapi.io/contacts/contacts/${id}`
  );
  return data;
};

export const fetchPost = async contact => {
  const { name, number } = contact;
  const { data: result } = await axios.post(
    `https://63188f38f6b281877c6fecd4.mockapi.io/contacts/contacts`,
    {
      name,
      phone: number,
    }
  );
  return result;
};

export const fetchGet = async () => {
  const { data } = await axios.get(
    `https://63188f38f6b281877c6fecd4.mockapi.io/contacts/contacts`
  );
  return data;
};
