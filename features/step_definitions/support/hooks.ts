import { BeforeStep, Before, After, AfterStep } from '@cucumber/cucumber';

BeforeStep(async function() {
    this.info("Starting Before Step Hook");
});

AfterStep(async function() {
    this.info("Starting After Step Hook");
});

Before(async function() {
    this.info(`Starting Before Hook`)
});

After(async function() {
    this.info("Starting After Hook");
});