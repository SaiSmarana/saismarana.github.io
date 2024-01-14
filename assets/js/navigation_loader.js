// header_loader.js
window.loadLeftNavigation = ( async  function () {
  // Get the current script location
  const scriptElement = document.currentScript;

  win_location_path = window.location.pathname; // Get the current path
  const currentPath = win_location_path.endsWith('/') ? win_location_path : win_location_path.substring(0, win_location_path.lastIndexOf('/') + 1) ;

  //console.log('The base path :' , basePath)
  console.log('The current path - left navigation:' , currentPath)
  try {
   // const response = await fetch(`${currentPath}left_navigationbar.html`);
  // Use fetch to load the content of snippet.html
  const response = await fetch(`../english/left_navigationbar_en.html`);
  if (!response.ok) {
    throw new Error(`Failed to fetch left navigation: ${response.status} ${response.statusText}`);
  }
  const html = await response.text();
     // Get the container ID from the script attributes
     const containerId = scriptElement.getAttribute('data-container-id');

     // Insert the HTML content into the specified container
     document.getElementById(containerId).innerHTML = html;
 
     // Log after the fetch operation is complete
     console.log('After Fetch - left navigation:', currentPath);
   } catch (error) {
     console.error('Fetch error: left navigation', error);
   }

})();