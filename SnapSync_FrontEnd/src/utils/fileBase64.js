const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  const emptyFileInput = (elementId) => {
    const inputFile = document.getElementById(elementId);
    if (inputFile) {
      inputFile.value = '';
    }
  };
  
  export { convertImageToBase64, emptyFileInput };