const core = require('@actions/core');

const main = async () => {
    try {
        const string1 = core.getInput('string1', { required: true });
        const string2 = core.getInput('string2', { required: true });

        let result = 0;

        if (string1 > string2) {
            result = 1;
        } else if (string1 < string2) {
            result = -1;
        }

        core.setOutput("result", result);

        if (result == 0 && core.getBooleanInput("failOnEqual")) {
            core.setFailed("string1 == string2");
        } else if (result == 1 && core.getBooleanInput("failOnGreater")) {
            core.setFailed("string1 > string2");
        } else if (result == -1 && core.getBooleanInput("failOnLesser")) {
            core.setFailed("string1 < string2");
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}