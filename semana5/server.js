Panel lateral
346
modulo_02
Actividades Semana 5
Tarea Semana 5

Tarea Semana 5
Requisitos de finalización
Cierre: domingo, 14 de junio de 2026, 23:59
Semana 5
Guía de ejercicios y aplicación práctica
Node.js · Express · Rutas · Endpoints · GET · POST · APIs

Objetivo de la semana
Comprender cómo funcionan las rutas en Express, aprender a crear diferentes endpoints en un servidor Node.js, recibir información mediante parámetros o datos enviados por el usuario, y comenzar a estructurar un pequeño servicio web.

Entrega final
Al finalizar la actividad debes publicar la carpeta semana5 en tu repositorio de GitHub y compartir el enlace del repositorio en Moodle.

Instrucciones generales
Responde las preguntas de selección múltiple.
Realiza los ejercicios prácticos de Node.js y Express.
Guarda las respuestas en los archivos indicados.
Publica la carpeta semana5 en tu repositorio de GitHub.
Comparte el enlace del repositorio en Moodle.
Pista para realizar la actividad
Puedes desarrollar esta actividad de dos formas:

Opción 1: Usar GitHub Codespaces
Esta es la opción recomendada si no tienes Node.js instalado en tu computador. Para que GitHub habilite Codespaces fácilmente, crea un repositorio en blanco, marca la opción Add a README file y luego abre ese repositorio en Codespaces.

Desde GitHub Codespaces tendrás una terminal lista para trabajar con Node.js. Allí podrás crear la carpeta semana5, instalar Express, escribir el archivo server.js, probar las rutas y subir los cambios a GitHub.

Opción 2: Trabajar en tu computador local
También puedes realizar la actividad en tu computador si tienes instalado Node.js, npm, Git y un editor como Visual Studio Code. En este caso, crea un repositorio en blanco en GitHub, marca la opción Add a README file, copia la URL HTTPS de ese repositorio, clónalo en tu computador, crea la carpeta semana5, realiza la práctica, prueba el servidor en http://localhost:3000 y luego sube los cambios a GitHub.

En cualquiera de las dos opciones, el resultado final debe ser el mismo: tu repositorio debe contener la carpeta semana5 con todos los archivos solicitados.

Comandos iniciales según tu entorno
Si trabajas en GitHub Codespaces
Crea un repositorio nuevo en GitHub, selecciona la opción Add a README file y luego abre el repositorio en Codespaces. Después ejecuta:

mkdir semana5
cd semana5
npm init -y
npm install express
touch server.js
touch preguntas-semana5.txt
touch pruebas.txt
touch conceptos-api.txt
touch reflexion-semana5.txt
Si trabajas en tu computador local
Primero crea un repositorio en blanco en GitHub, marca la opción Add a README file, copia la URL HTTPS del repositorio y luego clónalo en tu computador:

git clone URL_DE_TU_REPOSITORIO
cd NOMBRE_DE_TU_REPOSITORIO
mkdir semana5
cd semana5
npm init -y
npm install express
touch server.js
touch preguntas-semana5.txt
touch pruebas.txt
touch conceptos-api.txt
touch reflexion-semana5.txt
Luego podrás ejecutar el servidor con:

node server.js
Y probar las rutas en:

http://localhost:3000
http://localhost:3000/saludo
http://localhost:3000/mensaje/juan
Preguntas de selección múltiple
Crea el archivo preguntas-semana5.txt y guarda allí tus respuestas.

touch preguntas-semana5.txt
Pregunta 1
¿Qué es una ruta (route) en Express?

A. Una carpeta del computador

B. Una dirección que define cómo responde el servidor a una solicitud

C. Un archivo de texto

D. Un sistema operativo

Pregunta 2
¿Qué método HTTP se usa normalmente para consultar información?

A. DELETE

B. GET

C. UPDATE

D. SAVE

Pregunta 3
¿Qué método HTTP se usa normalmente para enviar o registrar información?

A. POST

B. GET

C. OPEN

D. RUN

Pregunta 4
¿Qué significa API?

A. Aplicación para internet

B. Interfaz que permite que sistemas o aplicaciones se comuniquen entre sí

C. Archivo privado de internet

D. Sistema operativo web

Formato sugerido para preguntas-semana5.txt
Pregunta 1:
Respuesta:

Pregunta 2:
Respuesta:

Pregunta 3:
Respuesta:

Pregunta 4:
Respuesta:
Actividad práctica
Pregunta 5 — Crear carpeta de la semana
Dentro de tu proyecto crea la carpeta:

mkdir semana5
Luego entra a ella desde la terminal:

cd semana5
Pregunta 6 — Crear un servidor con varias rutas
Crea el archivo server.js:

touch server.js
Escribe el siguiente código:

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
