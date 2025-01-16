// === Fire Emblem as example ===

let enemyHP = 30;
let heroHP = 30;
let enemyHP2 = 45

let attack = 7; // later on we can add an array of attack by weapon and it's dmg
console.log(`Your HP is: ${heroHP}`);
console.log(`Enemy HP is: ${enemyHP}`);


// Attack enemy only once
console.log("Attack the enemy!");
enemyHP -= attack; // deduct the attack dmg from the enemy's HP
console.log(`Enemy's HP is now ${enemyHP} and your HP is: ${heroHP}`);

console.log("Enemy's turn to attack!");
heroHP-= attack; // deduct the attack dmg from the HP
console.log(`Your HP is: ${heroHP} and Enemy's HP is: ${enemyHP}`);



// Attack enemy until HP reach 0
while (enemyHP >= 0) {
	console.log("Attack the Enemy!");
	enemyHP -= attack; //decrease HP by attack interger
	console.log(`Enemy's current HP: ${enemyHP}`);	
}
console.log("Enemy defeated!");