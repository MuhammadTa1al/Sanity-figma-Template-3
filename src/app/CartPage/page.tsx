"use client";

import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/../types/product";
import {
  getAddCartItems,
  removeAddCart,
  updateAddCartQuantity,
} from "../Action/action";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getAddCartItems());
  }, []);

  const handerRemove = (id: string) => {
    Swal.fire({
      title: "Are you Sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3485d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeAddCart(id);
        setCartItems(getAddCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handelQuantity = (id: string, quantity: number) => {
    updateAddCartQuantity(id, quantity);
    setCartItems(getAddCartItems());
  };

  const handelIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handelQuantity(id, product.inventory + 1);
  };

  const handelDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1)
      handelQuantity(id, product.inventory - 1);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been successfully processed.",
          "success"
        );
        router.push("/CheckOut");
        setCartItems([]);
      }
    });
  };

  const calclatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Cart Section */}
      <main className="flex-grow flex flex-col lg:flex-row justify-center gap-8 py-12 px-4 sm:px-6 lg:px-12">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 max-w-3xl">
          <div className="bg-[#F5F5F5] p-4 mb-4 rounded-md">
            <p className="text-sm font-medium">Free Delivery</p>
            <p className="text-sm flex flex-wrap">
              Applies to orders of ₹ 14,000.00 or more.
              <Link href="#" className="underline ml-1">
                View details
              </Link>
            </p>
          </div>

          <h2 className="text-lg lg:text-xl font-bold my-4">Bag</h2>

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row border-b-2 py-4 gap-4"
            >
              <div className="w-full sm:w-1/3">
                <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-md">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between w-full sm:w-2/3">
                <div>
                  <p className="font-medium text-base">{item.productName}</p>
                  <p className="text-sm text-[#757575]">{item.description}</p>
                  <p className="text-sm text-[#757575]">{item.colors}</p>
                  <div className="flex gap-4 mt-2 text-sm text-[#757575]">
                    <p>Quantity: {item.inventory}</p>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="flex gap-6">
                    <button
                      onClick={() => handelDecrement(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handelIncrement(item._id)}
                      className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handerRemove(item._id)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="font-medium text-base">₹ {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-1/3 max-w-md">
          <h2 className="text-lg lg:text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-sm lg:text-base">Subtotal</p>
            <p className="text-sm lg:text-base">
              ₹ {calclatedTotal().toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-sm lg:text-base">
              Estimated Delivery & Handling
            </p>
            <p className="text-sm lg:text-base">Free</p>
          </div>
          <div className="flex justify-between border-y-2 py-4 my-4">
            <p className="font-bold text-sm lg:text-base">Total</p>
            <p className="font-bold text-sm lg:text-base">
              ₹ {calclatedTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="w-full text-center py-3 px-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
