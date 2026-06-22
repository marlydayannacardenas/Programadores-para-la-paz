Panel lateral
272
modulo_03
Actividades Semana 7
Tarea Semana 7

Tarea Semana 7
Requisitos de finalización
Cierre: domingo, 21 de junio de 2026, 23:59
Semana 7
Guía de ejercicios y aplicación práctica
Node.js · Express · APIs · Arrays · GET · POST · Reportes comunitarios

Objetivo de la semana
Comprender cómo organizar mejor una API, aprender a manejar listas de datos en memoria, crear rutas para consultar y registrar información, y comenzar a estructurar un pequeño sistema que permita guardar y consultar reportes o registros comunitarios.

Entrega final
Al finalizar la actividad debes publicar la carpeta semana7 en tu repositorio de GitHub y compartir el enlace del repositorio en Moodle.

Instrucciones generales
Responde las preguntas de selección múltiple.
Realiza los ejercicios prácticos en Node.js.
Guarda las respuestas en los archivos indicados.
Publica la carpeta semana7 en tu repositorio.
Comparte el enlace del repositorio en Moodle.
Pista para realizar la actividad
Puedes desarrollar esta actividad de dos formas:

Opción 1: Usar GitHub Codespaces
Esta es la opción recomendada si no tienes Node.js instalado en tu computador. Para que GitHub habilite Codespaces fácilmente, crea un repositorio en blanco, marca la opción Add a README file y luego abre ese repositorio en Codespaces.

Desde GitHub Codespaces tendrás una terminal lista para trabajar con Node.js. Allí podrás crear la carpeta semana7, instalar Express, escribir el archivo server.js, probar la API y subir los cambios a GitHub.

Opción 2: Trabajar en tu computador local
También puedes realizar la actividad en tu computador si tienes instalado Node.js, npm, Git y un editor como Visual Studio Code. En este caso, crea un repositorio en blanco en GitHub, marca la opción Add a README file, copia la URL HTTPS de ese repositorio, clónalo en tu computador, crea la carpeta semana7, realiza la práctica, prueba el servidor en http://localhost:3000 y luego sube los cambios a GitHub.

En cualquiera de las dos opciones, el resultado final debe ser el mismo: tu repositorio debe contener la carpeta semana7 con todos los archivos solicitados.

Comandos iniciales según tu entorno
Si trabajas en GitHub Codespaces
Crea un repositorio nuevo en GitHub, selecciona la opción Add a README file y luego abre el repositorio en Codespaces. Después ejecuta:

mkdir semana7
cd semana7
npm init -y
npm install express
touch server.js
touch preguntas-semana7.txt
touch prueba-reportes.txt
touch ejemplos-reportes.txt
touch reflexion-semana7.txt
Si trabajas en tu computador local
Primero crea un repositorio en blanco en GitHub, marca la opción Add a README file, copia la URL HTTPS del repositorio y luego clónalo en tu computador:

git clone URL_DE_TU_REPOSITORIO
cd NOMBRE_DE_TU_REPOSITORIO
mkdir semana7
cd semana7
npm init -y
npm install express
touch server.js
touch preguntas-semana7.txt
touch prueba-reportes.txt
touch ejemplos-reportes.txt
touch reflexion-semana7.txt
Luego podrás ejecutar el servidor con:

node server.js
Y probar las rutas en:

http://localhost:3000/reportes
Preguntas de selección múltiple
Crea el archivo preguntas-semana7.txt y guarda allí tus respuestas.

touch preguntas-semana7.txt
Pregunta 1
¿Qué es un array en programación?

A. Un tipo de base de datos

B. Una estructura que permite almacenar varios datos en una lista

C. Un servidor web

D. Un archivo del sistema

Pregunta 2
¿Qué método HTTP se utiliza normalmente para consultar datos existentes?

A. POST

B. GET

C. DELETE

D. START

Pregunta 3
¿Qué método HTTP se usa normalmente para agregar información nueva?

A. GET

B. POST

C. READ

D. OPEN

Pregunta 4
¿Cuál es el propósito de una API en una aplicación?

A. Mostrar imágenes

B. Permitir que diferentes sistemas o aplicaciones intercambien información

C. Instalar programas

D. Ejecutar el sistema operativo

Formato sugerido para preguntas-semana7.txt
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

mkdir semana7
cd semana7
Pregunta 6 — Crear un servidor con almacenamiento en memoria
Crea el archivo:

touch server.js
Escribe el siguiente código en server.js:

const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
