class Response {
    constructor(message, data, errors) {
        this.message = message;
        this.data = data;
        this.errors = errors;
    }

    get json() {
        return {
            success: !this.errors || this.errors.length === 0,
            message: this.message,
            data: this.data,
            errors: this.errors,
        };
    }
}

module.exports = Response;