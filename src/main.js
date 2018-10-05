const axios = require('axios');

PortalTools.createSlackMessenger = function(selector) {
    $div = $('<div></div>');
    $input = $('<input type="text">');
    $button = $('<button>Send</button>');
    $button.on('click', () => {
        (val => {
            axios.post('https://hooks.slack.com/services/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', JSON.stringify({ "text": val }))
        })($input.val())
    });
    $div.append($input);
    $div.append($button);
    $(`#${selector}`).html($div);
}

PortalTools.report = function(report) {
    axios.post('https://hooks.slack.com/services/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', JSON.stringify({ "text": report }))
}
