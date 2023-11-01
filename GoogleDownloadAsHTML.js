function downloadDocsAsHtml() {
var mainFolderId = '12TRulLV3Jjdd5V1BsvqrJYLMEAKOhjVD'; // Replace with your folder's ID.
var mainFolder = DriveApp.getFolderById(mainFolderId);
var files = mainFolder.getFilesByType(MimeType.GOOGLE_DOCS);

while (files.hasNext()) {
    var file = files.next();
    var title = file.getName();
    var id = file.getId();

    // Extract step number from the document title. Adjust the regular expression if the title format changes.
    var stepMatch = title.match(/Step Document (\d+)/i); 
    if (!stepMatch) {
    Logger.log("No step number found in file: " + title);
    continue; // If no step number, skip the file.
    }
    var stepNumber = stepMatch[1];

    // Create a new folder for this step or get it if it already exists.
    var stepFolder;
    var subFolders = mainFolder.getFoldersByName(stepNumber);
    if (subFolders.hasNext()) {
    stepFolder = subFolders.next();
    } else {
    stepFolder = mainFolder.createFolder(stepNumber);
    }

    // Define the export URL.
    var url = "https://docs.google.com/feeds/download/documents/export/Export?id=" + id + "&exportFormat=html";

    var options = {
    method: "get",
    headers: { "Authorization": "Bearer " + ScriptApp.getOAuthToken() },
    muteHttpExceptions: true
    };

    // Fetch the export URL.
    var response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() === 200) {
    var html = response.getContentText();
    var blob = Utilities.newBlob(html, MimeType.HTML, 'index.html');

    // Save the HTML file in the step folder.
    stepFolder.createFile(blob);
    } else {
    Logger.log('Error fetching file ' + title + ': ' + response.getContentText());
    }
}
}