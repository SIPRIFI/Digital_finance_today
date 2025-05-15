"use client"

import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface PostCardProps {
  post: Post
  featured?: boolean
  className?: string
}

export default function PostCard({ post, featured = false, className }: PostCardProps) {
  const formattedDate = format(new Date(post.date), "MMMM dd, yyyy")

  // Create a preview of the markdown content (first 150 characters)
  const contentPreview =
    post.content
      .replace(/[#*`_[\]]/g, "") // Remove markdown symbols
      .slice(0, 150) + "..."

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-md",
        featured ? "lg:col-span-2 lg:flex" : "",
        className,
      )}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full" scroll={true} onClick={() => window.scrollTo(0, 0)}>
        <div className={cn("relative", featured ? "lg:w-1/2" : "")}>
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        <div className={cn("flex flex-col h-full", featured ? "lg:w-1/2" : "")}>
          <CardContent className={cn("flex-1 p-6", featured ? "lg:p-8" : "")}>
            <h3 className={cn("font-heading font-bold mb-2 line-clamp-2", featured ? "text-2xl" : "text-xl")}>
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{contentPreview}</div>
          </CardContent>

          <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
              <span className="flex items-center mr-3">
                <Calendar className="h-3 w-3 mr-1" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {post.readingTime} min
              </span>
            </div>

            <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 group">
              Read more
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </div>
      </Link>
    </Card>
  )
}
