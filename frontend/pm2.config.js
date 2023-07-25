module.exports = {
    apps: [
      {
        name: 'gb-frontend-3001', // Nombre de la aplicación
        script: 'node_modules/next/dist/bin/next', // Ruta del binario de Next.js
        args: 'start 3001', // Argumentos para el comando "start" de Next.js
        instances: 'max', // Número de instancias (recomendado 'max' para utilizar todos los núcleos de CPU)
        autorestart: true, // Reiniciar automáticamente la aplicación en caso de fallo
        watch: false, // Desactivar el modo watch (Next.js se encargará del hot-reloading)
        max_memory_restart: '1G', // Límite de memoria para reiniciar la aplicación automáticamente
      },
    ],
  };