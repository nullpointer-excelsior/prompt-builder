# Templates para aistentes AI con posibilidad de setear parametros en los prompts

## Tecnologias
* react
* nodejs 18
* tailwindcss 
* tailwndui

### Backend Environment
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
### Run backend
```bash
#!/bin/bash
cd backend/
nvm use 18
npm run start:dev

```

### Run frontend
```bash
#!/bin/bash
nvm use 18
cd frontend/
npm run start:dev

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
