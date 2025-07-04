import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
CardContent,
} from "./ui/card"

import { ArrowUpRight } from "lucide-react"

export function InfoCard() {
  return (
    <Card className="relative w-[400px] h-[60px] flex-row items-center justify-center p-2 text-left 
                    md:h-auto md:w-auto md:min-w-[240px] md:max-w-[240px] md:flex-col md:items-start md:text-center md:p-4">

      {/* Unique icon with conditional positioning */}
      <ArrowUpRight
        className="h-4 w-4 text-muted-foreground order-last md:order-none md:absolute md:top-2 md:right-2"
      />

      {/* Emoji icon (left on mobile, top on desktop) */}
      <div className="md:hidden text-3xl mr-2">💸</div>

      <CardContent className="flex-1 flex items-center gap-2 p-0 md:flex-col md:items-center md:justify-center md:text-center">
        <div className="hidden md:block text-6xl mb-2">💸</div>
        <p className="font-bold text-sm">
          Ahorras hasta un 40% en gastos comunes
        </p>
      </CardContent>

      {/* Footer visible only on desktop */}
      <CardFooter className="hidden md:block w-full text-center text-xs text-muted-foreground">
        ¿Cómo lo hacemos?
      </CardFooter>
    </Card>
  )
}
