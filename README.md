# Esaú - Portfolio Personal

Una página de perfil minimalista en dark mode que presenta a Esaú como Developer, Designer y Creator.

## Características

- **Diseño Minimalista**: Interfaz limpia y moderna en modo oscuro
- **Responsive**: Se adapta perfectamente a web, tablet y móvil
- **Carrusel Animado**: Muestra rotativamente "Developer", "Designer" y "Creator"
- **Redes Sociales**: Enlaces a GitHub, Instagram, LinkedIn, Twitter y contacto
- **Skills**: Lista de tecnologías con iconos representativos
- **Animaciones Suaves**: Transiciones y efectos hover elegantes

## Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animaciones)
- JavaScript Vanilla (ES6+)
- Font Awesome para iconos

## Estructura del Proyecto

```
esauop.github.io/
├── index.html          # Página principal
├── css/
│   └── styles.css     # Estilos y responsive design
├── js/
│   └── main.js        # Funcionalidad del carrusel y animaciones
└── README.md          # Documentación
```

## Funcionalidades

### Carrusel de Texto
- Rotación automática cada 3 segundos
- Pausa al hacer hover
- Navegación con teclado (flechas izquierda/derecha)
- Soporte táctil para dispositivos móviles

### Diseño Responsive
- **Desktop**: Layout de 3 columnas (social, contenido, skills)
- **Tablet**: Layout vertical con elementos centrados
- **Móvil**: Layout optimizado para pantallas pequeñas

### Interactividad
- Efectos hover en enlaces sociales y skills
- Animaciones de entrada al cargar la página
- Feedback visual en interacciones

## Personalización

### Cambiar Enlaces Sociales
Edita los enlaces en `index.html` en la sección de `.social-links`:

```html
<a href="https://github.com/tu-usuario" target="_blank" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

### Modificar Skills
Actualiza la lista de skills en `index.html` en la sección de `.skills`:

```html
<div class="skill-item">
    <div class="skill-avatar">
        <i class="fab fa-tu-tecnologia"></i>
    </div>
    <span class="skill-name">Tu Tecnología</span>
</div>
```

### Ajustar Colores
Modifica las variables de color en `css/styles.css`:

```css
:root {
    --primary-color: #00d4ff;
    --background-color: #0a0a0a;
    --text-color: #ffffff;
    --border-color: #333;
}
```

## Uso

1. Abre `index.html` en tu navegador
2. La página se cargará automáticamente con las animaciones
3. El carrusel rotará automáticamente
4. Interactúa con los elementos para ver los efectos hover

## Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles (iOS/Android)

## Licencia

Este proyecto es de uso personal y educativo.
