//Array de provincias
const mapPostcode = {
  "01": "Alava",
  "02": "Albacete",
  "03": "Alicante",
  "04": "Almeria",
  "05": "Avila",
  "06": "Badajoz",
  "07": "Islas Baleares",
  "08": "Barcelona",
  "09": "Burgos",
  "10": "Caceres",
  "11": "Cadiz",
  "12": "Castellon",
  "13": "Ciudad Real",
  "14": "Cordoba",
  "15": "La Coruna",
  "16": "Cuenca",
  "17": "Gerona",
  "18": "Granada",
  "19": "Guadalajara",
  "20": "Guipuzcoa",
  "21": "Huelva",
  "22": "Huesca",
  "23": "Jaen",
  "24": "Leon",
  "25": "Lerida",
  "26": "La Rioja",
  "27": "Lugo",
  "28": "Madrid",
  "29": "Malaga",
  "30": "Murcia",
  "31": "Navara",
  "32": "Orense",
  "33": "Asturias",
  "34": "Palencia",
  "35": "Las Palmas",
  "36": "Pontevedra",
  "37": "Salamanca",
  "38": "Santa Cruz de Tenerife",
  "39": "Cantabria",
  "40": "Segovia",
  "41": "Sevilla",
  "42": "Soria",
  "43": "Tarragona",
  "44": "Teruel",
  "45": "Toledo",
  "46": "Valencia",
  "47": "Valladolid",
  "48": "Vizcaya",
  "49": "Zamora",
  "50": "Zaragoza",
  "51": "Ceuta",
  "52": "Melilla"
}

//Función de Mostrar Valoración
function valuate() {
  var points = document.getElementById("assessment").value;
  alert("Has valorado con " + points + " puntos");
} 

//Función de Mostrar Cuenta
function seeAccount() {
  var country = "ES";
  var control = document.getElementById("control").value;
  var entity = document.getElementById("entity").value;
  var branch = document.getElementById("branch").value;
  var dc = document.getElementById("dc").value;
  var account = document.getElementById("account").value;
    var bankAccount = country + control + "-" + entity + "-" + branch + "-" + dc + "-" + account;
      if(country === "" || control === "" || entity === "" || branch === "" || dc === "" || account === "") {
        alert("Rellene todos los campos de la cuenta bancaria");
      } else {
        alert("Le informamos que su cuenta bancaria es: " + bankAccount);
      }
}

//Función de Mostrar Día Semana
function seeWeekday() {
  var dateSurvey = document.getElementById("dateSurvey").value;
  var weekday = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    dateSurvey = new Date(dateSurvey).getDate();
      alert("La fecha seleccionada en el elemento fecha es un " + weekday[dateSurvey]);
}

//Función Validación del Código Postal
function checkPostcode() {
  var postcodeValue = document.getElementById("postcode").value;
  var errorMessage = document.getElementById("errorMessagePostcode");
  checkLocation();
    if (postcodeValue === ""){
      errorMessage.innerHTML = "No puede estar vacío";
      errorMessage.style.color = "red";
    } else if (postcodeValue.length !== 5){
      errorMessage.innerHTML = "Tiene que contener 5 números";
      errorMessage.style.color = "red";  
    } else if (/\D/.test(postcodeValue)) { //expresión regular para detectar que todas las entradas son números
      errorMessage.innerHTML = "No admite otros caracteres que no sean números";
      errorMessage.style.color = "red";
    } else {
      errorMessage.innerHTML = "";
    }
}

function checkLocation() {
  var postcodeValue = document.getElementById("postcode").value;
  var locationValue = document.getElementById("location").value;
  var solutionMessage = document.getElementById("errorMessageLocation");
  var postCodeInitValue = postcodeValue.substring(0,2);
    if (locationValue !== mapPostcode[postCodeInitValue]) {
      solutionMessage.innerHTML = "Localidad o Código Postal erróneo";
      solutionMessage.style.color = "red";
    } else {
      solutionMessage.innerHTML = "Localidad y Código Postal correctos";
      solutionMessage.style.color = "green";
    }
}