if (documents.length == 0) {
    alert("No documents open you turkey.");
} else {
    // Run the script
    try {
        var groups = activeDocument.layers;
        
        for(var i = 0; i < groups.length; i++) {
            groups[i].visible = false;
        }

        for(var i = 0; i < groups.length; i++) {
            
            groups[i].visible = true;

            var pngOptions = new PNGSaveOptions();
            pngOptions.compression = 9;
            
            var exportFile = new File(activeDocument.path + "/" + groups[i].name + ".png"); 
            activeDocument.saveAs(exportFile, pngOptions, true, Extension.LOWERCASE);

            groups[i].visible = false;
        }

    } catch (error) {
        alert("Error message: " + error);
    }
}
