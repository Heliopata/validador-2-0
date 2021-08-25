var url ="https://docs.google.com/spreadsheets/d/1hB11EJbSvjY4BhqAulIzvr3HOuVBvK8uT9QPEl3PKzI/edit#gid=1463733194"
var favicon = "https://i.imgur.com/2H2I5WI.png";

function doGet(e) {
  var tmp = HtmlService.createTemplateFromFile('Page');
  return tmp.evaluate().setFaviconUrl(favicon).setTitle('Validador 2.0').addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function include(filename) {
  
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
// Carga de la nomina
function loadNominas() {
  console.log('Nomina is loaded');
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("unique");
  return ws.getRange(1, 1,ws.getLastRow(),3).getValues();
}
//LOG CUIT,RESULTADO-------------------------------------------------------------
function userLog(lcuit, resultado,rID){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Log");
  var user = Session.getActiveUser().getEmail();
  ws.appendRow([new Date(),lcuit,resultado,rID,user]);  
}
//Revisar conexion a Nomina----------------------------------------
function estadoNomina(){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("nomina");
  var status = ws.getRange(2,11,5,2).getValues();
  return status;
}
