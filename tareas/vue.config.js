//habilita la transpilacion de las dependencias del proyecto para garantizar la compatibilidad con navegadores mas antiguos
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
})
