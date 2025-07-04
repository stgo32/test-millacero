# Millacero Backend

Este es el backend de la aplicación web de Millacero, una API REST construida con Koa.js que gestiona la información de comunidades residenciales para el sistema de cotizaciones y servicios personalizados.

## Descripción del Proyecto

El backend de Millacero proporciona:
- **API REST** para la gestión de información de comunidades residenciales
- **Almacenamiento de datos** de formularios de cotización
- **Integración con base de datos MySQL** para persistencia de datos
- **Validación y procesamiento** de información de comunidades

La API maneja la información enviada desde el frontend, incluyendo datos de contacto, características de la comunidad, tipo de servicio requerido y comentarios adicionales.

## Tecnologías Utilizadas

- **Koa.js 3.0** - Framework web para Node.js
- **TypeScript 5.8** - Tipado estático
- **Sequelize 6.37** - ORM para base de datos
- **MySQL2 3.14** - Driver de base de datos MySQL


## Cómo Levantar el Proyecto

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm, yarn, pnpm o bun
- MySQL Server (versión 8.0 o superior)
- Base de datos MySQL configurada

### Pasos para ejecutar

1. **Clonar el repositorio e instalar dependencias:**
```bash
cd backend
npm install
```

2. **Configurar variables de entorno:**
Crear un archivo `.env` en la raíz del proyecto backend:
```bash
DB_NAME=millacero_db
DB_USER=millacero_user
DB_PASS=password
DB_HOST=localhost
```

3. **Configurar la base de datos:**
```sql
-- Crear la base de datos
CREATE DATABASE millacero_db;

-- Crear un usuario específico (opcional)
CREATE USER 'millacero_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON millacero_db.* TO 'millacero_user'@'localhost';
FLUSH PRIVILEGES;
```

4. **Ejecutar el servidor de desarrollo:**
```bash
npm run dev
```

5. **Verificar funcionamiento:**
El servidor estará disponible en [http://localhost:3001](http://localhost:3001)

### Scripts disponibles
- `npm run dev` - Ejecuta el servidor de desarrollo con ts-node
- `npm test` - Ejecuta las pruebas (pendiente de implementar)

## Estructura del Proyecto

```
backend/
├── src/                       # Código fuente
│   ├── db/                   # Configuración de base de datos
│   ├── models/               # Modelos de datos
│   ├── routes/               # Definición de rutas API
│   └── index.ts              # Punto de entrada de la aplicación
```

## API Endpoints

### POST /send-info
Guarda la información de una comunidad residencial en la base de datos.

**Request Body:**
```json
{
  "fullname": "string",
  "email": "string",
  "phone": "string", 
  "address": "string",
  "numOfApartments": "number",
  "typeOfService": "remote-lite" | "remote-full" | "access",
  "buyeeType": "resident" | "comitee" | "admin" | "real-state" | "other",
  "comment": "string" (opcional)
}
```

**Response:**
```json
{
  "id": 1,
  "fullname": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+56912345678",
  "address": "Las Condes, Santiago",
  "numOfApartments": 50,
  "typeOfService": "remote-full",
  "buyeeType": "admin",
  "comment": "Comunidad interesada en servicios completos",
  "createdAt": "2025-01-01T12:00:00.000Z",
  "updatedAt": "2025-01-01T12:00:00.000Z"
}
```

### GET /load-info
Obtiene la información más reciente guardada en la base de datos.

**Response:**
```json
{
  "id": 1,
  "fullname": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+56912345678",
  "address": "Las Condes, Santiago",
  "numOfApartments": 50,
  "typeOfService": "remote-full",
  "buyeeType": "admin",
  "comment": "Comunidad interesada en servicios completos",
  "createdAt": "2025-01-01T12:00:00.000Z",
  "updatedAt": "2025-01-01T12:00:00.000Z"
}
```

