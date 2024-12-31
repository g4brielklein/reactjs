export class ResourceNotFoundError extends Error {
    constructor(message, props) {
        super(message || 'Resource not found');

        this.name = "ResourceNotFoundError"
        this.message = message || "The wanted resource was not found"
        this.statusCode = props?.statusCode || 404;
    }

    toJSON() {
        return {
            name: this.name,
            status_code: this.statusCode,
        }
    }
}

export class InternalServerError extends Error {
    constructor(message, props) {
        super(message || "Internal Server Error");

        this.name = "InternalServerError";
        this.statusCode = props?.statusCode || 500;
    }

    toJSON() {
        return {
            name: this.name,
            status_code: this.statusCode,
        }
    }
}
