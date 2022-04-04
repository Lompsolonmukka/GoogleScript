//Update button for the calendar spreadsheet
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Kalenteri')
  .addItem('Luo kalenteritapahtumat', 'addEvents')
  .addToUi();
}

// Function to add events from google sheet to a calendar
function addEvents() {
  // SpreadsheetApp to retrieve the spreadsheet you are working with.
  var spreadsheet = SpreadsheetApp.getActiveSheet();
  
  /*
SCRIPT FOR GETTING THE CALENDARID FROM SPREADSHEET
// Get the value of the calendarID from the sheet Cell. In cell E4.
  var calendarId = spreadsheet.getRange("E4").getValue();
// CalendarApp to open up the calendar in CalendarID.
  var eventCal = CalendarApp.getCalendarById(calendarId);
 */
  
  // CalendarApp to open up the calendar in CalendarID, hardcoded.
  var eventCal = CalendarApp.getCalendarById("xxxxxxxxxxxx.calendar.google.com");
  
  // Get the last row that has data in it for continued use.
  var lr = spreadsheet.getLastRow();
  
  //force dateformat to aloitusaika & lopetusaika
  var cell = spreadsheet.getRange("B8:C" + lr);
  var date = Date.parse(cell.getValue());
  
  //pass into getRange to get data from spreadsheet
  var data = spreadsheet.getRange("A3:G"+lr+"").getValues();
  
  //Loop through rows and columns
  for (var i = 0; i<data.length; i++) {    
      var id = data[i][7];


   if(!id) {
     //Loop through rows and columns
     for(var i = 0;i<data.length;i++) {
    
      eventCal.createEvent(
        //title
        data[i][0],
        //startTime
        data[i][1],
        //endTime
        data[i][2], 
        {
          //send attendees an email
          sendInvites: true, 
          //attendees emails
          guests: data[i][3],
          //event description
          description: data[i][4], 
          //event location
          location: data[i][5]
        }
      
      ); 
       Logger.log(data);
       
     }
     var newEventId = event.getId();
     spreadsheet.getRange(x+3,7).setValue('kyllä');
     spreadsheet.getRange(x+3,8).setValue(newEventId);

   //var event = eventCal.createEvent(title, startTime, endTime, options); 

     Logger.log('Event ID: ' + event.getId());
   }
  }
}