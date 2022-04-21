## Configuraciones
A continuación se describen los pasos a seguir para ejecutar la aplicación localmente:

**Paso 1:** clonar el repositorio
```
git clone https://github.com/vanemcb/prueba_tecnica_sis.git
```
**Paso 2:** configuración de la base de datos.

La aplicación funciona con mysql, la conexión está configurada con el usuario: "root", contraseña: "root" y host: "localhost".

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

