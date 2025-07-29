<div align="center">

# Countries Board

<img src="https://raw.githubusercontent.com/hrdelarosa/countries-board-prueba-tecnica/master/public/og.jpeg" alt="Countries Board" width="550"/>

**Countries Board** es un proyecto desarrollado como parte de una prueba técnica para aplicar y demostrar mis conocimientos en desarrollo frontend. La aplicación permite explorar información detallada de países alrededor del mundo, incluyendo datos como su capital, población, región, subregión, idiomas, monedas, y países fronterizos.

</div>

<details>
<summary>Tabla de contenidos</summary>

- [Countries Board](#countries-board)
  - [Características principales](#características-principales)
  - [Tecnologías principales](#tecnologías-principales)
  - [APIs utilizadas](#apis-utilizadas)
  - [Funcionalidades](#funcionalidades)
  - [Capturas de pantalla de Countries Board](#capturas-de-pantalla-de-countries-board)
  - [Objetivo del proyecto](#objetivo-del-proyecto)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Instalacion](#instalacion)

</details>

## Características principales

- **Prueba de Orientación Vocacional**: La prueba utiliza es la llamada CHASIDE, que es una prueba automatizada para orientación vocacional.
- **Resultados personalizados e inmediatos**: Los resultados de la prueba son personalizados e inmediatos.
- **Enfoque en la oferta educativa de la UAGro**: La plataforma se enfoca en la oferta educativa de la UAGro, ya que la institución ofrece una amplia gama de carreras que se pueden explorar a través de la prueba.
- **Interfaz moderna, responsiva y accesible**: La plataforma cuenta con una interfaz moderna, responsiva y accesible.
- **Sin necesidad de crear cuenta para realizar la prueba**: La plataforma no requiere crear una cuenta para realizar la prueba.

## Tecnologías principales

- [![TypeScript][TypeScript-badge]][TypeScript-url] - JavaScript con sintaxis para los tipos.
- [![Next.js][Next-badge]][Next-url] - Framework para construir sitios web.
- [![Preact][React-badge]][React-url] - Framework para construir interfaces de usuario
- [![Tailwind CSS][Tailwind-badge]][Tailwind-url] - Un framework CSS que prioriza las utilidades para crear rápidamente diseños personalizados.
- **Heroui** - Biblioteca de componentes UI.

## APIs utilizadas

- Todos los paises
  - RestCountries: https://restcountries.com/v3.1/
- Banderas de los paises
  - FlagsAPI: https://flagsapi.com/

## Funcionalidades

- Busqueda de paises: Permite buscar paises por nombre.
- Filtro de paises: Permite filtrar paises por region.
- Visualizacion de paises: Permite visualizar una cuadricula de paises con cierta información clave.
- Detalles de un pais: Al seleccionar un pais, permite ver los detalles completos de un pais.
- Paginacion: Permite navegar entre las paginas de los paises.
- Modo oscuro: Permite cambiar el modo de la aplicacion entre oscuro y claro.
- Responsive: Permite adaptar la interfaz de usuario a diferentes tamaños de pantalla (mobile, tablet, desktop).

## Capturas de pantalla de Countries Board

![Captura de pantalla home](https://raw.githubusercontent.com/hrdelarosa/countries-board-prueba-tecnica/master/public/home.png)

![Captura de pantalla prueba](https://raw.githubusercontent.com/hrdelarosa/countries-board-prueba-tecnica/master/public/country.png)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Objetivo del proyecto

Este proyecto fue realizado como parte de mi preparación para aplicar a posiciones como desarrollador frontend. Me permitió practicar integración con APIs públicas, estructuración de componentes reutilizables, y mejorar la experiencia de usuario con una interfaz clara y atractiva.

## Estructura del Proyecto

El codigo esta estructurado de manera que sigue las buenas practicas y esta organizadox de la siguiente manera:

```
/
├── public/        # Recursos estáticos e imágenes
├── src/
│   ├── app/       # Estructura principal de las paginas de Next.js
│   │   ├── country/[id]/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── components/ # Componentes reutilizables de la interfaz de usuario
│   ├── config/  # Configuración de la aplicación
│   ├── controllers/    # Controladores y consumo de API
│   ├── hooks/      # Hooks personalizados
│   ├── styles/      # Estilos
│   ├── types/      # Tipos de datos
│   └── utils/      # Utilidades y funciones
├── package.json    # Dependencias y scripts
└── README.md
```

## Instalacion

Si deseas instalar el proyecto, debes de seguir los siguientes pasos:

1. Clonar el repositorio

```bash
git clone https://github.com/hrdelarosa/countries-board
```

2. Instalar las dependencias

```bash
pnpm install
```

3. Ejecutar el proyecto

```bash
pnpm dev
```

4. Acceder a la aplicacion navegando a http://localhost:3000 o al puerto que Next.js te indique.

[Next-url]: https://nextjs.org/
[Next-badge]: https://img.shields.io/badge/NextJs-000000?style=flat&logo=next.js&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TypeScript-badge]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF
[React-url]: https://preactjs.com/
[React-badge]: https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Tailwind-badge]: https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white
[Supabase-url]: https://supabase.com/
[Supabase-badge]: https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge%22
[animations-url]: https://tailwindcss-animations.vercel.app/
[animations-badge]: https://img.shields.io/badge/@midudev/tailwind-animations-ff69b4?style=for-the-badge&logo=node.js&logoColor=white&color=blue
