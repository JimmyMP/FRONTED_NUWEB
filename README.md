# NucleoWebFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# Estructura del proyecto

## src/app

Donde se tien archivos principales, tambien dondes se creará las carpetas para el proyecto.

### src/app/app-routing.module.ts

Donde se gestiona el sistema de rutas principales

### src/app/app.module.ts

Donde se tiene gestiona los modulos globales y la importación del sitema de rutas principales.

### Moduls

Los módulos son unidades organizativas que agrupan componentes, servicios y otros recursos relacionados en una aplicación. Ayudan a dividir y estructurar el código de manera lógica y modular, lo que facilita la reutilización y el mantenimiento.

### Layouts

Los layouts son estructuras visuales que definen cómo se organizarán y presentarán los elementos en una interfaz de usuario. Los layouts pueden contener encabezados, pies de página, barras laterales y otras partes de la interfaz.

### Pages

Las páginas son componentes que representan vistas individuales o secciones principales de una aplicación. Cada página generalmente tiene su propio contenido y puede contener uno o más componentes.

### Auth

La autenticación se refiere al proceso de verificar la identidad de un usuario. En una aplicación, la autenticación generalmente implica el inicio de sesión y la verificación de credenciales para permitir el acceso a ciertas partes o funciones.

### Components

Los componentes son unidades autónomas y reutilizables de la interfaz de usuario. Representan elementos visuales o funcionales en una aplicación y pueden incluir plantillas, lógica y estilos asociados.

### Core

Se refiere a la base fundamental de una aplicación. En Angular, el módulo "core" puede contener servicios compartidos, interceptores de solicitudes HTTP y guards de rutas.

### Interfaces

Una interfaz define una estructura y contrato que debe seguir un objeto. Describe las propiedades y métodos que se esperan en un objeto concreto y se utiliza para establecer tipos en TypeScript.

### Services

Los servicios son clases que encapsulan lógica reutilizable y funciones compartidas en una aplicación. Pueden manejar tareas como el acceso a datos, la comunicación con servidores y la lógica de negocio.

### Shared

Hace referencia a componentes, servicios, directivas u otros recursos que son compartidos entre diferentes partes de una aplicación. Estos elementos se pueden reutilizar en varias secciones o módulos.

### Site

Se refiere al sitio web público o la interfaz principal que los usuarios finales ven y utilizan. Puede incluir páginas y componentes que muestran información, productos o servicios a los visitantes del sitio.