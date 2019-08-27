$div = $('<div></div>');
$input = $('<input type="text">');
$button = $('<button>Send</button>');
$button.on('click', () => alert("i've been clicked"));
$div.append($input);
$div.append($button);
$("#app").html($div);