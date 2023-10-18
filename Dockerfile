# Usa una imagen base con un servidor web ligero
FROM nginx:alpine


# Copia el archivo HTML de tu aplicación al directorio de trabajo de Nginx
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js