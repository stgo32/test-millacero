import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Combobox } from "./select"
import { serviceOptions, buyeeTypeOptions } from "../utils/options-params"

export function ExploreOptionsForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-4", className)} {...props}>
      <Input placeholder="Nombre y apellido" required />
      <Input type="email" placeholder="Email" required />
      <Input type="tel" placeholder="+569" required />
      <Label className="text-xs font-light">Dirección de la comunidad</Label>
      <Input placeholder="Nombre de calle, 123, Comuna" required />
      <Input type="number" placeholder="Cantidad de departamentos" required />
      <Combobox searchTitle="Servicio a cotizar" options={serviceOptions}/>
      <Combobox searchTitle="Escribo como" options={buyeeTypeOptions}/>
      <Input placeholder="Comentarios (opcional)" />
      <Button type="submit" variant="default" className="w-full">
        Enviar información
      </Button>
      <Button type="submit" variant="outline" className="w-full">
        Cargar información
      </Button>
    </form>
  )
}
