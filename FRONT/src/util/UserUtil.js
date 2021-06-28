export const logoutUser = () => {
  localStorage.removeItem('authToken');
  window.location.href = '/';
};

export const a = 'a';
