# week4_day1

> ES6: object & array destructuring, REST parameters, default parameters
>
> Node: intro, basic commands & server
>
> MongoDB & MongoDB Compass




## Main points: NPM commands

- `npm init`: comienza un proyecto de NPM creando `package.json`
- `npm install`: instala las dependencias del archivo `package.json` presente en el directorio  (shortcut `npm i`)
- `npm install`*`module_name`*: instala el módulo indicado en el proyecto de NPM (equivalente a `npm i`*`module_name`*), lo que supone:
  - Referenciarlo en el archivo `package.json` bajo la propiedad `dependencies`
  - Incluir sus archivos en el directorio `node_modules`
- `npm uninstall`*`module_name`*: desinstala el módulo indicado en el proyecto de NPM, lo que supone:
  - Eliminarlo del archivo `package.json` bajo la propiedad `dependencies`
  - Excluir sus archivos del directorio `node_modules`
  
> El archivo `.gitignore` permite a Git ignorar directorios y/o archivos.


## Patrón Model Vista Controlador
<img src="https://i.imgur.com/LUhoPkS.png">
