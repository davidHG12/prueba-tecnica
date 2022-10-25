# prueba-tecnica
MANUAL DE DESPLIEGUE
- Prerequisitos:
  - Intalar MySql Server
  - Instalar NodeJS (npm)

Para ejecutar la aplicación en primer lugar es necesario crear la base de datos por lo que se debe sguir el siguiente procedimiento:
  1. Crear una MySql Connection con la siguiente configuración y la contraseña debe ser "admin":
  ![image](https://user-images.githubusercontent.com/57112587/197796784-fc1ea0e3-25b0-45f1-a62d-052ff4b67235.png)
  2. Ejecutar los archivos .sql contenidos en la carpeta '\scriptsDB' de este repositorio en el seguiente orden (Puede usar las herramienta MySQL Workbench o MySql Shell): 


    2.1 crearDB
    2.2 crearTabla
    2.3 crearRegistros
    
    
  3. Abrir la consola y ubicarse en la ruta donde haya guardado el repositorio. Subir al nivel de la carpeta backend y ejecutar el siguiente comando o script:

    npm start
    
  4. Abrir otro terminal dejando el anterior ejecutando en segundo plano. Repetir el mismo procedimiento, es decir, entrar a la ruta del repositorio pero esta vez subr al nivel de la carpeta frontend y ejecutar el comando o script:

    npm start
    
Con esto ya puede hacer uso de la aplicación.



