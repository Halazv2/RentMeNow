var prix=0,totale=0;function CheckTypevehicle(){switch(document.getElementById("vehicle").value){case"Citadine":document.getElementById("boite_av").innerHTML="<option disabled selected hidden>choice a option</option><option> Manuelle</option>",document.getElementById("carburant").innerHTML="<option disabled selected hidden>choice a carburant</option><option> Essence</option> <option> Diesel</option> <option> Electrique</option> <option> Hybride</option>",prix=12;break;case"Compact":document.getElementById("boite_av").innerHTML="<option disabled selected hidden>choice a option</option><option> Manuelle</option>",document.getElementById("carburant").innerHTML="<option disabled selected hidden>choice a carburant</option> <option> Essence</option> <option> Diesel</option>  <option> Hybride</option>",prix=14;break;case"Utilitaire":document.getElementById("boite_av").innerHTML="<option disabled selected hidden>choice a option</option><option> Manuelle</option>",document.getElementById("carburant").innerHTML="<option disabled selected hidden>choice a carburant</option> <option> Diesel</option>  ",prix=16;break;case"Engin de chantier":document.getElementById("boite_av").innerHTML="<option disabled selected hidden>choice a option</option><option> Manuelle</option>",document.getElementById("carburant").innerHTML="<option disabled selected hidden>choice a carburant</option><option> Essence</option> <option> Diesel</option> ",prix=900;break;case"Berline":document.getElementById("boite_av").innerHTML="<option disabled selected hidden>choice a option</option><option> Automatique</option>",document.getElementById("carburant").innerHTML="<option disabled selected hidden>choice a carburant</option><option> Essence</option> <option> Diesel</option>  <option> Hybride</option>",prix=20;break;case"Camion":document.getElementById("boite_av").innerHTML="<option disabled selected hidden>choice a option</option><option> Automatique</option>",document.getElementById("carburant").innerHTML="<option disabled selected hidden>choice a carburant</option> <option> Diesel</option> ",prix=250;break;case"Moto":document.getElementById("boite_av").innerHTML="<option disabled selected hidden></option>",document.getElementById("carburant").innerHTML="<option disabled selected hidden>choice a carburant</option><option> Essence</option> <option> Electrique</option> ",prix=10}}var carb,carburant=0;function chekCarburant(){switch(carb=document.getElementById("carburant").value){case"Essence":carburant=.14;break;case"Hybride":carburant=.09;break;case"Diesel":carburant=.21;break;case"Electrique":carburant=.05}}var GearBox="";function chekBoite(){document.getElementById("carburant").value;switch(carb){case"Manuelle":GearBox=0;break;case"Automatique":GearBox=.19}}function calcul(){var e=document.getElementById("Number_Of_Days").value;totale=e*(prix+prix*carburant+prix*GearBox)+" €",document.getElementById("Total_Amount").value=totale}document.getElementById("BottonCalculate").addEventListener("click",calcul);let confirmed=document.getElementById("botonaa");confirmed.addEventListener("click",function(){Swal.fire("Success!","vehicle:"+vehicle.value+"<br/>type:"+boite_av.value+"<br/>fuel:"+carb+"<br/>Totale:"+totale,"success")});