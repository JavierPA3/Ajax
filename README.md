# Primeros pasos con AJAX

## Conceptos clave
Previamente a trabajar con AJAX debemos saber algunos conceptos clave relacionados con el protocolo HTTP.

Los dos métodos HTTP más comunes para enviar una petición a un servidor son GET y POST. Es importante entender la utilización de cada uno.

El **método GET** debe ser utilizado para operaciones no-destructivas — es decir, operaciones en donde se esta "obteniendo" datos del servidor, pero no modificando. Por ejemplo, una consulta a un servicio de búsqueda podría ser una petición GET. Por otro lado, las solicitudes GET pueden ser almacenadas en la cache del navegador, pudiendo conducir a un comportamiento impredecible si no se lo espera. Generalmente, la información enviada al servidor, es enviada en una cadena de datos (en inglés query string).

El **método POST** debe ser utilizado para operaciones destructivas — es decir, operaciones en donde se está incorporando información al servidor. Por ejemplo, cuando un usuario guarda un artículo en un blog, esta acción debería utilizar POST. Por otro lado, este tipo de método no se guarda en la cache del navegador. Además, una cadena de datos puede ser parte de la URL, pero la información tiende a ser enviada de forma separada.

El **tipo de información que se espera recibir** cuando se realiza una petición Ajax puede ser tratada como:
- texto: Para el transporte de cadenas de caracteres simples.
- html: Para el transporte de bloques de código HTML que serán ubicados en la página.
- script: Para añadir un nuevo script con código JavaScript a la página.
- json: Para transportar información en formato JSON, el cual puede incluir cadenas de caracteres, vectores y objetos.
- jsonp: Para transportar información JSON de un dominio a otro.
- xml: Para transportar información en formato XML.


En jQuery, y en algunos casos, el tipo de dato es especificado por el nombre del método, pero en otros casos se lo debe detallar como parte de la configuración del método. Mediante fetch los datos de la respuesta serán "parseados"

## AJAX en jQuery

Visualiza [Cómo realizar llamadas Ajax desde jQuery](https://openwebinars.net/blog/llamadas-ajax-jquery/) e indica:
- qué es AJAX: AJAX permite actualizar partes de una página sin recargar. Técnica web que mejora la experiencia del usuario al hacer solicitudes asíncronas al servidor.


- qué es AJAX engine: AJAX engine es un conjunto de funciones que simplifican el uso de AJAX en desarrollo web.
- las peticiones al servidor van a ser asíncronas. ¿Qué significa?: Peticiones asíncronas implican que la ejecución continúa sin esperar la respuesta del servidor, mejorando la eficiencia y la experiencia del usuario.


- qué es XMLHttpRequest y su relación con jQuery: XMLHttpRequest es una API para solicitudes HTTP asíncronas; jQuery simplifica su uso, proporcionando una interfaz más amigable y compatible con varios navegadores.


- indica los métodos abreviados de AJAX en jQuery: Métodos abreviados en jQuery para AJAX incluyen $.ajax(), $.get(), $.post(), $.getJSON(), y $.getScript(), simplificando el manejo de solicitudes y respuestas asíncronas en desarrollo web.

Implementa la DEMO de la solicitud AJAX al servidor https://jsonplaceholder.typicode.com/. 
```jsx
$(document).ready(function(){
    const URL='https://jsonplaceholder.typicode.com/';
    $('.btn').click(function(){
        $.ajax({
            url: Url,
            type: 'GET',
            success: function(result){
                console.log(result)
            }
            error:function(error){
                console.log(`Error $(error)`)
            }
        })
    })
})

```

## AJAX mediante fetch
Realiza la demo del curso de [OpenWebminar](https://openwebinars.net/academia/aprende/ajax-fetch/?enroll=1) relacionado con fetch (hasta el minuto 31). Añade tantos botones como sea necesario.
El servidor es https://test-node-server-n86p3o8hk-pffranco.vercel.app y la imagen https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1
Entrégala en este repositorio. En este README indica los aspectos claves:ç

- qué es fetch: es una API moderna de JavaScript que permite realizar solicitudes HTTP de forma asíncrona y manejar respuestas, comúnmente utilizada para AJAX en lugar de XMLHttpRequest.
  
- qué es XMLHttpRequest y su relación con fetch: es una antigua API para realizar solicitudes HTTP asíncronas. fetch es una alternativa más moderna y simplificada, ofreciendo una interfaz más limpia y basada en promesas.
  
- qué es una promesa: Una promesa es un objeto en JavaScript que representa la eventual finalización (o falla) de una operación asíncrona y permite el manejo más claro de la lógica de flujo.
  
- indica algún parseador que permite extraer algún tipo de contenido del cuerpo: se utiliza para analizar cadenas JSON en objetos JavaScript, y DOMParser para extraer contenido XML o HTML del cuerpo de una respuesta.

## Otos métodos de petición AJAX 
Existen varias formas de realizar peticiones HTTP mediante AJAX. Las formas  nativas XMLHttpRequest y fetch (nativas, incluidas en el navegador por defecto) son las más usados, pero existen otras:
- Axios.	Librería basada en promesas para realizar peticiones en Node o en navegadores.	
- superagent.	Librería para realizar peticiones HTTP tanto en Node como en navegadores.	
- frisbee.	Librería basada en fetch. Suele usarse junto a React Native.	



De interés
- https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest
- https://learn.jquery.com/ajax/jquery-ajax-methods/#convenience-methods
- https://api.jquery.com/category/ajax/shorthand-methods/
- https://openwebinars.net/blog/llamadas-ajax-jquery/
- https://openwebinars.net/academia/aprende/ajax-fetch/?enroll=1
- https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
- https://lenguajejs.com/javascript/peticiones-http/ajax/#m%C3%A9todos-de-petici%C3%B3n-ajax
