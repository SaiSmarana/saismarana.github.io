
// header_loader.js
window.content_loader = (async function (file_name, attribute_name) {


  console.log('The file name:', file_name)
  try {
    const response = await fetch(`${file_name}`);
    // Use fetch to load the content of snippet.html
    if (!response.ok) {
      throw new Error(`Failed to fetch left navigation: ${response.status} ${response.statusText}`);
    }
    const html = await response.text();
    // Get the container ID from the script attributes
    //const containerId = scriptElement.getAttribute(attribute_name);

    // Insert the HTML content into the specified container
    document.getElementById(attribute_name).innerHTML = html;

    // Log after the fetch operation is complete
    console.log('After Fetch :', file_name);
  } catch (error) {
    console.error('Fetch error: ', error);
  }

});


function home_en() {
  // Loading the English Version Home Content
  window.content_loader(`../english/home_en.html`, 'content_id')

}
//LOAD THE HOME PAGE
home_en() 

//LOAD SAI SMARANA
function load_saismarana_en(){
   // Loading the English Version Sai Smarana Content
   window.content_loader(`../english/saismarana_en.html`, 'content_id')

}



