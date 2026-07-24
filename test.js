let s = "hello";
console.log(s);

let a = 78;

if (a > 30) {
    let a = 100;
    console.log("a inside the block = " + a);
}

console.log("a outside the block = " + a);

const sum = function(a, b) {
    return a + b;
};

const data = sum(5, 10);
console.log("Result of addition is: " + data);

const msg = () => {
    console.log("Hello");
};

msg();