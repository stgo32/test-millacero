"use client"

import { useRef, useState } from "react"
import { ExploreOptionsForm } from "./components/explore-options-form"
import { Carousel } from "./components/carousel"
import { Button } from "./components/ui/button"
import { Switch } from "./components/ui/switch"



export default function IndexPage() {
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
    <div className="bg-secondary">
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center px-10">
        <div className="max-w-md text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bajamos hasta un 40% tus gastos comunes
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            “Cada proyecto cuenta con requerimientos y condiciones específicas de desarrollo, 
            y es por lo mismo, que nuestras soluciones tienen que adecuarse a ese entorno.”
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Santiago Opazo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Santiago Opazo</p>
              <p className="text-sm text-gray-500">Equipo comercial</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-secondary p-6">
        <div className="w-full max-w-md rounded-xl bg-gray-50 p-6 shadow-md">
          <div className="mb-4 text-center">
            <h3 className="text-lg font-semibold">Cuéntanos sobre tu comunidad 🏡</h3>
            <p className="text-sm text-gray-600">Exploremos tus opciones</p>
          </div>
          <ExploreOptionsForm />
        </div>
      </div>
    </div>


    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 mx-4">
      <div className="w-full m-4 sm:justify-center">
        {/* Título y botón solo visible en pantallas grandes */}
        <div className="flex flex-col items-center justify-between gap-2 px-4 md:flex-row md:items-end">
          <p className="text-xl text-center md:text-left my-4">
            ¿Por qué transformar tu comunidad con <b>Millacero</b>?
          </p>
          <Button variant="default" className="hidden md:block my-4">
            ¿Por qué Millacero?
          </Button>
        </div>

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="flex flex-col md:flex-row gap-4 overflow-x-auto px-4 justify-center md:justify-start scroll-smooth scroll-hide">
          <Carousel />
        </div>

        {/* Botón solo visible en pantallas pequeñas (debajo del carousel) */}
        <div className="flex justify-center mt-4 md:hidden">
          <Button variant="default">
            ¿Por qué Millacero?
          </Button>
        </div>
      </div>

      {/* Botones switch */}
      <div className="hidden md:flex flex-row justify-start ml-6">
        <Button             size="sm"
            className={`mr-2 ${
              activeSide === "left"
                ? "bg-primary text-white"
                : "bg-muted text-gray-400"
            }`}
            onClick={() => handleScroll("left")} >
        </Button>
        <Button
            size="sm"
            className={`mr-2 ${
              activeSide === "right"
                ? "bg-primary text-white"
                : "bg-muted text-gray-400"
            }`}
            onClick={() => handleScroll("right")}>
        </Button>
      </div>
    </div>

    </div>
  )
}
