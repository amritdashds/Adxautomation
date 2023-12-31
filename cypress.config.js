const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:true,
    defaultCommandTimeout:6000,
    setupNodeEvents(on, config) 
    {
      // implement node event listeners here
    },
    specPattern : 'cypress/e2e/Testcases'
  },
});
