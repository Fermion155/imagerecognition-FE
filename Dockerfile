FROM node:22.12.0 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
COPY . .
RUN npm run build

FROM nginx:1.27.3-alpine-slim
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]