import {Given, When, setWorldConstructor, World} from '@cucumber/cucumber';
import { RPWorld } from '@reportportal/agent-js-cucumber';
import axios from "axios";

setWorldConstructor(RPWorld);


Given('I say hello', async function () {
    this.info("Hello");
});

When(`I send a GET request to {string}`, async function (url) {
    await sendGetRequest(this, url);
});

async function sendGetRequest(world: any, url: string) {
    try {
         const res = await axios.get(url);

         if (res.status === 200) {
             await world.info('Successful request');
         }

    } catch (error) {
        await world.error(`Error: ${error}`);
    }
}