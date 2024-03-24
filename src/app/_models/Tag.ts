/*
TODO:
    - Look up keywords: static, readonly, difference between them
    - Look up interface vs class in javascript/typescript
    - Look up public and private
*/

export class Tag {
    static readonly ANGULAR = new Tag("Angular", "red");
    static readonly TYPESCRIPT = new Tag("Angular", "red");
    
    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}