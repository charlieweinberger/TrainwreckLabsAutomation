/* An automated javascript console solver for Globle: Capitals. */

// Define all capitals
const capitals = ["Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Algiers", "Amman", "Amsterdam", "Andorra la Vella", "Ankara", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana", "Asunción", "Athens", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basseterre", "Beijing", "Beirut", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau", "Bogotá", "Brasília", "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Cairo", "Canberra", "Caracas", "Castries", "Chisinau", "Colombo", "Conakry", "Copenhagen", "Dakar", "Damascus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Doha", "Dublin", "Dushanbe", "Freetown", "Funafuti", "Gaborone", "Georgetown", "Gitega", "Guatemala City", "Hanoi", "Harare", "Havana", "Helsinki", "Honiara", "Islamabad", "Jakarta", "Jerusalem", "Juba", "Kabul", "Kampala", "Kathmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur", "Kuwait City", "La Paz", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lomé", "London", "Luanda", "Lusaka", "Luxembourg", "Madrid", "Majuro", "Malabo", "Male", "Managua", "Manama", "Manila", "Maputo", "Maseru", "Mbabane", "Mexico City", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Moroni", "Moscow", "Muscat", "N'Djamena", "Nairobi", "Nassau", "Naypyidaw", "New Delhi", "Ngerulmud", "Niamey", "Nicosia", "Nouakchott", "Nuku'alofa", "Oslo", "Ottawa", "Ouagadougou", "Palikir", "Panama City", "Paramaribo", "Paris", "Phnom Penh", "Podgorica", "Port Louis", "Port Moresby", "Port Vila", "Port au Prince", "Port of Spain", "Porto-Novo", "Prague", "Praia", "Pretoria", "Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavík", "Riga", "Riyadh", "Rome", "Roseau", "Saint George's", "Saint John's", "San José", "San Marino", "San Salvador", "Sanaa", "Santiago", "Santo Domingo", "Sao Tome", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Stockholm", "Suva", "Taipei", "Tallinn", "Tarawa", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Thimphu", "Tirana", "Tokyo", "Tripoli", "Tunis", "Ulaanbaatar", "Vaduz", "Valletta", "Vatican City", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw", "Washington, D.C.", "Wellington", "Windhoek", "Yamoussoukro", "Yaoundé", "Yaren", "Yerevan", "Zagreb"];

// Get document elements
const formInputText = document.getElementsByClassName("shadow px-2 py-1 md:py-0 w-full border rounded text-gray-700 dark:bg-slate-200 dark:text-gray-900 focus:outline-none focus:shadow-outline disabled:bg-slate-400 disabled:border-slate-400")[0];
const formSubmitButtom = document.getElementsByClassName("bg-blue-700 dark:bg-purple-800 hover:bg-blue-900 dark:hover:bg-purple-900 dark:disabled:bg-purple-900 disabled:bg-blue-900 text-white font-bold py-1 md:py-2 px-4 rounded focus:shadow-outline")[0];
const answerTextElement = document.getElementsByClassName("text-center font-medium")[0];

let index = 0;

// Loop through all capitals
let interval = setInterval(() => {

    // Print info to console
    console.log(`\nGuess ${index + 1}/${capitals.length}:`);
    console.log(capitals[index]);

    // Guess capital
    formInputText.value = capitals[index];
    formSubmitButtom.click();
    index++;

    // Check if the answer has been found, or if all capitals have been guessed
    if (answerTextElement.innerHTML.slice(0, 23) == "The Mystery Capital is " || index == capitals.length) {
        clearInterval(interval);
    }

}, /* CHANGE THIS ---> */ 500 /* <--- CHANGE THIS */);