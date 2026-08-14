class Response {
    constructor(message, data, error) {
        this.success = !error;
        this.message = message;
        this.data = data;
        this.error = error;
    }

    get json() {
        return {
            success: this.success,
            message: this.message,
            data: this.data,
            errors: this.error,
        };
    }
}

module.exports = Response;