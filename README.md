
# EmprendeU – MVP para Gestión de Emprendimientos Universitarios

**EmprendeU** es una plataforma web desarrollada como proyecto universitario semestral que permite a estudiantes emprendedores registrar sus negocios, publicar productos y llevar un control básico de sus ventas dentro del entorno universitario. Esta versión representa una versión mínima viable (MVP) enfocada en validar la funcionalidad central del sistema.

## 🎯 Objetivo del Proyecto

Desarrollar un sistema funcional que brinde a los estudiantes emprendedores:
- Visibilidad mediante un mini-marketplace.
- Control financiero básico de sus ventas.
- Visualización de métricas relevantes usando gráficas interactivas.

## ✨ Funcionalidades Implementadas

- Registro y login de usuarios (rol "emprendedor").
- Creación y gestión de emprendimientos.
- Publicación de productos (con imagen, nombre, descripción y precio).
- Visualización pública de productos en un marketplace.
- Registro manual de ventas (en línea y físicas).
- Dashboard financiero con visualización de métricas usando D3.js.
- (Opcional) Inscripción de emprendimientos en eventos o ferias.

## 🚫 Funcionalidades fuera del alcance

- No incluye pasarela de pagos.
- No incluye sistema de chat ni interacción entre usuarios.
- No contempla panel administrativo avanzado.
- No se implementa autenticación avanzada por roles múltiples.
- No incluye exportaciones ni notificaciones automáticas.

## 🛠️ Stack Tecnológico

| Categoría              | Tecnología            | Descripción                                        |
|------------------------|-----------------------|----------------------------------------------------|
| Frontend               | React + Vite          | SPA moderna y rápida con estructura basada en componentes. |
| Lenguaje               | TypeScript            | Tipado estático para mejorar robustez del código. |
| Estilos                | Tailwind CSS          | Utilidades CSS para diseño responsivo y ágil.     |
| Visualización de datos | D3.js                 | Gráficas interactivas en el dashboard financiero. |
| Backend                | Python + FastAPI      | API RESTful liviana y rápida para la lógica del sistema. |
| Base de datos          | SQLite + SQLModel     | Almacenamiento local, ideal para desarrollo y prototipado. |
| Autenticación          | JWT (con FastAPI)     | Manejo básico de sesiones mediante tokens.        |
| Comunicación API       | Axios / Fetch         | Llamadas HTTP entre frontend y backend.           |
| Herramientas Dev       | VSCode, Git, GitHub   | Flujo de trabajo moderno para desarrollo local.   |

## 🧑‍🎓 Público Objetivo

- Estudiantes universitarios con emprendimientos activos o en fase inicial.
- Comunidad universitaria como clientes o interesados.
- Profesores o tutores interesados en proyectos aplicados con impacto real.

## 🚀 Instrucciones de Instalación (Próximamente)

Se agregará un instructivo paso a paso para levantar el entorno local, tanto para backend como frontend.

---

### Creador

Isaac Escobar - Lic. Ingeniería en Sistemas

📌 Proyecto desarrollado como parte del curso de Tópicos II en Ingeniería en Sistemas. Esta versión puede ser expandida a futuro como base para una tesis o proyecto mayor.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
