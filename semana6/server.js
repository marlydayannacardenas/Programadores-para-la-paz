Panel lateral
348
modulo_03
Actividades Semana 6
Tarea Semana 6

Tarea Semana 6
Requisitos de finalización
Cierre: domingo, 14 de junio de 2026, 23:59
Semana 6
Guía de ejercicios y aplicación práctica
Node.js · Express · JSON · req.body · Peticiones POST

Objetivo de la semana
Comprender cómo recibir y procesar datos enviados por el usuario, aprender a trabajar con JSON, entender el uso de req.body en Express y construir un pequeño servicio que registre información enviada desde un cliente.

Entrega final
Al finalizar la actividad debes publicar la carpeta semana6 en tu repositorio de GitHub y compartir el enlace del repositorio en Moodle.

Instrucciones generales
Responde las preguntas de selección múltiple.
Realiza los ejercicios prácticos de Node.js y Express.
Guarda las respuestas en los archivos indicados.
Publica la carpeta semana6 en tu repositorio.
Comparte el enlace del repositorio en Moodle.
Pista para realizar la actividad
Puedes desarrollar esta actividad de dos formas:

Opción 1: Usar GitHub Codespaces
Esta es la opción recomendada si no tienes Node.js instalado en tu computador. Para que GitHub habilite Codespaces fácilmente, crea un repositorio en blanco, marca la opción Add a README file y luego abre ese repositorio en Codespaces.

Desde GitHub Codespaces tendrás una terminal lista para trabajar con Node.js. Allí podrás crear la carpeta semana6, instalar Express, escribir el archivo server.js, probar el servidor y subir los cambios a GitHub.

Opción 2: Trabajar en tu computador local
También puedes realizar la actividad en tu computador si tienes instalado Node.js, npm, Git y un editor como Visual Studio Code. En este caso, crea un repositorio en blanco en GitHub, marca la opción Add a README file, copia la URL HTTPS de ese repositorio, clónalo en tu computador, crea la carpeta semana6, realiza la práctica, prueba el servidor en http://localhost:3000 y luego sube los cambios a GitHub.

En cualquiera de las dos opciones, el resultado final debe ser el mismo: tu repositorio debe contener la carpeta semana6 con todos los archivos solicitados.

Comandos iniciales según tu entorno
Si trabajas en GitHub Codespaces
Crea un repositorio nuevo en GitHub, selecciona la opción Add a README file y luego abre el repositorio en Codespaces. Después ejecuta:

mkdir semana6
cd semana6
npm init -y
npm install express
touch server.js
touch preguntas-semana6.txt
touch prueba-api.txt
touch ejemplo-incidencia.txt
touch reflexion-semana6.txt
Si trabajas en tu computador local
Primero crea un repositorio en blanco en GitHub, marca la opción Add a README file, copia la URL HTTPS del repositorio y luego clónalo en tu computador:

git clone URL_DE_TU_REPOSITORIO
cd NOMBRE_DE_TU_REPOSITORIO
mkdir semana6
cd semana6
npm init -y
npm install express
touch server.js
touch preguntas-semana6.txt
touch prueba-api.txt
touch ejemplo-incidencia.txt
touch reflexion-semana6.txt
Luego podrás ejecutar el servidor con:

node server.js
Y probar la ruta en:

http://localhost:3000/registro
Preguntas de selección múltiple
Crea el archivo preguntas-semana6.txt y guarda allí tus respuestas.

touch preguntas-semana6.txt
Pregunta 1
¿Qué es JSON?

A. Un sistema operativo

B. Un formato de intercambio de datos usado entre aplicaciones

C. Un editor de código

D. Un navegador

Pregunta 2
¿Qué permite express.json() en una aplicación Express?

A. Ejecutar JavaScript

B. Leer datos enviados en formato JSON en una petición

C. Crear bases de datos

D. Crear páginas web

Pregunta 3
¿Dónde se encuentran los datos enviados en una petición POST cuando usamos Express?

A. req.file

B. req.body

C. req.system

D. req.data

Pregunta 4
¿Cuál de las siguientes opciones representa correctamente un objeto JSON?

A. nombre = "Juan"

B. { nombre: Juan }

C. { "nombre": "Juan" }

D. nombre:Juan

Formato sugerido para preguntas-semana6.txt
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

mkdir semana6
cd semana6
Pregunta 6 — Crear un servidor que reciba datos
Crea el archivo:

touch server.js
Escribe el siguiente código en server.js:

const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
