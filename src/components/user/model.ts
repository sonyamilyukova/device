import { createStore, createEvent, sample, combine } from "effector";
import { loadData } from "../server";
import { TUser, TProduct } from "../types";

export const loadUsers = loadData("users");
export const addNewUser = createEvent<TUser>();
export const logIn = createEvent<{ name: string, password: string }>();
export const logOut = createEvent();

export const $users = createStore<{userList: TUser[], currentUser: TUser | null}>({
  userList: [],
  currentUser: null
}) // @ts-ignore
  .on(loadUsers.doneData, (state, payload: TUser[]) => {
  return { ...state, userList: payload }
}).on(logIn, (state, { name, password }) => {
  const user = state.userList.find((user) => user.name === name && user.password === password);
  return user ? { ...state, currentUser: user } : state
}).on(addNewUser, (state, newUser) => {
    return { userList: [...state.userList, newUser], currentUser: newUser }
}).on(logOut, (state) => {
  return { ...state, currentUser: null }
});

export const loadCart = createEvent<TProduct[]>();
export const addProduct = createEvent<TProduct>();
export const removeProduct = createEvent<number>();
export const $cart = createStore<TProduct[]>([])
  .on(loadCart, (_, payload) => payload)
  .on(addProduct, (cart, product) => [...cart, product])
  .on(removeProduct, (cart, productId) =>
    cart.filter((product) => product.id !== productId)
  )

sample({
  source: $users,
  clock: $users,
  fn: users => users.currentUser ? users.currentUser.cart : [],
  target: loadCart
})

