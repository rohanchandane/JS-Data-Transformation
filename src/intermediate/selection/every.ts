function  checkIfAllFilesHasJSExtension() {
    const files = ['test.js', 'index.js'];
    const isPresent = files.every( (file) => {
        console.log(file.split('.').pop())
        return file.split('.').pop() === "js"
    });

    return isPresent;
}

console.log(checkIfAllFilesHasJSExtension());
// true

// Note: every() returns true/ false