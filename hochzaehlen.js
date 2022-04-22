	offenb = false;
	offens = false;
	offenc = false;
	offend = false;
	offenu = false;
	offeni = false;
	offenx = false;
	offenwaldmaus = false;
	offenfeldhamster = false;
	offeneichhornchen = false;
	offencapybara = false;
	offenupgrades = false;
	offenstats = false;
	offenmenu = false;
	offenausrichtung = false;
	load = true;
	
	initadin = false;
	initdwa = false;
	inittri= false;
	inittschetierje = false;
	
	toasten = 0;
	samen = 0;
	
	gebaude = 0;
	one = 0;
	two = 0;
	three = 0;
	four = 0;
	
	mult = 0;
	preis = 0;

	moerchen = 0;
	benzin = 0;
	feldsamen = 0;
	counter = "";
	count = 0;
	money = 0;
	samengepflanzt = 0;
	samengefressen= "";
	toaster = 1;
	
	krieger = 0;
	enemys1= "";
	enemys2= "";
	enemys3= "";
	enemys4= "";
	
	attack1= 0;
	attack2= 0;
	attack3= 0;
	attack4= 0;
	attack5= 0;
	attack6= 0;
	attack7= 0;
	attack8= 0;
	attack9= 0;
	attack10= 0;
	attack11= 0;
	attack12= 0;
	attack13= 0;
	
	vergleich1 = "";

	
	upgrade1 = 0;
	upgrade2 = 0;
	upgrade3 = 0;
	upgrade4 = 0;
	
	ueins1 = false;
	ueins2 = false;
	ueins3 = false;
	ueins4 = false;
	
	uzwei1 = false;
	uzwei2 = false;
	uzwei3 = false;
	uzwei4 = false;
	
	udrei1 = false;
	udrei2 = false;
	udrei3 = false;
	udrei4 = false;
	
	uvier1 = false;
	uvier2 = false;
	uvier3 = false;
	uvier4 = false;
	
	
	cleareventcall1 = false;
	clearevent1 = false;
	
	cleareventcall2 = false;
	tauben = 0;
	clearevent2 = false;
	
	cleareventcall4 = false;
	
	cleareventcall3 = false;
	
	cleareventcall5 = false
	
	setInterval(kontrolle, 10000);

	hier="";
	
	delay="";
	
	document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/start.gif">');
	document.getElementById("atoaster").innerHTML = "Gemuesedefibrillatoren: "+convert(toaster);
/*click to get the shit*/	
	function schwierigkeit(x){
		if (x == 1){
			document.getElementById("einfach").style.display = "block";
			document.getElementById("schwer").innerHTML = "";
			document.getElementById("mittel").innerHTML = "";
			document.getElementById("form").style.display = "none";
			schwierigkeit = "einfach";
			mult1 = 1;
			mult2 = 5;
			mult3 = 10;
			mult4 = 20;
		}
		
		if (x == 2){
			document.getElementById("einfach").innerHTML = "";
			document.getElementById("schwer").innerHTML = "";
			document.getElementById("mittel").style.display = "block";
			document.getElementById("form").style.display = "none";
			schwierigkeit = "mittel";
			mult1 = 1;
			mult2 = 2;
			mult3 = 5;
			mult4 = 10;
		}
		
		if (x == 3){
			document.getElementById("einfach").innerHTML = "";
			document.getElementById("mittel").innerHTML = "";
			document.getElementById("schwer").style.display = "block";
			document.getElementById("form").style.display = "none";
			schwierigkeit = "schwer";
			mult1 = 1;
			mult2 = 3;
			mult3 = 5;
			mult4 = 7;
		}
		document.getElementById("boxLinks").style.display = "block";
		document.getElementById("boxMitte").style.display = "block";
	}
	
	function hochzaehlen() {
		if(gebaude < 10){
		samen = samen + 1;
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		}
		if(gebaude > 10){
			samen = samen + 10;
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		}
		if(gebaude > 100){
			samen = samen + 100;
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		}
		if(gebaude > 1000){
			samen = samen + 1000;
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		}
	}
	
	
/*Kaufen funktion*/
	function kaufen(x) {
		
		if (x == "t"){
			var element = document.getElementById("toasterbuy")
			vergleich = preisaktualisieren(element);
			if (isNaN(vergleich) == true ){
				return false;
			}
			if (document.getElementById("toasterbuy").value == ""){
				return false;
			}
			
			if(money - vergleich <0){
				return false;
			}
			money = money - vergleich ; 
			toaster = toaster + parseInt(document.getElementById("toasterbuy").value);
			document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
			document.getElementById("atoaster").innerHTML = "Gemuesedefibrillatoren: "+convert(toaster);
			return false;
		}
		


/*genug money hierhiehriaeirihash */
		switch (x) {
		case 1:
			var	element = document.getElementById("1anzahl");
			wert = parseInt(element.value);
			mult = preisaktualisieren(element);
			
			if( isNaN(wert) == true ){
				document.getElementById("1anzahl").value = "Bitte Zahl eingeben!";
				return false;
			}
			if( wert == "" ){
				document.getElementById("1anzahl").value = "Die Eingabe war leer!";
				return false;
			}
			break;
		case 2:
			var	element = document.getElementById("2anzahl");
			wert = parseInt(element.value);
			mult = preisaktualisieren(element);
			
			if( isNaN(wert) == true ){
				document.getElementById("2anzahl").value = "Bitte Zahl eingeben!";
				return false;
			}
			if( wert == "" ){
				document.getElementById("2anzahl").value = "Die Eingabe war leer!";
				return false;
			}
			break;
		case 3:
			var	element = document.getElementById("3anzahl");
			wert = parseInt(element.value);
			mult = preisaktualisieren(element);
			
			if( isNaN(wert) == true ){
				document.getElementById("3anzahl").value = "Bitte Zahl eingeben!";
				return false;
			}
			if( wert == "" ){
				document.getElementById("3anzahl").value = "Die Eingabe war leer!";
				return false;
			}
			break;
		case 4:
			var	element = document.getElementById("4anzahl");
			wert = parseInt(element.value);
			mult = preisaktualisieren(element);
			
			if( isNaN(wert) == true ){
				document.getElementById("4anzahl").value = "Bitte Zahl eingeben!";
				return false;
			}
			if( wert == "" ){
				document.getElementById("4anzahl").value = "Die Eingabe war leer!";
				return false;
			}
			break;
		case 5:
			mult = 100000;
			break;
		case 6:
			mult = 250000;
			break;
		case 7:
			mult = 1000000;
			break;
		case 8:
			mult = 10000000;
			break;
		case 9:
			mult = 100;
			break;
		case 10:
			mult =100;
			break;
		case 11:
			mult =10000000;
			break;
		case 12:
			mult =10000000;
			break;
		case 13:
			mult =10000000;
			break;
		case 14:
			mult =10000000;
			break;
		case 15:
			mult =10000000;
			break;
		case 16:
			mult =10000000;
			break;
		case 17:
			mult =10000000;
			break;
		case 18:
			mult =10000000;
			break;	
	}

		if ((samen - mult) < 0) {
			return false;
		}

		samen = samen - mult;
/*starte interval x nur einmal danach z&auml;hle nurnoch gebaude hoch*/
		switch (x) {
		case 1:
			gebaude = gebaude - one;
			one = one + wert;
			gebaude = gebaude + one;
			document.getElementById("eins").innerHTML = convert(one);
			document.getElementById("einssec").innerHTML = convert(one * mult1);
			if(initadin == false){
			uno();
			}
			break;
		case 2:
			gebaude = gebaude - two;
			two = two + wert;
			gebaude = gebaude + two;
			document.getElementById("zwei").innerHTML = convert(two);
			document.getElementById("zweisec").innerHTML = convert(two * mult2);
			if(initdwa == false){
				dos();
			}
			break;
		case 3:
			gebaude = gebaude - three;
			three = three + wert;
			gebaude = gebaude + three;
			document.getElementById("drei").innerHTML = convert(three);
			document.getElementById("dreisec").innerHTML = convert(three * mult3);
			if(inittri == false){
				tres();
			}
			break;
		case 4:
			gebaude = gebaude - four;
			four = four + wert;
			gebaude = gebaude + four;
			document.getElementById("vier").innerHTML = convert(four);
			document.getElementById("viersec").innerHTML = convert(four * mult4);
			if(inittschetierje == false){
				cuatro()
			}
			break;
			
		case 5:
			document.getElementById("dungeonbutton1n").style.display = "none";
			document.getElementById("dungeonbutton1k").style.display = "none";
			document.getElementById("dungeon1").style.display = "block";
			document.getElementById("dungeonbutton2n").style.display = "block";
			document.getElementById("dungeonbutton2k").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			return false;
			break;
		case 6:
			document.getElementById("dungeonbutton2n").style.display = "none";
			document.getElementById("dungeonbutton2k").style.display = "none";
			document.getElementById("dungeon2").style.display = "block";
			document.getElementById("dungeonbutton3n").style.display = "block";
			document.getElementById("dungeonbutton3k").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			return false;
			break;
		case 7:
			document.getElementById("dungeonbutton3n").style.display = "none";
			document.getElementById("dungeonbutton3k").style.display = "none";
			document.getElementById("dungeon3").style.display = "block";
			document.getElementById("dungeonbutton4n").style.display = "block";
			document.getElementById("dungeonbutton4k").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			return false;
			break;
		case 8:
			document.getElementById("dungeonbutton4n").style.display = "none";
			document.getElementById("dungeonbutton4k").style.display = "none";
			document.getElementById("dungeon4").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			document.getElementById("dungeonbutton5n").style.display = "block";
			document.getElementById("dungeonbutton5k").style.display = "block";
			return false;
			break;
		case 9:
			document.getElementById("benzinsell").style.display = "block";
			document.getElementById("benzingekauft").style.display = "none";
			document.getElementById("benzinpossible").style.display ="block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			return false;
			break;
		case 10:
			document.getElementById("moehrensell").style.display = "block";
			document.getElementById("feldgekauft").style.display = "none";
			document.getElementById("moehrenpossible").style.display ="block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			return false;
			break;
		case 11:
			document.getElementById("dungeonbutton5n").style.display = "none";
			document.getElementById("dungeonbutton5k").style.display = "none";
			document.getElementById("dungeon5").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			document.getElementById("dungeonbutton6n").style.display = "block";
			document.getElementById("dungeonbutton6k").style.display = "block";
			return false;
			break;
		case 12:
			document.getElementById("dungeonbutton6n").style.display = "none";
			document.getElementById("dungeonbutton6k").style.display = "none";
			document.getElementById("dungeon6").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			document.getElementById("dungeonbutton7n").style.display = "block";
			document.getElementById("dungeonbutton7k").style.display = "block";
			return false;
			break;
		case 13:
			document.getElementById("dungeonbutton7n").style.display = "none";
			document.getElementById("dungeonbutton7k").style.display = "none";
			document.getElementById("dungeon7").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			document.getElementById("dungeonbutton8n").style.display = "block";
			document.getElementById("dungeonbutton8k").style.display = "block";
			return false;
			break;
			
		case 14:
			document.getElementById("dungeonbutton8n").style.display = "none";
			document.getElementById("dungeonbutton8k").style.display = "none";
			document.getElementById("dungeon8").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			document.getElementById("dungeonbutton9n").style.display = "block";
			document.getElementById("dungeonbutton9k").style.display = "block";
			return false;
			break;
		case 15:
			document.getElementById("dungeonbutton9n").style.display = "none";
			document.getElementById("dungeonbutton9k").style.display = "none";
			document.getElementById("dungeon9").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			document.getElementById("dungeonbutton10n").style.display = "block";
			document.getElementById("dungeonbutton10k").style.display = "block";
			return false;
			break;
		case 16:
			document.getElementById("dungeonbutton10n").style.display = "none";
			document.getElementById("dungeonbutton10k").style.display = "none";
			document.getElementById("dungeon10").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			document.getElementById("dungeonbutton11n").style.display = "block";
			document.getElementById("dungeonbutton11k").style.display = "block";
			return false;
			break;
		case 17:
			document.getElementById("dungeonbutton11n").style.display = "none";
			document.getElementById("dungeonbutton11k").style.display = "none";
			document.getElementById("dungeon11").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			document.getElementById("dungeonbutton12n").style.display = "block";
			document.getElementById("dungeonbutton12k").style.display = "block";
			return false;
			break;
		case 18:
			document.getElementById("dungeonbutton12n").style.display = "none";
			document.getElementById("dungeonbutton12k").style.display = "none";
			document.getElementById("dungeon12").style.display = "block";
			document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
			return false;
			break;	
		}
	/*hierhierhierhierhier*/
		
		/*berechne preis für box anzeige*/
		switch (x) {
		case 1:
			preis = preisaktualisieren(element);
			break;
		case 2:
			preis = preisaktualisieren(element);
			break;
		case 3:
			preis = preisaktualisieren(element);
			break;
		case 4:
			preis = preisaktualisieren(element);
			break;
		}
		var z = "preis" + x;
		document.getElementById(z).value = "-" + convert(preis) +" Samen";
		gebaude = gebaude + 1;
		document.getElementById("asamen").innerHTML = convert(samen);
		
	}

	
	
/*Samen pro sekunde*/
	function uno(x) {
		if (initadin == false){
			adin = setInterval(uno, 1000);
			initadin = true;
			return false;
			}
		samen = samen + one * mult1;
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
	}
	function dos(x) {
		if (initdwa == false){
			dwa = setInterval(dos, 1000);
			initdwa = true;
			return false;
		}
		samen = samen + two * mult2;
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
	}
	function tres(x) {
		if (inittri == false){
			tri = setInterval(tres, 1000);
			inittri= true;
			return false;
		}
		samen = samen + three * mult3;
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);

	}
	function cuatro(x) {

		if (inittschetierje == false){
			tschetierje = setInterval(cuatro, 1000);
			inittschetierje = true;
			return false;
		}
		samen = samen + four * mult4;
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		
	}

	
/*Pflanzen der moehren ins Feld*/	
	function pflanzen() {
		samengepflanzt = document.getElementById("zahlpflanzen").value;
		if ((samen - samengepflanzt) < 0 || isNaN(samengepflanzt) == true) {
			return false;
		}
		if (samengepflanzt == ""){
			return false;
		}
		feldsamen = parseInt(feldsamen) + parseInt(samengepflanzt);
		samen = samen - parseInt(samengepflanzt);

		if (count == 0) {
			count = parseInt(samengepflanzt)/100000000;
			counter = setInterval(timer, 1000);
		} else {
			count = count + parseInt(samengepflanzt)/100000000;
		}
		timer();
		document.getElementById("asamen").innerHTML = convert(samen);
	}

	function timer() {
		count = count - 1;
		if (count <= 0) {
			clearInterval(counter);
			counter = "";
			count = 0;
			ernten();
			document.getElementById("timer").innerHTML = "";
			return;
		}
		document.getElementById("timer").innerHTML = "Noch "+count+" Sekunden für "
				+ convert(feldsamen) + " moehren";
	}

	function ernten() {
		moerchen = moerchen + parseInt(feldsamen);
		feldsamen = 0;
		document.getElementById("amoerchen").innerHTML = "M&ouml;hren: "+ moerchen;
	}
	
/* Samen in Benzin Umwandeln*/	
	function pressen() {
		var presse = document.getElementById("pressenzahl").value;
		if ( samen - presse < 0 || (isNaN(presse) == true) ) {
			return false;
		}
		if (presse == "") {
			return false;
		}
		samen = samen - presse;
		benzin = benzin + parseInt(presse)/10;
		document.getElementById("asamen").innerHTML = convert(samen);
		document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
		
	}
	
/* Sachen verkaufen */	
	function sell(uebergabe) {
		
		if (uebergabe == undefined) {
			uebergabe = 0;
		}
		
		if (uebergabe == "s") {
			var vergleich = parseInt(document.getElementById("samensell").value);
			
			if (vergleich == "" || isNaN(vergleich) == true) {
				return false;
			}
			
			if (samen - vergleich < 0) {
				return false;;
			}
			samen = samen - vergleich;
			money = money + vergleich/100;
		}
		
		if (uebergabe == "m") {
			var vergleich = parseInt(document.getElementById("moehrensell1").value);
			
			if (vergleich == "" || isNaN(vergleich) == true) {
				return false;
			}
			
			if (moerchen - vergleich < 0) {
				return false;;
			}
			moerchen = moerchen - vergleich;
			money = money + vergleich/100;
		}
		
		if (uebergabe == "b") {
			var vergleich = document.getElementById("benzinsell1").value; 
			
			if (vergleich == "" || isNaN(vergleich) == true) {
				return false;
			}
			if (benzin - vergleich < 0) {
				return false;
			}
			money = money + vergleich *10 /10;
			benzin = benzin - vergleich;
			document.getElementById("abenzin").innerHTML = "Benzin: "+ benzin;
		}
		
		if (uebergabe == "g") {
			var vergleich = document.getElementById("goldsell").value; 
			
			if (vergleich == "" || isNaN(vergleich) == true) {
				return false;
			}
			if (money - vergleich < 0) {
				return false;
			}
			money = money - vergleich *10 /10;
			samen = samen + vergleich * 50;
		}
		
		document.getElementById("asamen").innerHTML = convert(samen);
		document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "  Gold";
		document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
		}
	
/* Kaufen / Verkaufen reiter &ouml;ffnen */
	function visible(x) {
		if (x == "s"){
			if (offens == false) {
				document.getElementById("verkaufen").style.display = "block";
				offens = true;
				return false;
			}
			if (offens == true) {
				document.getElementById("verkaufen").style.display = "none";
				offens = false;
				return false;
			}
			return false;
		}
		if (x == "b") {
			if (offenb == false) {
				document.getElementById("kaufen").style.display = "block";
				offenb = true;
				return false;
			}
			if (offenb == true) {
				document.getElementById("kaufen").style.display = "none";
				offenb = false;
				return false;
			}
			
		}	
		if (x == "c") {
			if (offenc == false) {
			document.getElementById("toastersinn").style.display = "block";
			offenc = true;
			return false;
			}
			if (offenc == true) {
				document.getElementById("toastersinn").style.display = "none";
				offenc = false;
				return false;
			}
		}
		if (x == "d") {
			if (offend == false) {
				document.getElementById("dungeonbuttonmachtsichtbar").style.display = "block";
				offend = true;
				return false;
			}
			if (offend == true ) {
				document.getElementById("dungeonbuttonmachtsichtbar").style.display = "none";
				offend = false;
				return false;
			}
		}
		
		if (x == "u") {
			if (offenu == false) {
				document.getElementById("upgrades").style.display = "block";
				offenu = true;
				return false;
			}
			
			if (offenu == true ) {
				document.getElementById("upgrades").style.display = "none";
				offenu = false;
				return false;
			}
		}
		
		if (x == "i") {
			if (offeni == false) {
				document.getElementById("besitzanzeigen").style.display = "block";
				offeni = true;
				return false;
			}
			
			if (offeni == true ) {
				document.getElementById("besitzanzeigen").style.display = "none";
				offeni = false;
				return false;
			}
	}
		if (x == "x") {
			if (offenx == false) {
				document.getElementById("angrifftext").style.display ="block";
				offenx = true;
				return false;
			}
			if (offenx == true) {
				document.getElementById("angrifftext").style.display ="none";
				offenx = false;
				return false;
			}
			
		}
		if (x == "waldmaus") {
			if (offenwaldmaus == false) {
				document.getElementById("waldmaus").style.display ="block";
				offenwaldmaus = true;
				return false;
			}
			if (offenwaldmaus == true) {
				document.getElementById("waldmaus").style.display ="none";
				offenwaldmaus = false;
				return false;
			}
			
		}
		if (x == "feldhamster") {
			if (offenfeldhamster == false) {
				document.getElementById("feldhamster").style.display ="block";
				offenfeldhamster = true;
				return false;
			}
			if (offenfeldhamster == true) {
				document.getElementById("feldhamster").style.display ="none";
				offenfeldhamster = false;
				return false;
			}
			
		}
		if (x == "eichhornchen") {
			if (offeneichhornchen == false) {
				document.getElementById("eichhornchen").style.display ="block";
				offeneichhornchen = true;
				return false;
			}
			if (offeneichhornchen == true) {
				document.getElementById("eichhornchen").style.display ="none";
				offeneichhornchen = false;
				return false;
			}
			
		}
		if (x == "capybara") {
			if (offencapybara == false) {
				document.getElementById("capybara").style.display ="block";
				offencapybara = true;
				return false;
			}
			if (offencapybara == true) {
				document.getElementById("capybara").style.display ="none";
				offencapybara = false;
				return false;
			}
			
		}
			
		
		if (x == "menu") {
			if (offenmenu == false) {
				document.getElementById("menumenu").style.display ="block";
				offenmenu = true;
				return false;
			}
			if (offenmenu == true) {
				document.getElementById("menumenu").style.display ="none";
				offenmenu = false;
				return false;
			}
			
		}
		if (x == "stats") {
			if (offenstats == false) {
				document.getElementById("statsstats").style.display ="block";
				offenstats = true;
				return false;
			}
			if (offenstats == true) {
				document.getElementById("statsstats").style.display ="none";
				offenstats = false;
				return false;
			}
			
		}
		
		if (x == "ausrichten") {
			if (offenausrichtung == false) {
				document.getElementById("toasterausrichtung").style.display ="block";
				offenausrichtung = true;
				return false;
			}
			if (offenausrichtung == true) {
				document.getElementById("toasterausrichtung").style.display ="none";
				offenausrichtung = false;
				return false;
			}
			
		}
}
	
	function toast(x) {
		if (x == "an"){
		toasten = setInterval(toast, 1000);
		document.getElementById("an").disabled = true;
		}
		if (x == "aus"){
		clearInterval(toasten);
		document.getElementById("an").disabled = false;
		return false;
		}
		
		if(benzin >= toaster && moerchen >= toaster){
			benzin = benzin - toaster;
			moerchen = moerchen - toaster;
			krieger = krieger + toaster;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
		
		if(benzin < toaster && moerchen > toaster){
			moerchen = moerchen - parseInt(benzin);
			krieger = krieger + parseInt(benzin);
			benzin = 0;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+ convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
		
		if(moerchen < toaster && benzin > toaster){
			benzin = benzin - moerchen;
			krieger = krieger + moerchen;
			moerchen = 0;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+ convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
		
		
		if( (benzin > toaster) && (benzin > moerchen) && (moerchen > toaster)  ){
			benzin = benzin - toaster;
			moerchen = moerchen - toaster;
			krieger = krieger + toaster;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+ convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
		
		if( (benzin > toaster) && (benzin < moerchen)){
			benzin = benzin - toaster;
			moerchen = moerchen - toaster;
			krieger = krieger + toaster;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+ convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
		

		
		
		if( (benzin < toaster) && (moerchen < toaster) && (benzin > moerchen)){
			benzin = benzin - moerchen;
			krieger = krieger + moerchen;
			moerchen = 0;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+ convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
		
		if( (benzin < toaster) && (moerchen < toaster) && (benzin < moerchen)){
			moerchen = moerchen - benzin;
			krieger = krieger + benzin;
			benzin = 0
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+ convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
		
		if( (benzin < toaster) && (moerchen < toaster) && (benzin == moerchen)){
			krieger = krieger + benzin;
			benzin = 0;
			moerchen = 0;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+ convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
		
		if	(benzin == 0 || moerchen == 0){
			clearInterval(toasten);
			document.getElementById("an").disabled = false;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+ convert(krieger);
			document.getElementById("abenzin").innerHTML =  "Benzin: "+ convert(benzin);
			document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		}
//		document.getElementById("ukrieger").style.display = "block";
		
		
	}
	
	function dungeon(x) {
		document.getElementById("battlereport").innerHTML = "";
		if (x == "1"){
			
			var soldaten = document.getElementById("anzahlsoldatens").value;
				if (soldaten > krieger){
					document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden');
					return false;
				}
				if (isNaN(soldaten) == true){
					document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer');
					return false;
				}
				if (soldaten == ""){
					document.getElementById("battlereport").innerHTML =('Die eingabe war leer');
					return false;
				}
			document.getElementById("battlereport").innerHTML =('Paderborn wurde angegriffen');
			krieger = krieger - soldaten;
			document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
			
			if (attack1 == 0){
			enemys1 = getRandom(3000,5000);
			}
			if (attack1 == 1){
			enemys1 = getRandom(3500,5500);
				}
			if (attack1 == 2){
			enemys1 = getRandom(4000,6000);
			gegenangriff(1);
				}
			if (attack1 == 3){
			enemys1 = getRandom(6000,7000);
				}
			
			if (enemys1 - soldaten < 0){
				
				document.getElementById("battlereport").innerHTML =('Die Schlacht wurde gewonnen.')
				var verluste = enemys1 ;
				var rueckkehr = soldaten - enemys1 ;
				var bekehrt = getRandom(300,500);
				var lootsamen = getRandom(150000,500000);
				var lootbenzin = getRandom(1500,5000);
				var lootmoehren = getRandom(1500,5000);
				var lootgeld = getRandom(5000,10000);
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
				money = money + parseInt(lootgeld);
				samen = samen + parseInt(lootsamen);
				benzin = benzin + parseInt(lootbenzin);
				moerchen = moerchen + parseInt(lootmoehren);
				krieger = krieger + bekehrt + rueckkehr;
				document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
				document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
				document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
				document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
				document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
				
				attack1 = attack1 +1;
				
				
				}
				
			
			if (enemys1 -soldaten > 0){
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren. <br>');
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen <br>');
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Paderborn zwischen 2.000 und 7.000 Gegner befinden! <br>');
				krieger = krieger + 1;
				document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
			}
			if (enemys1 - soldaten == 0){
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden <br>');
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Der K&ouml;nig von Paderborn moechte Frieden und macht dir ein Angebot welches du nicht ablehnen kannst <br>');
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er gibt dir 300.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst! <br>')
				samen = samen + 300000;
				document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
				
			}
			if (attack1 == 4){
				document.getElementById("dungeon1").style.display = "none";
				
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Paderborn schliesst sich dir an! <br>'+'Die Anzahl deiner Tiere wurden alle um 20  erh&ouml;ht!')
				one = one + 20;
				document.getElementById("eins").innerHTML = convert(one);
				two = two + 20;
				document.getElementById("zwei").innerHTML = convert(two);
				three = three + 20;
				document.getElementById("drei").innerHTML = convert(three);
				four = four + 20;
				document.getElementById("vier").innerHTML = convert(four);
				document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/paderborn.gif">');
				}
			
				
		}
		
		
		if (x == "2"){
			var soldaten = document.getElementById("anzahlsoldatenm").value;
				if (soldaten > krieger){
					document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
					return false;
				}
				if (isNaN(soldaten) == true){
					document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
					return false;
				}
				if (soldaten == ""){
					document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
					return false;
				}
				document.getElementById("battlereport").innerHTML =('Bielefeld wurde angegriffen');
				krieger = krieger - soldaten;
				document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
				
					if (attack2 == 0){
					enemys2 = getRandom(10000,17000);
					}
					if (attack2 == 1){
					enemys2 = getRandom(12500,17000);
						}
					if (attack2 == 2){
					enemys2 = getRandom(15000,17000);
					gegenangriff(2);
						}
					if (attack2 == 3){
					enemys2 = getRandom(16000,17000);
						}
				
				
				if (enemys2 - soldaten < 0){
					document.getElementById("battlereport").innerHTML =('Die Schlacht wurde gewonnen.')
					var verluste = enemys2 ;
					var rueckkehr = soldaten - enemys2 ;
					var bekehrt = getRandom(1000,1500);
					var lootsamen = getRandom(1000000,1700000);
					var lootgeld = getRandom(10000,15000);
					var lootbenzin = getRandom(5500,8500);
					var lootmoehren = getRandom(5000,8000);
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
					money = money + parseInt(lootgeld);
					samen = samen + parseInt(lootsamen);
					benzin = benzin + parseInt(lootbenzin);
					moerchen = moerchen + parseInt(lootmoehren);
					krieger = krieger + bekehrt + rueckkehr;
					document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
					document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
					document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
					document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
					document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
					
					
					attack2 = attack2 + 1 ;
					
				}
				if (enemys2 -soldaten > 0){
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren. <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Bielefeld zwischen 15.000 und 20.000 Gegner befinden! <br>');
					krieger = krieger + 1;
					document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
				}
				if (enemys2 - soldaten == 0){
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Der K&ouml;nig von Bielefeld moechte Frieden und macht dir ein Angebot welches du nicht ablehnen kannst <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er gibt dir 1.500.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst! <br>')
					samen = samen + 1500000;
					document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
					
				}
				if (attack2 == 4){
					document.getElementById("dungeon2").style.display = "none";
					
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Bielefeld schliesst sich dir an! <br>'+'Die Anzahl deiner Tiere wurde um 50 erh&ouml;ht!')
					one = one + 50;
					document.getElementById("eins").innerHTML = convert(one);
					two = two + 50;
					document.getElementById("zwei").innerHTML = convert(two);
					three = three + 50;
					document.getElementById("drei").innerHTML = convert(three);
					four = four + 50;
					document.getElementById("vier").innerHTML = convert(four);
					document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/bielefeld.gif">');
					}
		}
		
		
		if (x == "3"){
			var soldaten = document.getElementById("anzahlsoldatenho").value;
				if (soldaten > krieger){
					document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
					return false;
				}
				if (isNaN(soldaten) == true){
					document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
					return false;
				}
				if (soldaten == ""){
					document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
					return false;
				}
				document.getElementById("battlereport").innerHTML =('Duisburg wurde angegriffen');
				krieger = krieger - soldaten;
				document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
				
					if (attack3 == 0){
						enemys3 = getRandom(20000,30000);
					}
					if (attack3 == 1){
						enemys3 = getRandom(25000,35000);
						}
					if (attack3 == 2){
					enemys3 = getRandom(30000,35000);
					gegenangriff(3);
						}
					if (attack3 == 3){
					enemys3 = getRandom(34000,35000);
						}
				
				if (enemys3 - soldaten < 0){
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde gewonnen. <br>')
					var verluste = enemys3 ;
					var rueckkehr = soldaten - enemys3 ;
					var bekehrt = getRandom(2000,3000);
					var lootsamen = getRandom(2000000,3000000);
					var lootgeld = getRandom(20000,35000);
					var lootbenzin = getRandom(2000,22000);
					var lootmoehren = getRandom(10500,50000);
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
					money = money + parseInt(lootgeld);
					samen = samen + parseInt(lootsamen);
					benzin = benzin + parseInt(lootbenzin);
					moerchen = moerchen + parseInt(lootmoehren);
					krieger = krieger + bekehrt + rueckkehr;
					document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
					document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
					document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
					document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
					document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
					
					attack3 = attack3 + 1;
					
				}
				if (enemys3 -soldaten > 0){
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren. <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Duisburg zwischen 25.000 und 35.000 Gegner befinden! <br>');
					krieger = krieger + 1;
					document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
				}
				if (enemys3 - soldaten == 0){
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Der K&ouml;nig von Duisburg moechte Frieden und schickt dir im vorraus ein friedensangebot <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er gibt dir 3.000.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst! <br>')
					samen = samen + 3000000;
					document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
					
				}
				if (attack3 == 4){
					document.getElementById("dungeon3").style.display = "none";
					
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Duisburg schliesst sich dir an! <br>'+'Die Anzahl deiner Tiere wurde um 75 erh&ouml;ht!')
					one = one + 75;
					document.getElementById("eins").innerHTML = one;
					two = two + 75;
					document.getElementById("zwei").innerHTML = two;
					three = three + 75;
					document.getElementById("drei").innerHTML = three;
					four = four + 75;
					document.getElementById("vier").innerHTML = four;
					document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/duisburg.gif">');
					}
		}
		
		
		if (x == "4"){
			var soldaten = document.getElementById("anzahlsoldatenhe").value;
				if (soldaten > krieger){
					document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
					return false;
				}
				if (isNaN(soldaten) == true){
					document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
					return false;
				}
				if (soldaten == ""){
					document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
					return false;
				}
				document.getElementById("battlereport").innerHTML =('K&ouml;ln wurde angegriffen');
				krieger = krieger - soldaten;
				document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
				
				if (attack4 == 0){
					enemys4 = getRandom(90000,130000);
				}
				if (attack4 == 1){
					enemys4 = getRandom(125000,150000);
					}
				if (attack4 == 2){
				enemys4 = getRandom(145000,150000);
				gegenangriff(4);
					}
				if (attack4 == 3){
				enemys4 = getRandom(149000,151000);
					}
				
				if (enemys4 - soldaten < 0){
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
					var verluste = enemys4 ;
					var rueckkehr = soldaten - enemys4 ;
					var bekehrt = getRandom(9000,13000);
					var lootsamen = getRandom(9000000,13000000);
					var lootgeld = getRandom(50000,80000);
					var lootbenzin = getRandom(45500,50000);
					var lootmoehren = getRandom(1500,50000);
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
					money = money + parseInt(lootgeld);
					samen = samen + parseInt(lootsamen);
					benzin = benzin + parseInt(lootbenzin);
					moerchen = moerchen + parseInt(lootmoehren);
					krieger = krieger + bekehrt + rueckkehr;
					document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
					document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
					document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
					document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
					document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
					
					
					attack4 = attack4 + 1;
					
				}
				if (enemys4 -soldaten > 0){
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in K&ouml;ln zwischen 125.000 und 160.000 Krieger befinden!');
					krieger = krieger + 1;
					document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
				}
				if (enemys4 - soldaten == 0){
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Der K&ouml;nig von K&ouml;ln versucht dich zu erpressen ');
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er gibt dir 300.000.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst!')
					samen = samen + 300000000;
					document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
					
				}
				if (attack4 == 4){
					document.getElementById("dungeon4").style.display = "none";
					
					document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('K&ouml;ln schliesst sich dir an! <br>'+'Die Anzahl deiner Tiere wurde um 150 erh&ouml;ht!')
					one = one + 150;
					document.getElementById("eins").innerHTML = convert(one);
					two = two + 150;
					document.getElementById("zwei").innerHTML = convert(two);
					three = three + 150;
					document.getElementById("drei").innerHTML = convert(three);
					four = four + 150;
					document.getElementById("vier").innerHTML = convert(four);
					document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/koeln.gif">');
					}
				
		}
				
				
				if (x == "5"){
					var soldaten = document.getElementById("anzahlsoldatennieder").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Niedersachsen wurde angegriffen');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack5 == 0){
							enemys5 = getRandom(700000,7000000);
						}
						if (attack5 == 1){
							enemys5 = getRandom(1250000,7700000);
							}
						if (attack5 == 2){
							enemys5 = getRandom(3000000,7740000);
							gegenangriff(5);
							}
						if (attack5 == 3){
							enemys5 = getRandom(5000000,7740000);
							}
						
						if (enemys5 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys5 ;
							var rueckkehr = soldaten - enemys5 ;
							var bekehrt = getRandom(90000,130000);
							var lootsamen = getRandom(13000000,70000000);
							var lootgeld = getRandom(500000,800000);
							var lootbenzin = getRandom(455000,500000);
							var lootmoehren = getRandom(150000,5000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack5 = attack5 + 1;
							
						}
						if (enemys5 -soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Niedersachsen zwischen 700.000 und 10.000.000 Krieger befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys5 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Der K&ouml;nig Niedersachsen versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er gibt dir 3.000.000.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst!')
							samen = samen + 300000000;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack5 == 4){
							document.getElementById("dungeon5").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Niedersachsen schliesst sich dir an! <br>'+'Die Anzahl deiner Tiere wurden um 500 erh&ouml;ht!')
							one = one + 500;
							document.getElementById("eins").innerHTML = convert(one);
							two = two + 500;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three + 500;
							document.getElementById("drei").innerHTML = convert(three);
							four = four + 500;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/niedersachsen.gif">');
							}
						
					}
				
				if (x == "6"){
					var soldaten = document.getElementById("anzahlsoldatennorden").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Norddeutschland wurde angegriffen');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack6 == 0){
							enemys6 = getRandom(7000000,40000000);
						}
						if (attack6 == 1){
							enemys6 = getRandom(10000000,42000000);
							}
						if (attack6 == 2){
							enemys6 = getRandom(15000000,44000000);
							gegenangriff(6);
							}
						if (attack6 == 3){
							enemys6 = getRandom(20000000,48000000);
							}
						
						if (enemys6 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys6 ;
							var rueckkehr = soldaten - enemys6 ;
							var bekehrt = getRandom(900000,2300000);
							var lootsamen = getRandom(13000000,70000000);
							var lootgeld = getRandom(500000,800000);
							var lootbenzin = getRandom(455000,500000);
							var lootmoehren = getRandom(150000,5000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack6 = attack6 + 1;
							
						}
						if (enemys6 -soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Norddeutschland zwischen 20.000.000 und 50.000.000 Krieger befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys6 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Norddeutschland versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Es gibt dir 30.000.000.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst!')
							samen = samen + 30000000000;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack6 == 4){
							document.getElementById("dungeon6").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Der Norden Deutschlands schliesst sich dir an! <br>'+'Die Anzahl deiner Tiere wurden um 1000 erh&ouml;ht!')
							one = one + 1000;
							document.getElementById("eins").innerHTML = convert(one);
							two = two + 1000;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three + 1000;
							document.getElementById("drei").innerHTML = convert(three);
							four = four + 1000;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/norddeutschland.gif">');
							}
						
					}
				
				if (x == "7"){
					var soldaten = document.getElementById("anzahlsoldatensueden").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Sueddeutschland wurde angegriffen');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack7 == 0){
							enemys7 = getRandom(10000000,40000000);
						}
						if (attack7 == 1){
							enemys7 = getRandom(20000000,52000000);
							}
						if (attack7 == 2){
							enemys7 = getRandom(35000000,74000000);
							gegenangriff(7);
							}
						if (attack7 == 3){
							enemys7 = getRandom(50000000,88000000);
							}
						
						if (enemys7 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys7 ;
							var rueckkehr = soldaten - enemys7 ;
							var bekehrt = getRandom(900000,3000000);
							var lootsamen = getRandom(23000000,80000000);
							var lootgeld = getRandom(500000,800000);
							var lootbenzin = getRandom(955000,1500000);
							var lootmoehren = getRandom(1500000,5000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack7 = attack7 + 1;
							
						}
						if (enemys7 -soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Norddeutschland zwischen 20.000.000 und 50.000.000 Krieger befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys7 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Norddeutschland versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Es gibt dir 30.000.000.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst!')
							samen = samen + 30000000000;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack7 == 4){
							document.getElementById("dungeon7").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Ganz Deutschland geh&ouml;rt nun dir! Die anzahl deiner Produktionsst&auml;tten wurden verdoppelt!')
							one = one * 2;
							document.getElementById("eins").innerHTML = convert(one);
							two = two * 2;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three * 2;
							document.getElementById("drei").innerHTML = convert(three);
							four = four * 2;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/sueddeutschland.png">');
							}
						
					}
				if (x == "8"){
					var soldaten = document.getElementById("anzahlsoldateneuropa").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Du hast Europa angegriffen');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack8 == 0){
							enemys8 = getRandom(100000000,700000000);
						}
						if (attack8 == 1){
							enemys8 = getRandom(300000000,700000000);
							}
						if (attack8 == 2){
							enemys8 = getRandom(500000000,742500000);
							gegenangriff(8);
							}
						if (attack8 == 3){
							enemys8 = getRandom(700000000,742500000);
							}
						
						if (enemys8 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys8 ;
							var rueckkehr = soldaten - enemys8 ;
							var bekehrt = getRandom(9000000,30000000);
							var lootsamen = getRandom(230000000,800000000);
							var lootgeld = getRandom(5000000,8000000);
							var lootbenzin = getRandom(9550000,15000000);
							var lootmoehren = getRandom(15000000,50000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack8 = attack8 + 1;
							
						}
						if (enemys8 -soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Europa zwischen 200.000.000 und 750.000.000 Krieger befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys8 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Europa versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Es gibt dir 300.000.000.000 Samen, dafür will es aber, dass, du dich aus seinen Kontinent fernh&auml;lst!')
							samen = samen + 300000000000;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack8 == 4){
							document.getElementById("dungeon8").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Ganz Europa geh&ouml;rt nun dir! Die anzahl deiner Produktionsst&auml;tten wurden verfünffacht!')
							one = one * 5;
							document.getElementById("eins").innerHTML = convert(one);
							two = two * 5;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three * 5;
							document.getElementById("drei").innerHTML = convert(three);
							four = four * 5;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/europa.gif">');
							}
						
					}
				
				
				if (x == "9"){
					var soldaten = document.getElementById("anzahlsoldatenasien").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Du hast Asien angegriffen');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack9 == 0){
							enemys9 = getRandom(100000000,400000000);
						}
						if (attack9 == 1){
							enemys9 = getRandom(200000000,4100000000);
							}
						if (attack9 == 2){
							enemys9 = getRandom(300000000,4300000000);
							gegenangriff(9);
							}
						if (attack9 == 3){
							enemys9 = getRandom(400000000,4427000000);
							}
						
						if (enemys9 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys9 ;
							var rueckkehr = soldaten - enemys9 ;
							var bekehrt = getRandom(90000000,300000000);
							var lootsamen = getRandom(230000000,800000000);
							var lootgeld = getRandom(50000000,80000000);
							var lootbenzin = getRandom(955000000,5500000000);
							var lootmoehren = getRandom(1500000000,5000000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack9 = attack9 + 1;
							
						}
						if (enemys9 -soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Asien zwischen 600 Millionen und  4,5 Milliarden Krieger befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys9 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Asien versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Es gibt dir 3.000.000.000.000 Samen, dafür will es aber, dass, du dich aus seinen Land fernh&auml;lst!')
							samen = samen + 3000000000000;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack9 == 4){
							document.getElementById("dungeon9").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Ganz Asien geh&ouml;rt nun dir! Die anzahl deiner Produktionsst&auml;tten wurden versiebenfacht!')
							one = one * 7;
							document.getElementById("eins").innerHTML = convert(one);
							two = two * 7;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three * 7;
							document.getElementById("drei").innerHTML = convert(three);
							four = four * 7;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/asien.gif">');
							}
						
					}
				if (x == "10"){
					var soldaten = document.getElementById("anzahlsoldatenafrika").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Du hast Afrika angegriffen');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack10 == 0){
							enemys10 = getRandom(100000000,1000000000);
						}
						if (attack10 == 1){
							enemys10 = getRandom(200000000,1000000000);
							}
						if (attack10 == 2){
							enemys10 = getRandom(500000000,1000000000);
							gegenangriff(10);
							}
						if (attack10 == 3){
							enemys10 = getRandom(700000000,1111000000);
							}
						
						if (enemys10 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys10 ;
							var rueckkehr = soldaten - enemys10 ;
							var bekehrt = getRandom(9000000,300000000);
							var lootsamen = getRandom(230000000,800000000);
							var lootgeld = getRandom(5000000,8000000);
							var lootbenzin = getRandom(9550000,15000000);
							var lootmoehren = getRandom(15000000,50000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack10 = attack10 + 1;
							
						}
						if (enemys10 -soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Afrika zwischen 100.000.000 und 1.200.000.000 Krieger befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys10 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Afrika versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Es gibt dir 30.000.000.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst!')
							samen = samen + 30000000000;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack10 == 4){
							document.getElementById("dungeon10").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Afrika geh&ouml;rt nun dir! Die anzahl deiner Produktionsst&auml;tten wurden verdoppelt!')
							one = one * 2;
							document.getElementById("eins").innerHTML = convert(one);
							two = two * 2;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three * 2;
							document.getElementById("drei").innerHTML = convert(three);
							four = four * 2;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/afrika.gif">');
							}
						
					}
				
				
				if (x == "11"){
					var soldaten = document.getElementById("anzahlsoldatenaustralien").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Du hast den Kontinent Australien angegriffen!');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack11 == 0){
							enemys11 = getRandom(10000000,30000000);
						}
						if (attack11 == 1){
							enemys11 = getRandom(20000000,32000000);
							}
						if (attack11 == 2){
							enemys11 = getRandom(30000000,34000000);
							gegenangriff(11);
							}
						if (attack11 == 3){
							enemys11 = getRandom(50000000,68000000);
							}
						
						if (enemys11 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys11 ;
							var rueckkehr = soldaten - enemys11 ;
							var bekehrt = getRandom(900000,3000000);
							var lootsamen = getRandom(23000000,80000000);
							var lootgeld = getRandom(500000,800000);
							var lootbenzin = getRandom(955000,1500000);
							var lootmoehren = getRandom(1500000,5000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack11 = attack11 + 1;
							
						}
						if (enemys11 -soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Australien zwischen 20.000.000 und 50.000.000 Krieger befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys11 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Australien versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Es gibt dir 30.000.000.000 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst!')
							samen = samen + 30000000000;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack11 == 4){
							document.getElementById("dungeon11").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Ganz Australien geh&ouml;rt nun dir! Die anzahl deiner Produktionsst&auml;tten wurden verdoppelt!')
							one = one * 2;
							document.getElementById("eins").innerHTML = convert(one);
							two = two * 2;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three * 2;
							document.getElementById("drei").innerHTML = convert(three);
							four = four * 2;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/australien.gif">');
							}
						
					}
				if (x == "12"){
					var soldaten = document.getElementById("anzahlsoldatenamerika").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Du hast Amerika angegriffen!');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack12 == 0){
							enemys12 = getRandom(1000000000,4000000000);
							gegenangriff(12);
						}
						if (attack12 == 1){
							enemys12 = getRandom(4000000000,8000000000);
							gegenangriff(13);
							}
						if (attack12 == 2){
							enemys12 = getRandom(10000000000,12000000000);
							gegenangriff(14);
							}
						if (attack12 == 3){
							enemys12 = getRandom(12000000000,14000000000);
							}
						
						if (enemys12 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys12 ;
							var rueckkehr = soldaten - enemys12 ;
							var bekehrt = getRandom(90000000,300000000);
							var lootsamen = getRandom(2300000000,8000000000);
							var lootgeld = getRandom(50000000,80000000);
							var lootbenzin = getRandom(955000000,15000000000);
							var lootmoehren = getRandom(1500000000,5000000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack12 = attack12 + 1;
							
						}
						if (enemys12 - soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich in Amerika zwischen 10 und 20 MRD Krieger-Roboter befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys12 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Amerika versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Es gibt dir 10 Samen, dafür will er aber, dass, du dich aus seinen Land fernh&auml;lst!')
							samen = samen + 10;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack12 == 4){
							document.getElementById("dungeon12").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Ganze Welt geh&ouml;rt nun dir! Die Anzahl deiner Produktionsst&auml;tten wurden verzehnfacht! <br> Du hast die Forschungsarbeiten der Amerikaner untersucht und stellst fest, das diese auch den Mond besiedelt haben!!')
							one = one * 10;
							document.getElementById("eins").innerHTML = convert(one);
							two = two * 10;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three * 10;
							document.getElementById("drei").innerHTML = convert(three);
							four = four * 10;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/amerika.jpg">');
							document.getElementById("dungeon13").style.display = "block";
							}
						
						
						
						
						
					}
				
				if (x == "13"){
					var soldaten = document.getElementById("anzahlsoldatenmond").value;
						if (soldaten > krieger){
							document.getElementById("battlereport").innerHTML =('Es wurden mehr Krieger ausgew&auml;hlt als vorhanden')
							return false;
						}
						if (isNaN(soldaten) == true){
							document.getElementById("battlereport").innerHTML =('Die eingabe war keine Nummer')
							return false;
						}
						if (soldaten == ""){
							document.getElementById("battlereport").innerHTML =('Die eingabe war leer')
							return false;
						}
						document.getElementById("battlereport").innerHTML =('Du hast den Mond angegriffen!');
						krieger = krieger - soldaten;
						document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						
						if (attack13 == 0){
							enemys13 = getRandom(10000000000,40000000000);
							gegenangriff(15);
						}
						if (attack13 == 1){
							enemys13 = getRandom(40000000000,80000000000);
							gegenangriff(16);
							}
						if (attack13 == 2){
							enemys13 = getRandom(100000000000,120000000000);
							gegenangriff(17);
							}
						if (attack13 == 3){
							enemys13 = getRandom(120000000000,140000000000);
							}
						
						if (enemys13 - soldaten < 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Die Schlacht wurde gewonnen. ')
							var verluste = enemys13 ;
							var rueckkehr = soldaten - enemys13 ;
							var bekehrt = getRandom(900000000,3000000000);
							var lootsamen = getRandom(23000000000,80000000000);
							var lootgeld = getRandom(500000000,800000000);
							var lootbenzin = getRandom(9550000000,150000000000);
							var lootmoehren = getRandom(15000000000,50000000000);
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Du hast '+convert(verluste)+' deiner tapfersten Krieger verloren, die Restlichen '+ convert(rueckkehr) + ' Soldaten sind zurueckgekehrt <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Sie konnten'+convert(bekehrt)+'gegnerische Soldaten bekehren. Sie kaempfen nun fuer dich! <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Deine Soldaten bringen dir '+convert(lootsamen)+' Samen und '+convert(lootgeld)+' Gold <br>');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Zudem pluenderten sie '+convert(lootmoehren)+' moehren und '+convert(lootbenzin)+' Benzin <br>');
							money = money + parseInt(lootgeld);
							samen = samen + parseInt(lootsamen);
							benzin = benzin + parseInt(lootbenzin);
							moerchen = moerchen + parseInt(lootmoehren);
							krieger = krieger + bekehrt + rueckkehr;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
							document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
							document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
							document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
							document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
							
							
							attack13 = attack13 + 1;
							
						}
						if (enemys13 - soldaten > 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht wurde verloren.');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Ein Krieger ist lebending zurueckgekehrt und berichtet von dem Geschehen');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er ist sich sicher das sich auf den Mond zwischen 10 und 200 MRD Amerikaner befinden!');
							krieger = krieger + 1;
							document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+krieger;
						}
						if (enemys13 - soldaten == 0){
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Die Schlacht war ein unentschieden');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Der Mond versucht dich zu erpressen ');
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +(' Er gibt dir 1 Samen, dafür will er aber, dass, du dich von ihn fernh&auml;lst!')
							samen = samen + 1;
							document.getElementById("asamen").innerHTML = Math.round(samen * 100) / 100;
							
						}
						if (attack13 == 4){
							document.getElementById("dungeon12").style.display = "none";
							
							document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('Du hast den Mond erobert! Die Anzahl deiner Produktionsst&auml;tten wurden verfünzehnfacht! More Content Coming Soon')
							one = one * 15;
							document.getElementById("eins").innerHTML = convert(one);
							two = two * 15;
							document.getElementById("zwei").innerHTML = convert(two);
							three = three * 15;
							document.getElementById("drei").innerHTML = convert(three);
							four = four * 15;
							document.getElementById("vier").innerHTML = convert(four);
							document.getElementById("besitz").innerHTML = "Du hast gewonnen... More Content coming Soon";
							document.getElementById("dungeon13").style.display = "none";
							}
						
				}	
				
				document.getElementById("battlereport").innerHTML = document.getElementById("battlereport").innerHTML +('<br><br>');
				document.getElementById("einssec").innerHTML = convert(one * mult1);
				document.getElementById("zweisec").innerHTML = convert(two * mult2);
				document.getElementById("dreisec").innerHTML = convert(three * mult3);
				document.getElementById("viersec").innerHTML = convert(four * mult4);
		}
		
		
		
		
	
	
	function getRandom(min, max) {
		 if(min > max) {
		  return false;
		 }
		 
		 if(min == max) {
		  return min;
		 }
		 
		 var r;
		 
		 do {
		  r = Math.random();
		 }
		 while(r == 1.0);
		 return min + parseInt(r * (max-min));
		}
	
	
	function upgrade(x) {
		if (schwierigkeit == "einfach" || schwierigkeit == "mittel" ) {
			
		switch (x) {
		case 1:
			vergleich1 = 200;
			var z = 1;
			break;
		case 2:
			vergleich1 = 2000;
			var z = 1;
			break;
		case 3:
			vergleich1 = 20000;
			var z = 1;
			break;
		case 4:
			vergleich1 = 200000;
			var z = 1;
			break;
			
			
		case 5:
			vergleich1 = 1500;
			var z = 2;
			break;
		case 6:
			vergleich1 = 15000;
			var z = 2;
			break;
		case 7:
			vergleich1 = 500000;
			var z = 2;
			break;
		case 8:
			vergleich1 = 5000000;
			var z = 2;
			break;
			
			
		case 9:
			vergleich1 = 10000;
			var z = 3;
			break;
		case 10:
			vergleich1 = 1000000;
			var z = 3;
			break;
		case 11:
			vergleich1 = 15500000;
			var z = 3;
			break;
		case 12:
			vergleich1 = 100000000;
			var z = 3;
			break;
			
	
		case 13:
			vergleich1 = 500000;
			var z = 4;
			break;
		case 14:
			vergleich1 = 50000000;
			var z = 4;
			break;
		case 15:
			vergleich1 = 500000000;
			var z = 4;
			break;
		case 16:
			vergleich1 = 1000000000;
			var z = 4;
			break;
		}
		}
		
		
		if (schwierigkeit == "schwer") {
			
			switch (x) {
			case 1:
				vergleich1 = 2000;
				var z = 1;
				break;
			case 2:
				vergleich1 = 20000;
				var z = 1;
				break;
			case 3:
				vergleich1 = 200000;
				var z = 1;
				break;
			case 4:
				vergleich1 = 2000000;
				var z = 1;
				break;
				
				
			case 5:
				vergleich1 = 15000;
				var z = 2;
				break;
			case 6:
				vergleich1 = 150000;
				var z = 2;
				break;
			case 7:
				vergleich1 = 5000000;
				var z = 2;
				break;
			case 8:
				vergleich1 = 50000000;
				var z = 2;
				break;
				
				
			case 9:
				vergleich1 = 100000;
				var z = 3;
				break;
			case 10:
				vergleich1 = 10000000;
				var z = 3;
				break;
			case 11:
				vergleich1 = 10000000;
				var z = 3;
				break;
			case 12:
				vergleich1 = 1000000000;
				var z = 3;
				break;
				
		
			case 13:
				vergleich1 = 5000000;
				var z = 4;
				break;
			case 14:
				vergleich1 = 500000000;
				var z = 4;
				break;
			case 15:
				vergleich1 = 5000000000;
				var z = 4;
				break;
			case 16:
				vergleich1 = 50000000000;
				var z = 4;
				break;
			}
			}
		
		if (vergleich1 > samen){
			return false;
		}
		
		if(schwierigkeit == "einfach"){
		switch (x) {
		case 1:
			mult1 = mult1 + 2;
			upgrade1 = upgrade1 + 1;
			var changetext = parseInt(document.getElementById("upgradezahl1").innerHTML); 
			var changezahl = changetext + 2 ;
			document.getElementById("upgradezahl1").innerHTML = changezahl;
			ueins1 = true;
			break;
		case 2:
			mult1 = mult1 + 4;
			upgrade1 = upgrade1 + 1;
			var changetext = parseInt(document.getElementById("upgradezahl1").innerHTML); 
			var changezahl = changetext + 4 ;
			document.getElementById("upgradezahl1").innerHTML = changezahl;
			ueins2 = true;
			break;
		case 3:
			mult1 = mult1 + 6;
			upgrade1 = upgrade1 + 1;
			var changetext = parseInt(document.getElementById("upgradezahl1").innerHTML); 
			var changezahl = changetext + 6 ;
			document.getElementById("upgradezahl1").innerHTML = changezahl;
			ueins3 = true;
			break;
		case 4:
			mult1 = mult1 + 15;
			upgrade1 = upgrade1 + 1;
			var changetext = parseInt(document.getElementById("upgradezahl1").innerHTML); 
			var changezahl = changetext + 15 ;
			document.getElementById("upgradezahl1").innerHTML = changezahl;
			ueins4 = true;
			break;
			
			
		case 5:
			mult2 = mult2 + 8;
			upgrade2 = upgrade2 + 1;
			uzwei1 = true;
			var changetext = parseInt(document.getElementById("upgradezahl2").innerHTML); 
			var changezahl = changetext + 8 ;
			document.getElementById("upgradezahl2").innerHTML = changezahl;
			break;
		case 6:
			mult2 = mult2 + 11;
			upgrade2 = upgrade2 + 1;
			uzwei2 = true;
			var changetext = parseInt(document.getElementById("upgradezahl2").innerHTML); 
			var changezahl = changetext + 11 ;
			document.getElementById("upgradezahl2").innerHTML = changezahl;
			break;
		case 7:
			mult2 =  mult2 + 14;
			upgrade2 = upgrade2 + 1;
			uzwei3 = true;
			var changetext = parseInt(document.getElementById("upgradezahl2").innerHTML); 
			var changezahl = changetext + 14 ;
			document.getElementById("upgradezahl2").innerHTML = changezahl;
			break;
		case 8:
			mult2 =  mult2 + 20;
			upgrade2 = upgrade2 + 1;
			uzwei4 = true;
			var changetext = parseInt(document.getElementById("upgradezahl2").innerHTML); 
			var changezahl = changetext + 20 ;
			document.getElementById("upgradezahl2").innerHTML = changezahl;
			break;
			
			
		case 9:
			mult3 =  mult3 + 15;
			upgrade3 = upgrade3 + 1;
			udrei1 = true;
			var changetext = parseInt(document.getElementById("upgradezahl3").innerHTML); 
			var changezahl = changetext + 15 ;
			document.getElementById("upgradezahl3").innerHTML = changezahl;
			break;
		case 10:
			mult3 = mult3 + 25;
			upgrade3 = upgrade3 + 1;
			udrei2 = true;
			var changetext = parseInt(document.getElementById("upgradezahl3").innerHTML); 
			var changezahl = changetext + 25 ;
			document.getElementById("upgradezahl3").innerHTML = changezahl;
			break;
		case 11:
			mult3 = mult3 + 35;
			upgrade3 = upgrade3 + 1;
			udrei3 = true;
			var changetext = parseInt(document.getElementById("upgradezahl3").innerHTML); 
			var changezahl = changetext + 35 ;
			document.getElementById("upgradezahl3").innerHTML = changezahl;
			break;
		case 12:
			mult3 = mult3 + 50;
			upgrade3 = upgrade3 + 1;
			udrei4 = true;
			var changetext = parseInt(document.getElementById("upgradezahl3").innerHTML); 
			var changezahl = changetext + 50 ;
			document.getElementById("upgradezahl3").innerHTML = changezahl;
			break;
			
	
		case 13:
			mult4 = mult4 + 30;
			upgrade4 = upgrade4 + 1;
			uvier1 = true;
			var changetext = parseInt(document.getElementById("upgradezahl4").innerHTML); 
			var changezahl = changetext + 30 ;
			document.getElementById("upgradezahl4").innerHTML = changezahl;
			break;
		case 14:
			mult4 = mult4 + 45;
			upgrade4 = upgrade4 + 1;
			uvier2 = true;
			var changetext = parseInt(document.getElementById("upgradezahl4").innerHTML); 
			var changezahl = changetext + 45 ;
			document.getElementById("upgradezahl4").innerHTML = changezahl;
			break;
		case 15:
			mult4 = mult4 +  60;
			upgrade4 = upgrade4 + 1;
			uvier3 = true;
			var changetext = parseInt(document.getElementById("upgradezahl4").innerHTML); 
			var changezahl = changetext + 60 ;
			document.getElementById("upgradezahl4").innerHTML = changezahl;
			break;
		case 16:
			mult4 = mult4 + 100;
			upgrade4 = upgrade4 + 1;
			uvier4 = true;
			var changetext = parseInt(document.getElementById("upgradezahl4").innerHTML); 
			var changezahl = changetext + 100 ;
			document.getElementById("upgradezahl4").innerHTML = changezahl;
			break;
		}
		}
		
		if(schwierigkeit == "mittel" || schwierigkeit == "schwer"){
			switch (x) {
			case 1:
				ueins1 = true;
				mult1 = mult1 + 1;
				upgrade1 = upgrade1 + 1;
				var changetext = parseInt(document.getElementById("upgradezahl1").innerHTML); 
				var changezahl = changetext + 1 ;
				document.getElementById("upgradezahl1").innerHTML = changezahl;
				break;
			case 2:
				ueins2 = true;
				mult1 = mult1 + 2;
				upgrade1 = upgrade1 + 1;
				var changetext = parseInt(document.getElementById("upgradezahl1").innerHTML); 
				var changezahl = changetext + 2 ;
				document.getElementById("upgradezahl1").innerHTML = changezahl;
				break;
			case 3:
				ueins3 = true;
				mult1 = mult1 + 3;
				upgrade1 = upgrade1 + 1;
				var changetext = parseInt(document.getElementById("upgradezahl1").innerHTML); 
				var changezahl = changetext + 3 ;
				document.getElementById("upgradezahl1").innerHTML = changezahl;
				break;
			case 4:
				mult1 = mult1 + 4;
				upgrade1 = upgrade1 + 1;
				ueins4 = true;
				var changetext = parseInt(document.getElementById("upgradezahl1").innerHTML); 
				var changezahl = changetext + 4 ;
				document.getElementById("upgradezahl1").innerHTML = changezahl;
				break;
				
				
			case 5:
				mult2 = mult2 + 2;
				upgrade2 = upgrade2 + 1;
				uzwei1 = true;
				var changetext = parseInt(document.getElementById("upgradezahl2").innerHTML); 
				var changezahl = changetext + 2 ;
				document.getElementById("upgradezahl2").innerHTML = changezahl;
				break;
			case 6:
				mult2 = mult2 + 4;
				upgrade2 = upgrade2 + 1;
				uzwei2 = true;
				var changetext = parseInt(document.getElementById("upgradezahl2").innerHTML); 
				var changezahl = changetext + 4 ;
				document.getElementById("upgradezahl2").innerHTML = changezahl;
				break;
			case 7:
				mult2 =  mult2 + 6;
				upgrade2 = upgrade2 + 1;
				uzwei3 = true;
				var changetext = parseInt(document.getElementById("upgradezahl2").innerHTML); 
				var changezahl = changetext + 6 ;
				document.getElementById("upgradezahl2").innerHTML = changezahl;
				break;
			case 8:
				mult2 =  mult2 + 8;
				upgrade2 = upgrade2 + 1;
				uzwei4 = true;
				var changetext = parseInt(document.getElementById("upgradezahl2").innerHTML); 
				var changezahl = changetext + 8 ;
				document.getElementById("upgradezahl2").innerHTML = changezahl;
				break;
				
				
			case 9:
				mult3 =  mult3 + 4;
				upgrade3 = upgrade3 + 1;
				udrei1 = true;
				var changetext = parseInt(document.getElementById("upgradezahl3").innerHTML); 
				var changezahl = changetext + 4 ;
				document.getElementById("upgradezahl3").innerHTML = changezahl;
				break;
			case 10:
				mult3 = mult3 + 8;
				upgrade3 = upgrade3 + 1;
				udrei2 = true;
				var changetext = parseInt(document.getElementById("upgradezahl3").innerHTML); 
				var changezahl = changetext + 8 ;
				document.getElementById("upgradezahl3").innerHTML = changezahl;
				break;
			case 11:
				mult3 = mult3 + 12;
				upgrade3 = upgrade3 + 1;
				udrei3 = true;
				var changetext = parseInt(document.getElementById("upgradezahl3").innerHTML); 
				var changezahl = changetext + 12 ;
				document.getElementById("upgradezahl3").innerHTML = changezahl;
				break;
			case 12:
				mult3 = mult3 + 16;
				upgrade3 = upgrade3 + 1;
				udrei4 = true;
				var changetext = parseInt(document.getElementById("upgradezahl3").innerHTML); 
				var changezahl = changetext + 16 ;
				document.getElementById("upgradezahl3").innerHTML = changezahl;
				break;
				
		
			case 13:
				mult4 = mult4 + 8;
				upgrade4 = upgrade4 + 1;
				uvier1 = true;
				var changetext = parseInt(document.getElementById("upgradezahl4").innerHTML); 
				var changezahl = changetext + 8 ;
				document.getElementById("upgradezahl4").innerHTML = changezahl;
				break;
			case 14:
				mult4 = mult4 + 16;
				upgrade4 = upgrade4 + 1;
				uvier2 = true;
				var changetext = parseInt(document.getElementById("upgradezahl4").innerHTML); 
				var changezahl = changetext + 16 ;
				document.getElementById("upgradezahl4").innerHTML = changezahl;
				break;
			case 15:
				mult4 = mult4 +  24;
				upgrade4 = upgrade4 + 1;
				uvier3 = true;
				var changetext = parseInt(document.getElementById("upgradezahl4").innerHTML); 
				var changezahl = changetext + 24 ;
				document.getElementById("upgradezahl4").innerHTML = changezahl;
				break;
			case 16:
				mult4 = mult4 + 32;
				upgrade4 = upgrade4 + 1;
				uvier4 = true;
				var changetext = parseInt(document.getElementById("upgradezahl4").innerHTML); 
				var changezahl = changetext + 32 ;
				document.getElementById("upgradezahl4").innerHTML = changezahl;
				break;
			}
			}
		
		
		if (upgrade1 == 4){
			document.getElementById("waldmause").style.display ="none";
		}
		if (upgrade2 == 4){
			document.getElementById("feldhamsters").style.display ="none";
		}
		if (upgrade3 == 4){
			document.getElementById("eichhorn").style.display ="none";
		}
		if (upgrade4 == 4){
			document.getElementById("capys").style.display ="none";
		}
		
		samen = samen - vergleich1 ;
		document.getElementById("upgrade"+x).style.display ="none";
		document.getElementById("upgrade"+x+"text").style.display ="none";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);

		/*hierhierhierhier*/
		switch (z) {
		case 1:
			var element = document.getElementById("1anzahl");
			preis = preisaktualisieren(element);
			break;
		case 2:
			var element = document.getElementById("2anzahl");
			preis =  preisaktualisieren(element);
			break;
		case 3:
			var element = document.getElementById("3anzahl");
			preis = preisaktualisieren(element);
			break;
		case 4:
			var element = document.getElementById("4anzahl");
			preis =  preisaktualisieren(element);
			break;
		}
		document.getElementById("preis"+convert(z)).value = "-" + convert(preis) +" Samen";
		document.getElementById("einssec").innerHTML = convert(one * mult1);
		document.getElementById("zweisec").innerHTML = convert(two * mult2);
		document.getElementById("dreisec").innerHTML = convert(three * mult3);
		document.getElementById("viersec").innerHTML = convert(four * mult4);
	}
	

function events(x) {
	if (x == 1) {
		if (krieger < 50) {
			var	woelfe = getRandom(2, 5);
			var verluste = getRandom(woelfe, 8);
			var maus = verluste - 1;
			var hamster = verluste - maus;
			document.getElementById("report").innerHTML += "Deine Stadt wurde von einem Rudel aus "+ woelfe + " W&ouml;lfen angegriffen! <br>";
			document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Dabei starben "+maus+ " Waldm&auml;use und "+hamster+" Feldhamster!<br>";
			document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Du solltest mehr Krieger bauen um W&ouml;lfe schneller aufzuspüren oder ganz abzuschrecken, sonst werden sie erneut angreifen!";
			one = one - maus;
			two = two - hamster;
			if (one < 0) {
				one = 0;
			}
			if (two < 0) {
				two = 0;
			}
			var preis1 = 18 + mult1 * 2 + one * 12;
			var preis2 = 90 + mult2 *2 + two * 15;
			document.getElementById("preis"+1).value = "-" + preis1 +" Samen";
			document.getElementById("preis"+2).value = "-" + preis2 +" Samen";
			document.getElementById("eins").innerHTML = convert(one);
			document.getElementById("zwei").innerHTML = convert(two);
			
			if (clearevent1 == false) {
				clearevent1 = true;
				event1 = setInterval(events, 60000, 1);
			}
		}
		if (krieger >= 50) {
			var	woelfe = getRandom(2, 10);
			document.getElementById("report").innerHTML = "Deine Stadt wurde von einem Rudel aus "+ woelfe + " W&ouml;lfen angegriffen! <br>";
			document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Deine Krieger konnten den Angriff abwehren, die W&ouml;lfe werden sich nicht mehr blicken lassen!";
			clearInterval(event1);
		}	
	}
	if (x == 2) {
		tauben = getRandom(1, samen);
		event2 = setInterval(events, 1000, 3);
		samengefressen = 0;
	}
	if (x ==3) {
		tauben = tauben * 5;
		samengefressen = getRandom(1, samen *0.1);
		if(samengefressen < 1){
			samengefressen = 1;
		}
		document.getElementById("report").innerHTML += "Deine Stadt hat eine Taubenplage!<br>";
		document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Die "+convert(tauben)+" Tauben fressen "+convert(samengefressen)+"deiner Samen!<br>";
		samen = samen - samengefressen;
		if (samen < 0){
			samen = 0;
			}
		clearInterval(event2);
		document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Die Tauben haben sich sattgefressen und sind weiter gezogen!";
		}
	
	if (x == 4) {
		event3 = setInterval(events, 60000, 5);
	}
	if (x == 5) {
		document.getElementById("report").innerHTML += "Deine Stadt feiert Erntedankfest! <br>";
		document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Du verlierst 20% deiner M&ouml;hren, im Gegenzug dazu erh&auml;lst du nun 100 Samen pro Klick auf das Bild der Samen! <br>";
		moerchen = parseInt(moerchen * 0.8);
		document.getElementById("amoerchen").innerHTML = "moehren: "+ convert(moerchen);
		clearInterval(event3);
	}
	if (x == 6) {
		document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Du besitzt nun mehr als 100 Geb&auml;ude! <br>";
		document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Du erh&auml;lst nun 10 Samen / Klick auf das Bild!";
	}
	if (x == 7) {
		document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Du besitzt nun mehr als 1000 Geb&auml;ude! <br>";
		document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "Du erh&auml;lst nun 1000 Samen / Klick auf das Bild!";
	}
	
	
}

function leeren(x){
	if(x == 1){
		document.getElementById("report").innerHTML  = "";
	}
}

function kontrolle(){
	if ( gebaude >  50 && cleareventcall1 == false) {
		cleareventcall1 = true;
		events(1);
	}
	
	if ( gebaude > 100 && cleareventcall4 == false) {
		cleareventcall4 = true;
		events(6);
	}
	
	if ( gebaude >  500 && cleareventcall2 == false) {
		cleareventcall2 = true;
		events(2);
	}
	
	if ( gebaude > 1000 && cleareventcall3 == false) {
		cleareventcall3 = true;
		events(4);
	}
	
	if ( gebaude > 10000 && cleareventcall5 == false) {
		cleareventcall5 = true;
		events(7);
	}
	
	if(load == false)
	{

		document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
		document.getElementById("atoaster").innerHTML = "Gemuesedefibrillatoren: "+convert(toaster);
		document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
		document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
		document.getElementById("asamen").innerHTML = convert(samen);
		document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
		document.getElementById("eins").innerHTML = convert(one);
		document.getElementById("zwei").innerHTML = convert(two);
		document.getElementById("drei").innerHTML = convert(three);
		document.getElementById("vier").innerHTML = convert(four);
		load = true;
	}
	
}

function gegenangriff(x){
	if(delay == false){
		delay = true;
		hier = setInterval(gegenangriff,5000,x);
		return false;
	}
	delay = false;
	clearInterval(hier);
	if (x == 1){
		var gegnerkrieger = getRandom(3000,7000);
		var gegnername = "Paderborn";
	}
	if (x == 2){
		var gegnerkrieger = getRandom(8000,12000);
		var gegnername = "Bielefeld";
	}
	if (x == 3){
		var gegnerkrieger = getRandom(15000,25000);
		var gegnername = "Duisburg";
	}
	if (x == 4){
		var gegnerkrieger = getRandom(40000,60000);
		var gegnername = "K&ouml;ln";
	}
	if (x == 5){
		var gegnerkrieger = getRandom(80000,120000);
		var gegnername = "Niedersachsen";
	}
	if (x == 6){
		var gegnerkrieger = getRandom(800000,1200000);
		var gegnername = "Norddeutschland";
	}
	if (x == 7){
		var gegnerkrieger = getRandom(800000,1200000);
		var gegnername = "Sueddeutschland";
	}
	if (x == 8){
		var gegnerkrieger = getRandom(80000000,120000000);
		var gegnername = "Europa";
	}
	if (x == 9){
		var gegnerkrieger = getRandom(1,1000000000);
		var gegnername = "Asien";
	}
	if (x == 10){
		var gegnerkrieger = getRandom(5000000,5500000);
		var gegnername = "Afrika";
	}
	if (x == 11){
		var gegnerkrieger = getRandom(5000000,6000000);
		var gegnername = "Australien";
	}
	if (x == 12){
		var gegnerkrieger = getRandom(1000000,10000000);
		var gegnername = "Amerika";
	}
	if (x == 13){
		var gegnerkrieger = getRandom(1000000,100000000);
		var gegnername = "Amerika";
	}
	if (x == 14){
		var gegnerkrieger = getRandom(500000000,2000000000);
		var gegnername = "Amerika";
	}
	if (x == 15){
		var gegnerkrieger = getRandom(500000000,20000000000);
		var gegnername = "Mond";
	}
	if (x == 16){
		var gegnerkrieger = getRandom(500000000,20000000000);
		var gegnername = "Mond";
	}
	if (x == 17){
		var gegnerkrieger = getRandom(500000000,20000000000);
		var gegnername = "Mond";
	}
	document.getElementById("report").innerHTML = document.getElementById("report").innerHTML + "<br> Du wurdest von"+gegnername+" mit "+convert(gegnerkrieger)+" Soldaten angegriffen!<br>";
	if(gegnerkrieger > krieger){
		document.getElementById("report").innerHTML += "Die Schlacht wurde verloren! <br>";
		document.getElementById("report").innerHTML += "All deine Soldaten sind gestorben, zudem wurden folgende Sachen gestohlen: <br>";
		var loose = getRandom(1,5);
		var verlustmaus = getRandom(1, one * loose / 10);
		var verlusthamst = getRandom(1, two * loose /10); 
		var verlusteich = getRandom(1, one * loose /10); 
		var verlustcapy = getRandom(1, three * loose /10);
		var verlustbenz = getRandom(1, benzin * loose /10);
		var verlustgold = getRandom(1, money * loose /10);
		var verlustsamen = getRandom(1, samen * loose /10);
		var verlustmoehren = getRandom(1, moerchen * loose /10);
		document.getElementById("report").innerHTML += "Waldm&auml;use:"+ convert(verlustmaus)+"<br>";
		document.getElementById("report").innerHTML += "Hamster:"+ convert(verlusthamst)+"<br>";
		document.getElementById("report").innerHTML += "Eichhoernchen:"+ convert(verlusteich)+"<br>";
		document.getElementById("report").innerHTML += "Capybaras:"+ convert(verlustcapy)+"<br>";
		document.getElementById("report").innerHTML += "Benzin:"+ convert(verlustbenz)+"<br>";
		document.getElementById("report").innerHTML += "Gold:"+ convert(verlustgold)+"<br>";
		document.getElementById("report").innerHTML += "Samen:"+ convert(verlustsamen)+"<br>";
		document.getElementById("report").innerHTML += "Moehren:"+ convert(verlustmoehren)+"<br>";
		one = one - verlustmaus;
		two = two - verlusthamst;
		three = three - verlusteich;
		four = four - verlustcapy;
		benzin = benzin - verlustbenz;
		money = money - verlustgold;
		samen = samen - verlustsamen;
		moerchen = moerchen - verlustmoehren;
		krieger = 0;
		kontrolle();
	}
	
	if(gegnerkrieger <= krieger){
		var verluste = gegnerkrieger;
		var verlustee = getRandom(gegnerkrieger,gegnerkrieger * 10);
		krieger = krieger - verluste;
		samen = samen + parseInt(verlustee);
		document.getElementById("akrieger").innerHTML = convert(krieger);
		document.getElementById("report").innerHTML += "Die Schlacht wurde gewonnen! <br>";
		document.getElementById("report").innerHTML += "Die Ressourcen der Verluste("+verluste+") wurden zuteils zurückgegeben!("+convert(verlustee)+"Samen)<br>";
	}
}



function preisaktualisieren(inputElement){
	
	if(schwierigkeit == "einfach"){
	var summe = 0;
	var preis = 0;
	if (inputElement.value == "") {
		inputElement.value = "Die Eingabe war leer";
		return false;
	}
	var lauf = parseInt(inputElement.value);
	if (isNaN(lauf) == true) {
		inputElement.value = "Bitte Zahl eingeben!";
		return false;
	}
	if (lauf < 1) {
		inputElement.value = "Bitte eine höhere Zahl eingeben!";
		return false;
	}
	if (inputElement.id == "1anzahl") {
		for (var i = 0; i < lauf; i++) {
			preiss = 18 + (mult1 * 2) + (one + i) * 12;
			summe = summe + preiss;
		}
	}
	if (inputElement.id == "2anzahl") {
		for (var i = 0; i < lauf; i++) {
			preiss = 90 + (mult2 * 2) + (two + i) * 15;
			summe = summe + preiss;
		}
	}
	if (inputElement.id == "3anzahl") {
		for (var i = 0; i < lauf; i++){
			preiss = 180 + (mult3 * 2) + (three + i) * 20;
			summe = summe + preiss;
		}
	}
	
	if (inputElement.id == "4anzahl") {
		for (var i = 0; i < lauf; i++) {
			preiss = 360 + (mult4 * 2) + (four + i) * 45;
			summe = summe + preiss;
		}
	}
	if (inputElement.id == "toasterbuy") {
		for (var i = 0; i < lauf; i++) {
			preiss = Math.floor(i + 3 - i);
			summe = summe + preiss;
		}
		document.getElementById("toasters").value = inputElement.value + " Defibrillatoren kaufen - " + convert(summe) + " Gold";
		return parseInt(summe);
	}
	document.getElementById("preis" + inputElement.id.substring(0, 1)).value = "-" + convert(summe) + " Samen";
	return summe;
	}
	
	if(schwierigkeit == "mittel"){
		var summe = 0;
		var preis = 0;
		if (inputElement.value == "") {
			inputElement.value = "Die Eingabe war leer";
			return false;
		}
		var lauf = parseInt(inputElement.value);
		if (isNaN(lauf) == true) {
			inputElement.value = "Bitte Zahl eingeben!";
			return false;
		}
		if (lauf < 1) {
			inputElement.value = "Bitte eine höhere Zahl eingeben!";
			return false;
		}
		if (inputElement.id == "1anzahl") {
			for (var i = 0; i < lauf; i++) {
				preiss = 48 + (mult1 * 2) + (one + i) * 12;
				summe = summe + preiss;
			}
		}
		if (inputElement.id == "2anzahl") {
			for (var i = 0; i < lauf; i++) {
				preiss = 96 + (mult2 * 2) + (two + i) * 15;
				summe = summe + preiss;
			}
		}
		if (inputElement.id == "3anzahl") {
			for (var i = 0; i < lauf; i++){
				preiss = 385 + (mult3 * 2) + (three + i) * 20;
				summe = summe + preiss;
			}
		}
		
		if (inputElement.id == "4anzahl") {
			for (var i = 0; i < lauf; i++) {
				preiss = 780 + (mult4 * 2) + (four + i) * 45;
				summe = summe + preiss;
			}
		}
		if (inputElement.id == "toasterbuy") {
			for (var i = 0; i < lauf; i++) {
				preiss = Math.floor(i + 5 - i);
				summe = summe + preiss;
			}
			document.getElementById("toasters").value = inputElement.value + " Defibrillatoren kaufen - " + convert(summe) + " Gold";
			return parseInt(summe);
		}
		document.getElementById("preis" + inputElement.id.substring(0, 1)).value = "-" + convert(summe) + " Samen";
		return summe;
		}
	
	if(schwierigkeit == "schwer"){
		var summe = 0;
		var preis = 0;
		if (inputElement.value == "") {
			inputElement.value = "Die Eingabe war leer";
			return false;
		}
		var lauf = parseInt(inputElement.value);
		if (isNaN(lauf) == true) {
			inputElement.value = "Bitte Zahl eingeben!";
			return false;
		}
		if (lauf < 1) {
			inputElement.value = "Bitte eine höhere Zahl eingeben!";
			return false;
		}
		if (inputElement.id == "1anzahl") {
			for (var i = 0; i < lauf; i++) {
				preiss = 98 + (mult1 * 2) + (one + i) * 12;
				summe = summe + preiss;
			}
		}
		if (inputElement.id == "2anzahl") {
			for (var i = 0; i < lauf; i++) {
				preiss = 394 + (mult2 * 2) + (two + i) * 15;
				summe = summe + preiss;
			}
		}
		if (inputElement.id == "3anzahl") {
			for (var i = 0; i < lauf; i++){
				preiss = 790 + (mult3 * 2) + (three + i) * 20;
				summe = summe + preiss;
			}
		}
		
		if (inputElement.id == "4anzahl") {
			for (var i = 0; i < lauf; i++) {
				preiss = 1186 + (mult4 * 2) + (four + i) * 45;
				summe = summe + preiss;
			}
		}
		if (inputElement.id == "toasterbuy") {
			for (var i = 0; i < lauf; i++) {
				preiss = Math.floor(i + 10 - i);
				summe = summe + preiss;
			}
			document.getElementById("toasters").value = inputElement.value + " Defibrillatoren kaufen - " + convert(summe) + " Gold";
			return parseInt(summe);
		}
		document.getElementById("preis" + inputElement.id.substring(0, 1)).value = "-" + convert(summe) + " Samen";
		return summe;
		}
}
//

function safe(x){
	if(x == 1){
		string = 
		"s"
		+samen+ 
		"g"
		+gebaude+
		"w"
		+one+
		"f"
		+two+
		"e"
		+three+
		"c"
		+four+
		"m"
		+moerchen+ 
		"b"
		+benzin+ 
		"ge"
		+money+ 
		"d"
		+toaster+ 
		"k"
		+krieger+ 
		"a1"
		+attack1+
		"a2"
		+attack2+
		"a3"
		+attack3+
		"a4"
		+attack4+
		"a5"
		+attack5+
		"a6"
		+attack6+
		"a7"
		+attack7+
		"a8"
		+attack8+
		"a9"
		+attack9+
		"aa10"
		+attack10+
		"aa11"
		+attack11+
		"aa12"
		+attack12+
		"aa13"
		+mult1+ 
		"aa14"
		+mult2+ 
		"aa15"
		+mult3+ 
		"aa16"
		+mult4+
		"z"
		
		+
		
		"upgrade11"
		+ueins1+
		"upgrade12"
		+ueins2+
		"upgrade13"
		+ueins3+
		"upgrade14"
		+ueins4+
		
		"upgrade21"
		+uzwei1+
		"upgrade22"
		+uzwei2+
		"upgrade23"
		+uzwei3+
		"upgrade24"
		+uzwei4+
		
		"upgrade31"
		+udrei1+
		"upgrade32"
		+udrei2+
		"upgrade33"
		+udrei3+
		"upgrade34"
		+udrei4+
		
		"upgrade41"
		+uvier1+
		"upgrade42"
		+uvier2+
		"upgrade43"
		+uvier3+
		"upgrade44"
		+uvier4+
		"x";
		
		alert(umwandeln(10,string));
	}
	if(x == 2){
	Check = prompt("Kopieren sie hier den alten Spielstand hinein!(","");
	string = rueckumwandeln(10,Check);
	var s = string.search("s");
	var g = string.search("g");
	var w = string.search("w");
	var f = string.search("f");
	var e = string.search("e");
	var c = string.search("c");
	var m = string.search("m");
	var b = string.search("b");
	var ge = string.search("ge");
	var k = string.search("k");
	var d = string.search("d");
   var a1 = string.search("a1");
   var a2 =	string.search("a2");
   var a3 =	string.search("a3");
   var a4 = string.search("a4");
   var a5 = string.search("a5");
   var a6 = string.search("a6");
   var a7 = string.search("a7");
   var a8 = string.search("a8");
   var a9 = string.search("a9");
  var aa10 = string.search("aa10");
  var aa11 = string.search("aa11");
  var aa12 = string.search("aa12");
  var aa13 = string.search("aa13");
  var aa14 = string.search("aa14");
  var aa15 = string.search("aa15");
  var aa16 = string.search("aa16");
  var z = string.search("z");
  var uuml = string.search("x")
  
  var upgrade11 = string.search("upgrade11");
  var upgrade12 = string.search("upgrade12");
  var upgrade13 = string.search("upgrade13");
  var upgrade14 = string.search("upgrade14");
  
  var upgrade21 = string.search("upgrade21");
  var upgrade22 = string.search("upgrade22");
  var upgrade23 = string.search("upgrade23");
  var upgrade24 = string.search("upgrade24");
  
  var upgrade31 = string.search("upgrade31");
  var upgrade32 = string.search("upgrade32");
  var upgrade33 = string.search("upgrade33");
  var upgrade34 = string.search("upgrade34");
  
  var upgrade41 = string.search("upgrade41");
  var upgrade42 = string.search("upgrade42");
  var upgrade43 = string.search("upgrade43");
  var upgrade44 = string.search("upgrade44");
  
	samen = parseInt(string.slice(s+1,g));
	gebaude = parseInt(string.slice(g+1,w));
	one = parseInt(string.slice(w+1,f));
	two = parseInt(string.slice(f+1,e));
	three = parseInt(string.slice(e+1,c));
	four = parseInt(string.slice(c+1,m));
	moerchen = parseInt(string.slice(m+1,b));
	benzin = parseInt(string.slice(b+1,ge));
	money = parseInt(string.slice(ge+2,d));
	toaster = parseInt(string.slice(d+1,k));
	krieger = parseInt(string.slice(k+1,a1));
	attack1 = parseInt(string.slice(a1+2,a2));
	attack2 = parseInt(string.slice(a2+2,a3));
	attack3 = parseInt(string.slice(a3+2,a4));
	attack4 = parseInt(string.slice(a4+2,a5));
	attack5 = parseInt(string.slice(a5+2,a6));
	attack6 = parseInt(string.slice(a6+2,a7));
	attack7 = parseInt(string.slice(a7+2,a8));
	attack8 = parseInt(string.slice(a8+2,a9));
	attack9 = parseInt(string.slice(a9+2,aa10));
	attack10 = parseInt(string.slice(aa10+4,aa11));
	attack11 = parseInt(string.slice(aa11+4,aa12));
	attack12 = parseInt(string.slice(aa12+4,aa13));
	mult1 = parseInt(string.slice(aa13+4,aa14));
	mult2 = parseInt(string.slice(aa14+4,aa15));
	mult3 = parseInt(string.slice(aa15+4,aa16));
	mult4 = parseInt(string.slice(aa16+4,z));
	
	ueins1 = (string.slice(upgrade11+9 ,upgrade12 ));
	ueins2 = (string.slice(upgrade12+9 ,upgrade13 ));
	ueins3 = (string.slice(upgrade13+9 ,upgrade14 ));
	ueins4 = (string.slice(upgrade14+9 ,upgrade21 ));
	
	uzwei1 = (string.slice(upgrade21+9 ,upgrade22 ));
	uzwei2 = (string.slice(upgrade22+9 ,upgrade23 ));
	uzwei3 = (string.slice(upgrade23+9 ,upgrade24 ));
	uzwei4 = (string.slice(upgrade24+9 ,upgrade31 ));
	
	
	udrei1 = (string.slice(upgrade31+9 ,upgrade32 ));
	udrei2 = (string.slice(upgrade32+9 ,upgrade33 ));
	udrei3 = (string.slice(upgrade33+9 ,upgrade34 ));
	udrei4 = (string.slice(upgrade34+9 ,upgrade41 ));
	
	
	uvier1 = (string.slice( upgrade41+9,upgrade42 ));
	uvier2 = (string.slice( upgrade42+9, upgrade43));
	uvier3 = (string.slice( upgrade43+9,upgrade44 ));
	uvier4 = (string.slice( upgrade44+9, uuml));

	//console.log(ueins1,ueins2,ueins3,ueins4 +"upgrade2" + uzwei1, uzwei2, uzwei3, uzwei4 + "upgrade3" + udrei1, udrei2, udrei3, udrei4 + "upgrade4" + uvier1, uvier2, uvier3, uvier4)
	
	if (ueins1 == "true"){
		document.getElementById("upgrade1").style.display = "none";
		document.getElementById("upgrade1text").style.display = "none";
		upgrade1 = upgrade1 + 1;
	}
	
	if (ueins2 == "true"){
		document.getElementById("upgrade2").style.display = "none";
		document.getElementById("upgrade2text").style.display = "none";
		upgrade1 = upgrade1 + 1;
	}
	
	if (ueins3 == "true"){
		document.getElementById("upgrade3").style.display = "none";
		document.getElementById("upgrade3text").style.display = "none";
		upgrade1 = upgrade1 + 1;
	}
	
	if (ueins4 == "true"){
		document.getElementById("upgrade4").style.display = "none";
		document.getElementById("upgrade4text").style.display = "none";
		upgrade1 = upgrade1 + 1;
	}
	
	if (uzwei1 == "true"){
		document.getElementById("upgrade5").style.display = "none";
		document.getElementById("upgrade5text").style.display = "none";
		upgrade2 = upgrade2 + 1;
	}
	if (uzwei2 == "true"){
		document.getElementById("upgrade6").style.display = "none";
		document.getElementById("upgrade6text").style.display = "none";
		upgrade2 = upgrade2 + 1;
	}
	if (uzwei3 == "true"){
		document.getElementById("upgrade7").style.display = "none";
		document.getElementById("upgrade7text").style.display = "none";
		upgrade2 = upgrade2 + 1;
	}
	if (uzwei4 == "true"){
		document.getElementById("upgrade8").style.display = "none";
		document.getElementById("upgrade8text").style.display = "none";
		upgrade2 = upgrade2 + 1;
	}
	
	if (udrei1 == "true"){
		document.getElementById("upgrade9").style.display = "none";
		document.getElementById("upgrade9text").style.display = "none";
		upgrade3 = upgrade3 + 1;
		
	}
	if (udrei2 == "true"){
		document.getElementById("upgrade10").style.display = "none";
		document.getElementById("upgrade10text").style.display = "none";
		upgrade3 = upgrade3 + 1;
	}
	if (udrei3 == "true"){
		document.getElementById("upgrade11").style.display = "none";
		document.getElementById("upgrade11text").style.display = "none";
		upgrade3 = upgrade3 + 1;
	}
	if (udrei4 == "true"){
		document.getElementById("upgrade12").style.display = "none";
		document.getElementById("upgrade12text").style.display = "none";
		upgrade3 = upgrade3 + 1;
	}
	
	if (uvier1 == "true"){
		document.getElementById("upgrade13").style.display = "none";
		document.getElementById("upgrade13text").style.display = "none";
		upgrade4 = upgrade4 + 1;
	}
	if (uvier2 == "true"){
		document.getElementById("upgrade14").style.display = "none";
		document.getElementById("upgrade14text").style.display = "none";
		upgrade4 = upgrade4 + 1;
	}
	if (uvier3 == "true"){
		document.getElementById("upgrade15").style.display = "none";
		document.getElementById("upgrade15text").style.display = "none";
		upgrade4 = upgrade4 + 1;
	}
	if (uvier4 == "true"){
		document.getElementById("upgrade16").style.display = "none";
		document.getElementById("upgrade16text").style.display = "none";
		upgrade4 = upgrade4 + 1;
	}
	
	if(one > 0){
		uno();
	}
	if(two > 0){
		dos();
	}
	if(three > 0){
		tres();
	}
	if(four > 0){
		cuatro();
	}
	if(attack1 > 0){
		document.getElementById("dungeonbutton1n").style.display = "none";
		document.getElementById("dungeonbutton1k").style.display = "none";
		document.getElementById("dungeon1").style.display = "block";
		document.getElementById("dungeonbutton2n").style.display = "block";
		document.getElementById("dungeonbutton2k").style.display = "block";
		
	}
	if(attack1 == 4){
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/paderborn.gif">');
		document.getElementById("dungeon1").style.display = "none";
		document.getElementById("dungeonbutton1k").style.display = "none";
		document.getElementById("dungeonbutton2k").style.display = "block";
		document.getElementById("dungeonbutton2n").style.display = "none";
		document.getElementById("dungeonbutton2k").style.display = "none";
		document.getElementById("dungeon2").style.display = "block";
		document.getElementById("dungeonbutton3n").style.display = "block";
		document.getElementById("dungeonbutton3k").style.display = "block";
	}
	if(attack2 == 4){
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/bielefeld.gif">');
		document.getElementById("dungeon2").style.display = "none";
		document.getElementById("dungeonbutton2k").style.display = "none";
		document.getElementById("dungeonbutton3k").style.display = "block";
		document.getElementById("dungeonbutton3n").style.display = "none";
		document.getElementById("dungeonbutton3k").style.display = "none";
		document.getElementById("dungeon3").style.display = "block";
		document.getElementById("dungeonbutton4n").style.display = "block";
		document.getElementById("dungeonbutton4k").style.display = "block";
	}
	if(attack3 == 4){
		document.getElementById("dungeon3").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/duisburg.gif">');
		document.getElementById("dungeonbutton3k").style.display = "none";
		document.getElementById("dungeonbutton4k").style.display = "block";
		document.getElementById("dungeonbutton4n").style.display = "none";
		document.getElementById("dungeonbutton4k").style.display = "none";
		document.getElementById("dungeon4").style.display = "block";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		document.getElementById("dungeonbutton5n").style.display = "block";
		document.getElementById("dungeonbutton5k").style.display = "block";
	}
	if(attack4 == 4){
		document.getElementById("dungeon4").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/koeln.gif">');
		document.getElementById("dungeonbutton4k").style.display = "none";
		document.getElementById("dungeonbutton5k").style.display = "block";
		document.getElementById("dungeonbutton5n").style.display = "none";
					document.getElementById("dungeonbutton5k").style.display = "none";
					document.getElementById("dungeon5").style.display = "block";
					document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
					document.getElementById("dungeonbutton6n").style.display = "block";
					document.getElementById("dungeonbutton6k").style.display = "block";
	}
	if(attack5 == 4){
		document.getElementById("dungeon5").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/niedersachsen.gif">');
		document.getElementById("dungeonbutton5k").style.display = "none";
		document.getElementById("dungeonbutton6k").style.display = "block";
		document.getElementById("dungeonbutton6n").style.display = "none";
		document.getElementById("dungeonbutton6k").style.display = "none";
		document.getElementById("dungeon6").style.display = "block";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		document.getElementById("dungeonbutton7n").style.display = "block";
		document.getElementById("dungeonbutton7k").style.display = "block";
	}
	if(attack6 == 4){
		document.getElementById("dungeon6").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/norddeutschland.gif">');
		document.getElementById("dungeonbutton6k").style.display = "none";
		document.getElementById("dungeonbutton7k").style.display = "block";
		document.getElementById("dungeonbutton7n").style.display = "none";
		document.getElementById("dungeonbutton7k").style.display = "none";
		document.getElementById("dungeon7").style.display = "block";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		document.getElementById("dungeonbutton8n").style.display = "block";
		document.getElementById("dungeonbutton8k").style.display = "block";
	}
	if(attack7 == 4){
		document.getElementById("dungeon7").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/sueddeutschland.png">');
		document.getElementById("dungeonbutton7k").style.display = "none";
		document.getElementById("dungeonbutton8k").style.display = "block";
		document.getElementById("dungeonbutton8n").style.display = "none";
		document.getElementById("dungeonbutton8k").style.display = "none";
		document.getElementById("dungeon8").style.display = "block";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		document.getElementById("dungeonbutton9n").style.display = "block";
		document.getElementById("dungeonbutton9k").style.display = "block";
	}
	if(attack8 == 4){
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/europa.gif">');
		document.getElementById("dungeon8").style.display = "none";
		document.getElementById("dungeonbutton8k").style.display = "none";
		document.getElementById("dungeonbutton9k").style.display = "block";
		document.getElementById("dungeonbutton9n").style.display = "none";
		document.getElementById("dungeonbutton9k").style.display = "none";
		document.getElementById("dungeon9").style.display = "block";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		document.getElementById("dungeonbutton10n").style.display = "block";
		document.getElementById("dungeonbutton10k").style.display = "block";
	}
	if(attack9 == 4){
		document.getElementById("dungeon9").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/asien.gif">');
		document.getElementById("dungeonbutton9k").style.display = "none";
		document.getElementById("dungeonbutton10k").style.display = "block";
		document.getElementById("dungeonbutton10n").style.display = "none";
		document.getElementById("dungeonbutton10k").style.display = "none";
		document.getElementById("dungeon10").style.display = "block";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		document.getElementById("dungeonbutton11n").style.display = "block";
		document.getElementById("dungeonbutton11k").style.display = "block";
	}
	if(attack10 == 4){
		document.getElementById("dungeon10").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/afrika.gif">');
		document.getElementById("dungeonbutton10k").style.display = "none";
		document.getElementById("dungeonbutton11k").style.display = "block";
	}
	if(attack11 == 4){
		document.getElementById("dungeon11").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/australien.gif">');
		document.getElementById("dungeonbutton11k").style.display = "none";
		document.getElementById("dungeonbutton12k").style.display = "block";
		document.getElementById("dungeonbutton11n").style.display = "none";
		document.getElementById("dungeonbutton11k").style.display = "none";
		document.getElementById("dungeon11").style.display = "block";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);
		document.getElementById("dungeonbutton12n").style.display = "block";
		document.getElementById("dungeonbutton12k").style.display = "block";
	}
	if(attack12 == 4){
		document.getElementById("dungeon12").style.display = "none";
		document.getElementById("besitz").innerHTML = ('<img src="verlaufspiel/amerika.jpg">');
		document.getElementById("dungeonbutton12k").style.display = "none";
		document.getElementById("dungeonbutton12n").style.display = "none";
		document.getElementById("dungeonbutton12k").style.display = "none";
		document.getElementById("dungeon12").style.display = "block";
		document.getElementById("asamen").innerHTML = convert(Math.round(samen * 100) / 100);

	}
	document.getElementById("upgradezahl1").innerHTML = convert(mult1);
	document.getElementById("upgradezahl2").innerHTML = convert(mult2);
	document.getElementById("upgradezahl3").innerHTML = convert(mult3);
	document.getElementById("upgradezahl4").innerHTML = convert(mult4);
	
	document.getElementById("einssec").innerHTML = convert(one * mult1);
	document.getElementById("zweisec").innerHTML = convert(two * mult2);
	document.getElementById("dreisec").innerHTML = convert(three * mult3);
	document.getElementById("viersec").innerHTML = convert(four * mult4);
	document.getElementById("eins").innerHTML = one;
	document.getElementById("zwei").innerHTML = two;
	document.getElementById("drei").innerHTML = three;
	document.getElementById("vier").innerHTML = four;
	}
	load = false;
	document.getElementById("amoney").innerHTML = "Du besitzt "+convert(money)+ "Gold";
	document.getElementById("atoaster").innerHTML = "Gemuesedefibrillatoren: "+convert(toaster);
	document.getElementById("amoerchen").innerHTML = "Anzahl moehren: "+ convert(moerchen);
	document.getElementById("abenzin").innerHTML = "Benzin: "+ convert(benzin);
	document.getElementById("asamen").innerHTML = convert(samen);
	document.getElementById("akrieger").innerHTML = "Anzahl Krieger "+convert(krieger);
	document.getElementById("eins").innerHTML = convert(one);
	document.getElementById("zwei").innerHTML = convert(two);
	document.getElementById("drei").innerHTML = convert(three);
	document.getElementById("vier").innerHTML = convert(four);
	kontrolle();
}

function reset(){
	var destination = confirm("Sind sie sicher, dass sie alle Fortschritte l&ouml;schen wollen?")
	
	if (destination == true){
		location.reload();
	}
return false;
}

function convert(x) {
	if(isNaN(x)== true){
		return false;
	}
	var zahl = x.toString();
	var laengeZahl = zahl.length;
	var ausgabe = "";
	var komma = "";
	
	if(zahl.indexOf(".") != -1){
		laengeZahl = zahl.indexOf(".");
		komma = "," + zahl.substring(laengeZahl+1, zahl.length); 
	}
	var tausender = Math.floor(laengeZahl / 3);
	
	if(laengeZahl % 3 == 0){
		tausender = tausender - 1;
	}
	for (var i = 1; i < (tausender + 1); i++) {
		ausgabe = "." + zahl.substring(laengeZahl - (i * 3), laengeZahl + 3 - (i * 3)) + ausgabe; 
	}
	ausgabe = zahl.substring(0, laengeZahl - (tausender * 3)) + ausgabe + komma;
	return ausgabe;
}


/*VERSION 1*/
//   key = 0;
//   text = "";
//   alphabet = "abcdefghijklmnopqrstuvwxyz";
//   
//  function umwandeln(key, text){
//	  var ausgabe = "";
//	  for (i = 0 ; i < text.length; i++){
//		 var zuBehandelnderBuchstabe = text.charAt(i);
//		 var positionImAlphabet = alphabet.indexOf(zuBehandelnderBuchstabe);
//		 key = key % 26;
//		 var neuerBuchstabe = positionImAlphabet + key;
//		 neuerBuchstabe = alphabet.charAt(neuerBuchstabe);
//		 ausgabe = ausgabe + neuerBuchstabe;
//	  }
//	  return ausgabe;
//  }
//  
//  function rueckwandeln(key, text){
//	  var ausgabe = "";
//	  
//	  for (i = 0 ; i < text.length; i++){
//		 var zuBehandelnderBuchstabe = text.charAt(i);
//		 var positionImAlphabet = alphabet.indexOf(zuBehandelnderBuchstabe);
//		 key = key % 26;
//		 var neuerBuchstabe = positionImAlphabet - key;
//		 neuerBuchstabe = alphabet.charAt(neuerBuchstabe);
//		 ausgabe = ausgabe + neuerBuchstabe;
//	  }
//	  return ausgabe;
//  }
  
  alphabett = new Array();
  alphabett[0] = "a";
  alphabett[1] = "b";
  alphabett[2] = "c";
  alphabett[3] = "d";
  alphabett[4] = "e";
  alphabett[5] = "f";
  alphabett[6] = "g";
  alphabett[7] = "h";
  alphabett[8] = "i";
  alphabett[9] = "j";
  alphabett[10] = "k";
  alphabett[11] = "l";
  alphabett[12] = "m";
  alphabett[13] = "n";
  alphabett[14] = "o";
  alphabett[15] = "p";
  alphabett[16] = "q";
  alphabett[17] = "r";
  alphabett[18] = "s";
  alphabett[19] = "t";
  alphabett[20] = "u";
  alphabett[21] = "v";
  alphabett[22] = "w";
  alphabett[23] = "x";
  alphabett[24] = "y";
  alphabett[25] = "z";
  alphabett[26] = "+";
  alphabett[27] = "+";
  alphabett[28] = "*";
  alphabett[29] = "/";
  alphabett[30] = "0";
  alphabett[31] = "1";
  alphabett[32] = "2";
  alphabett[33] = "3";
  alphabett[34] = "4";
  alphabett[35] = "5";
  alphabett[36] = "6";
  alphabett[37] = "7";
  alphabett[38] = "8";
  alphabett[39] = "9";
  alphabett[40] = " "; 
  

  function umwandeln(key, text){
	  var ausgabe = "";
	  text = text.toLowerCase();
	  for (i = 0; i < text.length; i++) {
		  
		  var zuBehandelnderBuchstabe = text.charAt(i);
		  var positionImAlphabet = alphabett.indexOf(zuBehandelnderBuchstabe);
		  var neuerBuchstabe = positionImAlphabet + key;
		  // " " = 40 + 1 = 41 % 41 = 0 == a
		  neuerBuchstabe = neuerBuchstabe % 41 ;
		  ausgabe = ausgabe + alphabett[neuerBuchstabe];
	  }
	  return ausgabe;
  }

  function rueckumwandeln(key, text){
	  var ausgabe = "";
	  
	  for (i = 0; i < text.length; i++) {
		  var zuBehandelnderBuchstabe = text.charAt(i);
		  var positionImAlphabet = alphabett.indexOf(zuBehandelnderBuchstabe);
		  var neuerBuchstabe = positionImAlphabet - key;
		  
		  if (neuerBuchstabe < 0){
			  neuerBuchstabe = 41 + neuerBuchstabe % 41;
		  }
		  ausgabe = ausgabe + alphabett[neuerBuchstabe];
	  }
	  return ausgabe;
  }
  
  
 

