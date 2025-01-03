import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

const dropProducts = [
  { name: "Product 1", image: "/placeholder.svg" },
  { name: "Product 2", image: "/placeholder.svg" },
  { name: "Product 3", image: "/placeholder.svg" },
  { name: "Product 4", image: "/placeholder.svg" },
]

const DropProducts = () => {
  return (
    <section className="container mx-auto py-12 px-4 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-red-500 text-4xl font-medium mb-4">
            DROP 0012
            <br />
            THE CLUB'S PICK
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {dropProducts.map((product, index) => (
              <Image
                key={index}
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover"
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/placeholder.svg"
            alt="Velvet Sofa"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}


export default DropProducts