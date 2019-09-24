function Math(x,y) {
    this.x= x;
    this.y = y
}

Math.prototype.add = function () {
    return this.x + this.y
}

var sum = new Math(3,6)
console.log(sum.add())
console.log(typeof Math)
console.log(Math.prototype.constructor === Math)
console.log(sum.__proto__ === Math.prototype)


class Math2 {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y
    }
}
var sum2 = new Math2(2,6)
console.log(sum2.add())
console.log(typeof Math2)
console.log(Math2.prototype.constructor === Math2)
console.log(sum2.__proto__ === Math2.prototype)


// function Animal(name) {
//     this.name = name
// }
//
// Animal.prototype.say = function () {
//     console.log(`I am ${this.name}`)
// }
//
// function Dog(name) {
//     this.name = name
//     this.eat = function () {
//         console.log(`${this.name} 正在吃。。。`)
//     }
// }
//
// Dog.prototype = new Animal()
// var xh = new Dog('小黑')
// xh.eat()
// xh.say()

class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name }正在吃。。。`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
    say() {
        console.log(`I am ${this.name}`)
    }
}

var shq = new Dog('哈士奇')
shq.say()
shq.eat()

function loadImg(src) {
    const promise = new Promise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
        img.src = src
    })
    return promise
}

var src = 'https://www.baidu.com/img/baidu_jgylogo3.gif'
var result = loadImg(src)
result.then(function (img) {
    console.log('img.width',img.width)
}, function () {
    console.log('error')
})
result.then(function (img) {
    console.log('img.height', img.height)
})


















