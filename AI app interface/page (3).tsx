"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [activeTab, setActiveTab] = useState("login")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle authentication
    // For this example, we'll just navigate to the categories page
    router.push("/categories")
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md space-y-8 p-8 glass-card">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20143316-WlafZZWiAcYr6vdewYNhzTYCgHE2aU.png"
              alt="AI FOR CHANGE"
              width={140}
              height={47}
              className="drop-shadow-lg"
            />
          </div>

          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            <Button
              variant={activeTab === "login" ? "default" : "ghost"}
              className="flex-1 transition-all"
              onClick={() => setActiveTab("login")}
            >
              Log in
            </Button>
            <Button
              variant={activeTab === "signup" ? "default" : "ghost"}
              className="flex-1 transition-all"
              onClick={() => setActiveTab("signup")}
            >
              Sign up
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" className="h-11" placeholder="Enter your username" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" className="h-11" placeholder="Enter your password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="h-11" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" className="h-11" placeholder="Enter your phone number" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I accept the terms of use
              </Label>
            </div>

            <Button type="submit" className="w-full h-11 text-lg font-medium transition-all hover:scale-105">
              Proceed
            </Button>
          </div>
        </form>
      </Card>
    </main>
  )
}

