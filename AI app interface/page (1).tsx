import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Briefcase, Sprout, Heart, GraduationCap, ArrowRight } from "lucide-react"

export default function Categories() {
  const router = useRouter()
  const categories = [
    { name: "Unemployment", href: "/unemployment", icon: Briefcase },
    { name: "Agriculture", href: "/agriculture", icon: Sprout },
    { name: "Health care", href: "/healthcare", icon: Heart },
    { name: "Education", href: "/education", icon: GraduationCap },
  ]

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
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <div className="grid gap-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="w-full h-14 text-lg justify-between hover:scale-105 transition-all"
                onClick={() => router.push(category.href)}
              >
                <div className="flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-primary" />
                  {category.name}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </main>
  )
}

