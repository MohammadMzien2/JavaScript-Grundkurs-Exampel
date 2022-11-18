/*
* TODO:
    * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
    * `#petslist` med info om varje pet:
 *
 * NAME is a SPECIES of AGE year(s) old.
 * His owner is OWNER and his favorite hobbies is to HOBBIES.
 

// Array of pets
const pets = [
    {
        name: "Mr Barksby",
        species: "Dog",
        age: 5,
        hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
        owner: {
            name: "Mr Beans",
            age: 57,
        },
        sound: "WOOOFF!",
        speak() {
            console.log(`${this.name} sound: ${this.sound}`);
        }
    },
    {
        hobbies: ["Be cute"],
        species: "Kitten",
        age: 1,
        name: "Meow Jr",
        sound: "meooow!",
        meowCounter: 0,
        speak() { // same as writing "speak: function() {}"
            this.meowCounter++;
            console.log(this.sound);
            console.log(`Meowed times today: ${this.meowCounter}`);
        }
    },
    {
        hobbies: ["Be cute"],
        species: "Old Kitten",
        age: 0,
        name: "Meow Sr",
        sound: "meooow!",
        meowCounter: 0,
        speak() { // same as writing "speak: function() {}"
            this.meowCounter++;
            console.log(this.sound);
            console.log(`Meowed times today: ${this.meowCounter}`);
        }
    }
];

const petslistEl = document.querySelector('#petslist')

// loop over pets and pass each pet to the function
// en argument man behöver inte med det är okej() flera argument är måste ha ()
pets.forEach((pet) => {
    // first time pet will be pets [0]
    // second time pet will be pets [1]


    // create a string that will contain the info
    let info;
    if (pet.owner) {
        // yay pet had an owner
        info = `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner.name} and his age ${pet.owner.age}</li>`;
        console.log(info);
    }
    else {
        // pet had no owner
        info = `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. please adopt him!</li>`;
        console.log(info);
    }


    // append the string to the <ul> 's innerhtml
    petslistEl.innerHTML += info;

    // annan method och använda den
    // let info = "Pet's name is:" + pet.name + "and age is:" +
});
*/