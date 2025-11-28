import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { user, logout } = useAuth();
  const { items } = useCart();

  return (
    <header className="w-full p-4 bg-black/90 border-b border-green-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/owl.png" alt="owl" className="w-16 h-16 object-contain" />

          <span className="text-green-400 font-mono text-xl hover:opacity-90">
            CryptoWatcher
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            to="/"
            className="font-mono text-sm text-green-200 hover:underline"
          >
            Home
          </Link>

          <Link
            to="/news"
            className="font-mono text-sm text-green-200 hover:underline"
          >
            Notícias
          </Link>

          <Link
            to="/cart"
            className="font-mono text-sm text-green-200 hover:underline"
          >
            Carrinho ({items.length})
          </Link>

          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-green-300">{user}</span>
              <button
                onClick={logout}
                className="text-xs font-mono px-2 py-1 border border-green-700 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-xs font-mono px-6 py-2 border border-green-700 rounded"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
