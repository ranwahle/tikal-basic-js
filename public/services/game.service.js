let _baseUrl;

const BaseUrlKey = 'base-url';

export class GameService {

    constructor() {
        this.baseUrl = localStorage.getItem(BaseUrlKey || '');
    }

    get baseUrl() {
        return _baseUrl;
    }
    set baseUrl(value) {
        _baseUrl = value;
        localStorage.setItem(BaseUrlKey, value || '');

    }
}

