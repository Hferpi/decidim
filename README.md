# Decidim

**Decidim** es una aplicación SaaS (Software as a Service) diseñada para modernizar y digitalizar los procesos de votación en instituciones educativas. Transforma un sistema tradicional en una experiencia ágil, segura y accesible.

La plataforma ofrece una interfaz sencilla e intuitiva, voto anónimo, escrutinio en tiempo real, gestión de múltiples votaciones simultáneas y notificaciones para mantener a los usuarios informados sobre eventos y resultados.

---

## 🚀 Características principales

- Voto completamente anónimo y seguro  
- Escrutinio automático y resultados en tiempo real  
- Creación y gestión de múltiples votaciones simultáneas  
- Gestión de usuarios y roles  
- Notificaciones y recordatorios de votaciones activas  
- Interfaz moderna, responsive y fácil de usar  
- Control de acceso y autenticación segura  

---

## 🛠️ Stack tecnológico

El proyecto está desarrollado con tecnologías modernas y escalables:

- **Frontend:** Vue.js  
- **Backend:** NestJS  
- **Lenguaje principal:** TypeScript  
- **Diseño y estilos:** Tailwind CSS  
- **Gestor de paquetes:** pnpm  

---

## 📦 Instalación

Clona el repositorio y ejecuta el siguiente comando para instalar las dependencias:

```bash
pnpm install
```

Para iniciar el entorno de desarrollo:
```bash
pnpm run dev
```
## 🎯 Casos de uso

La plataforma está especialmente orientada a centros educativos que deseen automatizar y optimizar sus procesos de votación, tales como:

- Elección de delegado o subdelegado de clase  
- Votaciones del consejo escolar  
- Selección de fechas de exámenes  
- Decisión de actividades extraescolares  
- Elección de destino para viajes de fin de curso  
- Presupuestos participativos escolares  
- Encuestas internas de satisfacción  
- Votaciones para eventos o celebraciones del centro  

También puede adaptarse a:

- Asociaciones estudiantiles  
- Universidades  
- Academias privadas  
- Organizaciones juveniles  
- Pequeñas entidades que necesiten votaciones internas seguras  

---

## 🧩 Arquitectura

El sistema sigue una arquitectura cliente-servidor:

- El frontend consume una API REST desarrollada con NestJS.  
- El backend gestiona la lógica de negocio, autenticación, persistencia de datos y seguridad.  
- La comunicación se realiza mediante endpoints seguros.  
- Preparado para escalar en entornos cloud.  

---

## 🔐 Seguridad

- Voto anónimo garantizado  
- Validación de usuarios  
- Protección de rutas  
- Control de acceso basado en roles  
- Buenas prácticas de desarrollo con TypeScript  

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas.

Si deseas realizar cambios importantes, por favor abre primero una *issue* para discutir la propuesta antes de enviar un *pull request*.

Asegúrate de:

- Mantener la coherencia del código  
- Seguir las buenas prácticas del proyecto  
- Actualizar o añadir tests cuando sea necesario  

---

# 🗺️ Roadmap del Proyecto – Decidim

## 📅 Planificación y Entregas

### 🔹 13/03/2026 — Estructura de Base de Datos
- Diseño del modelo entidad-relación.
- Definición de tablas y relaciones.
- Creación de:
  - Usuarios
  - Roles
  - Votaciones
  - Categorías
  - Subcategorías
  - Votos
- Implementación inicial en la base de datos.
- Validación de integridad referencial.

---

### 🔹 27/03/2026 — Documentación (Parte 1 y 2)

#### 📌 Parte 1: Introducción al proyecto
- Contexto y justificación.
- Problema detectado en los sistemas de votación tradicionales.
- Objetivos generales y específicos.
- Público objetivo.
- Alcance del proyecto.

#### 📌 Parte 2: Análisis del estado actual
- Análisis de los sistemas tradicionales de votación en centros educativos.
- Comparativa entre votación manual y digital.
- Identificación de necesidades.
- Estudio de viabilidad técnica.
- Tecnologías seleccionadas y justificación.

---

### 🔹 17/04/2026 — Parte 3 y 4

#### 📌 Parte 3: Diseño de la solución
- Arquitectura cliente-servidor.
- Diseño de la base de datos definitivo.
- Diagramas UML.
- Diseño de interfaces (mockups).
- Definición de roles y permisos.

#### 📌 Parte 4: Programación del MVP
- Implementación del sistema de autenticación.
- Gestión básica de usuarios.
- Creación de votaciones.
- Sistema de emisión de votos.
- Recuento automático inicial.
- Panel de administrador básico.

---

### 🔹 15/05/2026 — Parte 5 y 6

#### 📌 Parte 5: Implementación completa
- Sistema de recuento en tiempo real.
- Visualización de participación con gráficos.
- Gestión avanzada de categorías y subcategorías.
- Implementación del rol administrador completo.
- Optimización de rendimiento.

#### 📌 Parte 6: Normativa y aspectos legales
- Protección de datos.
- Cumplimiento del RGPD.
- Garantía de anonimato.
- Seguridad en el almacenamiento de datos.
- Política de uso y privacidad.

---

### 🔹 29/05/2026 — Código Final
- Refactorización del código.
- Optimización final.
- Pruebas completas (testing funcional).
- Corrección de errores.
- Entrega de versión estable.
- Documentación técnica final.

---

# 📌 Funcionalidades Principales del Proyecto

El trabajo incluirá los siguientes 7 puntos fundamentales:

1. ✅ Gestión de usuarios  
2. 🗳️ Control de votos  
3. 🗂️ Categorías  
4. 🗂️ Subcategorías  
5. 👤 Rol administrador  
6. 📊 Recuento en tiempo real y participación con gráficos  
7. 🔐 Seguridad de los votos mediante encriptación utilizando el DNI  

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.  

Para más información: https://choosealicense.com/licenses/mit/

---

## 🌍 Language / Idioma

- 🇬🇧 [English](./README.en.md) 