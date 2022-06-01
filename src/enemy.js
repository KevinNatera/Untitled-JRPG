class Enemy {
    constructor() {
        this.currentHealth = 9999
        this.maxHealth = 9999
        this.currentAP = 100
        this.maxAP = 100
        this.attack = 80
        this.defense = 25
        this.magic = 100
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
        console.log(`Random enemy number: ${num}`)
        if (num < 50 ) {
            return this.attackOne.bind(this)();
        } else {
            return this.attackTwo.bind(this)(); //<-- remove parentheses for funny msg
        }

    }
    

    attackOne() {
        let damage = this.attack - this.player.defense 
        if (damage < 1) damage = 1
        if (this.player.currentHealth - damage < 0) damage = this.player.currentHealth
        
        console.log(`Enemy deals ${damage} damage to player!`)
        return [damage,this.player,this]
    }

    attackTwo() {
        const cost = 50
        if (this.currentAP < cost) {
            return this.attackOne.bind(this)(); 
        }
        this.currentAP -= cost

        let damage = this.magic - this.player.magic
        if (damage < 1) damage = 1
        if (this.player.currentHealth - damage < 0) damage = this.player.currentHealth
        console.log(`Enemy deals ${damage} damage to player!`)
        return [damage,this.player,this]
        //rerfactor to return player to change player stats
    }
}


module.exports = Enemy;