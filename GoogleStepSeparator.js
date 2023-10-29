function splitDocument() {
    var doc = DocumentApp.getActiveDocument();
    var body = doc.getBody();
  
    // Initialize the current section elements array and sections container.
    var currentSectionElements = [];
    var sections = [];
  
    var totalElements = body.getNumChildren();
  
    // Iterate through all elements of the document.
    for (var i = 0; i < totalElements; ++i) {
      var element = body.getChild(i).copy(); // Copy the element.
      
      // Check if this is a paragraph and contains "Step ".
      if (element.getType() == DocumentApp.ElementType.PARAGRAPH) {
        var text = element.asParagraph().getText();
  
        if (text.includes("Step ") && currentSectionElements.length > 0) {
          // New section start, push the current section elements to the sections array.
          sections.push(currentSectionElements);
          currentSectionElements = []; // Start a new section.
        }
      }
      
      // Add the current element to the current section elements array.
      currentSectionElements.push(element);
      
      // If it's the last element, also push the current section elements to the sections array.
      if (i === totalElements - 1) {
        sections.push(currentSectionElements);
      }
    }
  
    // Create a new document for each identified section.
    sections.forEach(function(sectionElements, index) {
      if (sectionElements.length === 0) return; // Skip empty sections.
  
      var newDoc = DocumentApp.create('Step Document ' + (index + 1));
      var newBody = newDoc.getBody();
  
      // Append elements to the new document respecting their types.
      sectionElements.forEach(function(element) {
        switch (element.getType()) {
          case DocumentApp.ElementType.PARAGRAPH:
            newBody.appendParagraph(element.asParagraph().copy());
            break;
          case DocumentApp.ElementType.LIST_ITEM:
            newBody.appendListItem(element.asListItem().copy());
            break;
          case DocumentApp.ElementType.TABLE:
            newBody.appendTable(element.asTable().copy());
            break;
          // Continue with other element types as needed...
          default:
            // Possibly handle other types or insert a warning/comment about an unhandled type.
            Logger.log('Unhandled element type: ' + element.getType());
        }
      });
  
      // Save and close the new document.
      newDoc.saveAndClose();
    });
  }
  