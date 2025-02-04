import { client } from "@/sanity/lib/client";
import { Product } from "@/../types/product";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Link from "next/link";


interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      productName,
      description,
      image,
      price,
      colors,
      category,
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

 

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-[#f7f7f7] rounded-lg h-[500px] w-full md:w-[600px] mx-auto ">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={600}
                height={600}
                className="w-full h-auto rounded-t-lg object-cover p-28"
              />
            )}
          </div>
          <div className="space-y-6 pl-32">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
                {product.productName}
              </h1>
              <h2 className="text-muted-foreground text-xl sm:text-xl">
                {product.description}
              </h2>
              <p className="text-[#757575] text-lg sm:text-xl">
                {product.colors}
              </p>
              <p className="text-[#9E3500] text-lg sm:text-xl">
                {product.category}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-semibold">
                ₹ {product.price}.00
              </p>

              <button className="px-6 py-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
                <Link href="/Items">Back to Products</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
