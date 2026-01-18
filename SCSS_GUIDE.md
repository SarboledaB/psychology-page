# Guía de SCSS - Mariana Echeverri Psicóloga

## 📚 Estructura de Archivos SCSS

### Variables (`src/styles/_variables.scss`)

Contiene todas las variables globales del proyecto:

```scss
// Colores
$mint-pastel: #B8E6E1;
$mint-light: #D4F1EE;
$lilac-pastel: #D4C5E8;
$lilac-light: #E8DFF5;
$purple-text: #6B4C9A;
$teal-dark: #5BA89F;
$warm-white: #FAF9F7;
$text-dark: #4A4A4A;
$text-light: #6B6B6B;

// Tipografía
$font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
$font-script: 'Brush Script MT', cursive, serif;

// Breakpoints
$mobile: 768px;
$tablet: 968px;
```

### Mixins (`src/styles/_mixins.scss`)

Mixins reutilizables para responsive design y animaciones:

#### Responsive Mixins

```scss
@mixin mobile {
  @media (max-width: $mobile) {
    @content;
  }
}

@mixin tablet {
  @media (max-width: $tablet) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$tablet + 1px}) {
    @content;
  }
}
```

**Uso:**
```scss
.elemento {
  font-size: 2rem;
  
  @include mobile {
    font-size: 1.5rem;
  }
}
```

#### Animation Mixins

```scss
@mixin smooth-transition($properties: all, $duration: 0.3s) {
  transition: $properties $duration ease;
}

@mixin float-animation($name, $distance: 20px, $duration: 30s) {
  animation: $name $duration ease-in-out infinite;
  
  @keyframes #{$name} {
    0%, 100% {
      transform: translateY(0);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-#{$distance});
      opacity: 0.4;
    }
  }
}
```

**Uso:**
```scss
.card {
  @include smooth-transition(all, 0.3s);
  
  &:hover {
    transform: translateY(-5px);
  }
}
```

#### Shadow Mixins

```scss
@mixin card-shadow($hover: false) {
  @if $hover {
    box-shadow: 0 8px 25px rgba(107, 76, 154, 0.2);
  } @else {
    box-shadow: 0 4px 15px rgba(107, 76, 154, 0.1);
  }
}
```

**Uso:**
```scss
.card {
  @include card-shadow;
  
  &:hover {
    @include card-shadow(true);
  }
}
```

## 🎨 Módulos de Componentes

Cada componente tiene su propio archivo `.module.scss` que importa las variables y mixins:

```scss
@import '../styles/variables';
@import '../styles/mixins';

.miComponente {
  background: $mint-pastel;
  
  @include mobile {
    padding: 1rem;
  }
}
```

## 🔄 Ventajas de SCSS sobre CSS

1. **Variables**: Reutilización de valores
2. **Nesting**: Jerarquía visual clara
3. **Mixins**: Código reutilizable
4. **Partials**: Organización modular
5. **Operaciones**: Cálculos matemáticos
6. **Funciones**: Lógica avanzada

## 📝 Ejemplos de Uso

### Nesting

```scss
.header {
  padding: 2rem;
  
  .logo {
    display: flex;
    
    &:hover {
      transform: scale(1.05);
    }
  }
}
```

### Variables en Operaciones

```scss
.container {
  max-width: $tablet;
  padding: $spacing * 2;
  margin: 0 auto;
}
```

### Interpolación

```scss
@mixin generate-spacing($property, $value) {
  #{$property}: #{$value}px;
}

.element {
  @include generate-spacing(margin, 20);
}
```

## 🚀 Mejores Prácticas

1. **Usa variables** para todos los colores y tamaños repetidos
2. **Crea mixins** para patrones que se repiten
3. **Organiza** los archivos por componente
4. **Prefija** los archivos parciales con `_`
5. **Anida** con moderación (máximo 3-4 niveles)
6. **Comenta** código complejo

## 📦 Compilación

Vite compila automáticamente los archivos SCSS:

- Los archivos `.scss` se compilan a CSS
- Los módulos mantienen el scope local
- Hot reload funciona perfectamente
- El build de producción optimiza el CSS

## 🔧 Comandos

```bash
# Desarrollo (compila SCSS automáticamente)
npm run dev

# Build (compila y optimiza)
npm run build
```

## 📚 Recursos Adicionales

- [Sass Documentation](https://sass-lang.com/documentation)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Vite CSS Features](https://vitejs.dev/guide/features.html#css)
