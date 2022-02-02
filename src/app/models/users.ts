export class User {
    constructor(
        public readonly id: number,
        public email: string,
        public name: string
    ) {
        //
    }

    get readable(): string {
        return `User called ${this.name} with id ${this.id}`;
    }
}