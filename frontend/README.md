# Millacero Frontend

Este es el frontend de la aplicación web de Millacero, una plataforma que ayuda a comunidades residenciales a reducir hasta un 40% sus gastos comunes mediante soluciones personalizadas.

## Descripción del Proyecto

Millacero es una aplicación que permite a las comunidades residenciales:
- Solicitar cotizaciones para servicios comunitarios
- Explorar opciones personalizadas según las necesidades específicas de cada comunidad
- Conectar con el equipo comercial para obtener asesoramiento especializado

La aplicación cuenta con un formulario interactivo donde los usuarios pueden ingresar información sobre su comunidad (número de departamentos, tipo de servicio requerido, ubicación, etc.) y recibir propuestas adaptadas a sus necesidades.

## Tecnologías Utilizadas

- **Next.js 15.3.5** - Framework de React con App Router
- **React 19** - Biblioteca de componentes
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño responsivo
- **Radix UI** - Componentes accesibles (Dialog, Popover, Switch, etc.)
- **Axios** - Cliente HTTP para comunicación con el backend
- **Lucide React** - Iconografía

## Cómo Levantar el Proyecto

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm, yarn, pnpm o bun

### Pasos para ejecutar

1. **Clonar el repositorio e instalar dependencias:**
```bash
cd frontend
npm install
```

2. **Configurar variables de entorno:**
Crear un archivo `.env.local` en la raíz del proyecto frontend:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

3. **Ejecutar el servidor de desarrollo:**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

4. **Abrir la aplicación:**
Visita [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles
- `npm run dev` - Ejecuta el servidor de desarrollo con Turbopack
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter de ESLint

## Estructura del Proyecto

```
frontend/
├── app/                        # App Router de Next.js 15
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes base de UI (ui.shadcn.com)
│   ├── utils/                # Utilidades y configuraciones
│   ├── hello-world/          # Página al presionar botón de las casillas
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página de inicio
├── lib/                      # Librerías y utilidades
├── public/                   # Archivos estáticos
```

## Funcionalidades Principales

### Página Principal (`app/page.tsx`)
Ésta página contiene los dos desafíos propuestos en la prueba: el formulario y el componente faltante. 

El formulario se coecta al backend, al enviar información se guarda en la base de datos y al cargar información se carga lo último enviado.

El componente faltante contiene las casillas que se reordenan como fue pedido y al presionar las flechas lleva a una página hello world.
