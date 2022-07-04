class Makebot {
    constructor() {
        return new Promise((resolve, reject) => {
            var ws = new WebSocket('ws://localhost:3000/api/connect');
            ws.onmessage = () => resolve(ws)
        })
    }
}
