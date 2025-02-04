"use client"
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center mt-4 px-4">
        <div className="flex flex-col items-center font-sans w-full max-w-[1440px]">
          <p className="text-xl font-bold my-2 text-center">GET HELP</p>
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full max-w-[457px] h-[56px] px-4 border-2 rounded-md"
          />
        </div>

        <section className="flex flex-col md:flex-row my-12 w-full max-w-[1440px] gap-8">
          <div className="flex flex-col gap-6 w-full md:w-[70%] font-sans">
            <p className="text-xl font-bold">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </p>
            <div className="flex flex-col gap-4">
              <p>
                We want to make buying your favourite Nike shoes and gear online
                fast and easy, and we accept the following payment options:
              </p>
              <ul className="list-disc ml-6">
                <li>
                  Visa, Mastercard, Diners Club, Discover, American Express,
                  Visa Electron, Maestro
                </li>
                <li>
                  If you enter your PAN information at checkout, you will be
                  able to pay for your order with PayTM or a local credit or
                  debit card.
                </li>
                <li>Apple Pay</li>
              </ul>
              <p>
                <Link href="/SignIn" className="underline text-black">
                  Nike Members
                </Link>{" "}
                can store multiple debit or credit cards in their profile for
                faster checkout. If you are not already a Member,{" "}
                <Link href="/JoinUs" className="underline text-black">
                  Join Us
                </Link>{" "}
                today.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition"
                onClick={()=> router.push("/JoinUs")}>
                  Join Us
                </button>
                <button
                  className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition"
                  onClick={()=> router.push("/Items")}>
                  Shop Nike
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-bold">FAQs</p>

              <div>
                <p className="font-bold">
                  Does my card need international purchases enabled?
                </p>
                <p>
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout if
                  international purchases need to be enabled.
                </p>
                <p>
                  Please note, some banks may charge{" "}
                  <Link href="/" className="underline text-black">
                    a small transaction fee
                  </Link>{" "}
                  for international orders.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Can I pay for my order with multiple methods?
                </p>
                <p>
                  No, payment for Nike orders cannot be split between multiple
                  payment methods.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  What payment method is accepted for SNKRS orders?
                </p>
                <p>
                  You can use any accepted credit card to pay for your SNKRS
                  order.
                </p>
              </div>

              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you will need to use a compatible Apple device running the
                latest OS, be signed in to your iCloud account, and have a
                supported card in your Wallet. Additionally, you’ll need to use
                Safari to use Apple Pay on Nike.com.
              </p>

              <div>
                <p>Was this answer helpful?</p>
                <div className="flex gap-4 my-2">
                  <Image
                    src="/image/Frame (24).png"
                    alt="Like"
                    width={35}
                    height={35}
                  />
                  <Image
                    src="/image/Frame (25).png"
                    alt="Dislike"
                    width={35}
                    height={35}
                  />
                </div>
                <p className="text-gray-500">RELATED</p>
                <div className="flex flex-col gap-4 my-4">
                  <Link href="/JoinUs" className="underline text-black">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-[30%] border-t-2 md:border-t-0 md:border-l-2">
            <p className="text-center text-xl font-bold my-4">CONTACT US</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center text-center">
                <Link href="">
                  <Image
                    src="/image/Image (22).png"
                    alt="Phone"
                    width={35}
                    height={35}
                  />
                </Link>
                <p>000 800 919 0566</p>
                <p className="w-[263px]">
                  Products & Orders: 24 hours a day, 7 days a week <br />
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Link href="">
                  <Image
                    src="/image/Image (23).png"
                    alt="Chat"
                    width={35}
                    height={35}
                  />
                </Link>
                <p>24 hours a day</p>
                <p>7 days a week</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Link href="">
                  <Image
                    src="/image/Image (24).png"
                    alt="Email"
                    width={35}
                    height={35}
                  />
                </Link>
                <p>We will reply within</p>
                <p>five business days</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Link href="">
                  <Image
                    src="/image/Image (25).png"
                    alt="Store Locator"
                    width={35}
                    height={35}
                  />
                </Link>
                <p>STORE LOCATOR</p>
                <p>Find Nike retail stores near you</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
