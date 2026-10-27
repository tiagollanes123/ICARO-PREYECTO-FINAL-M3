# Premium Store - E-Commerce App 🛒

¡Bienvenido a **Proyecto 3**! Este es el proyecto final desarrollado para el **Módulo 3: Desarrollo de una Aplicación Web con React**. Se trata de una plataforma de e-commerce interactiva, profesional y totalmente responsive que permite navegar por un catálogo de productos, filtrar por categorías, buscar artículos en tiempo real, ver descripciones detalladas con selección de talle y color, y gestionar un carrito de compras global.

## 🚀 Enlaces del Proyecto

*   **Repositorio de GitHub:** [https://github.com/tiagollanes123/ICARO-PREYECTO-FINAL-M3]
*   **Despliegue Online (Vercel):** [https://icaro-preyecto-final-m3-git-main-tiago-8e66.vercel.app/]

---

## 🛠️ Tecnologías y Temas Utilizados

La aplicación fue construida utilizando un ecosistema moderno de desarrollo Frontend, aplicando los siguientes conceptos:

### 1. Lenguajes Base y UI
*   **HTML5 (JSX):** Estructuración modular de las vistas mediante la sintaxis nativa de React para la inyección dinámica de componentes.
*   **JavaScript Moderno (ES6+):** Uso de métodos avanzados de arrays (`.filter()`, `.map()`, `.reduce()`, `.includes()`) para la lógica de negocio, búsquedas y cálculos comerciales.
*   **Material UI (MUI):** Implementación de la librería de componentes de Google para una interfaz limpia, moderna y adaptada a dispositivos móviles y de escritorio (Diseño Responsive).

### 2. Arquitectura de React y Estado Global
*   **React.js & Vite:** Entorno de desarrollo ultra rápido y modular basado en componentes reutilizables.
*   **React Router Dom:** Enrutamiento dinámico del lado del cliente (SPA) que permite navegar fluidamente entre la página principal (`/`), el carrito de compras (`/cart`) y los detalles del producto (`/product/:id`).
*   **Zustand (Gestión de Estado Global):** Almacén centralizado para coordinar el carrito de compras. Resuelve de forma inteligente la sumatoria de unidades e identifica de manera exacta si el usuario añade la misma prenda pero con diferente talle o color.

### 3. Consumo de APIs y Hooks Personalizados
*   **Custom Hooks (`useFetch`):** Creación de un hook propio para encapsular y abstraer la lógica asíncrona de peticiones de red.
*   **Fetch API y JSON:** Lectura asíncrona de datos desde una base estructurada en formato JSON (`products.json`).
*   **Manejo de Carga y Errores:** Interfaz reactiva ante estados de red que muestra un indicador de carga (`CircularProgress`) mientras se procesan los datos o un mensaje descriptivo en pantalla (`Alert`) en caso de falla.

---

## 📂 Estructura del Proyecto

```text
├── public/
│   ├── images/          # Archivos físicos de las imágenes en minúscula
│   ├── products.json    # Base de datos simulada para la API externa
│   └── favicon.svg      # Icono del sitio
├── src/
│   ├── components/      # Componentes comunes de la UI (Navbar, etc.)
│   ├── hooks/           # Hooks personalizados (useFetch.js)
│   ├── pages/           # Vistas independientes de la app (Home, Cart, ProductDetail)
│   ├── store/           # Almacén de estado global (useCartStore.js, productsData.js)
│   ├── App.jsx          # Enrutador principal y layout
│   └── main.jsx         # Punto de entrada de la aplicación y configuración del Tema MUI
├── package.json
└── README.md
```

---
