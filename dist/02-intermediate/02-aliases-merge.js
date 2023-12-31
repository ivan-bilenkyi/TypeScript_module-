const exampleUnion = {
    a: 'a',
    b: 'b',
    c: 1,
    f: true,
    z: null
};
const user = {
    roleId: 0,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
};
export const developer = {
    roleId: 1,
    login: "employee",
    email: 'em@yahoo.com',
    password: "qwerty",
    firstName: "Bob",
    lastName: "Forston",
    contractStart: new Date(2023, 9, 30),
    skills: ['JS', 'TypeScript'],
    phone: "",
    level: "junior",
    say: () => {
        console.log("Function -> void");
    },
    log: (id) => {
        return `id: ${id}`;
    }
};
//# sourceMappingURL=02-aliases-merge.js.map