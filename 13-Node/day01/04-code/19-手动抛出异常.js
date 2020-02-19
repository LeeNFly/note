
function sayHello(age) {
    if (typeof age != "number") {
        throw new Error("你传的是个啥、？？？")
    }

    if (age != 18) {
        throw "板砖"
    }
    console.log("你好，我叫潘明, 今年" + age + "岁")
}

sayHello(19);
// sayHello("aklsdfjaksldfjaslkdfj");