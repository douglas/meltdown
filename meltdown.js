if (Meteor.is_client) {
    window.onload = function() {
        var textpad = document.getElementById("text");
        var preview = document.getElementById("preview");

        var converter = new Showdown.converter({
            'github_flavouring': true,
            'tables': true
        });

        var handler = function() {
            preview.innerHTML = converter.makeHtml(textpad.value);
            hljs.highlightBlock(preview, '   ', false);
        };

        if (textpad.addEventListener) { // Test for this W3C method before using it
            textpad.addEventListener("keydown", handler, false);
            textpad.addEventListener("keypress", handler, false);
        }
        else if (textpad.attachEvent) { // Test for this IE method before using it
            textpad.attachEvent("onkeydown", handler);
            textpad.attachEvent("onkeypress", handler);
        }
        else { // Otherwise, fall back on a universally supported technique
            textpad.onkeydown = textpad.onkeypress = handler;
        }
    };
}

if (Meteor.is_server) {
    Meteor.startup(function () {
      // code to run on server at startup
    });
}
