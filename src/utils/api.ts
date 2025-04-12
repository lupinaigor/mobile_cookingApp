const BASE_URL = 'https://your-api-url.com/api'; // ← замінити на реальний URL API


class Api {
    private baseUrl: string;

    constructor() {
        this.baseUrl = BASE_URL;
    }

    async get(endpoint: string) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`);
            if (!response.ok) {
                throw new Error(`Помилка запиту: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('GET error:', error);
            throw error;
        }
    }

    async post(endpoint: string, data: any) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`Помилка запиту: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('POST error:', error);
            throw error;
        }
    }
}

const api = new Api();
export default api;
