# Crud - Prueba tecnica Doction

El siguiente proyecto de CRUD se realiza con React.js
Utilizando como API REST (falsa) json-server https://www.npmjs.com/package/json-server

### Instalación
`npm i `

### Ejecución del proyecto
`npm start`

## JSON-SERVER
Pasos a seguir para usar la API de manera local

### Instalación
`npm install -g json-server`

### Data
 -Crear db.json con la data a utilizar
 ```
 {
    "tasks": [
        {
            "id": "0",
            "title": "Tarea 1",
            "description": "Descripcion tarea 1",
            "responsable": "Cindy Caceres",
            "done": false
        }
    ]
}
```
### Data
`json-server --watch db.json`

### Url disponible
`http://localhost:3000/tasks`

### Dependencias
```
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.62",
    "@types/react": "^18.0.21",
    "@types/react-dom": "^18.0.6",
    "axios": "^0.27.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.1",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.6",
    "typescript": "^4.8.4",
    "uuid": "^9.0.0",
    "web-vitals": "^2.1.4"
  },
```
### Evidencias

![crud](https://github.com/ciyucapa/prueba-tecnica-dation/blob/main/src/utils/LISTA-TAREAS.PNG)<br>
![crud](https://github.com/ciyucapa/prueba-tecnica-dation/blob/main/src/utils/EDITAR-TAREA.PNG)<br>
![crud](https://github.com/ciyucapa/prueba-tecnica-dation/blob/main/src/utils/CREAR-TAREA.PNG)<br>
![crud](https://github.com/ciyucapa/prueba-tecnica-dation/blob/main/src/utils/ULR-API.PNG)<br>