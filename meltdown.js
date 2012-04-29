if (Meteor.is_client) {
    Meteor.startup(function() {
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

        // Technique from Javascript Definitive Guide (should be removed when
        // using jQuery or something like that)
        if (textpad.addEventListener) { // Test for this W3C method before using it
            textpad.addEventListener("keyup", handler, false);
        }
        else if (textpad.attachEvent) { // Test for this IE method before using it
            textpad.attachEvent("onkeyup", handler);

        }
        else { // Otherwise, fall back on a universally supported technique
            textpad.onkeyup = handler;
        }
    });
}

if (Meteor.is_server) {
    Meteor.startup(function () {
        // Define Minimongo collections to match server/publish.js.
    });
}
