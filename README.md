# Aplicação Node.js com MySql

Exemplo de aplicação REST utilizando express.

## Requisitos
* [Docker](https://www.docker.com/) >= 19.03.6
* [Docker Compose](https://docs.docker.com/compose/) >= 1.24.1

## Usando
```docker
# Iniciar
docker-compose up -d

# Parar
docker-compose down

# Acessar DB
docker exec -it payfast_db_1 bash

# Acessar APP
docker exec -it payfast_app_1 sh
```
