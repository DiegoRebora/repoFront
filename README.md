# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
--------------------------------------------
1.PARA SEGUIR: 
1.1. BASICO PARA CUMPLIR:
    -Funcionalidades: cargar y editar (POST/PUT ver clase 20 y/o 21)
        Ver tema formularios, usar el mismo formulario. 
1.2 AVANZADO: 
    -Configurar JWT para que el admin solo vea los botones del CRUD.  //HACER ESTO ANTES DEL LUNES!!!!!!! 

--------------SECUNDARIO- ESTILOS

-Cambiar botón de elementos cargados. 
-Que cuando uno elige CERRAR el formulario, no se muestre el botón de cargado correctamente. 
-Estilo piloto eliminado? 
-Que cuando se edite, recargue la página en ambos. 

 DEPLOY :

 
-Crear archivo por .env (a la hora aprox, de la última clase)
-Subir API (const port=process.env.PORT || 4000) Utilizar Render --Built command = $ npm install // 
Start command: node server.js// Dentro de render, en "envirorment" cargamos la varibale de entorno. 
Después voy a "Logs" --MANUAL DEPLOY//
Luego, en las peticiones, ponemos la dirección del endpoint que nos dio la API. 
Lo mismo, con las imagenes, hay que cambiarle todas las direcciónes
--DEPLOY DE API -- NETLIFY - POST BREAK ÚLTIMA CLASE. 
--OPCIONALES:

    -Carrera: Que muestre las posiciones o al menos el podio. Se puede, con un Json.