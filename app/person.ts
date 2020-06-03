interface Person {
    name: string;
    //A question mark after an interface member name marks it as optional. Objects that implement the interface aren't required to implement that member.
    age?: number;
    formatName: () => string;
}