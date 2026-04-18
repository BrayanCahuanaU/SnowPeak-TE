# SnowPeak Store 🏂

Una tienda en línea moderna para equipos de ski y snowboard profesionales. Desarrollada con React, Vite y Express.js, desplegada en Vercel.

## 🌟 Características

- **Frontend React**: Interfaz moderna y responsiva con Vite
- **Backend API**: REST API con Express.js para gestión de productos
- **Catálogo completo**: 8 productos de ski con imágenes, precios y descripciones
- **Funcionalidades**:
  - Búsqueda y filtrado por categorías
  - Ordenamiento por precio y rating
  - Carrito de compras
  - Diseño responsivo
- **Despliegue**: Full-stack en Vercel (frontend + backend serverless)

## 🚀 Demo en Vivo

[https://snow-peak-te.vercel.app](https://snow-peak-te.vercel.app)

## 🛠️ Tecnologías

### Frontend
- **React 19** - Framework UI
- **Vite** - Build tool y dev server
- **CSS Modules** - Estilos modulares
- **React Router** - Navegación (implementado manualmente)

### Backend
- **Express.js** - Framework web
- **Node.js** - Runtime
- **CORS** - Cross-origin resource sharing
- **File System** - Almacenamiento de datos (JSON)

### Despliegue
- **Vercel** - Plataforma de despliegue
- **Serverless Functions** - Backend como funciones serverless

## 📁 Estructura del Proyecto

```
snowpeak-te/
├── backend/
│   ├── server.js          # API Express
│   └── package.json       # Dependencias backend
├── public/
│   ├── assets/images/     # Imágenes de productos
│   └── ...
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar/
│   │   ├── ProductCard/
│   │   └── ...
│   ├── context/
│   │   └── CartContext.jsx # Estado global del carrito
│   ├── pages/             # Páginas principales
│   │   ├── Home/
│   │   ├── Catalog/
│   │   ├── ProductDetail/
│   │   └── Cart/
│   ├── data/              # Datos (antes de API)
│   └── main.jsx           # Punto de entrada
├── vercel.json            # Configuración Vercel
├── products.json          # Datos de productos
└── package.json           # Dependencias frontend
```

## 🏃‍♂️ Instalación y Ejecución Local

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repo>
   cd snowpeak-te
   ```

2. **Instala dependencias**:
   ```bash
   npm install
   ```

3. **Instala dependencias del backend**:
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Ejecución en Desarrollo

1. **Inicia el backend**:
   ```bash
   cd backend
   npm run dev
   ```
   El backend correrá en `http://localhost:3000`

2. **Inicia el frontend** (en otra terminal):
   ```bash
   npm run dev
   ```
   El frontend correrá en `http://localhost:5173`

3. **Abre tu navegador** en `http://localhost:5173`

## 🚀 Despliegue en Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel.

### Despliegue Manual

1. **Instala Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión**:
   ```bash
   vercel login
   ```

3. **Despliega**:
   ```bash
   vercel --prod
   ```

### Configuración Vercel

- **vercel.json**: Configura el build y rutas
- **API Routes**: `/api/products` para el backend
- **Static Assets**: Imágenes servidas desde `/assets/`

## 📡 API Endpoints

### Base URL: `/api`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/products` | Obtener todos los productos |
| GET | `/api/products/:id` | Obtener producto por ID |
| POST | `/api/products` | Crear nuevo producto *(read-only en demo)* |
| PUT | `/api/products/:id` | Actualizar producto *(read-only en demo)* |
| DELETE | `/api/products/:id` | Eliminar producto *(read-only en demo)* |

### Ejemplo de respuesta:
```json
{
  "id": 1,
  "name": "Esquís Alpinos Pro X9",
  "category": "esquís",
  "price": 1299,
  "image": "/assets/images/esquis.jpg",
  "description": "Esquís de carrera...",
  "rating": 4.8,
  "stock": 12
}
```

## 🎨 Características de la UI

- **Diseño moderno**: Inspirado en tiendas de deportes de invierno
- **Responsivo**: Funciona en desktop, tablet y móvil
- **Accesible**: Navegación por teclado y lectores de pantalla
- **Performance**: Optimizado con Vite y lazy loading

## 🛒 Funcionalidades

- ✅ Catálogo de productos con filtros
- ✅ Detalles de producto individuales
- ✅ Carrito de compras con contexto React
- ✅ Búsqueda en tiempo real
- ✅ Ordenamiento por precio/rating
- ✅ Categorías: Esquís, Botas, Cascos, Gafas, Ropa, Bastones, Guantes

## 🔧 Desarrollo

### Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Ejecuta ESLint
```

### Backend Scripts

```bash
cd backend
npm run dev      # Desarrollo con nodemon
npm start        # Producción
```

## 📝 Notas de Desarrollo

- **Backend Read-only**: En producción (Vercel), el backend es read-only por limitaciones de serverless. Para funcionalidades completas, conectar a una base de datos.
- **Imágenes**: Almacenadas en `public/assets/images/` para optimización.
- **Estado**: Carrito usa React Context para estado global.
- **Routing**: Implementado manualmente sin React Router para simplicidad.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte del curso F1-TE.


---

