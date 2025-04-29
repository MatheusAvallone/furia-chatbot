self.addEventListener('install', event => {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('fetch', event => {
    // Aqui podemos adicionar cache futuramente
  });