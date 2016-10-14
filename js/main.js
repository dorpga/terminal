jQuery(function($, undefined) {
    $('#tty').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: 'Terminal.js',
        name: 'tty',
        height: 720,
        prompt: '# '
    });
});
