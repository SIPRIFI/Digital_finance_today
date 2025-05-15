import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/api"
import PostCard from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CategoryList from "@/components/category-list"

export const metadata: Metadata = {
  title: "Digital Finance Today | The Leading Portal for Decentralized Finance",
  description:
    "Discover the latest trends, analysis, and news about DeFi, blockchain, and cryptocurrencies in the leading blog of the decentralized financial sector.",
}

export default async function Home() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 3)
  const recentPosts = posts.slice(3, 9)

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">
            Digital Finance Today
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Expert analysis, detailed guides, and the latest trends in DeFi, blockchain, and cryptocurrencies for
          investors and enthusiasts. Powered by{" "}
          <a
            href="https://siprifi.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Siprifi
          </a>
          .
        </p>
      </section>

      <section className="my-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-bold">Categories</h2>
        </div>
        <CategoryList />
      </section>

      <section className="my-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-bold">Featured Articles</h2>
          <Link href="/blog">
            <Button variant="ghost" className="group">
              View all
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="my-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-bold">Recent Publications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="my-16 text-center bg-gray-50 dark:bg-gray-900 p-10 rounded-lg border border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-heading font-bold mb-6">Looking for Advanced DeFi Solutions?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Visit{" "}
          <a
            href="https://siprifi.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Siprifi.com
          </a>{" "}
          to discover how to manage and operate with risk using blockchain technology.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
          <a href="https://siprifi.com" target="_blank" rel="noopener noreferrer">
            Visit Siprifi
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  )
}
