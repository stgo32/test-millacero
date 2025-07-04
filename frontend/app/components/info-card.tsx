import {
  Card,
  CardFooter,
CardContent,
} from "./ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link";

interface InfoCardProps {
  icon: string
  description: string
}

export function InfoCard({icon, description}: InfoCardProps) {
  return (
    <Card className="relative w-[400px] h-[60px] flex-row items-center justify-center p-2 text-left bg-secondary mr-6
                    md:h-[280px] md:w-auto md:min-w-[240px] md:max-w-[240px] md:flex-col md:items-start md:text-center md:p-4">

      <Button className="order-last md:order-none md:absolute md:top-2 md:right-2 rounded-full bg-primary p-2"      >
        <Link href="/hello-world">
          <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
        </Link>
      </Button>

      <CardContent className="flex-1 flex items-center gap-2 p-0 md:flex-col md:items-center md:justify-center md:text-center">
        <div className="text-3xl md:text-6xl md:mb-2">{icon}</div>
        <p className="font-bold text-lg">
          {description}
        </p>
      </CardContent>

      <CardFooter className="hidden md:block w-full text-center text-xs">
        ¿Cómo lo hacemos?
      </CardFooter>
    </Card>
  )
}

