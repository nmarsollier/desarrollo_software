# Backend para Cuatro en Linea

Backend en java para juego cuatro en linea

## Requisitos previos

### MySQL

Instalar la base de datos acorde a la documentacion.

Podemos descargar un docker

```
docker run -d -p 33060:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=secret mysql
```


Crear el esquema 4_linea

## Configuracion

Instalar InlettliJ Community https://www.jetbrains.com/idea/download/

Abrir el directorio base de este proyecto

Ir a la configuracion del Proyecto en el menu de Archivo y agregar un JDK , puede ser Azul Zulo 20.
Esto va a instalar el JDK en la computadora

Instalar maven desde https://maven.apache.org/download.cgi , el proyecto fue realizado con maven 3.6.3. Configurar el PATH

Abrir el archivo application.properties actualizar usuario y contraseña de MySQL

## Ejecucion

Dos opciones: 
1
Ejecutar la clase principal CuatrolineaApplication.

El servidor queda funcionando en http://localhost:3000/

2
Ejecutar el comando 

mvn org.springframework.boot:spring-boot-maven-plugin:run

## Documentacion de Api

Una vez iniciado el servidor podemos ver documentacion de la api en 

Se accede a travez de http://localhost:3000/swagger-ui/index.html

