"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = () => {
    if (rating > 0) {
      // Here you would typically send the rating to a server
      setIsSubmitted(true)
      // Redirect to home page after 3 seconds
      setTimeout(() => {
        router.push("/")
      }, 3000)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20143316-WlafZZWiAcYr6vdewYNhzTYCgHE2aU.png"
            alt="AI FOR CHANGE"
            width={140}
            height={47}
            className="drop-shadow-lg"
          />
        </div>

        <Card className="p-8 space-y-6 glass-card">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Rate Your Experience</h1>
            <p className="text-gray-600">How satisfied are you with our service?</p>
          </div>

          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="focus:outline-none transform transition-all hover:scale-110"
              >
                <Star className={`w-10 h-10 ${rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              </button>
            ))}
          </div>

          <Button
            className="w-full h-12 text-lg font-medium transition-all hover:scale-105"
            onClick={handleSubmit}
            disabled={rating === 0 || isSubmitted}
          >
            Submit Feedback
          </Button>

          <p className="text-sm text-center text-gray-600">
            Collecting feedback is very essential, it helps us improve our app according to user experience.
          </p>

          {isSubmitted && (
            <div className="text-center space-y-2 bg-green-50 p-6 rounded-lg">
              <p className="font-bold text-xl text-green-600">Thank you!</p>
              <p className="text-sm text-gray-600">This is an example prototype which shows skeleton of our app...</p>
              <p className="text-sm text-gray-600">Redirecting to home page in 3 seconds...</p>
            </div>
          )}
        </Card>
      </div>
    </main>
  )
}

