import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-lg sm:max-w-md md:max-w-lg">
          <div className="flex flex-col items-center mb-6">
            <Image src="/image/Frame (2).png" alt="Nike Logo" width={60} height={60} />
            <h2 className="font-bold text-center text-lg sm:text-xl md:text-2xl mt-4">BECOME A NIKE MEMBER</h2>
            <p className="text-center text-gray-500 text-sm sm:text-base mt-2">
              Create your Nike Member profile and get first access to the very best of Nike products, inspiration and
              community.
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full h-10 px-3 border-2 rounded-md"
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="w-full h-10 px-3 border-2 rounded-md"
            />
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              className="w-full h-10 px-3 border-2 rounded-md"
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              className="w-full h-10 px-3 border-2 rounded-md"
            />
            <input
              type="date"
              name="Date of birth"
              placeholder="dd/mm/yyyy"
              className="w-full h-10 px-3 border-2 rounded-md"
            />
            <p className="text-center text-gray-500 text-sm sm:text-base mt-2">
              Get a Nike Member Reward every year on your Birthday.
            </p>
            <div>
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select className="w-full h-10 border-2 rounded-md text-gray-500 px-3" id="country" required>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="flex-1 h-11 text-gray-500 border border-gray-300 rounded-md">Male</button>
              <button className="flex-1 h-11 text-gray-500 border border-gray-300 rounded-md">Female</button>
            </div>
            <div className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <p className="text-gray-500 text-sm sm:text-base">
                Sign up for emails to get updates from Nike on products, offers and your Member benefits
              </p>
            </div>
            <p className="text-center text-gray-500 text-sm sm:text-base">
              By creating an account you agree to Nike&lsquo;s{" "}
              <Link href="#" className="underline text-black">
                Privacy Policy and Terms of Use.
              </Link>
            </p>
            <button className="w-full h-10 bg-black text-white font-sans rounded-md">JOIN US</button>
            <p className="text-center text-gray-500 text-sm sm:text-base">
              Already a Member?{" "}
              <Link href="/SignIn" className="underline text-black">
                Sign In.
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Page
