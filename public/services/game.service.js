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

    register(gameId) {
        const socket = new WebSocket(`ws://${this.baseUrl}:6080/client.register/${gameId}/abc_153665080266086/websocket`);
        socket.onopen = () => {
            socket.send([{type: 'register', address: `lr-message`, headers: {} }])
            socket.send([{type: 'register', address: `game-state-message`, headers: {} }])
        }

        socket.onmessage = (message) => {
            console.log('socket message', message);
        }
        return socket;
    }
}

