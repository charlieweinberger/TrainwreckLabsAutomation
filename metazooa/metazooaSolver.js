// An automated javascript console solver for Metazooa.

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