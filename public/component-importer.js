export default function importComponent(componentUrl) {
    return new Promise((resolve, reject) => {

        // Create html import link
        const element = document.createElement('link');

        element.setAttribute('href', componentUrl);
        element.setAttribute('rel', 'import');
        document.head.appendChild(element);

        element.addEventListener('load', () => {
            const templateImport = element.import;
            const template = templateImport.querySelector('template');
            const templateClone = document.importNode(template.content, true);

            resolve(templateClone);
        });

        element.addEventListener('error', (err) => {
            console.error(`error loading ${componentUrl}`);
            reject(err);
        });

    });
}