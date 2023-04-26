FROM node:18-alpine3.16

WORKDIR /app
COPY frontend frontend
COPY backend backend
RUN cd frontend/ && npm install && npm run build
RUN cd backend/ && npm install && npm run build
RUN mv backend/dist app
RUN mkdir app/public
RUN mv frontend/dist/* app/public
RUN mv backend/node_modules .
RUN rm -rf backend frontend

ENTRYPOINT ["node", "app/server.js"]

