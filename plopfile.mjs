export default function (plop) {
    // create your generators here
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is the component name?'
        },
            {
                type: 'list',
                name: 'options',
                message: 'What is the component options?',
                choices: [
                    'component',
                    'service',

                ]
            },
            {
                type: 'editor',
                name: 'props',
                message: 'pls put the names'
            }
        ], // array of inquirer prompts
        actions: [
            {
                type: 'add',
                path: 'src/{{fileCase name}}Entity.tsx',
                templateFile: 'templates/class.template.hbs',
                abortOnFail: true
            }
        ],  // array of actions
    });

    plop.setHelper('fromColonToEquals', function (str) {
        return str.replace(/:/g, '=');
    });

    plop.setHelper('titleCase', (str) => {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    });

    plop.setHelper('fileCase', (str) => {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    })
};