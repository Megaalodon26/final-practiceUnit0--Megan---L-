// Module: Values, Data Types, and Operations
// Track Link/Player's stats
let playerHealth = 100; // Number data type
let playerStamina = 50;
let windSpeed = 10; // environmental effect
playerHealth -= 5; // operation: player takes damage
console.log("Player Health:", playerHealth);

// Module: Stringing Characters Together
// Display messages to the player dynamically
let message = "You feel the wind blowing at " + windSpeed + " mph!";
console.log(message);

// Module: Control Structures and Logic
// Trigger effect if Link's stamina is low
if (playerStamina < 20) {
    console.log("You are exhausted! Slow down.");
} else {
    console.log("You can keep running!");
}

// Module: Building Arrays
// Store inventory items
let inventory = ["Sword", "Shield", "Apple", "Bow", "Arrow"];
console.log("Inventory contains:", inventory);

// Module: Using Arrays
// Filter usable food items
let foodItems = inventory.filter(item => item === "Apple");
console.log("You can eat:", foodItems);

// Module: Creating and Using Objects
// Model a VR game item
let sword = {
    name: "Master Sword",
    damage: 50,
    durability: 100,
    use: function() {
        this.durability -= 10;
        console.log(this.name + " used! Durability now:", this.durability);
    }
};

sword.use(); // call the method

