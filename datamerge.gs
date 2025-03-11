// This script uses data from a google sheet to customise a google doc. Creating a document for every row in the spreadsheet and then add the link to the new doc back in the spreadsheet

function generateProductDescriptions() {
  var spreadsheetId = "REPLACE WITH GOOGLE SHEETS"; // ✅ Replace with your Google Sheets ID
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName("Testing"); // ✅ Replace "Sheet1" with your actual sheet name
  var data = sheet.getDataRange().getValues();

  // ✅ Google Docs Template
  var templateDocId = "REPLACE WITH GOOGLE DOC ID"; // ✅ Replace with your Google Docs Template ID
  var templateDoc = DriveApp.getFileById(templateDocId);
  
  // ✅ Destination Folder
  var outputFolderId = "REPLACE WITH GOOGLE DRIVE FOLDER ID"; // ✅ Replace with your Google Drive folder ID
  var outputFolder = DriveApp.getFolderById(outputFolderId);
  
  // ✅ Loop through each row (starting from row 2, skipping headers)
  for (var i = 1; i < data.length; i++) {
    var miniCollectionName = data[i][0]; // Column A: Mini Collection Name
    var tagline = data[i][4]; // Column B: Tagline
    var pieces = data[i][2]; // Column C: Pieces
    var outputDocName = data[i][6]; // Column E: Output Doc Name
    var docLinkCell = sheet.getRange(i + 1, 8); // Column F (Generated Desc Link)

    // ✅ Check if the document already exists (skip duplicates)
    if (docLinkCell.getValue() !== "") {
      Logger.log("Skipping row " + (i + 1) + " - Document already exists.");
      continue;
    }

    // ✅ Make a copy of the template
    var newDoc = templateDoc.makeCopy(outputDocName, outputFolder);
    var newDocId = newDoc.getId();
    var doc = DocumentApp.openById(newDocId);
    var body = doc.getBody();

    // ✅ Replace placeholders in the document
    body.replaceText("\\[COLLECTION_NAME\\]", miniCollectionName);
    body.replaceText("\\[TAGLINE\\]", tagline);
    body.replaceText("\\[PIECES\\]", pieces);
    
    // ✅ Save changes
    doc.saveAndClose();

  // ✅ Insert a clickable link in Google Sheets
    var docUrl = "https://docs.google.com/document/d/" + newDocId;
    docLinkCell.setFormula('=HYPERLINK("' + docUrl + '", "View Document")');
  }


  Logger.log("✅ Product descriptions generated successfully!");
}
