import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "SORI YANAGI",
    price: "€ 450.00 EUR",
    image: "/placeholder.svg",
  },
  {
    name: "EL CASCO",
    price: "€ 380.00 EUR",
    image: "/placeholder.svg",
  },
  {
    name: "SORI YANAGIE",
    price: "€ 890.00 EUR",
    image: "/placeholder.svg",
  },
  {
    name: "COCOTTE",
    price: "€ 450.00 EUR",
    image: "/placeholder.svg",
  },
]

const HomeProductsWithInfo = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.name} className="space-y-4">
            <div className="aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeProductsWithInfo