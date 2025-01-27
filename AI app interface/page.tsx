import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Check, Users, Stethoscope, Newspaper, Building2, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Agriculture() {
  const [selectedFeature, setSelectedFeature] = useState("")
  const router = useRouter()

  const features = [
    { icon: Check, label: "Verify buyer products", color: "text-green-600" },
    { icon: Users, label: "Buyer products", color: "text-blue-600" },
    { icon: Stethoscope, label: "Crop doctor", color: "text-red-600" },
    { icon: Newspaper, label: "News", color: "text-purple-600" },
    { icon: Building2, label: "Government schemes", color: "text-orange-600" },
  ]

  const handleFeatureClick = (label: string) => {
    setSelectedFeature(label)
  }

  const handleContinue = () => {
    if (selectedFeature) {
      // Here you would typically navigate to a specific feature page
      // For this example, we'll just go to the feedback page
      router.push("/feedback")
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
          <h1 className="text-2xl font-bold text-gray-900">Agriculture</h1>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.label}
                className={`flex flex-col items-center justify-center p-6 rounded-xl border bg-white/50 hover:scale-105 transition-all cursor-pointer ${
                  selectedFeature === feature.label ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleFeatureClick(feature.label)}
              >
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
                <span className="text-sm font-medium text-center mt-3">{feature.label}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={handleContinue}
            disabled={!selectedFeature}
            className="w-full h-12 text-lg font-medium transition-all hover:scale-105"
          >
            Continue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </main>
  )
}

