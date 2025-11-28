import React, { useEffect, useState, createContext, useContext } from "react";
import type { Coin } from "../types/Coin";

export type CartItem = { coin: Coin; amountUSD: number };

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const raw = localStorage.getItem("crypto_cart");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(
    () => localStorage.setItem("crypto_cart", JSON.stringify(items)),
    [items]
  );

  const add = (coin: Coin, amountUSD = 10) =>
    setItems((s) => [...s, { coin, amountUSD }]);

  const remove = (index: number) =>
    setItems((s) => s.filter((_, i) => i !== index));

  const clear = () => setItems([]);

  const total = items.reduce(
    (acc: number, it: CartItem) => acc + it.amountUSD,
    0
  );

  return (
    <CartContext.Provider value={{ items, add, remove, clear, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
