import { GalleryVerticalEnd } from "lucide-react"
import { ExploreOptionsForm } from "./components/explore-options-form"

export default function IndexPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-secondary">
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
              alt="Santiago Labbé"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Santiago Labbé</p>
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
  )
}
