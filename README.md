# FakeStore

## Iteraciones del desarrollo
### Septiembre 2023
![The Store]('./../src/assets/screenshots/The__Store_sept18.png')

### Octubre 2023
![The Store]('./../src/assets/screenshots/The__Store_oct5.png')

## Features

### Carrito de compras
    [x] Leer `BehavioralSubject` de la libreria RxJS
    [x] Implementar un nuevo servicio `store.service.ts` donde el patron de diseño Observable actue como carrito de compras
    [x] Suscribir nuestros componentes        [x] Que muestre la cantidad de productos en el carrito (se puede ver desde Angular Dev Tools)
    [x] Boton `Agregar al carrito` en producto

    [] Desplegable que muestre nuestros productos agregados al carrito (nuevo componente)
    [] Logo de un carrito en nav para abrir el despleagble
    [] Lista de productos en formato reducido
    [] Total al fondo mas IVA y botones (sin funcion) de pasar a pagar

### Formato al catalago
    [x] Titulo estilos
    [x] Borrar fecha y hora
    [x] Formato al boton Ver detalle, y moverlo al lador derecho y en la imagen y el titulo
    [x] Tablet breakpoint a 768px
    [x] boton agregar al carrito

### Formato a navegacion
 [x] Colpaso de menu en mobile tablet
 [x] font style
 [] icono de carrito

### Modificando un producto
    [] En Ver Detalle, boton que abra un formulario con los datos del producto a modificar
    [] Detecta input "touched" y solo manda estos a modificar en el request

### Posting a new product
    [] Slide invocado desde un boton "Nuevo Producto"
        [] Form con detalles del producto nuevo a crear
        [] Boton POST, que verifique los datos antes de enviar la request
        [] Boton POST, que actualice los articulos mostrados en grid

### Borrando un producto
    [] Establecer un input de confirmacion donde tengas que escribir el nombre del producto que quieres eliminar
    [] boton de borrar producto en formato Danger
    [] Confirmar el borrado del producto
    [] Actualizar catalogo

### Ver Detalle
[x] Single Product
    [x] Side bar
    [x] Pasando un producto al side bar para detalles
    [x] Diseño
        [x] Formato de slider, centrado y contenido
        [x] Titulo h2
        [] Precio en color diferente
        [x] Descripcion con formato y responsivo con rem
        [x] Formato a boton Agregar al carrito
        [x]  Formato al boton de cerrar, extrema der -> extrema izq  

### Swiper Slider

Se utiliza el siguiente Web Component

https://swiperjs.com/element

Para la sección de detallar producto.

*¿Por qué?*

Cargar elementos de terceros optimizados y animados es necesario para el uso de la web actual.

[x] Swiper
    [x] Leer docs
    [x] Ver un tutorial
    [x] Aplicar lo que dicen los docs y tutorial
    [x] Mostrar el slider con las imágenes de cada productos
    [] Slider controls

### Angular Instructions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

*Development server*

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

*Code scaffolding*

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

 *Build*

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

 *Running unit tests*

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

 *Running end-to-end tests*

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

*Further help*

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
