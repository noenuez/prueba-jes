JES PRUEBA TECNICA
Clonar repositorio
$ git clone https://github.com/noenuez/prueba-jes.git
Frontend
para ajustar la direcion de los servicio frontend\src\app\http\index.ts
Construir
# Ir a carpeta
$ cd frontend
# Instalar las dependencia
$ npm install
# Instalar las dependencia
$ npm start
levantara en el puerto 3000
Backend
Variables de configuracion
 .env
Construir
# Ir a carpeta
$ cd backend
# Instalar librerias
$ npm install
Ejecutar
# Para correr el aplicativo, levanta en localhost:3000
$ npm run start
la migracion se corre al levantra la aplicacion, pero pueden correrse bajo demanda
$ npm run migration:run #Correr migraciones