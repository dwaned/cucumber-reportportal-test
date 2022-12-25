export default {
    require: [
        './step_definitions/**/*.js'
    ],
    common: [
        "--format-options {'snippetInterface': 'synchronous', 'printAttachments': true}"
    ],
    format: [
        'html:report/cucumber-report.html',
        'json:report/cucumber-report.json',
        '@cucumber/pretty-formatter'
    ],
    publishQuiet: true,
    failFast: true,
    retry: 0,
    parallel: 1
}
