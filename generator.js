/**
 * TODO
 * - Add fetch JSON
 * - Add save and load
 */

jQuery('#more').hide();
var names = JSON.parse('{"Mittelreich - Albernisch":{"0":"male","1":"female","2":"lastname","male":["Aedin","Aelfwin","Aeneas","Aneirin","Annlir","Ardach","Ardan","Baiscne","Baranoir","Belfionn","Beli","Bennwir","Bladub","Branwin","Brendan","Bruidnich","Boronwyn","Caitlin","Cairbre","Callan","Cathal","Ceibhin","Cet","Cethern","Cian","Conair","Conaill","Conlai","Conn","Coran","Cormac","Cuanu","Cuill","Cuilyn","Cumal","Cuscrid","Cynwal","Diarmait","Diman","Domnall","Donn","Dubh","Dumnoric","Dunvallo","Efferdwin","Elfwin","Eochaid","Eogan","Faerwyn","Fann","Fiachra","Finn","Finwaen","Firunwin","Glarik","Glennir","Gial","Gun","Gwyn","Halman","Hesindion","Hilko","Hjalbin","Ikaron","Illaen","Irian","Jast","Laeg","Lon","Lothur","Luan","Lughaid","Menno","Meredin","Mi","Misla","Morgan","Muir","Niamad","Niando","Nibwyn","Noisi","Norbwyn","Oisin","Ordhan","Osgur","Peranwyn","Pergrin","Praiowin","Phexlyn","Rhajalyn","Reochaid","Raidri","Rhodri","Rigan","Rhonwian","Ruadh","Sainglir","Scibor","Sean","Senach","Sidech","Swafnian","Taltin","Tamlin","Taranion","Tibraid","Trom","Tsael","Tuachall","Uallach","Uachdan","Uisne","Ulfert","Yann"],"female":["Aeb","Aedha","Aife","Ailill","Ainsel","Albhe","Algai","Befinna","Belisa","Betir","Boronlyl","Branwen","Caillinnis","Cell","Cordaella","Cuanna","Cuib","Daire","Deirdre","Derdriu","Dornaell","Dubinn","Buibhe","Efferlill","Eillyn","Emer","Enid","Etaine","Ethal","Fiall","Finnla","Finnabir","Firael","Gepkeline","Gilia","Glenna","Grainne","Hesindana","Idra","Illail","Inbher","Isora","Laille","Larinu","Libana","Lyn","Lotha","Maire","Maegh","Mil","Morrigu","Murgin","Nansi","Neelke","Niamh","Nurinai","Peraylla","Praiolynna","Phexla","Raike","Rhajala","Rianod","Riganna","Ruada","Rudraighe","Saingla","Scanlail","Selma","Seola","Setana","Sili","Siona","Silabh","Sylna","Tibraide","Traviynla","Tsaingla","Tuadh","Uathne","Yanna","Ynlais","Ysit"],"lastname":["Adersin","Algerein","Alfaran","Alff","Angbarer","Anjuhal","Aberdan","Arres","Arsteener","Babek","Bachental","Bagosch","Ballurat","Bartlenhaus","Bellentor","Berlind","Brauer","Bregelsaum","Bochsbansen","Bodiak","Burkherdall","Damotil","Darben","Dargel","Daribon","Daske","Derp","Derpel","Dorc","Drachenj\u00e4ger","Durenald","Ehrwald","Eichenblatt","Engstrand","Eslebon","Ferictas","Fernel","Fidian","Folmin","Fredor","Fr\u00f6hling","Fuxfell","Galdifei","Garje","Gemiol","Gerdenwald","Gerrich","Gesse","Gillisen","Glimmerdiek","Gorbas","Grabensalb","Groterian","Ghune","Hainsate","Harnischmacher","Havensgaard","Heerdeburg","Helmbrecht","Helmisch","Hevelsen","Hiligon","Honorald","Horger","Horigan","Huisdorn","Hullheimer","Ilgur","Inke","Jetsam","Jolen","Karolus","Keres","Korber","Kormin","Korninger","Kremso","Kroninger","K\u00fcrzer","Lassan","Lonnert","Liegerfeld","Lowanger","Marnion","Mauernbrecher","Meeltheuer","Musker","Nattel","Okdarn","Okenheld","Olben","Oldenport","Ottresker","Rogel","Peresen","Pl\u00f6tzbogen","Prem","Prutz","Quarzen","Rabenstein","Redo","Rodiak","Rundarek","Ruttel","Sandstr\u00f6m","Schattenj\u00e4ger","Seehoff","Spichbrecher","Steinhauer","Sturmfels","Tannhaus","Termoil","Tiefhuser","Timerlan","Toberen","Trallo","Treublatt","Treufusz","Triffon","Tucher","Tulop","Ulfaran","Welzelin","Wertimol","Westfal","Winterkalt","Zornbold","Zandor","Zeel","Zertel"]},"Mittelreich - Garethisch":["male","female","lastname"],"Mittelreich - Bornl\u00e4ndisch":["male","female","lastname"],"Mittelreich - Horasisch":["male","female","lastname"],"Mittelreich - Weidensche":["male","female","lastname"],"Mittelreich - Darpatisch":["male","female","lastname"],"Mohisch":["male","female","lastname"],"Norbadisch":["male","female","lastname"],"Nivesisch":["male","female","lastname"],"Thorwallsch":["male","female","lastname"],"Amazonisch":["male","female","lastname"],"Novadisch":["male","female","lastname"],"Elfisch":["male","female","lastname"],"Zwergisch":["male","female","lastname"]}');
var country = jQuery('#country');
country.empty();

jQuery.each(names, function(index, value) {
    console.log(index);
	country.append(
        jQuery('<option></option>').val(index).html(index)
    );
});

jQuery('#submitButton').click(function() {
	generateButtonPressed();
	return false;
});

jQuery('#more').click(function() {
	attachNames(10);
	return false;
});

/**
 * Fired when the "generate" - Button is pressed
 */
function generateButtonPressed() {
	jQuery('#results').empty();
	jQuery('#more').show();
	attachNames(10);
}

/**
 *  Adds $amount Names to the list
 */
function attachNames(amount) {
	var country = jQuery('#country').val();
	var gender = jQuery('#gender').val();
	for(var i = 0; i < amount; i++) {
		jQuery('#results').append(
			jQuery('<div class="nameEntry large-12 columns"></div>').html(getSingleName(country, gender))
		);
	}
}

/**
 * Gets a single name from our names Array
 */
function getSingleName(country, gender) {
	var firstNames = '';
	var firstNameAmounts = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3];
	var firstNameAmount = firstNameAmounts[Math.floor(Math.random() * firstNameAmounts.length)];
	for(var i = 0; i < firstNameAmount; i++) {
		firstNames += names[country][gender][Math.floor(Math.random() * names[country][gender].length)] + ' ';
	}
	var lastName = names[country]['lastname'][Math.floor(Math.random() * names[country]['lastname'].length)];
	return jQuery.trim(firstNames) + ' ' + lastName;
}