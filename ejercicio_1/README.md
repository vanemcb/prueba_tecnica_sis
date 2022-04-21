## Configuraciones
A continuación se describen los pasos a seguir para ejecutar la aplicación localmente:

**Paso 1:** clonar el repositorio
```
git clone https://github.com/vanemcb/prueba_tecnica_sis.git
```
**Paso 2:** configuración de la base de datos.

La aplicación funciona con mysql, la conexión está configurada con el usuario: "root", contraseña: "root" y host: "localhost". Si se necesita cambiar esta configuración se puede hacer modificando el archivo */ejercicio_1/rest_api_login/src/database.js*

Se debe ingresar a mysql para crear la base de datos y la tabla, todo esto se puede hacer utilizando las querys del archivo */ejercicio_1/rest_api_login/src/db.sql*

**Paso 3:** ir a la ruta */ejercicio_1/rest_api_login* y ejecutar en la terminal:
```
npm install
npm run dev
```
Con esto instalamos todas las dependencias e iniciamos la REST API.

**Paso 4:** ir a la ruta */ejercicio_1/crud_login* y ejecutar en la terminal:
```
npm install
ng serve --open
```
Con esto instalamos todas las dependencias y abrimos la aplicación en el navegador.

## API REST
A continuación listo los endpoints :

* GET /api/users --> devuelve una lista con todos los usuarios registrados.

* GET /api/users/id --> devuelve un diccionario con la información correspondiente al usuario del id ingresado.

* POST /api/add --> para agregar un nuevo usuario.

* PUT /api/update/id --> actualiza la información correspondiente al usuario del id ingresado.

* DELETE /api/delete/id --> elimina el usuario correspondiente al id ingresado.

## Video

Video del funcionamiento de la aplicación web.

[![IMAGE ALT TEXT](http://img.youtube.com/vi/Fxdsynvdd3U/0.jpg)](http://www.youtube.com/watch?v=Fxdsynvdd3U "CRUD Video")



