# SIPAC · Panel administrativo

Código del panel privado de registros vehiculares, versión 0.4.

Panel activo: https://sipac-panel.omcarun.chatgpt.site

## Funcionamiento

Aplicación React/Vinext con API de servidor, base D1 y archivos R2. La autenticación actual depende de ChatGPT Sites. Este repositorio conserva el código; GitHub Pages por sí solo no ejecuta las API ni la base de datos del panel.

Cada expediente genera dos sitios estáticos independientes para GitHub Pages: PDF con QR y consulta con fotografías. Ambos comparten el identificador derivado del UUID del expediente. Los datos de usuarios no se incluyen en este repositorio.

Los documentos son registros privados de SIPAC, no constancias de una autoridad.

## Desarrollo

Instalar dependencias con pnpm. Ejecutar pnpm dev para desarrollo y pnpm build para compilar. La configuración de producción se encuentra en .openai/hosting.json. No subir credenciales ni archivos de entorno.
