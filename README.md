# Templates para aistentes AI con posibilidad de setear parametros en los prompts

Esta aplicación almacena y lista distintos templates para prompts con posibilidad de parametrizarlos.

## Tecnologias
* react
* nodejs 18
* tailwindcss 
* tailwndui
* Firebase


### Backend

Para hacer funcionar el backend debes usar firebase y debes definir el siguiente archivo `backend/.env` con las variables de conexion de firebase:

```bash
# .env
FIREBASE_API_KEY=""
FIREBASE_AUTH_DOMAIN=""
FIREBASE_PROJECT_ID=""
FIREBASE_STORAGE_BUCKET=""
FIREBASE_MESSAGING_SENDER_ID=""
FIREBASE_APP_ID=""
FIREBASE_MEASUREMENT_ID=""

```
Ahora levantar la aplicación mediante npm
```bash
#!/bin/bash
cd backend/
nvm use 18 # node envirnoments
npm run start:dev

```

### Frontend

Ejecutar las siguientes instrucciones:

```bash
#!/bin/bash
nvm use 18
cd frontend/
npm run start:dev

```

 ### Docker 
Para ejecutar la aplicación en un contenedor puedes hacer uso del archivo `Makefile` del repositorio. Debes ya ahber definido el archivo `backend/.env`

```bash
#!/bin/bash

make build-image

make run-container

```



## TODO:

- [x] search on PromptList
- [ ] validate empty values when prompt is saved on store
- [ ] button edit prompt on prompt/view
- [x] delete botton must throw a confirmation popup
- [ ] dark theme and palette color
- [x] sync state with backend API
- [ ] Not found component
- [ ] prompt template versioning
