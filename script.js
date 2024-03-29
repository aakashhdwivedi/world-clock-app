var timer = document.getElementById("time");
var currentTime = new Date();
    timer.innerText = `${currentTime.getHours()<10?"0":""}${currentTime.getHours()} : ${currentTime.getMinutes()<10?"0":""}${currentTime.getMinutes()} : ${currentTime.getSeconds()<10?"0":""}${currentTime.getSeconds()}`;
var countryname = document.getElementById("country-name");
var newcountrycode = document.getElementById("country-code");
var utc = document.getElementById("utc");
var flag = document.getElementById("flag");
var date = document.getElementById("date");
    date.innerText = `${currentTime.getDate()} / ${currentTime.getMonth()+1} / ${currentTime.getFullYear()}`;
var hours;
var minutes;
var seconds;
var myInterval ;
var defaultTimer;
const Button = document.getElementById("sync-time");
Button.addEventListener('click',fetchTime);

function defaultTime(){
    hours = timer.innerText.toString().split(":")[0];
    minutes = timer.innerText.toString().split(":")[1];
    seconds = timer.innerText.toString().split(":")[2] ;  
    defaultTimer = setInterval(() => {
        if(Number(seconds)<59){
            seconds = Number(seconds)+1;
            timer.innerText = `${hours} : ${minutes} : ${Number(seconds)<10?"0":""}${seconds}`;
        }  
        else {
            minutes = Number(minutes)+1;
            seconds = "00";
            timer.innerText = `${Number(hours)<10&&Number(hours)!=0?"0":""}${hours} : ${Number(minutes)<10&&Number(minutes)!=0?"0":""}${minutes} : ${Number(seconds)<10&&Number(seconds)!=0?"0":""}${seconds}`;
        }        
    }, 1000); 
}
defaultTime();

async function fetchTime(){
    clearInterval(defaultTimer);
    const country = document.getElementsByTagName("input")[0].value ;
    var codeofcountry;
    for(key in countryCodetoName){
        if(countryCodetoName[key] == country) {codeofcountry = key; break;}
    }
    for(key in countryCode){
        if(countryCode[key] == codeofcountry) {codeofcountry = key; break;}
    }
    const url = `https://worldtimeapi.org/api/timezone/${codeofcountry}`;
    const data = await fetch(url);
    const result = await data.json();
    const pushed = await result.datetime;
    const timerupdate = await pushed.toString().split("T")[1].split(".")[0].split(":");  
    timer.innerText = `${timerupdate[0]} : ${timerupdate[1]} : ${timerupdate[2]}`;
    const utccode = await result.abbreviation.toString();
    const utcoffset = await result.utc_offset.toString();
    utc.innerText = `UTC/${utccode} : ${utcoffset} hours`;
    clearInterval(myInterval);
    const timezone = await result.timezone.toString();
    newcountrycode.innerText = countryCode[timezone];
    countryname.innerText = countryCodetoName[countryCode[timezone]];
    SetFlag(newcountrycode.innerText);
    document.getElementsByTagName("input")[0].value = '';

    startTimer();
}

function startTimer(){
    var timing = timer.innerText.toString().split(":");
    hours = timing[0];
    minutes = timing[1];
    seconds = timing[2];
    myInterval  = setInterval(()=>{
        if(hours < 10) hours += " ";
        if(Number(seconds)<59){
            seconds = Number(seconds)+1;
            timer.innerText = `${hours} : ${minutes} : ${Number(seconds)<10?0:""}${seconds}`;
        }  
        else {
            minutes = Number(minutes)+1;
            seconds = "00";
            timer.innerText = `${Number(hours)<10&&Number(hours)!=0?0:""}${hours} : ${Number(minutes)<10&&Number(minutes)!=0?"0":""}${minutes}} : ${Number(seconds)<10&&Number(seconds)!=0?"0":""}${seconds}`;
        }        
    },1000);
}


const countryCode = {
    "Asia/Kabul": "AF",
    "Europe/Tirane": "AL",
    "Africa/Algiers": "DZ",
    "Pacific/Pago_Pago": "AS",
    "Europe/Andorra": "AD",
    "Africa/Lagos": "AO",
    "America/Port_of_Spain": "AI",
    "Antarctica/Troll": "AQ",
    "America/Antigua": "AG",
    "America/Argentina/Buenos_Aires": "AR",
    "Asia/Yerevan": "AM",
    "America/Curacao": "AW",
    "Australia/Sydney": "AU",
    "Europe/Vienna": "AT",
    "Asia/Baku": "AZ",
    "America/Nassau": "BS",
    "Asia/Bahrain": "BH",
    "Asia/Dhaka": "BD",
    "America/Barbados": "BB",
    "Europe/Minsk": "BY",
    "Europe/Brussels": "BE",
    "America/Belize": "BZ",
    "Africa/Lagos__1": "BJ",
    "Atlantic/Bermuda": "BM",
    "Asia/Thimphu": "BT",
    "America/La_Paz": "BO",
    "Europe/Belgrade": "BA",
    "Africa/Maputo": "BW",
    "America/Sao_Paulo": "BR",
    "Indian/Chagos": "IO",
    "America/Port_of_Spain__1": "VG",
    "Asia/Brunei": "BN",
    "Europe/Sofia": "BG",
    "Africa/Abidjan": "BF",
    "Africa/Maputo__1": "BI",
    "Asia/Phnom_Penh": "KH",
    "Africa/Lagos__2": "CM",
    "America/Toronto": "CA",
    "Atlantic/Cape_Verde": "CV",
    "America/Cayman": "KY",
    "Africa/Lagos__3": "CF",
    "Africa/Ndjamena": "TD",
    "America/Santiago": "CL",
    "Asia/Shanghai": "CN",
    "Indian/Christmas": "CX",
    "Indian/Cocos": "CC",
    "America/Bogota": "CO",
    "Indian/Comoro": "KM",
    "Pacific/Rarotonga": "CK",
    "America/Costa_Rica": "CR",
    "Europe/Belgrade__1": "HR",
    "America/Havana": "CU",
    "America/Curacao__1": "CW",
    "Asia/Nicosia": "CY",
    "Europe/Prague": "CZ",
    "Africa/Lagos__4": "CD",
    "Europe/Copenhagen": "DK",
    "Africa/Djibouti": "DJ",
    "America/Port_of_Spain__2": "DM",
    "America/Santo_Domingo": "DO",
    "Asia/Dili": "TL",
    "America/Guayaquil": "EC",
    "Africa/Cairo": "EG",
    "America/El_Salvador": "SV",
    "Africa/Lagos__5": "GQ",
    "Africa/Asmara": "ER",
    "Europe/Tallinn": "EE",
    "Africa/Addis_Ababa": "ET",
    "Atlantic/Stanley": "FK",
    "Atlantic/Faroe": "FO",
    "Pacific/Fiji": "FJ",
    "Europe/Helsinki": "FI",
    "Europe/Paris": "FR",
    "Pacific/Tahiti": "PF",
    "Africa/Lagos__6": "GA",
    "Africa/Abidjan__1": "GM",
    "Asia/Tbilisi": "GE",
    "Europe/Berlin": "DE",
    "Africa/Accra": "GH",
    "Europe/Gibraltar": "GI",
    "Europe/Athens": "GR",
    "America/Godthab": "GL",
    "America/Port_of_Spain__3": "GD",
    "Pacific/Guam": "GU",
    "America/Guatemala": "GT",
    "Europe/London": "GG",
    "Africa/Abidjan__2": "GN",
    "Africa/Bissau": "GW",
    "America/Guyana": "GY",
    "America/Port-au-Prince": "HT",
    "America/Tegucigalpa": "HN",
    "Asia/Hong_Kong": "HK",
    "Europe/Budapest": "HU",
    "Atlantic/Reykjavik": "IS",
    "Asia/Kolkata": "IN",
    "Asia/Jakarta": "ID",
    "Asia/Tehran": "IR",
    "Asia/Baghdad": "IQ",
    "Europe/Dublin": "IE",
    "Europe/London__1": "IM",
    "Asia/Jerusalem": "IL",
    "Europe/Rome": "IT",
    "Africa/Abidjan__3": "CI",
    "America/Jamaica": "JM",
    "Asia/Tokyo": "JP",
    "Europe/London__2": "JE",
    "Asia/Amman": "JO",
    "Asia/Almaty": "KZ",
    "Africa/Nairobi": "KE",
    "Pacific/Tarawa": "KI",
    "Europe/Belgrade__2": "XK",
    "Asia/Kuwait": "KW",
    "Asia/Bishkek": "KG",
    "Asia/Vientiane": "LA",
    "Europe/Riga": "LV",
    "Asia/Beirut": "LB",
    "Africa/Johannesburg": "LS",
    "Africa/Monrovia": "LR",
    "Africa/Tripoli": "LY",
    "Europe/Zurich": "LI",
    "Europe/Vilnius": "LT",
    "Europe/Luxembourg": "LU",
    "Asia/Macau": "MO",
    "Europe/Belgrade__3": "MK",
    "Indian/Antananarivo": "MG",
    "Africa/Maputo__2": "MW",
    "Asia/Kuala_Lumpur": "MY",
    "Indian/Maldives": "MV",
    "Africa/Abidjan__4": "ML",
    "Europe/Malta": "MT",
    "Pacific/Majuro": "MH",
    "Africa/Abidjan__5": "MR",
    "Indian/Mauritius": "MU",
    "Indian/Mayotte": "YT",
    "America/Mexico_City": "MX",
    "Pacific/Pohnpei": "FM",
    "Europe/Chisinau": "MD",
    "Europe/Monaco": "MC",
    "Asia/Ulaanbaatar": "MN",
    "Europe/Belgrade__4": "ME",
    "America/Port_of_Spain__4": "MS",
    "Africa/Casablanca": "MA",
    "Africa/Maputo__3": "MZ",
    "Asia/Rangoon": "MM",
    "Africa/Windhoek": "NA",
    "Pacific/Nauru": "NR",
    "Asia/Kathmandu": "NP",
    "Europe/Amsterdam": "NL",
    "America/Curacao__2": "AN",
    "Pacific/Noumea": "NC",
    "Pacific/Auckland": "NZ",
    "America/Managua": "NI",
    "Africa/Lagos__7": "NE",
    "Africa/Lagos__8": "NG",
    "Pacific/Niue": "NU",
    "Asia/Pyongyang": "KP",
    "Pacific/Saipan": "MP",
    "Europe/Oslo": "NO",
    "Asia/Muscat": "OM",
    "Asia/Karachi": "PK",
    "Pacific/Palau": "PW",
    "Asia/Hebron": "PS",
    "America/Panama": "PA",
    "Pacific/Port_Moresby": "PG",
    "America/Asuncion": "PY",
    "America/Lima": "PE",
    "Asia/Manila": "PH",
    "Pacific/Pitcairn": "PN",
    "Europe/Warsaw": "PL",
    "Europe/Lisbon": "PT",
    "America/Puerto_Rico": "PR",
    "Asia/Qatar": "QA",
    "Africa/Lagos__9": "CG",
    "Indian/Reunion": "RE",
    "Europe/Bucharest": "RO",
    "Europe/Moscow": "RU",
    "Africa/Maputo__4": "RW",
    "America/Port_of_Spain__5": "BL",
    "Africa/Abidjan__6": "SH",
    "America/Port_of_Spain__6": "KN",
    "America/Port_of_Spain__7": "LC",
    "America/Port_of_Spain__8": "MF",
    "America/Miquelon": "PM",
    "America/Port_of_Spain__9": "VC",
    "Pacific/Apia": "WS",
    "Europe/Rome__1": "SM",
    "Africa/Abidjan__7": "ST",
    "Asia/Riyadh": "SA",
    "Africa/Abidjan__8": "SN",
    "Europe/Belgrade__5": "RS",
    "Indian/Mahe": "SC",
    "Africa/Abidjan__9": "SL",
    "Asia/Singapore": "SG",
    "America/Curacao__3": "SX",
    "Europe/Prague__1": "SK",
    "Europe/Belgrade__6": "SI",
    "Pacific/Guadalcanal": "SB",
    "Africa/Mogadishu": "SO",
    "Africa/Johannesburg__1": "ZA",
    "Asia/Seoul": "KR",
    "Africa/Khartoum": "SS",
    "Europe/Madrid": "ES",
    "Asia/Colombo": "LK",
    "Africa/Khartoum__1": "SD",
    "America/Paramaribo": "SR",
    "Europe/Oslo__1": "SJ",
    "Africa/Johannesburg__2": "SZ",
    "Europe/Stockholm": "SE",
    "Europe/Zurich__1": "CH",
    "Asia/Damascus": "SY",
    "Asia/Taipei": "TW",
    "Asia/Dushanbe": "TJ",
    "Africa/Dar_es_Salaam": "TZ",
    "Asia/Bangkok": "TH",
    "Africa/Abidjan__10": "TG",
    "Pacific/Fakaofo": "TK",
    "Pacific/Tongatapu": "TO",
    "America/Port_of_Spain__10": "TT",
    "Africa/Tunis": "TN",
    "Europe/Istanbul": "TR",
    "Asia/Ashgabat": "TM",
    "America/Grand_Turk": "TC",
    "Pacific/Funafuti": "TV",
    "America/Port_of_Spain__11": "VI",
    "Africa/Kampala": "UG",
    "Europe/Kiev": "UA",
    "Asia/Dubai": "AE",
    "Europe/London__3": "GB",
    "America/New_York": "US",
    "America/Montevideo": "UY",
    "Asia/Tashkent": "UZ",
    "Pacific/Efate": "VU",
    "Europe/Rome__2": "VA",
    "America/Caracas": "VE",
    "Asia/Ho_Chi_Minh": "VN",
    "Pacific/Wallis": "WF",
    "Africa/El_Aaiun": "EH",
    "Asia/Aden": "YE",
    "Africa/Maputo__5": "ZM",
    "Africa/Maputo__6": "ZW"
  }
const countryCodetoName = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "VG": "British Virgin Islands",
    "BN": "Brunei",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curacao",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "CD": "Democratic Republic of the Congo",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "TL": "East Timor",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "PF": "French Polynesia",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "CI": "Ivory Coast",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "XK": "Kosovo",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Laos",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macau",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "AN": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "KP": "North Korea",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "CG": "Republic of the Congo",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russia",
    "RW": "Rwanda",
    "BL": "Saint Barthelemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "KR": "South Korea",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "VI": "U.S. Virgin Islands",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VA": "Vatican",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
  }

  function SelectCountry(){
    const input = document.getElementById('country');
    var options = "";
    for(key in countryCode) {
        options += `<option value="${countryCodetoName[countryCode[key]]}"> ${countryCodetoName[countryCode[key]]} </option>`;
    }
    input.innerHTML += options;
}
SelectCountry();
function SetFlag(code) {
    flag.innerHTML = `<img src="https://flagsapi.com/${code}/flat/64.png" alt="flag">`
}