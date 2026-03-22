interface QuestionObj {
  question: string;
  options: string[];
  answer: string;
}

export type QuizQuestions = QuestionObj[];

export const countryQuizData: QuizQuestions = [
  // --- ORIGINAL 20 QUESTIONS ---
  {
    question: "Which country's flag features a red maple leaf in the center?",
    options: ["USA", "Canada", "Peru", "Lebanon"],
    answer: "Canada",
  },
  {
    question: "Which country has the only national flag that is not a quadrilateral (it has five sides)?",
    options: ["Bhutan", "Nepal", "Switzerland", "Vatican City"],
    answer: "Nepal",
  },
  {
    question: "Which country's flag is a simple red circle on a white background?",
    options: ["Japan", "South Korea", "Palau", "Bangladesh"],
    answer: "Japan",
  },
  {
    question: "Which country features a blue 'Star of David' in the center of its flag?",
    options: ["Greece", "Finland", "Israel", "Argentina"],
    answer: "Israel",
  },
  {
    question: "Which country's flag consists of a vertical tricolor of green, white, and red?",
    options: ["Italy", "Ireland", "Mexico", "Hungary"],
    answer: "Italy",
  },
  {
    question: "Which country features the 'Union Jack' in the top-left corner (canton) of its flag?",
    options: ["United Kingdom", "Australia", "India", "South Africa"],
    answer: "Australia",
  },
  {
    question: "Which country's flag has the words 'Ordem e Progresso' written on a blue globe?",
    options: ["Portugal", "Brazil", "Argentina", "Cape Verde"],
    answer: "Brazil",
  },
  {
    question: "Which country features a black eagle, known as the 'Bundesadler', on its flag?",
    options: ["Germany", "Austria", "Egypt", "Albania"],
    answer: "Germany",
  },
  {
    question: "Which country's flag is entirely square in shape?",
    options: ["Belgium", "Switzerland", "Norway", "Denmark"],
    answer: "Switzerland",
  },
  {
    question: "Which country features a golden lion holding a sword on its flag?",
    options: ["Sri Lanka", "Singapore", "Kenya", "Spain"],
    answer: "Sri Lanka",
  },
  {
    question: "Which country's flag features a red field with five yellow stars in the top-left?",
    options: ["Vietnam", "China", "Turkey", "Singapore"],
    answer: "China",
  },
  {
    question: "Which country features an AK-47 assault rifle on its national flag?",
    options: ["Angola", "Mozambique", "Zimbabwe", "Guatemala"],
    answer: "Mozambique",
  },
  {
    question: "Which country's flag consists of two horizontal stripes: blue on top and yellow on the bottom?",
    options: ["Sweden", "Ukraine", "Kazakhstan", "Palau"],
    answer: "Ukraine",
  },
  {
    question: "Which country features a green cedar tree in the center of its white stripe?",
    options: ["Cyprus", "Lebanon", "Canada", "Norfolk Island"],
    answer: "Lebanon",
  },
  {
    question: "Which country features a blue sun with 12 rays on a red and blue flag?",
    options: ["Taiwan", "South Korea", "Vietnam", "Laos"],
    answer: "Taiwan",
  },
  {
    question: "Which country's flag is a vertical tricolor of blue, white, and red?",
    options: ["Netherlands", "France", "Russia", "Thailand"],
    answer: "France",
  },
  {
    question: "Which country has a yellow diagonal cross (saltire) on a green and black background?",
    options: ["Jamaica", "Scotland", "Burundi", "Tanzania"],
    answer: "Jamaica",
  },
  {
    question: "Which country features a large yellow sun with 32 rays on a sky-blue field?",
    options: ["Argentina", "Uruguay", "Kazakhstan", "Philippines"],
    answer: "Kazakhstan",
  },
  {
    question: "Which country's flag features a black, red, and green horizontal tricolor with a red sun rising?",
    options: ["Kenya", "Malawi", "Libya", "Jordan"],
    answer: "Malawi",
  },
  {
    question: "Which country has three horizontal stripes of orange, white, and green with a blue wheel (Ashoka Chakra)?",
    options: ["Niger", "Ireland", "India", "Ivory Coast"],
    answer: "India",
  },

  // --- 30 MORE FLAG QUESTIONS (Total 50) ---
  {
    question: "Which country features a white cross on a red background?",
    options: ["Denmark", "Norway", "Finland", "Iceland"],
    answer: "Denmark",
  },
  {
    question: "Which country's flag is blue with a yellow cross extending to the edges?",
    options: ["Finland", "Sweden", "Norway", "Greece"],
    answer: "Sweden",
  },
  {
    question: "Which country features a red dragon on its national flag?",
    options: ["China", "Wales", "Bhutan", "Vietnam"],
    answer: "Wales",
  },
  {
    question: "Which country's flag features a yellow sun and three yellow stars on a blue and red background?",
    options: ["Philippines", "Malaysia", "Indonesia", "Thailand"],
    answer: "Philippines",
  },
  {
    question: "Which country features a golden yellow eagle with outspread wings on a white background (middle of a tricolor)?",
    options: ["Mexico", "Egypt", "Syria", "Iraq"],
    answer: "Egypt",
  },
  {
    question: "Which country's flag is a tricolor of black, red, and gold stripes?",
    options: ["Belgium", "Germany", "Romania", "Chad"],
    answer: "Germany",
  },
  {
    question: "Which country features a white crescent moon and a star on a red field?",
    options: ["Pakistan", "Turkey", "Tunisia", "Algeria"],
    answer: "Turkey",
  },
  {
    question: "Which country's flag consists of blue and white horizontal stripes with a blue square and white cross in the corner?",
    options: ["Israel", "Greece", "Uruguay", "Finland"],
    answer: "Greece",
  },
  {
    question: "Which country features an orange, white, and green vertical tricolor?",
    options: ["Ireland", "Ivory Coast", "India", "Italy"],
    answer: "Ivory Coast",
  },
  {
    question: "Which country's flag features the 'Southern Cross' constellation on a blue field?",
    options: ["New Zealand", "Brazil", "Samoa", "Papua New Guinea"],
    answer: "New Zealand",
  },
  {
    question: "Which country features a red circle on a green background?",
    options: ["Japan", "Bangladesh", "Palau", "Laos"],
    answer: "Bangladesh",
  },
  {
    question: "Which country's flag is white with a map of the island and two olive branches?",
    options: ["Malta", "Cyprus", "Sicily", "Crete"],
    answer: "Cyprus",
  },
  {
    question: "Which country features a yellow star in the center of a red flag?",
    options: ["China", "Vietnam", "North Korea", "Somalia"],
    answer: "Vietnam",
  },
  {
    question: "Which country's flag has horizontal stripes of blue, white, and red (top to bottom)?",
    options: ["France", "Netherlands", "Russia", "Luxembourg"],
    answer: "Russia",
  },
  {
    question: "Which country features a blue and white 'yin-yang' symbol in the center?",
    options: ["China", "South Korea", "Japan", "Mongolia"],
    answer: "South Korea",
  },
  {
    question: "Which country's flag is a horizontal tricolor of red, white, and black with two green stars?",
    options: ["Egypt", "Iraq", "Syria", "Yemen"],
    answer: "Syria",
  },
  {
    question: "Which country features a shield and two crossed spears on its flag?",
    options: ["Kenya", "Eswatini", "Lesotho", "Tanzania"],
    answer: "Kenya",
  },
  {
    question: "Which country's flag features a red background with a yellow hammer and sickle (historical)?",
    options: ["China", "Soviet Union", "Cuba", "Vietnam"],
    answer: "Soviet Union",
  },
  {
    question: "Which country features a sun with a human face on its flag?",
    options: ["Argentina", "Peru", "Ecuador", "Bolivia"],
    answer: "Argentina",
  },
  {
    question: "Which country's flag is a simple horizontal bicolor of red on top and white on bottom?",
    options: ["Poland", "Monaco", "Indonesia", "Singapore"],
    answer: "Indonesia",
  },
  {
    question: "Which country features a golden yellow 'Druk' (Thunder Dragon)?",
    options: ["Bhutan", "Nepal", "Tibet", "Thailand"],
    answer: "Bhutan",
  },
  {
    question: "Which country's flag has horizontal stripes of red, white, and blue (top to bottom)?",
    options: ["Russia", "Netherlands", "France", "Paraguay"],
    answer: "Netherlands",
  },
  {
    question: "Which country features a large white star on a blue background (canton) with red and white stripes?",
    options: ["USA", "Liberia", "Malaysia", "Chile"],
    answer: "Liberia",
  },
  {
    question: "Which country's flag is a vertical tricolor of blue, yellow, and red?",
    options: ["Romania", "Chad", "Moldova", "Andorra"],
    answer: "Romania",
  },
  {
    question: "Which country features a red and white checkered shield (chequy) on its flag?",
    options: ["Slovakia", "Croatia", "Slovenia", "Serbia"],
    answer: "Croatia",
  },
  {
    question: "Which country features a yellow five-pointed star on a green background with two horizontal yellow stripes?",
    options: ["Ghana", "Senegal", "Suriname", "Togo"],
    answer: "Suriname",
  },
  {
    question: "Which country's flag consists of a blue field with 12 gold stars in a circle?",
    options: ["European Union", "USA", "Cook Islands", "Cape Verde"],
    answer: "European Union",
  },
  {
    question: "Which country features a yellow bird of paradise in flight?",
    options: ["Papua New Guinea", "Fiji", "Kiribati", "Solomon Islands"],
    answer: "Papua New Guinea",
  },
  {
    question: "Which country's flag has a black vertical stripe on the left and a red and green bicolor on the right?",
    options: ["Portugal", "Madagascar", "Benin", "Guinea-Bissau"],
    answer: "Portugal",
  },
  {
    question: "Which country features a yellow sun rising over the sea with a frigate bird flying above it?",
    options: ["Kiribati", "Tuvalu", "Marshall Islands", "Nauru"],
    answer: "Kiribati",
  },

  // --- 25 CAPITAL CITY QUESTIONS ---
  {
    question: "What is the capital city of France?",
    options: ["Lyon", "Marseille", "Paris", "Nice"],
    answer: "Paris",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Osaka", "Kyoto", "Tokyo", "Nagoya"],
    answer: "Tokyo",
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "What is the capital city of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: "Brasília",
  },
  {
    question: "What is the capital city of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Ibadan"],
    answer: "Abuja",
  },
  {
    question: "What is the capital city of Germany?",
    options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
    answer: "Berlin",
  },
  {
    question: "What is the capital city of Italy?",
    options: ["Venice", "Milan", "Rome", "Florence"],
    answer: "Rome",
  },
  {
    question: "What is the capital city of South Korea?",
    options: ["Busan", "Incheon", "Seoul", "Daegu"],
    answer: "Seoul",
  },
  {
    question: "What is the capital city of China?",
    options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
    answer: "Beijing",
  },
  {
    question: "What is the capital city of the United Kingdom?",
    options: ["London", "Manchester", "Birmingham", "Edinburgh"],
    answer: "London",
  },
  {
    question: "What is the capital city of Egypt?",
    options: ["Alexandria", "Cairo", "Giza", "Luxor"],
    answer: "Cairo",
  },
  {
    question: "What is the capital city of Russia?",
    options: ["Saint Petersburg", "Moscow", "Novosibirsk", "Yekaterinburg"],
    answer: "Moscow",
  },
  {
    question: "What is the capital city of Argentina?",
    options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
    answer: "Buenos Aires",
  },
  {
    question: "What is the capital city of India?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
    answer: "New Delhi",
  },
  {
    question: "What is the capital city of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    answer: "Madrid",
  },
  {
    question: "What is the capital city of Mexico?",
    options: ["Guadalajara", "Monterrey", "Mexico City", "Puebla"],
    answer: "Mexico City",
  },
  {
    question: "What is the capital city of Thailand?",
    options: ["Phuket", "Bangkok", "Chiang Mai", "Pattaya"],
    answer: "Bangkok",
  },
  {
    question: "What is the capital city of Turkey?",
    options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    answer: "Ankara",
  },
  {
    question: "What is the capital city of Kenya?",
    options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
    answer: "Nairobi",
  },
  {
    question: "What is the capital city of Saudi Arabia?",
    options: ["Jeddah", "Mecca", "Riyadh", "Medina"],
    answer: "Riyadh",
  },
  {
    question: "What is the capital city of Greece?",
    options: ["Thessaloniki", "Athens", "Patras", "Heraklion"],
    answer: "Athens",
  },
  {
    question: "What is the capital city of Portugal?",
    options: ["Porto", "Lisbon", "Braga", "Coimbra"],
    answer: "Lisbon",
  },
  {
    question: "What is the capital city of Sweden?",
    options: ["Gothenburg", "Malmö", "Stockholm", "Uppsala"],
    answer: "Stockholm",
  },
  {
    question: "What is the capital city of Indonesia?",
    options: ["Jakarta", "Surabaya", "Bandung", "Bali"],
    answer: "Jakarta",
  },

  // --- 25 GEOGRAPHY & LANDMARK QUESTIONS (Total 100) ---
  {
    question: "Which country is the largest in the world by land area?",
    options: ["Canada", "China", "Russia", "USA"],
    answer: "Russia",
  },
  {
    question: "In which country can you find the ancient city of Petra?",
    options: ["Egypt", "Jordan", "Saudi Arabia", "Iraq"],
    answer: "Jordan",
  },
  {
    question: "The Great Barrier Reef is located off the coast of which country?",
    options: ["Brazil", "Australia", "Indonesia", "South Africa"],
    answer: "Australia",
  },
  {
    question: "Which country is both an island and a continent?",
    options: ["Greenland", "Australia", "Madagascar", "Iceland"],
    answer: "Australia",
  },
  {
    question: "The Andes mountain range runs along the western coast of which continent?",
    options: ["North America", "South America", "Africa", "Asia"],
    answer: "South America",
  },
  {
    question: "Which country has the largest population in the world?",
    options: ["India", "China", "USA", "Indonesia"],
    answer: "India",
  },
  {
    question: "Mount Everest is located on the border of which two countries?",
    options: ["India and China", "Nepal and China", "India and Nepal", "Bhutan and China"],
    answer: "Nepal and China",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    answer: "Japan",
  },
  {
    question: "The Nile River primarily flows through which country?",
    options: ["Nigeria", "Egypt", "Kenya", "South Africa"],
    answer: "Egypt",
  },
  {
    question: "Which country is the smallest in the world by land area?",
    options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    answer: "Vatican City",
  },
  {
    question: "In which country is the Eiffel Tower located?",
    options: ["Italy", "Germany", "France", "UK"],
    answer: "France",
  },
  {
    question: "Which country is home to the Amazon Rainforest?",
    options: ["Brazil", "Peru", "Colombia", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which country is famous for its pyramids at Giza?",
    options: ["Sudan", "Egypt", "Mexico", "Peru"],
    answer: "Egypt",
  },
  {
    question: "The Taj Mahal is located in which country?",
    options: ["Pakistan", "India", "Bangladesh", "Iran"],
    answer: "India",
  },
  {
    question: "Which country is divided into 50 states?",
    options: ["USA", "Mexico", "Brazil", "Germany"],
    answer: "USA",
  },
  {
    question: "Which European country is famous for its tulips and windmills?",
    options: ["Belgium", "Netherlands", "Denmark", "Norway"],
    answer: "Netherlands",
  },
  {
    question: "Which country is known for the historical region of Transylvania?",
    options: ["Hungary", "Bulgaria", "Romania", "Slovakia"],
    answer: "Romania",
  },
  {
    question: "The Statue of Liberty was a gift to the USA from which country?",
    options: ["UK", "France", "Spain", "Germany"],
    answer: "France",
  },
  {
    question: "Which country's name translates to 'The Savior' in Spanish?",
    options: ["El Salvador", "Ecuador", "Costa Rica", "Honduras"],
    answer: "El Salvador",
  },
  {
    question: "In which country can you visit the ancient ruins of Machu Picchu?",
    options: ["Chile", "Peru", "Bolivia", "Colombia"],
    answer: "Peru",
  },
  {
    question: "Which Scandinavian country is not part of the European Union?",
    options: ["Sweden", "Denmark", "Norway", "Finland"],
    answer: "Norway",
  },
  {
    question: "Which country is the largest by area in Africa?",
    options: ["Sudan", "Algeria", "DR Congo", "Libya"],
    answer: "Algeria",
  },
  {
    question: "The Dead Sea borders which two countries?",
    options: ["Israel and Jordan", "Egypt and Israel", "Jordan and Saudi Arabia", "Syria and Lebanon"],
    answer: "Israel and Jordan",
  },
  {
    question: "Which country is the world's leading producer of coffee?",
    options: ["Vietnam", "Colombia", "Brazil", "Ethiopia"],
    answer: "Brazil",
  },
  {
    question: "Which country occupies the southern part of the Iberian Peninsula?",
    options: ["Portugal", "Spain", "Italy", "Greece"],
    answer: "Spain",
  },
];