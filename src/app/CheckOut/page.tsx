"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/product";
import { getAddCartItems } from "../Action/action";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

const CheckoutPage = () => {
 

  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",  
  });
  const [error, setError] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getAddCartItems();
      setCartItems(items);
    };

    fetchCartItems();
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) setDiscount(Number(appliedDiscount));
  }, []);

  const amountTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const newError = Object.keys(formValues).reduce(
      (acc, key) => {
        acc[key] = !formValues[key as keyof typeof formValues];
        return acc;
      },
      {} as { [key: string]: boolean }
    );
    setError(newError);
    return Object.values(newError).every((err) => !err);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      await Swal.fire({
        title: "Error!",
        text: "Please fill in all your data before proceeding.",
        icon: "error",
      });
      return;
    }

    const result = await Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3485d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    });

    if (!result.isConfirmed) return;

    const orderData = {
      _type: "order",
      ...formValues,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: amountTotal,
      discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
      await Swal.fire({
        title: "Success!",
        text: "Your order has been successfully processed.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error while creating order:", error);
      await Swal.fire("Error", "Something went wrong while placing your order.", "error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center px-4 py-4">
        <Link href="/">
          <Image src="/image/Frame (2).png" alt="Nike Logo" width={35} height={35} />
        </Link>
        <div className="hidden sm:flex gap-4">
          <Link href="/Items" className="text-[#111111]">
            Find a Store
          </Link>
          <p className="text-[#111111] font-bold">|</p>
          <Link href="/ContactPage" className="text-[#111111]">
            Help
          </Link>
          <p className="text-[#111111] font-bold">|</p>
          <Link href="/JoinUs" className="text-[#111111]">
            Join Us
          </Link>
          <p className="text-[#111111] font-bold">|</p>
          <Link href="/SignIn" className="text-[#111111]">
            Sign In
          </Link>
        </div>
        <Link href="/CartPage">
          <Image src="/image/Auto Layout Horizontal (2).png" alt="Cart" width={50} height={50} />
        </Link>
      </header>

      <main className="flex flex-col lg:flex-row justify-center gap-12 my-12 px-4">
        <section className="max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Enter your details:</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {Object.keys(formValues).map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                id={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className={`w-full px-3 py-2 border-2 rounded-md ${error[field] ? "border-red-500" : "border-gray-300"}`}
                onChange={handleInputChange}
              />
            ))}
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800"
            >
              Place Order
            </button>
          </form>
        </section>

        <section className="flex flex-col gap-4 max-w-xs w-full">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Subtotal</p>
            <p className="text-sm text-gray-500">₹ {amountTotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-y-2 py-3">
            <p className="text-sm">Total</p>
            <p className="text-sm">₹ {amountTotal.toFixed(2)}</p>
          </div>
          {cartItems.map((item) => (
            <div key={item._id} className="flex gap-4">
              <Image src={urlFor(item.image).url()} alt={item.productName} width={150} height={150} />
              <div>
                <p className="font-bold text-sm">{item.productName}</p>
                <p className="text-xs text-gray-500">Qty {item.inventory}</p>
                <p className="text-xs text-gray-500">₹ {item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default CheckoutPage;
