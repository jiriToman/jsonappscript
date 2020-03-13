function onOpen() {
    var spreadsheet = SpreadsheetApp.getActive();
    var menuItems = [
        { name: 'Vytvorit JSON sheetu', functionName: 'generateJson' }
    ];
    spreadsheet.addMenu('JSON', menuItems);
}


function generateJson() {
    var spreadsheet = SpreadsheetApp.getActive();
    var sheet = spreadsheet.getActiveSheet();
    var lastRow = sheet.getLastRow();
    var collumn = 1;
    var json = "";

    for (i = 1; i <= lastRow; i++) {
        let cell = sheet.getRange(i, j);
        let checkNext = sheet.getRange(i, j + 1);
        parseRow(cell, checkNext, json, collumn);



    }

    // for (i = 1; i <= lastRow; i++) {
    //     for (j = 1; j <= 4; j++) {

    //         if (sheet.getRange(i, j).isBlank()) {
    //         } else {
    //             readCell(i, j);
    //         }
    //     }

    // }
    /*PROCHAZECI ALG
     vezme  prvek
     pokud obsahuje{} prida do stringu a zachova se podle nasledujiciho
                                                                     pokud sloup a: & { nic sjede o radek niz
                                                                                    & } ukonci prochazeni a inicuje predani JSONU
                                                                     pokud sloup > a: & { sjede oradek niz(zachova next sloupec)
                                                                                         & } snizi o sloupec a radek
                                                                                                                        pokud ma carku smaze predchozi carku ve stringu
                                                                    pokud neobsahuje {} zkontroluje next sloupec a  prida "": 
                                                                                                                            pokud najde v next sloupci obyc string pak prida obsah vedlejsiho sloupce v "",
                                                                                                                            
                                                                                  
     zjisti jestli neni 
                pokud ano a neni sloupec a  */

}

function parseRow(cell, nextcell, json, collumn) {
    switch (cell.includes()) {
        case "{": {
            json = addString(json, "{");
            collumn++;
        }
        case "}": {

            if (cell.includes(",")) {
                json = addString(json, cell);
            } else {
                json = deleteLastComma(json);
                json = addString(json, "}");
                collumn--;
            }
        }
        default: {
            addString("\"" + cell + "\":" + "\"" + nextcell + "\",");
        }
    }
}
function addString(json, input) {
    json = json + input;
    return json;
}
function deleteLastComma(json){
    if(json.charAt(json.lenght - 1)==","){
        json = json.substring(0,json.lenght -1);
    }
return json;
}


// function readCell(i, j) {
//     let cell = sheet.getRange(i, j);
//     let checkNext = sheet.getRange(i, j+1);
//  if(checkNext === "{"){
//      addString(cell+":{")
//  }else if(){

//  }
// // promyslet neni potreba for cyklus spis alg prochazeni se switchem pri ruzne situaci nahoru i dolu vlozit si sem snippet pozad JSONU strukturovat mezerama
// }   



// doplnovani {} : "" a , mozna nechavat dvojtecky a zvazit jetli nedelat object jump automatically
//zdroje https://gist.github.com/daaain/3932602 ; https://developers.google.com/apps-script/reference/spreadsheet/ ; https://developers.google.com/apps-script ; https://www.labnol.org/code/20004-google-spreadsheets-json
// http://blog.pamelafox.org/2013/06/exporting-google-spreadsheet-as-json.html https://gist.github.com/pamelafox/1878143 https://gist.github.com/simonepri/c3e62eb0291d3230d0d0481cf18c3480 ;
// sheet do objectu https://gist.github.com/jonobr1/45fc5f41a219153aaa18 ;
//google addon https://github.com/Synthoid/ExportSheetData
// netsed json https://stackoverflow.com/questions/47555347/creating-a-json-object-from-google-sheets https://stackoverflow.com/questions/47577712/creating-a-nested-json-object-with-google-sheets

/*function exportJSON() {
    var app = UiApp.createApplication().setTitle('JSON export results - select all and copy!');
    var textArea = app.createTextArea();
    textArea.setValue(makeJson(SpreadsheetApp.getActiveSheet().getDataRange()));
    app.add(textArea);
    textArea.setSize("100%", "100%");
    SpreadsheetApp.getActiveSpreadsheet().show(app);
  };*/

/* TAKHLE BY MOHL VYPADAT ZAPIS
{
home	{
	lang	    en
	description	popis
	title	    titulek
	},
header	{
	h1	    nadpis1
	buttons	{
		    android	Google Play
		    ios	    App Store
		    },
	h2	    nadpis2"
	},
footer	{
	contactus	    contactus
	doclinks 	    {
		            privacy	    Datenschutz
		            privacylink	https://www.iubenda.com/privacy-policy/30888138/full-legal
		            tos	        Geschäftsbedingungen
		            toslink	    /terms
		            preskit	    PressKit
		            preskitlink	https://www.dropbox.com/sh/cvddgfmsl6tbctw/AAA0tDN1doB4vwiGF9-q0EnTa?dl=0",
		            copytd	    Copyright und Markenhinweise
		            },
	}
}
*/