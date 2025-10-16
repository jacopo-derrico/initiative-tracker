import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', () => {
    // add conditions
    let conditions = [
        { name: 'Blinded', description: 'A blinded creature can\'t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature\'s attack rolls have disadvantage.', color: 'bg-gray-500 text-white' },
        { name: 'Charmed', description: 'A charmed creature can\'t attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature.', color: 'bg-pink-500 text-white' },
        { name: 'Deafened', description: 'A deafened creature can\'t hear and automatically fails any ability check that requires hearing.', color: 'bg-orange-500 text-white' },
        { name: 'Frightened', description: 'A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can\'t willingly move closer to the source of its fear.', color: 'bg-purple-600 text-white' },
        { name: 'Grappled', description: 'A grappled creature\'s speed becomes 0, and it can\'t benefit from any bonus to its speed. The condition ends if the grappler is incapacitated.', color: 'bg-amber-600 text-white' },
        { name: 'Incapacitated', description: 'An incapacitated creature can\'t take actions or reactions.', color: 'bg-slate-600 text-white' },
        { name: 'Invisible', description: 'An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. Attack rolls against the creature have disadvantage, and the creature\'s attack rolls have advantage.', color: 'bg-cyan-400 text-black' },
        { name: 'Paralyzed', description: 'A paralyzed creature is incapacitated and can\'t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.', color: 'bg-red-700 text-white' },
        { name: 'Petrified', description: 'A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated, can\'t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.', color: 'bg-stone-500 text-white' },
        { name: 'Poisoned', description: 'A poisoned creature has disadvantage on attack rolls and ability checks.', color: 'bg-green-600 text-white' },
        { name: 'Prone', description: 'A prone creature\'s only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.', color: 'bg-yellow-600 text-black' },
        { name: 'Restrained', description: 'A restrained creature\'s speed becomes 0, and it can\'t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature\'s attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.', color: 'bg-indigo-600 text-white' },
        { name: 'Stunned', description: 'A stunned creature is incapacitated, can\'t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.', color: 'bg-blue-600 text-white' },
        { name: 'Unconscious', description: 'An unconscious creature is incapacitated, can\'t move or speak, and is unaware of its surroundings. The creature drops whatever it\'s holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.', color: 'bg-black text-white' },
        { name: 'Exhaustion', description: 'Some special abilities and environmental hazards, such as starvation and the long-term effects of freezing or scorching temperatures, can lead to a special condition called exhaustion. Exhaustion is measured in six levels.', color: 'bg-red-500 text-white' },
        { name: 'Concentration', description: 'Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends.', color: 'bg-teal-500 text-white' },
        { name: 'Blessed', description: 'Whenever you make an attack roll or a saving throw, you can roll a d4 and add the number rolled to the attack roll or saving throw.', color: 'bg-yellow-300 text-black' },
        { name: 'Cursed', description: 'You are afflicted with a curse. The specific effects depend on the nature of the curse.', color: 'bg-violet-700 text-white' },
        { name: 'Hasted', description: 'Your speed is doubled, you gain a +2 bonus to AC, you have advantage on Dexterity saving throws, and you gain an additional action on each of your turns.', color: 'bg-lime-400 text-black' },
        { name: 'Slowed', description: 'Your speed is halved, you take a -2 penalty to AC and Dexterity saving throws, and you can use either an action or a bonus action on your turn, not both.', color: 'bg-amber-700 text-white' },
        { name: 'Dodge', description: 'When you take the Dodge action, you focus entirely on avoiding attacks. Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker.', color: 'bg-emerald-400 text-black' },
        { name: 'Hidden', description: 'You are hidden from enemies and have advantage on your next attack roll.', color: 'bg-gray-700 text-white' },
        { name: 'Marked', description: 'You have been marked by an enemy and may be subject to additional attacks or effects.', color: 'bg-rose-600 text-white' },
        { name: 'Raging', description: 'While raging, you have advantage on Strength checks and Strength saving throws, deal extra damage with Strength-based melee attacks, and have resistance to bludgeoning, piercing, and slashing damage.', color: 'bg-red-600 text-white' },
        { name: 'Shield', description: 'You are protected by a magical shield that provides a bonus to your AC.', color: 'bg-sky-500 text-white' }
    ]

    return {
        conditions
    }
})