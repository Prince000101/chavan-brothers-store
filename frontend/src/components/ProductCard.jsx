import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const Wishlisted = isInWishlist(product._id);

  return (
    <div className="rounded-2xl bg-cream-light dark:bg-charcoal-light p-5 shadow-sm border border-spice/10 dark:border-spice/20 transition-all duration-300 hover:shadow-lg hover:border-spice/30">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full rounded-xl object-cover"
      />
      <h2 className="text-lg font-heading mt-4 text-charcoal dark:text-cream tracking-wider uppercase">
        {product.name}
      </h2>
      <p className="text-smoke dark:text-cream/60 font-body text-xs uppercase tracking-wider">
        {product.category}
      </p>
      <p className="text-spice font-body font-bold mt-2">
        ₹{product.price}
      </p>
      <p className="text-turmeric font-body text-sm">★ {product.rating}</p>
      <p className="text-smoke dark:text-cream/70 font-body mt-3 text-sm">
        {product.description}
      </p>
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => toggleWishlist(product._id, product)}
          className={`p-2 rounded-full transition ${
            Wishlisted
              ? "bg-spice text-cream"
              : "bg-cream/80 text-charcoal dark:bg-charcoal dark:text-cream border border-spice/10"
          }`}
        >
          <Heart size={18} />
        </button>
        <button
          onClick={() => addToCart(product)}
          className="bg-spice hover:bg-spice-light text-cream p-2 rounded-full transition"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
