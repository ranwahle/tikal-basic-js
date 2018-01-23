export default function importComponent(componentUrl, componentName, baseParent) {
    function getDirectory(url) {
        const lastIndexOfSlash = url.lastIndexOf('/');
        if (lastIndexOfSlash > 0) {
            return url.substring(0, lastIndexOfSlash);
        }
        return url;
    }

    return new Promise((resolve, reject) => {

        // Create html import link
        const element = document.createElement('link');

        if (baseParent) {
            componentUrl = `${getDirectory(baseParent.getAttribute('data-baseUrl'))}/${componentUrl}`;
        }
        element.setAttribute('href', componentUrl);
        element.setAttribute('rel', 'import');
        document.head.appendChild(element);

        element.addEventListener('load', () => {
            const templateImport = element.import;
            const template = templateImport.querySelector('template');
            const templateClone = document.importNode(template.content, true);
            const resolvedElement = templateClone.querySelector(componentName).cloneNode(true);
            resolvedElement.setAttribute('data-baseurl', componentUrl);
            resolve(resolvedElement);
        });

        element.addEventListener('error', (err) => {
            console.error(`error loading ${componentUrl}`);
            reject(err);
        });

    });
}