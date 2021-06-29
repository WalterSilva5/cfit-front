import axios from 'axios';

export const getPlaylists = () => {
  const data = [];
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
  };
  axios.get('http://localhost/api-v1/playlist').then(
    (result) => {
      result.data.map((teste) => {
        data.push(
          teste.titulo,
        );
      });
    },
  ).catch(
    (err) => {
      console.log(err);
    },
  );
  return data;
};
