function extractFile(input) {
    let lastIndex = input.lastIndexOf('\\');
    let file = input.substring(lastIndex+1);
    let dotIndex = file.lastIndexOf('.');
    let fileName = file.substring(0,dotIndex);
    let fileExtension = file.substring(dotIndex+1)
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
    
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')