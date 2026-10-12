import { CartCounter } from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shopping Cart Counter",
  description: "Contador de productos en el carrito",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter/>
    </div>
  );
}