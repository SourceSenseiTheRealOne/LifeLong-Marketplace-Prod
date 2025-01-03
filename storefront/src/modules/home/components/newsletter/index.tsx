import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

const HomeNewsletter = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="">
          <h2 className="text-red-500 text-xl max-w-xl text-left text-balance font-medium mb-4">
            THE FIRST RULE OF LIFELONGCLUB IS: YOU DO NOT TALK ABOUT
            LIFELONGCLUB.
            <br />
            THE SECOND RULE IS...
          </h2>
          <Button variant="outline" className="border-red-500 text-red-500">
            READ MORE
          </Button>
        </div>
        <div className="flex flex-col px-1 py-1 bg-red-600 w-[400px]"></div>
        <div>
          <h2 className="text-red-500 text-xl font-medium mb-4">
            SUBSCRIBE TO
            <br />
            OUR NEWSLETTER
          </h2>
          <Button className="bg-red-500 text-white hover:bg-red-600">
            JOIN THE CLUB
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HomeNewsletter