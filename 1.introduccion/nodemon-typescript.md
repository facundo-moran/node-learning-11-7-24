# Node con TypeScript con Nodemon

```sh
# 1. Instalar TypeScript y tipos de Node (dependencia de desarrollo)

$ npm i -D typescript @types/node

# 2. Inicializar el archivo de configuración de TypeScript (Se puede configurar al gusto)

$ npx tsc --init --outDir dist/ --rootDir src

# 3. Traspilar código fuente (opcional)

$ npx tsc
$ npx tsc --watch

# 4. Configurar Nodemon y Node-TS

$ npm install -D ts-node nodemon

# 5. Crear archivo de configuración de Nodemon en raiz (nodemon.json)

{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}

# 6. Scripts para ambiente local (package.json)

{
    "scripts": {
        ...,
        "start": "nodemon"
        "start": "npx nodemon" //en caso de no instalar nodemon
    }
}

# 7. Instalar rimraf (Herramienta que funciona similar al rm -f) eliminar directorio

$ npm install -D rimraf

# 8. Scripts para ambiente productivo y para construir

{
    "scripts": {
        ...,
        "build": "rimraf ./dist && tsc",
        "start:prod": "npm run build && node dist/app.js"
    }
}
```

### Referencias
- [Node JS with Typescript](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)