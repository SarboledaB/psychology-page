# Mariana Echeverri - Psicóloga

Landing page one-page para la psicóloga Mariana Echeverri, construida con React y CSS puro.

## 🎨 Características

- **One-page design** - Página única con scroll vertical suave
- **SCSS/Sass** - Estilos con preprocesador CSS y módulos
- **Animaciones CSS** - Ondas, hojas flotantes y corazones animados
- **Responsive** - Diseño mobile-first completamente adaptativo
- **Backgrounds CSS** - Gradientes y formas orgánicas creadas con CSS
- **Sin imágenes de fondo** - Todo el diseño visual está hecho con CSS y SVG
- **Variables y Mixins** - Sistema de diseño reutilizable con SCSS

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool ultra-rápido
- **SCSS/Sass** - Preprocesador CSS con módulos
- **SVG inline** - Ilustraciones y decoraciones

## 📁 Estructura del Proyecto

```
Psicologa/
├── src/
│   ├── components/              # Componentes de la página
│   │   ├── Header.jsx           # Logo y header con ondas
│   │   ├── Header.module.scss
│   │   ├── Hero.jsx             # Sección principal con ilustración
│   │   ├── Hero.module.scss
│   │   ├── ContactInfo.jsx      # Tarjetas de contacto
│   │   ├── ContactInfo.module.scss
│   │   ├── Services.jsx         # Servicios ofrecidos
│   │   ├── Services.module.scss
│   │   ├── Footer.jsx           # Redes sociales y ondas animadas
│   │   └── Footer.module.scss
│   ├── styles/                  # Estilos globales y utilidades
│   │   ├── _variables.scss      # Variables de colores y tipografía
│   │   ├── _mixins.scss         # Mixins reutilizables
│   │   └── global.scss          # Estilos globales
│   ├── App.jsx                  # Componente principal
│   └── main.jsx                 # Punto de entrada
├── public/
│   └── vite.svg                 # Favicon
├── index.html                   # HTML principal
├── package.json                 # Dependencias
├── vite.config.js               # Configuración de Vite
└── .eslintrc.cjs                # Configuración ESLint
```

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

La aplicación se abrirá automáticamente en http://localhost:3000

## 🎨 Paleta de Colores

```scss
$mint-pastel: #B8E6E1;      // Verde menta pastel
$mint-light: #D4F1EE;        // Verde menta claro
$lilac-pastel: #D4C5E8;      // Lila pastel
$lilac-light: #E8DFF5;       // Lila claro
$purple-text: #6B4C9A;       // Púrpura para textos
$teal-dark: #5BA89F;         // Verde azulado oscuro
$warm-white: #FAF9F7;        // Blanco cálido
```

Las variables están definidas en `src/styles/_variables.scss`

## ✨ Animaciones CSS

Todas las animaciones están implementadas con CSS puro:

- **Ondas flotantes** - Animación suave de ondas en header y footer
- **Hojas decorativas** - Elementos flotantes con movimiento orgánico
- **Corazones** - Animación de corazones con pseudo-elementos
- **Hover effects** - Elevación y cambios de color en tarjetas
- **Transiciones suaves** - Todas las interacciones son fluidas

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

El diseño se adapta perfectamente a todos los tamaños de pantalla.

## 🎯 Secciones

1. **Header** - Logo con flor de loto y nombre
2. **Hero/Contacto** - Ilustración emocional + presentación con foto de perfil
3. **Información de Contacto** - Tres tarjetas (Teléfono, Email, Dirección)
4. **Mis Servicios** - Tres servicios con ilustraciones
5. **Footer** - Redes sociales con ondas animadas

## 📝 Personalización

Para personalizar colores, edita las variables SCSS en `src/styles/_variables.scss`:

```scss
$mint-pastel: #TU_COLOR;
$lilac-pastel: #TU_COLOR;
// ... más variables
```

Para crear mixins personalizados, edita `src/styles/_mixins.scss`:

```scss
@mixin tu-mixin {
  // Tu código aquí
}
```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con hot reload
- `npm run build` - Build optimizado para producción
- `npm run preview` - Preview del build de producción
- `npm run lint` - Verificar código con ESLint

## 📄 Licencia

© 2024 Mariana Echeverri - Psicóloga. Todos los derechos reservados.
