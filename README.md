# Mentor de interfaz de usuario: Sitio web multipágina de turismo espacial.

Esta es una solución para el desafío [Sitio web multipágina de turismo espacial.](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Los desafíos de Frontend Mentor lo ayudan a mejorar sus habilidades de codificación mediante la creación de proyectos realistas.

## Tabla de contenido

- [Resumen](#descripcion-general)
  - [El desafío](#el-reto)
  - [Captura de pantalla](#captura-de-pantalla)
  - [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
  - [Construido con](#construido-con)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)

## Descripción general

![](./src/img/capture.png)

### El reto

Los usuarios deberían poder:

- Ver el Home de la pagina Space Tourism
- Enlaces que nos llevan a varias paginas

### Captura de pantalla

![](./src/img/capture.png)

### Enlaces

- URL de la solución: [https://github.com/Torres2000/space-tourism-website](https://github.com/Torres2000/space-tourism-website)
- URL del sitio en vivo: [https://space-tourism-space-web-site.netlify.app/](https://space-tourism-space-web-site.netlify.app/)

## Mi proceso

### Construido con

- Marcado semántico HTML5
- Propiedades personalizadas de CSS
- Caja flexible
- Cuadrícula CSS
- Flujo de trabajo móvil primero
- [React](https://reactjs.org/) - Biblioteca JS
- [Next.js](https://nextjs.org/) - Marco de reacción
- [Tailwind CSS](https://tailwindcss.com/) - Para estilos

### Lo que aprendí

Aprendi como cambiar el titulo de pagina cuando cambio de pagina utilizando los Metadas de next

```js
//Pagina Principal
export const metadata: Metadata = {
  title: "Space Tourism  ",
  description: "Space tourism multi-page website",
  icons: {
    icon: "./favicon-32x32.png",
  },
};

//Pagina Technology
useEffect(() => {
  document.title = "Space Tourism - Technology";
}, []);
```

## Autor

- Sitio web - [Pedro Torres](https://portafoliowebdevjose.netlify.app)
- Mentor de frontend - [@Torres2000](https://www.frontendmentor.io/profile/Torres2000)

## Agradecimientos

Solo un saludo a todos los demás creadores de Frontend Mentor. Es una experiencia de aprendizaje maravillosa ver otras soluciones y ver cómo otros codificadores crean lo mismo.
