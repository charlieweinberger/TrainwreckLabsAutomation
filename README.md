# Trainwreck Labs Automation

Automated javascript solvers for Trainwreck Labs' [Globle](https://globle-game.com/), [Globle: Capitals](https://globle-capitals.com/), and [Metazooa](https://metazooa.com/). Copy the code below and paste it into the DevTools console on your browser while playing either game, and watch it automatically guess every possible country/capital/animal in alphabetical order. To speed up or slow down the program, modify the `delay` variable, set in milliseconds (Only for Globle/Globle: Capitals). Works in practice games too!

Inspired by [github.com/roman015/InfiniteCraftAutomation](https://github.com/roman015/InfiniteCraftAutomation).

## Globle

```javascript:
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
"Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
"Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
"Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
"Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
"Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
"Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
"El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
"Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
"Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
"Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan",
"Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
"Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi",
"Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
"Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
"Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
"North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
"Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of the Congo", "Romania",
"Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
"Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
"Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
"South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
"Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga",
"Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
"United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
"Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

const formInputClassName = `shadow px-2 py-1 md:py-0 w-full border rounded text-gray-700
                            dark:bg-slate-200 dark:text-gray-900 focus:outline-none
                            focus:shadow-outline disabled:bg-slate-400 disabled:border-slate-400`;
const formSubmitClassName = `bg-blue-700 dark:bg-purple-800 hover:bg-blue-900 dark:hover:bg-purple-900 
                             dark:disabled:bg-purple-900 disabled:bg-blue-900 text-white font-bold
                             py-1 md:py-2 px-4 rounded focus:shadow-outline`;
const answerTextClassName = "text-center font-medium";

let index = 0;
let delay = 500; // CHANGE THIS

let interval = setInterval(() => {

    console.log(`\nindex: ${index}`);
    console.log(`country: ${countries[index]}`);

    // guess country
    document.getElementsByClassName(formInputClassName)[0].value = countries[index];
    document.getElementsByClassName(formSubmitClassName)[0].click();
    index++;

    // check if answer is found or all countries have been guessed
    answerText = document.getElementsByClassName(answerTextClassName)[0].innerHTML;
    if (answerText.slice(0, 23) == "The Mystery Country is " || index > countries.length) {
        clearInterval(interval);
    }

    console.log(`index: ${index}`);

}, delay);
```

## Globle: Capitals

```javascript:
const capitals = ["Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Algiers", "Amman", "Amsterdam",
"Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana", "Asunción",
"Athens", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul",
"Basseterre", "Beijing", "Beirut", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau",
"Bogotá", "Brasília", "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest",
"Buenos Aires", "Cairo", "Canberra", "Caracas", "Castries", "Chisinau", "Colombo", "Conakry",
"Copenhagen", "Dakar", "Damascus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dublin", "Dushanbe",
"Freetown", "Funafuti", "Gaborone", "Georgetown", "Gitega", "Guatemala City", "Hanoi", "Harare",
"Havana", "Helsinki", "Honiara", "Islamabad", "Jakarta", "Jerusalem", "Juba", "Kabul", "Kampala",
"Kathmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur",
"Kuwait City", "La Paz", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lomé", "London",
"Luanda", "Lusaka", "Luxembourg", "Madrid", "Majuro", "Malabo", "Male", "Managua", "Manama", "Manila",
"Maputo", "Maseru", "Mbabane", "Mexico City", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo",
"Moroni", "Moscow", "Muscat", "N'Djamena", "Nairobi", "Nassau", "Naypyidaw", "New Delhi", "Ngerulmud",
"Niamey", "Nicosia", "Nouakchott", "Nuku'alofa", "Oslo", "Ottawa", "Ouagadougou", "Palikir",
"Panama City", "Paramaribo", "Paris", "Phnom Penh", "Podgorica", "Port Louis", "Port Moresby",
"Port Vila", "Port au Prince", "Port of Spain", "Porto-Novo", "Prague", "Praia", "Pretoria",
"Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavík", "Riga", "Riyadh", "Rome", "Roseau",
"Saint George's", "Saint John's", "San José", "San Marino", "San Salvador", "Sanaa", "Santiago",
"Santo Domingo", "Sao Tome", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Stockholm", "Suva",
"Taipei", "Tallinn", "Tarawa", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Thimphu", "Tirana",
"Tokyo", "Tripoli", "Tunis", "Ulaanbaatar", "Vaduz", "Valletta", "Vatican City", "Victoria", "Vienna",
"Vientiane", "Vilnius", "Warsaw", "Washington, D.C.", "Wellington", "Windhoek", "Yamoussoukro",
"Yaoundé", "Yaren", "Yerevan", "Zagreb"];

const formInputClassName = `shadow px-2 py-1 md:py-0 w-full border rounded text-gray-700
                            dark:bg-slate-200 dark:text-gray-900 focus:outline-none
                            focus:shadow-outline disabled:bg-slate-400 disabled:border-slate-400`;
const formSubmitClassName = `bg-blue-700 dark:bg-purple-800 hover:bg-blue-900 dark:hover:bg-purple-900 
                             dark:disabled:bg-purple-900 disabled:bg-blue-900 text-white font-bold
                             py-1 md:py-2 px-4 rounded focus:shadow-outline`;
const answerTextClassName = "text-center font-medium";

let index = 0;
let delay = 500; // CHANGE THIS

let interval = setInterval(() => {

    console.log(`\nindex: ${index}`);
    console.log(`capital: ${capitals[index]}`);

    // guess capitals
    document.getElementsByClassName(formInputClassName)[0].value = capitals[index];
    document.getElementsByClassName(formSubmitClassName)[0].click();
    index++;

    // check if answer is found or all capitals have been guessed
    answerText = document.getElementsByClassName(answerTextClassName)[0].innerHTML;
    if (answerText.slice(0, 23) == "The Mystery Capital is " || index > capitals.length) {
        clearInterval(interval);
    }

}, delay);
```

## Metazooa

Note: This code is under development and may or may not work at the moment. I'll try to find a stable solution ASAP!

```javascript:
const animals = ["aardvark", "alligator", "alpaca", "anaconda", "anemone", "anglerfish", "anteater", 
"antelope", "arctic fox", "armadillo", "atlas moth", "axolotl", "baboon", "badger", "bald eagle", 
"banana slug", "barn owl", "barnacle", "barracuda", "bass", "beaver", "beluga whale", "bigfin squid", 
"bison", "black bear", "black mamba", "black widow", "blackbird", "blue jay", "blue-ringed octopus",
"boa constrictor", "bobcat", "bonobo", "box turtle", "brain coral", "brown bear", "bullfrog",
"bumble bee", "caiman", "camel", "canary", "capuchin", "capybara", "caribou", "carp", "carpenter ant",
"cat", "catfish", "cattle", "centipede", "chameleon", "cheetah", "chicken", "chimpanzee", "chipmunk",
"clownfish", "cockatiel", "cockatoo", "cockroach", "cod", "condor", "coyote", "cricket", "crocodile",
"crow", "cuttlefish", "deer", "dolphin", "donkey", "dove", "dragonfly", "duck", "dung beetle", 
"earthworm", "earwig", "echidna", "electric eel", "elephant", "elk", "emperor penguin", "emu", 
"falcon", "finch", "fire ant", "firefly", "flamingo", "flying squirrel", "fruit bat", "fruit fly", "gazelle", 
"gecko", "gerbil", "giant octopus", "giant panda", "giant squid", "gibbon", "gila monster", 
"giraffe", "goat", "goblin shark", "goldfish", "goose", "gorilla", "grasshopper", "great white shark", 
"grey parrot", "groundhog", "guinea pig", "guppy", "hammerhead shark", "hamster", "hawk", "hedgehog", 
"hercules beetle", "hermit crab", "hippopotamus", "honey bee", "hornet", "horse", "house fly", 
"human", "humpback whale", "huntsman spider", "hyena", "iguana", "jackal", "jaguar", "jellyfish", 
"kangaroo", "kestrel", "king cobra", "kiwi", "koala", "komodo dragon", "krill", "ladybug", "leech", 
"lemur", "leopard", "lion", "llama", "lobster", "locust", "lynx", "macaque", "macaroni penguin", 
"macaw", "magpie", "man o war", "manatee", "mandrill", "manta ray", "mantis shrimp", "mayfly", 
"meerkat", "millipede", "mink", "mockingbird", "mole", "monarch butterfly", "mongoose", "moose", 
"mosquito", "mouse", "mussel", "narwhal", "nautilus", "nightingale", "ocelot", "opossum", "orangutan", 
"orca", "ostrich", "oyster", "pangolin", "parakeet", "peacock", "pheasant", "pig", "pigeon", 
"pillbug", "piranha", "platypus", "poison frog", "polar bear", "porcupine", "possum", "prawn", 
"praying mantis", "pufferfish", "puffin", "puma", "python", "rabbit", "raccoon", "rat", "rattlesnake", 
"raven", "red fox", "red panda", "rhinoceros", "river otter", "robin", "salamander", "salmon",
"sand dollar", "scorpion", "sea clam", "sea cucumber", "sea lion", "sea otter", "sea snake",
"sea turtle", "sea urchin", "seagull", "seahorse", "seal", "sheep", "silkworm", "skunk", "snail", 
"snapping turtle", "snowy owl", "sparrow", "sperm whale", "squirrel", "starfish", "stick bug",
"sting ray", "swan", "swordfish", "tarantula", "tasmanian devil", "termite", "tiger", "tiger shark", 
"toad", "tortoise", "toucan", "trout", "tuna", "turkey", "two-toed sloth", "vampire bat", "viper", 
"vulture", "walrus", "wasp", "water buffalo", "weasel", "wolf", "wolverine", "wombat", "yak", "zebra"]

const formInputClassName = `border p-1 disabled:bg-gray-300 w-60 border-light-green
                            disabled:border-gray-400 py-2 pl-3 pr-9`;
const formSubmitClassName = `border py-1 px-2 disabled:cursor-default rounded mx-2
                             text-dark-green disabled:text-black bg-white hover:bg-light-green
                             disabled:bg-gray-300 border-light-green hover:border-medium-green
                             disabled:border-gray-400 shadow-md hover:shadow-none
                             disabled:shadow-none transition-all duration-300`;
const formClassName = "space-y-4 h-min";

let index = 0;

let interval = setInterval(() => {

    console.log(`\nindex: ${index}`);
    console.log(`animal: ${animals[index]}`);

    // guess country
    document.getElementsByClassName(formInputClassName)[0].value = animals[index];
    document.getElementsByClassName(formSubmitClassName)[0].click();
    index++;

    // check if answer is found or all animals have been guessed
    formElements = document.getElementsByClassName(formClassName)[0];
    answerText = formElements.getElementsByTagName("p")[0].innerHTML;
    if (answerText.slice(0, 23) == "You win! The answer is " || index > animals.length) {
        clearInterval(interval);
    }

}, 300);
```
