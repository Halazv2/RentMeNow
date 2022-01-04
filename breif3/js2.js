var prix = 0;
var totale = 0;
function CheckTypevehicle() {
  var Choix = document.getElementById("vehicle").value;
  switch (Choix) {
    case "Citadine":
      document.getElementById("boite_av").innerHTML =
        "<option disabled selected hidden>choice a option</option><option> Manuelle</option>";
      document.getElementById("carburant").innerHTML =
        "<option disabled selected hidden>choice a carburant</option><option> Essence</option> <option> Diesel</option> <option> Electrique</option> <option> Hybride</option>";
      prix = 12;

      break;
    case "Compact":
      document.getElementById("boite_av").innerHTML =
        "<option disabled selected hidden>choice a option</option><option> Manuelle</option>";
      document.getElementById("carburant").innerHTML =
        "<option disabled selected hidden>choice a carburant</option> <option> Essence</option> <option> Diesel</option>  <option> Hybride</option>";
      prix = 14;
      break;

    case "Utilitaire":
      document.getElementById("boite_av").innerHTML =
        "<option disabled selected hidden>choice a option</option><option> Manuelle</option>";
      document.getElementById("carburant").innerHTML =
        "<option disabled selected hidden>choice a carburant</option> <option> Diesel</option>  ";
      prix = 16;
      break;

    case "Engin de chantier":
      document.getElementById("boite_av").innerHTML =
        "<option disabled selected hidden>choice a option</option><option> Manuelle</option>";
      document.getElementById("carburant").innerHTML =
        "<option disabled selected hidden>choice a carburant</option><option> Essence</option> <option> Diesel</option> ";
      prix = 900;
      break;

    case "Berline":
      document.getElementById("boite_av").innerHTML =
        "<option disabled selected hidden>choice a option</option><option> Automatique</option>";
      document.getElementById("carburant").innerHTML =
        "<option disabled selected hidden>choice a carburant</option><option> Essence</option> <option> Diesel</option>  <option> Hybride</option>";
      prix = 20;
      break;

    case "Camion":
      document.getElementById("boite_av").innerHTML =
        "<option disabled selected hidden>choice a option</option><option> Automatique</option>";
      document.getElementById("carburant").innerHTML =
        "<option disabled selected hidden>choice a carburant</option> <option> Diesel</option> ";
      prix = 250;
      break;
    case "Moto":
      document.getElementById("boite_av").innerHTML =
        "<option disabled selected hidden></option>";
      document.getElementById("carburant").innerHTML =
        "<option disabled selected hidden>choice a carburant</option><option> Essence</option> <option> Electrique</option> ";
      prix = 10;
      break;
  }
}

var carburant = 0;
var carb;
function chekCarburant() {
  carb = document.getElementById("carburant").value;
  //   console.log(carb);
  switch (carb) {
    case "Essence":
      carburant = 0.14;
      break;

    case "Hybride":
      carburant = 0.09;
      break;

    case "Diesel":
      carburant = 0.21;
      break;

    case "Electrique":
      carburant = 0.05;
      break;
  }
}

var GearBox = "";
function chekBoite() {
  var boite = document.getElementById("carburant").value;
  switch (carb) {
    case "Manuelle":
      GearBox = 0;
      break;

    case "Automatique":
      GearBox = 0.19;
      break;
  }
}

function calcul() {
  var n = document.getElementById("Number_Of_Days").value;
  totale = n * (prix + prix * carburant + prix * GearBox) + " €";
  document.getElementById("Total_Amount").value = totale;
}

document.getElementById("BottonCalculate").addEventListener("click", calcul);

let confirmed = document.getElementById("botonaa");
confirmed.addEventListener("click", function () {
  Swal.fire(
    "Success!",
    "vehicle:"+
    vehicle.value +
    "<br/>type:"+
     boite_av.value +
      "<br/>fuel:" +
      carb +
      "<br/>Totale:" +
      totale,
    "success"
  );
});
