import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "CLOTHING",
    slug: "clothing",
    image: "/placeholder.svg",
  },
  {
    name: "HIGH-TECH",
    slug: "high-tech",
    image: "/placeholder.svg",
  },
  {
    name: "BEAUTY",
    slug: "beauty",
    image: "/placeholder.svg",
  },
]

const HomeCategoryProducts = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.slug}`}
            className="group relative aspect-square"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-red-500 text-3xl font-medium">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomeCategoryProducts
