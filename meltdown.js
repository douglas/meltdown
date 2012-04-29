if (Meteor.is_client) {
    Meteor.startup(function() {
        // Some DOM elements
        var text = $("#text");
        var preview = $("#preview");

        // Declaring the Markdown converter with some features enabled
        var converter = new Showdown.converter({
            'github_flavouring': true,
            'tables': true
        });

        // Every time one press a key, it will convert what is typed to
        // markdown and apply syntax highlight to the code blocks, if any.
        $(text).bind("keyup", function() {
            // covert text code to markdown and put it on the
            // preview area
            $(preview).html(converter.makeHtml($(text).val()));

            // Syntax hightlight for each code block, this has to be done here
            // as we do the syntax highlight in realtime.
            $('code').each(function(i, e) {
                hljs.highlightBlock(e);
            });
        });
    });
}

if (Meteor.is_server) {
    Meteor.startup(function () {
        // Define Minimongo collections to match server/publish.js.
    });
}
