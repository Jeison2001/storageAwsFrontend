# Usa una imagen base con un servidor web ligero
FROM nginx:alpine


# Copia el archivo HTML de tu aplicación al directorio de trabajo de Nginx
COPY index.html /usr/share/nginx/html/index.html
