# JES PRUEBA TECNICA

### Clonar repositorio

```bash
$ git clone https://github.com/noenuez/prueba-jes.git
```

## Frontend

### Variables de configuracion

```
# para cambiar la direccion de los servicios
frontend\src\app\index.ts
```

### Construir

```bash
# Ir a carpeta
$ cd frontend
# Instalar dependencias
$ npm install

```

### Ejecutar

```bash
# levanta en localhost:3000
$ npm start

```

## Backend

### Variables 

```
 .env
```

### Construir

```bash
# Ir a carpeta
$ cd backend
# Instalar librerias
$ npm install

```

### Ejecutar

```bash
# Para correr el aplicativo, levanta en localhost:3001
$ npm run start
```

### Comandos

```bash
# las migraciones se corren al levantar el aplicativo, pero pueden ser ejecutadas bajo demanda de ser necesario
$ npm run migration:run #Correr migraciones
```