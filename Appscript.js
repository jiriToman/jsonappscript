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
    var output;

    for (i = 1; i <= lastRow; i++) {
        for (j = 1; j <= 4; j++) {

            if (sheet.getRange(i, j).isBlank()) {
            } else {
                readCell(i, j);
            }
        }

    }
}

function readCell(i, j) {
    let cell = sheet.getRange(i, j);
    let checkNext = sheet.getRange(i, j+1);
 if(checkNext === "{"){
     addString(cell+":{")
 }else if(){

 }
// promyslet neni potreba for cyklus spis alg prochazeni se switchem pri ruzne situaci nahoru i dolu vlozit si sem snippet pozad JSONU strukturovat mezerama
}   



// doplnovani {} : "" a , mozna nechavat dvojtecky a zvazit jetli nedelat object jump automatically
//zdroje https://gist.github.com/daaain/3932602 ; https://developers.google.com/apps-script/reference/spreadsheet/ ; https://developers.google.com/apps-script ; https://www.labnol.org/code/20004-google-spreadsheets-json
// http://blog.pamelafox.org/2013/06/exporting-google-spreadsheet-as-json.html https://gist.github.com/pamelafox/1878143 https://gist.github.com/simonepri/c3e62eb0291d3230d0d0481cf18c3480 ;
// sheet do objectu https://gist.github.com/jonobr1/45fc5f41a219153aaa18 ;
//google addon https://github.com/Synthoid/ExportSheetData

/*function exportJSON() {
    var app = UiApp.createApplication().setTitle('JSON export results - select all and copy!');
    var textArea = app.createTextArea();
    textArea.setValue(makeJson(SpreadsheetApp.getActiveSheet().getDataRange()));
    app.add(textArea);
    textArea.setSize("100%", "100%");
    SpreadsheetApp.getActiveSpreadsheet().show(app);
  };*/