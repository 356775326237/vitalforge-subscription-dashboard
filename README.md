VitalForge Subscription Dashboard

Descripción General

Este proyecto es una pequeña aplicación web desarrollada para gestionar una suscripción de usuario dentro de la marca ficticia VitalForge.

El objetivo fue crear una app funcional donde un usuario pueda iniciar sesión, visualizar información de su suscripción, gestionar su plan y revisar métricas útiles dentro de un dashboard.

Demo en vivo: https://vitalforge-subscription-dashboard.vercel.app/

⸻

1. ¿Cómo desglosé el problema antes de empezar?

Antes de comenzar, dividí el reto en partes pequeñas:

* Pantalla de inicio de sesión.
* Sistema de autenticación simulado.
* Dashboard posterior al login.
* Información de suscripción.
* Acciones para gestionar la suscripción.
* Métricas principales.
* Visualización de analítica.

Decidí construir primero la interfaz visual del login, luego conectar el estado de autenticación simulado y después desarrollar el dashboard.

⸻

2. ¿Qué herramientas elegí y por qué? ¿Qué alternativas consideré?

Herramientas utilizadas

* Next.js: para construir una aplicación moderna basada en React.
* React: para manejar componentes e interacción.
* TypeScript: para mayor seguridad y claridad en el código.
* Tailwind CSS: para crear una interfaz moderna y responsive rápidamente.
* Git y GitHub: para control de versiones y entrega del código.
* Vercel: para publicar la aplicación en internet.

Alternativas consideradas

También consideré usar Firebase o Supabase para autenticación real, pero elegí autenticación simulada porque el reto permitía esa opción y me permitió enfocarme en la experiencia del usuario y la estructura del dashboard.

⸻

3. ¿Qué desafíos tuve y cómo los resolví?

Autenticación simulada

El reto pedía que el usuario pudiera registrarse o iniciar sesión. Como la autenticación podía ser simulada, implementé un estado con React para cambiar entre la pantalla de login y el dashboard.

Organización del dashboard

Otro desafío fue decidir qué información mostrar. Elegí métricas relacionadas con suscripción porque aportan valor al usuario y al negocio:

* Plan actual.
* Estado de la suscripción.
* Próxima renovación.
* Ingresos mensuales.
* Usuarios activos.
* Tasa de retención.

Visualización de datos

Para cumplir con la parte de analítica, agregué una gráfica de barras simple que muestra actividad mensual de la suscripción.

⸻

4. ¿Cómo utilicé herramientas de IA? Dame ejemplos concretos.

Utilicé herramientas de inteligencia artificial como apoyo durante el proceso de aprendizaje, investigación y desarrollo.

ChatGPT

Usé ChatGPT para:

* Entender cómo estructurar la aplicación.
* Diseñar el flujo entre login y dashboard.
* Resolver dudas sobre React y estados.
* Organizar la sección de métricas.
* Mejorar el README y explicar el proceso técnico.

Gemini

Utilicé Gemini principalmente durante el primer desafío para generar imágenes de productos VitalForge y mantener una identidad visual coherente entre ambos proyectos.

Documentación e investigación

También consulté documentación y recursos relacionados con Next.js, React, Tailwind CSS, GitHub y Vercel para validar conceptos y entender mejor el flujo de despliegue.

La IA fue usada como apoyo para aprender y resolver problemas, no como reemplazo del criterio propio. Las decisiones finales de diseño, estructura y entrega fueron tomadas durante el desarrollo del proyecto.

⸻

5. Si tuviera más tiempo, ¿qué mejoraría y por qué?

Si tuviera más tiempo, mejoraría el proyecto en estas áreas:

Autenticación real

Implementaría autenticación real con Supabase, Firebase o Auth.js para permitir registro, login y sesiones persistentes.

Base de datos

Conectaría el dashboard a una base de datos para guardar información real de usuarios, planes y pagos.

Gestión real de suscripción

Integraría un sistema de pagos como Stripe para permitir upgrades, pausas y cancelaciones reales.

Analítica avanzada

Agregaría métricas más completas como:

* Conversiones.
* Usuarios nuevos por mes.
* Cancelaciones.
* Ingresos recurrentes mensuales.
* Retención por período.

Mejoras de interfaz

También mejoraría animaciones, estados de carga, validaciones de formulario y experiencia móvil.

⸻

Conclusión

Este proyecto me permitió practicar la construcción de una aplicación más cercana a un producto real, no solo una página informativa.

Aprendí a organizar un flujo de login, construir un dashboard, representar información útil de suscripción y desplegar una aplicación funcional en Vercel.

También reforcé mi aprendizaje de React, Next.js, Tailwind CSS, Git, GitHub y despliegue en producción.
