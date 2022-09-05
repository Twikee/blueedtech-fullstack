const crypto = require('crypto');

class CharacterEtity {
    constructor(character) {
        this.id = crypto.randomUUID();
        this.name = character.name;
        this.lastName = character.lastName;
        this.skill = character.skill;
        this.age = character.age;
        this.gender = character.gender;
    }

    validate() {
        if (!this.name || this.name < 3)
            throw new Error('O nome precisa ser preenchido');

        if (!this.lastName)
            throw new Error('unknown');

        if (!this.skill)
            throw new Error('A habilidade precisa ser preenchido');

        if (!this.age)
            throw new Error('A idade precisa ser preenchido');

        if (!this.gender)
            throw new Error('unknown');
    }

    getCharacter() {
        return {
            id: this.id,
            name: this.name,
            lastName: this.lastName,
            skill: this.skill,
            age: this.age,
            gender: this.gender
        }
    }
}

module.exports = CharacterEtity;
