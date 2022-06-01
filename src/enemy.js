class Enemy {
    constructor() {
        this.currentHealth = 230
        this.maxHealth = 230
        this.attack = 80
        this.defense = 25
        this.magic = 999
        this.speed = 50
        this.player = 0
    }

    // dealDamage(player) {

    //     let damage = this.attack - player.defense 
    //     if (damage < 1) damage = 1
    //     if (player.currentHealth - damage < 0) damage = player.currentHealth
        
    //     console.log(`Enemy deals ${damage} damage to player!`)
    //     return damage
    // }

    dealDamage(player) {
        this.player = player
        let num = Math.floor(Math.random() * 100);
        console.log(num)
        if (num < 3 ) {
            attackOne(player)
        } else {
         return this.attackTwo.bind(this)(); //<-- remove parentheses for funny msg
        }

    }
    

    attackOne(player) {
        let damage = this.attack - player.defense 
        if (damage < 1) damage = 1
        if (player.currentHealth - damage < 0) damage = player.currentHealth
        
        console.log(`Enemy deals ${damage} damage to player!`)
        return damage
    }

    attackTwo() {
        let damage = this.magic - this.player.magic
        if (damage < 1) damage = 1
        console.log("check")
        if (this.player.currentHealth - damage < 0) damage = this.player.currentHealth
        console.log(`Enemy deals ${damage} damage to player!`)
        return damage
    }
}


module.exports = Enemy;