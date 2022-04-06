import { createEffect } from "effector";
import { TProduct, TUser } from "./types";
import db from "../db.json";

// Загрузка данных (как будто) с сервера
export const loadData = (type: string) =>
  createEffect<any, TProduct[] | TUser[]>(() =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: type === "products" ? JSON.stringify(db.products) :
        type === "users" ? JSON.stringify(db.users) : JSON.stringify(db.slides),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).then(data => {
      const result = Object.values(data).slice(0, -1);
      return result as TUser[] | TProduct[];
    }).catch(() => [])
  );
