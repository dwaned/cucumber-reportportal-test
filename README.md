# cucumber-reportportal-test
This repository contains a sample project to test the new ReportPortal agent-js-cucumber v5.1.0


Requirements:
- Local ReportPortal (v5.7.3) running on your machine
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm) installed on your machine
- Change token and endpoint in rpConfig.json
- Create a new project in ReportPortal and update rpConfig.json accordingly


I have created a script to run the cucumber test run multiple times (default set to 10). The reason for this is that currently, the result of running the tests is giving random behaviour on ReportPortal side, with some test runs failing to finish, some show `status:interrupted` label and some finish successfully.
Also, sometimes these errors are showing in console:

```
/code/Projects/test-rp-new/node_modules/@reportportal/client-javascript/lib/report-portal-client.js:423
        return this.getRejectAnswer(launchTempId, new Error(`Item "${parentTempId}" not found`));
                                                  ^

Error: Item "sktwi1p31lc3mry3l" not found
```

and

```
/code/Projects/test-rp-new/node_modules/@reportportal/client-javascript/lib/report-portal-client.js:453
            this.map[tempId].realId = response.id;
                                    ^

TypeError: Cannot set properties of undefined (setting 'realId')
```
