export default function importComponent(componentUrl) {
    return new Promise((resolve, reject) => {
        const element = document.createElement('link');

        element.setAttribute('href', componentUrl);
        element.setAttribute('rel', 'import');
        document.head.appendChild(element);

        element.onload = () => {
            const templateImport = element.import;
            const template = templateImport.querySelector('template');
            const templateClone = document.importNode(template.content, true);

            resolve(templateClone);
        };

        element.onerror = () => {
            console.error(`error loading ${componentUrl}`)
        }

    });
}