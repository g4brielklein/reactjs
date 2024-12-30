export class ResourceNotFoundError extends Error {
    constructor(props) {
        super(props.message || 'Resource not found');

        this.name = "ResourceNotFoundError"
        this.message = props.message || "The wanted resource was not found"
        this.statusCode = props.statusCode || 404;
    }

    toJSON() {
        return {
            name: this.name,
            status_code: this.statusCode,
        }
    }
}
