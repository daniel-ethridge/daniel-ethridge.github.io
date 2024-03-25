/*
TODO:
    - Look up keywords: static, readonly, difference between them
    - Look up interface vs class in javascript/typescript
    - Look up public and private
*/

export class Tag {
    static readonly ANGULAR = new Tag("Angular", "red");
    static readonly TYPESCRIPT = new Tag("Angular", "darkred");
    static readonly CSHARP = new Tag("C#", "green");
    static readonly UNITY = new Tag("Unity", "lightgreen");
    static readonly WWISE = new Tag("WWise", "darkgreen");
    static readonly COMPOSITION = new Tag("Music Composition", "lightblue");
    
    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}