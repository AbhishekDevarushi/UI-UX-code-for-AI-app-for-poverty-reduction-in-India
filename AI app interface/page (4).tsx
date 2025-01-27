import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Unemployment() {
  const [skills, setSkills] = useState("")
  const [location, setLocation] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle the job search
    // For this example, we'll just navigate to the agriculture page
    router.push(`/agriculture?skills=${skills}&location=${location}`)
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
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Unemployment</h1>
            <p className="text-lg text-gray-600">Find your Dream job</p>
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Enter skills, designation, companies..."
                className="pl-10 h-12"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Enter location"
                className="pl-10 h-12"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full h-12 text-lg font-medium transition-all hover:scale-105">
              Search Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Card>
      </div>
    </main>
  )
}

