import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20143316-WlafZZWiAcYr6vdewYNhzTYCgHE2aU.png"
              alt="AI FOR CHANGE"
              width={160}
              height={53}
              className="drop-shadow-xl"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome to AI for Change</h1>
          <p className="text-gray-600">Empowering communities through innovative solutions</p>
        </div>

        <Link href="/login">
          <Button className="w-full h-12 text-lg font-medium transition-all hover:scale-105" size="lg">
            Get started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  )
}

