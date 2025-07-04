import { InfoCard } from "./info-card"
import { Button } from "./ui/button"

export function Carousel() {
  return (
    <>
      <InfoCard icon="💸" description="Ahorra hasta 40% en gastos comunes"/>
      <InfoCard icon="🔒" description="Más seguridad, vigilancia y monitoreo"/>
      <InfoCard icon="📦" description="Encomiendas más seguras y ordenadas"/>
      <InfoCard icon="📃" description="Reduce problemas con el personal"/>
      <InfoCard icon="📱" description="Más independencia y autogestión"/>
    </>
  )
}
