"use client";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/product";
import { allProduct } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { addCart } from "../Action/action";
import Swal from "sweetalert2";

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function dataProduct() {
      const dataProducts: Product[] = await client.fetch(allProduct);
      setProducts(dataProducts);
    }
    dataProduct();
  }, []);
  const handerAddToCard = (e : React.MouseEvent, product  : Product) => {
    e.preventDefault()
    Swal.fire({
      position : "center",
      icon : "success",
      title : `${product.productName} added to cart`,
      showConfirmButton :  false,
      timer : 2000,
    })
    addCart(product)
  }
  return (
    <div>
      {/* All Products Section */}
      <Header />
      <main className="w-full px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Headline Section */}
        <section className="flex justify-between items-center h-6 font-sans mb-6">
          <div>
            <p className="font-bold text-sm sm:text-base">New (500)</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              Hide Filters{" "}
              <Link href="#">
                <Image
                  src="/image/Frame (23).png"
                  alt="hide filters"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            <div>
              <label className="text-sm sm:text-base">Sort By</label>
              <select className="ml-2 border-2 p-1 rounded-md text-sm sm:text-base">
                <option value="">Select</option>
                <option value="">Option B</option>
                <option value="">Option C</option>
              </select>
            </div>
          </div>
        </section>
        {/* End Headline Section */}

        <section className="flex flex-col lg:flex-row gap-8 my-8">
          {/* Sidebar */}
          <div className="w-full lg:w-[260px] font-sans overflow-x-auto h-[600px] mb-8 lg:mb-0">
            <div className="flex flex-col gap-3 w-full pb-4">
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Shoes
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Sports Bras
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Hoodies & Sweatshirts
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Jackets
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Trousers & Tights
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Shorts
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Tracksuits
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Jumpsuits & Rompers
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Skirts & Dresses
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Socks
              </Link>
              <Link href="Shoes" className="font-bold text-sm sm:text-base">
                Accessories & Equipment
              </Link>
            </div>

            {/* Gender Content */}
            <div className="flex flex-col font-sans my-4 border-t-2 mr-4">
              <p className="font-bold my-2">Gender</p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  name="Men"
                  className="w-4 inline-block"
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  name="Women"
                  className="w-4 inline-block"
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  name="Unisex"
                  className="w-4 inline-block"
                />
                Unisex
              </p>
            </div>

            {/* Kids Checkbox Section */}
            <div className="flex flex-col font-sans my-4 border-t-2 mr-4">
              <p className="font-bold my-2">Kids</p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  name="Boys"
                  className="w-4 inline-block"
                />
                Boys
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  name="Girls"
                  className="w-4 inline-block"
                />
                Girls
              </p>
            </div>

            {/* Shop by Price */}
            <div className="flex flex-col font-sans my-4 border-t-2 mr-4">
              <p className="font-bold my-2">Shop By Price</p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  name="Under 2500"
                  className="w-4 inline-block"
                />
                Under ₹ 2,500.00
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  name="2501-7500"
                  className="w-4 inline-block"
                />
                ₹ 2,501.00 - ₹ 7,500.00
              </p>
            </div>
          </div>

          {/* Product List */}
          <div className="w-full lg:w-[1092px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product._id} className="shadow-xl rounded-b-lg">
                <Link href={`/product/${product.slug.current}`}>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.productName}
                      width={348}
                      height={348}
                      className="rounded-t-lg"
                    />
                  )}
                  <div className="font-sans p-2">
                    <p className="text-[#9E3500]">{product.status}</p>
                    <p>{product.productName}</p>
                    <p className="text-[#757575] text-sm">{product.category}</p>
                    <p className="text-[#757575] text-sm">{product.colors}</p>
                    <p className="text-[#9E3500]">{product.inventory}</p>
                    <p>MRP : ₹ {product.price}.00</p>
                  </div>
                  <div className="pt-3 pb-3">
                  <button className="px-6 py-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition"
                  onClick={(e) => handerAddToCard(e , product)}>
                Add to Cart
              </button>
              </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
