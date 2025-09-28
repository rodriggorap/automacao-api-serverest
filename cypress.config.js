const { defineConfig } = require('cypress');

module.exports = defineConfig({
  requestTimeout: 15000,        // tempo para cy.request 15 segundos
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatorio Serverest API',
    embeddedScreenshots: true,
    saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
