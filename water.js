// function doGet(){
//     return HtmlService.createHtmlOutputFromFile('index');
//     // var a = ss.evaluate();
//     // var z = y. setXFrameOptionsMode(HtmlService.XFrameOptionsMode. ALLOWALL);
//     // return z;
//   }
  
    var spreadsheetId = '11wtqID2XVLVpIg2VtjR4NazydIbAf8qkfFmHLJQ-q-4';
    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Sheet1');
    var row = sheet.getLastRow() ;
    var data_of_last_row = sheet.getSheetValues(row,1,1,3);
    console.log(data_of_last_row);
  
    //manipulate the latest data values
    var dcm = data_of_last_row[0][1];
    var sensorValue = (135-dcm)*100/135;
    console.log(sensorValue);
  
  function doGet(e) {
    // setting the response
    var response = { };
    response.content = sensorValue;
    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
  }
  
  let datah1 = document.getElementById('sensor-data');
  datah1.innerHTML = `${sensorValue}`;
  