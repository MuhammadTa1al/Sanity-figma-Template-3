import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <Image src="/image/Frame (2).png" alt="Nike Logo" width={60} height={60} />
            <h2 className="font-bold text-center text-lg sm:text-xl md:text-2xl mt-2">
              YOUR ACCOUNT FOR EVERYTHING NIKE
            </h2>
          </div>

          <form className="space-y-4">
            <input
              type="email"
              name="Email address"
              placeholder="Email address"
              className="w-full h-10 px-3 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="w-full h-10 px-3 border border-gray-300 rounded-md"
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5 mr-2" />
                <p className="text-gray-500 text-sm">Keep me signed in</p>
              </div>
              <Link href="#" className="text-gray-500 text-sm">
                Forgotten your password?
              </Link>
            </div>
            <p className="text-center text-gray-500 text-sm sm:text-base">
              By logging in, you agree to Nike&apos;s{" "}
              <Link href="#" className="underline">
                Privacy Policy and Terms of Use.
              </Link>
            </p>
            <button className="w-full h-10 bg-black text-white font-sans rounded-md">SIGN IN</button>
            <p className="text-center text-gray-500 text-sm sm:text-base">
              Not a Member?{" "}
              <Link href="/JoinUs" className="underline text-black">
                Join Us.
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
