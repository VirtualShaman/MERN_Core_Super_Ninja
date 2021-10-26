class Ninja{
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        let stats = `Name:${this.name} // Health:${this.health} // Strength:${this.strength} // Speed:${this.speed}`
        console.log(stats)
    }
    drinkSake(){
        this.health += 10
    }
}

ninja1 = new Ninja("Donnie", 50)

// console.log(ninja1)
// ninja1.sayName()
// ninja1.showStats()
// ninja1.drinkSake()
// ninja1.showStats()


class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();