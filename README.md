# INF-781 - Guía de Laboratorio 8
# Autenticación JWT con Refresh Tokens, Cookies HttpOnly y Gestión de Sesiones

## Descripción

Este proyecto implementa un sistema de autenticación utilizando JSON Web Tokens (JWT) en NestJS. Se incorpora un mecanismo seguro basado en Access Tokens y Refresh Tokens almacenados mediante cookies HttpOnly, permitiendo la administración de múltiples sesiones por usuario.

El sistema permite:

- Registro de usuarios.
- Inicio de sesión.
- Protección de rutas mediante JWT.
- Renovación automática del Access Token.
- Gestión de sesiones activas.
- Cierre de sesión seguro.

---

# Tecnologías utilizadas

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Passport JWT
- Argon2
- Cookie Parser
- Class Validator
- Class Transformer

---

# Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js 20 o superior
- PostgreSQL
- Nest CLI

Instalar Nest CLI:

```bash
npm install -g @nestjs/cli
```

---

# Instalación

Clonar el repositorio

```bash
git clone https://github.com/Alexiowo/-inf781-jwt-sessions.git
```

Ingresar al proyecto

```bash
cd inf781-jwt-sessions
```

Instalar dependencias

```bash
npm install
```

---


# Base de datos

Crear la base de datos

```sql
CREATE DATABASE jwt_sessions_db;
```

Crear el usuario

```sql
CREATE USER jwt_sessions_user
WITH PASSWORD 'jwt_sessions_password';
```

Otorgar permisos

```sql
GRANT ALL PRIVILEGES
ON DATABASE jwt_sessions_db
TO jwt_sessions_user;
```

---

# Ejecutar el proyecto

Modo desarrollo

```bash
npm run start:dev
```

La aplicación iniciará en

```
http://localhost:3000
```

---

# Endpoints

## Registrar usuario

```
POST /auth/register
```

Body

```json
{
    "email":"usuario@test.com",
    "password":"mipassword123"
}
```

---

## Iniciar sesión

```
POST /auth/login
```

Body

```json
{
    "email":"usuario@test.com",
    "password":"mipassword123"
}
```

---

## Obtener datos del usuario

```
GET /auth/me
```

Header

```
Authorization: Bearer ACCESS_TOKEN
```

---

## Listar sesiones activas

```
GET /auth/sessions
```

Header

```
Authorization: Bearer ACCESS_TOKEN
```

---

## Renovar Access Token

```
POST /auth/refresh
```

No requiere Body.

El Refresh Token se obtiene automáticamente desde la cookie HttpOnly.

---

## Cerrar sesión

```
POST /auth/logout
```

No requiere Body.

---

# Flujo de autenticación

1. Registrar un usuario.
2. Iniciar sesión.
3. El servidor genera un Access Token y un Refresh Token.
4. El Access Token se devuelve en el Body.
5. El Refresh Token se almacena en una cookie HttpOnly.
6. El usuario accede a rutas protegidas mediante el Access Token.
7. Cuando el Access Token expira, se utiliza el Refresh Token para generar uno nuevo.
8. Al cerrar sesión se elimina la cookie y se revoca la sesión.

---


# Evidencias realizadas

Se realizaron correctamente las siguientes pruebas utilizando Bruno:

- Registro de usuario.
- Inicio de sesión.
- Consulta de datos del usuario.
- Listado de sesiones activas.
- Renovación del Access Token.
- Cierre de sesión.
- Intento de renovación posterior al cierre de sesión obteniendo respuesta **401 Unauthorized**.

---

# Autor

**Alejandra Soria Galvarro Menchaca**

Ingeniería Informática

Universidad Autónoma Tomás Frías

