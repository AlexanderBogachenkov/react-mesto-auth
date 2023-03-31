const _checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}, что-то не так...`);
};

export const register = (email, password) => {
  // console.log(email);
  // console.log(password);
  return fetch(`https://auth.nomoreparties.co/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(_checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`https://auth.nomoreparties.co/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(_checkResponse);
};

export const getContent = (token) => {
  return fetch(`https://auth.nomoreparties.co/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(_checkResponse);
};
