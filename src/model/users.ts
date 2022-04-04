import { createStore, createEffect, createEvent } from 'effector';

export interface IUser {
  name: string;
  password: string;
  email?: string;
  phone?: string;
}

export const loadUsers = createEffect(async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/users');
  if (req.ok) return req.json();
  else return [];
});

export const findUser = createEvent<IUser>();
export const addUser = createEvent<IUser>();
export const setErrorAlert = createEvent<boolean>();
export const logOut = createEvent();

// @ts-ignore
export const $users = createStore({
  userList: [],
  currentUser: { name: '' },
  isLogged: false,
  loginError: true
})
  .on(loadUsers.doneData, (state, payload) => {
    state.userList = payload;
  })
  .on(findUser, (state, newUser) =>
    // @ts-ignore
    state.userList.find((user) => user.name === newUser.name) ?
      { ...state,
        currentUser: newUser,
        isLogged: true,
        loginError: false } :
      { ...state,
        loginError: true }
  )
  .on(addUser, (state, newUser) => {
    // @ts-ignore
    return {
      userList: [...state.userList, newUser],
      currentUser: newUser,
      isLogged: true,
      loginError: false
    }
  })
  .on(setErrorAlert, (state, payload) => {
    return {
      ...state,
      loginError: payload,
    }
  })
  .on(logOut, (state) => {
    return {
      ...state,
      currentUser: {name: ''},
      isLogged: false,
      loginError: true
    }
  });
