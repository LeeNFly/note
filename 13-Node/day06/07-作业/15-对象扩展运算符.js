let obj = {
    money: 1000,
    sing() {
        console.log('我会唱歌!!!')
    }
}

let obj2 = { ...obj, age: 14, name: 'zzz'}

console.log(obj2)
obj2.sing()
console.log(obj2.sing === obj.sing)
