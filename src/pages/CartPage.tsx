import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import type { CartItem } from "../context/CartContext";

export default function CartPage() {
  const { items, remove, clear, total } = useCart();
  const { user } = useAuth();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl text-green-300 font-mono mb-4">Seu Carrinho</h1>

      <div className="flex flex-col gap-3">
        {items.length === 0 && (
          <div className="text-green-200">Carrinho vazio</div>
        )}

        {items.map((it: CartItem, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-black/80 p-3 border border-green-800 rounded"
          >
            <div>
              <div className="font-mono text-green-200">
                {it.coin.name} ({it.coin.symbol})
              </div>

              <div className="text-xs text-green-300">
                Preço aproximado: ${it.coin.quote.USD.price.toFixed(2)}
              </div>
            </div>

            <div className="text-right">
              <div className="text-green-200 font-mono">
                ${it.amountUSD.toFixed(2)}
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => remove(idx)}
                  className="text-xs font-mono px-2 py-1 border border-green-700 rounded"
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-green-300 font-mono">
          Total: ${total.toFixed(2)}
        </div>

        <div className="flex gap-2">
          <button
            onClick={clear}
            className="px-3 py-2 font-mono border border-green-700 rounded"
          >
            Limpar
          </button>

          <button
            onClick={() =>
              alert(
                user
                  ? "Checkout simulado — obrigado!"
                  : "Faça login para comprar"
              )
            }
            className="px-3 py-2 font-mono border border-green-700 rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
