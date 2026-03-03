<!-- ──────────────────────────────────────────────────────
     THE BREAK · PROJECT DOCUMENTATION
     Catering & Event Services Website
     ────────────────────────────────────────────────────── -->

# The Break - Estructura Modular del Proyecto

## 📁 Estructura de Carpetas

```
Break_OmairaCajasan/
├── index.html              # HTML principal (modularizado)
│
├── css/                    # Estilos CSS modularizados
│   ├── variables.css       # Design tokens y variables CSS
│   ├── base.css            # Reset y estilos base globales
│   ├── navbar.css          # Navegación y menú hamburguesa
│   ├── hero.css            # Sección hero y animaciones
│   ├── sections.css        # Estilos comunes de secciones
│   ├── services.css        # Tarjetas de servicios
│   ├── gallery.css         # Galería de imágenes y lightbox
│   ├── testimonials.css    # Sección de testimonios
│   ├── contact.css         # Formulario y contacto
│   ├── footer.css          # Pie de página
│   ├── animations.css      # Keyframes y animaciones
│   └── responsive.css      # Media queries y diseño responsive
│
├── js/                     # JavaScript modularizado (ES6)
│   ├── main.js             # Punto de entrada principal
│   └── modules/            # Módulos funcionales
│       ├── navbar.js       # Lógica de navegación
│       ├── animations.js   # Reveal on scroll
│       ├── gallery.js      # Filtrado de galería
│       ├── lightbox.js     # Modal lightbox
│       └── form.js         # Manejo de formulario
│
├── img/                    # Imágenes y assets
├── video/                  # Archivos de video
└── README.md               # Este archivo

```

## 🎨 CSS Modularizado

### variables.css
Define todos los **design tokens** del proyecto:
- Paleta de colores (verdes, corales, neutros)
- Tipografías
- Transiciones globales

```css
:root {
  --verde: #6FA320;
  --font-serif: 'Cormorant Garamond', serif;
  --transition-base: 0.3s;
}
```

### base.css
Estilos globales:
- Reset CSS
- Clases de utilidad (`.btn`, `.reveal`)
- Scrollbar styling
- Overlay de ruido

### Archivos de componentes
Cada sección tiene su propio archivo CSS:
- `navbar.css` - Navegación fija
- `hero.css` - Banner principal
- `sections.css` - Sobre nosotros
- `services.css` - Tarjetas de servicios
- `gallery.css` - Galería e lightbox
- `testimonials.css` - Experiencias/testimonios
- `contact.css` - Formulario de contacto
- `footer.css` - Pie de página

### responsive.css
Todas las media queries centralizadas en un único archivo para mantenimiento facilitar.

## 🚀 JavaScript Modularizado

### main.js
Punto de entrada que importa e inicializa todos los módulos:

```javascript
import { setupNavbar } from './modules/navbar.js';
import { setupAnimations } from './modules/animations.js';
// ... más módulos
```

### Módulos funcionales

#### navbar.js
- Detección de scroll en navbar
- Toggle de menú hamburguesa
- Detección de enlaces activos

#### animations.js
- `setupAnimations()` - Reveal on scroll con Intersection Observer
- Anima elementos con clase `.reveal`

#### gallery.js
- `setupGallery()` - Filtrado de imágenes por categoría
- Maneja el estado de items visibles/ocultos
- Animación fade-in al cambiar filtro

#### lightbox.js
- `setupLightbox()` - Modal de imagen fullscreen
- Navegación con flechas y teclado (←, →, Esc)
- Click en galería para abrir
- Click fuera para cerrar

#### form.js
- `setupForm()` - Manejo de formulario
- Integración con Netlify Forms
- Mensaje de confirmación de envío

## 🔧 Uso y Mantenimiento

### Agregar un nuevo estilo
1. Crea un nuevo archivo en `css/` si es una sección nueva
2. Importa el CSS en `index.html`
3. Asegura de usar las variables CSS globales

### Agregar nueva funcionalidad JavaScript
1. Crea un módulo en `js/modules/`
2. Exporta una función `setup*`
3. Importa en `main.js` e inicializa en `DOMContentLoaded`

### Ejemplo - Nuevo módulo
```javascript
// js/modules/mimodulo.js
export const setupMiModulo = () => {
  // Código aquí
};

// main.js - Agregar:
import { setupMiModulo } from './modules/mimodulo.js';
// ... en DOMContentLoaded:
setupMiModulo();
```

## 📝 Convenciones

✅ **Nombres claros**
- CSS: kebab-case (`nav-links`, `hero-badge`)
- JS: camelCase (`setupNavbar`, `openLightbox`)

✅ **Comentarios descriptivos**
- Cada archivo comienza con banner descriptivo
- Secciones clave comentadas

✅ **Reutilización de variables**
- Todas las variables CSS están en `variables.css`
- Variables de transición globales

✅ **Mobile-first responsive**
- Breakpoints centralizados en `responsive.css`
- Diseño funcional en todos los tamaños

## 🎯 Ventajas de la estructura modular

1. **Mantenibilidad** - Fácil encontrar y actualizar código
2. **Escalabilidad** - Agregar features sin afectar lo existente
3. **Rendimiento** - CSS dedicado por sección
4. **Legibilidad** - Código organizado y enfocado
5. **Reutilización** - Módulos y variables compartidas
6. **Testabilidad** - Funciones aisladas y testearbles

---

**The Break** · Tómate un momento
© 2025 - Bucaramanga, Colombia
