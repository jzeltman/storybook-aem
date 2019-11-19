const fs = require('fs');
const path = require('path');
const npm = require('npm');
const ncp = require('ncp');
const cwd = process.cwd();

module.exports = async config => {
    const packageJSONPath = path.resolve(cwd, config.projectRoot, config.relativeProjectRoot, config.packageJSON)

    const packageJSON = require(packageJSONPath);
    packageJSON['storybook-aem'] = { ...config };
    /*
        Need to figure out relative pathing
        let storybookLocalPath = `${config.uiApps}/.storybook`;
        let storybookAEMPath = `${config.jcrRootPath}/etc/designs/${config.namespace}/storybook`;
        'build-storybook': `build-storybook -c ${storybookLocalPath} -o ${storybookAEMPath}`
    */ 
    packageJSON.scripts = {
        ...packageJSON.scripts,
        'storybook': 'start-storybook -p 4501'
    }

    fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2));

    if (config.storybookLocation) {

        let storybookDirectory = path.resolve(cwd, config.projectRoot, config.relativeProjectRoot, config.storybookLocation);
        if (!fs.existsSync(storybookDirectory)){
            fs.mkdirSync(storybookDirectory);
        }

let configContents = `import { addParameters, addDecorator, configure } from '@storybook/${config.jsFramework}';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addDecorator(withA11y);
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    },
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});

configure(require.context('${config.storybookStoryLocation}', true, /\.stories\.js$/), module);`;

let previewHeadContents = false;
if (config.clientlibs) {
    previewHeadContents = ``;
    config.clientlibs.forEach( clientlib => {
        previewHeadContents += `<script type="text/javascript" src="http://localhost:4502${clientlib.aemPath}.js"></script>\n`;
        previewHeadContents += `<link rel="stylesheet" href="http://localhost:4502${clientlib.aemPath}.css" type="text/css">\n`;
    });
}

        ncp(path.resolve(__dirname,'../../../storybook/'), storybookDirectory, (err) => {
            if (err) return console.error(err);
            console.log(`[storybook-aem] Storybook Files Copied to ui.apps folder: ${config.uiApps}/.storybook`);
    
            fs.writeFile(`${storybookDirectory}/config.js`, configContents, (err) => {
                if (err) throw err;
                console.log(`[storybook-aem] Created ${storybookDirectory}/config.js`);
            });
            if (previewHeadContents) {
                fs.writeFile(`${storybookDirectory}/preview-head.html`, previewHeadContents, (err) => {
                    if (err) throw err;
                    console.log(`[storybook-aem] Created ${storybookDirectory}/config.js`);
                });
            }
        });

        let packages = [
            `webpack`,
            `webpack-cli`,
            `babel-loader`,
            `@storybook/${config.jsFramework}`,
            `${config.jsFramework}-wrapper-components`,
            '@storybook/addon-a11y',
            '@storybook/addon-backgrounds',
            '@storybook/addon-docs',
            '@storybook/addon-knobs',
            '@storybook/addon-storysource',
            '@storybook/addon-viewport',
            '@storybook/html',
            'http-proxy-middleware'
        ];

        npm.load({ loaded: false }, (err) => {
            if (err) throw err;
            
            console.log('[storybook-aem] Installing Storybook dependencies');
            npm.commands.install(packages, (installError, data) => {
                if (installError) throw installError;
            });

            npm.on('log', (message) => console.log(message));
            console.log('[storybook-aem] When installation is complete, run `npm run storybook` to start storybook on port 4501')
        });
    }

    return config;
}