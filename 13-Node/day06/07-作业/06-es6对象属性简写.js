const name = '王思聪'
let obj = {
    name: name,
    sing: function (name) {
        console.log('我在听'+ name + '唱歌')
        console.log(this)
    }
}
console.log(obj.name)
obj.sing('张学友')


