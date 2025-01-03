import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  // return (
  //   <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
  //     <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
  //       <section className="text-gray-600 body-font">
  //         <div className="container px-5 py-24 mx-auto flex flex-wrap">
  //           <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
  //             <div className="w-full sm:p-4 px-4 mb-6">
  //               <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
  //                 Moon hashtag pop-up try-hard offal truffaut
  //               </h1>
  //               <div className="leading-relaxed">
  //                 Pour-over craft beer pug drinking vinegar live-edge gastropub,
  //                 keytar neutra sustainable fingerstache kickstarter.
  //               </div>
  //             </div>
  //             <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
  //               <h2 className="title-font font-medium text-3xl text-gray-900">
  //                 2.7K
  //               </h2>
  //               <p className="leading-relaxed">Users</p>
  //             </div>
  //             <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
  //               <h2 className="title-font font-medium text-3xl text-gray-900">
  //                 1.8K
  //               </h2>
  //               <p className="leading-relaxed">Subscribes</p>
  //             </div>
  //             <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
  //               <h2 className="title-font font-medium text-3xl text-gray-900">
  //                 35
  //               </h2>
  //               <p className="leading-relaxed">Downloads</p>
  //             </div>
  //             <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
  //               <h2 className="title-font font-medium text-3xl text-gray-900">
  //                 4
  //               </h2>
  //               <p className="leading-relaxed">Products</p>
  //             </div>
  //           </div>
  //           <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
  //             <img
  //               className="object-cover object-center w-full h-full"
  //               src="https://dummyimage.com/600x300"
  //               alt="Statistics visualization"
  //             />
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   </div>
  // )

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative">
        <div className="container mx-auto py-6 px-4">
          <nav className="flex justify-between mb-16">
            <Link href="/" className="text-red-500 text-3xl font-bold">
              <Image
                src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1735581003/lifeLongHero_ztc5jm.png"
                width={400}
                height={350}
                alt=""
              />
            </Link>
            <div className="flex flex-col gap-12">
              <div className="flex flex-row justify-between gap-48 items-center">
                <div className="flex gap-8">
                  <Link href="/catalog" className="text-red-500 uppercase">
                    lifelong +
                  </Link>
                  <Link href="/drops" className="text-red-500 uppercase">
                    DROPS
                  </Link>
                  <Link href="/about" className="text-red-500 uppercase">
                    ABOUT US
                  </Link>
                </div>

                <div className="flex flex-row gap-8 items-center">
                  <div>
                    <p className="text-red-500">12:58</p>
                  </div>
                  <div>
                    <button className="text-white rounded-xl text-sm bg-red-500 uppercase px-2.5 py-1.5">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <Image
                  src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1735582500/welcomeToClub_udmhsu.png"
                  height={60}
                  width={135}
                  alt=""
                />
              </div>

              <div className="flex flex-row">
                <div className="w-[720px]">
                  <h1 className="text-red-500 text-5xl font-normal">
                    THE ULTIMATE CURATION OF DURABLE AND DETAIL-ORIENTED
                    CONSUMER PRODUCTS FOR THE MOST DEMANDING INDIVIDUALS
                  </h1>
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div>
                  <p className="text-red-500 uppercase text-lg">
                    AI EXPLORER.......
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-red-500 uppercase text-lg">
                      SHOP THEM ALL
                    </p>
                  </div>
                  <div className="bg-red-500 px-0.5 py-0.5 w-[560px]"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Banner */}
        <div className="border py-6 w-full bg-white">
          <p className="text-red-500 text-center">
            10% DISCOUNT ON NEWSLETTER SUBSCRIPTION
          </p>
        </div>
      </header>
    </div>
  )
}

export default Hero
