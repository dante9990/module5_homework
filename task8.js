let arr = new Map([

    ["1", "string"],

    [1, "number"],

    [true, "boolean"]

]);

for (let elem of arr) {

    console.log(`Ключ — ${elem[0]}, значение — ${elem[1]}`);

}