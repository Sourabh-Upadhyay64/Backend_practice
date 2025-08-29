class Animal{
    constructor(name){
        this.name = name;
    }
}
class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks a lot`)
    }
}
const dog = new Dog("Tommy")
dog.speak();
