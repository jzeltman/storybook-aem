const inquirer = require('inquirer');
const editJsonFile = require('edit-json-file');

module.exports = config => {
    const questions = [
        {
            type: 'fuzzypath',
            name: 'packageJson',
            itemType: 'file',
            depthLimit: 3,
            rootPath: process.cwd(),
            default: `${process.cwd()}/package.json`,
            excludePath: nodePath => {
                if (nodePath.startsWith('node_modules') || 
                    nodePath.startsWith('.git') || 
                    nodePath.startsWith('.vscode') || 
                    nodePath.startsWith('.settings')) return true;
                else return false;
            },
            message: 'Where is your package.json file?'
        },
        {
            type: 'fuzzypath',
            name: 'uiApps',
            itemType: 'directory',
            depthLimit: 3,
            rootPath: process.cwd(),
            excludePath: nodePath => {
                if (nodePath.startsWith('node_modules') || 
                    nodePath.startsWith('.git') || 
                    nodePath.startsWith('.vscode') || 
                    nodePath.startsWith('.settings')) return true;
                else return false;
            },
            message: 'Where is your ui.apps folder?'
        },
        {
            type: 'input',
            name: 'namespace',
            rootPath: process.cwd(),
            message: 'What is the project namespace?',
            filter: val => val.toLowerCase()
        }
    ];

    return inquirer.prompt(questions).then(response => { 
        config = { 
            ...config, 
            namespace: response.namespace, 
            packageJson: response.packageJson,
            uiApps: response.uiApps,
            jcrRootPath: `${response.uiApps}/src/main/content/jcr_root`
        };

        let file = editJsonFile(`${config.packageJson}`);
            file.set('storybook-aem', config);
            file.save();
            
        return config; 
    });
}