FROM node as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve stage
FROM nginx:1.25.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
# (Note: use /app/build instead of /app/dist if using Create React App)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]