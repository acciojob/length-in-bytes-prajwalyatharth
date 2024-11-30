const byteSize = (str) => {
  // write your code here
	  // Create a Blob object with the input string
  const blob = new Blob([str]);
  // Return the size property of the Blob, which gives the size in bytes
  return blob.size;
};

// Do not change the code below
const str = promp("Enter some string.");
alert(byteSize(str));
