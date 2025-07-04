"use client"

import { useRef, useState } from "react"
import { InfoCard } from "./info-card"
import { Button } from "./ui/button"

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeSide, setActiveSide] = useState<"left" | "right">("left")

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return
    const scrollContainer = carouselRef.current

    setActiveSide(direction)

    if (direction === "left") {
      scrollContainer.scrollTo({ left: 0, behavior: "smooth" })
    } else {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <div
        ref={carouselRef}
        className="flex flex-col md:flex-row gap-4 overflow-x-auto scroll-smooth scroll-hide px-4 justify-center md:justify-start"
      >
        <InfoCard icon="💸" description="Ahorra hasta 40% en gastos comunes" />
        <InfoCard icon="🔒" description="Más seguridad, vigilancia y monitoreo" />
        <InfoCard icon="📦" description="Encomiendas más seguras y ordenadas" />
        <InfoCard icon="📃" description="Reduce problemas con el personal" />
        <InfoCard icon="📱" description="Más independencia y autogestión" />
      </div>

      <div className="hidden md:flex flex-row justify-start ml-6 mt-4">
        <Button
          size="sm"
          className={`mr-2 ${activeSide === "left" ? "bg-primary" : "bg-secondary"}`}
          onClick={() => handleScroll("left")}
        />
        <Button
          size="sm"
          className={`mr-2 ${activeSide === "right" ? "bg-primary" : "bg-secondary"}`}
          onClick={() => handleScroll("right")}
        />
      </div>
    </>
  )
}
