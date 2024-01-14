// header_loader.js
(function () {
  // Get the current script location
  const scriptElement = document.currentScript;

  win_location_path = window.location.pathname; // Get the current path
  const currentPath = win_location_path.endsWith('/') ? win_location_path : win_location_path.substring(0, win_location_path.lastIndexOf('/') + 1) ;

  //console.log('The base path :' , basePath)
  console.log('The current path :' , currentPath)
 
  // Use fetch to load the content of snippet.html
fetch(`${currentPath}header.html`)
  //fetch(`header.html`)
    .then(response => response.text())
    .then(html => {
      const containerId = scriptElement.getAttribute('data-container-id');
      document.getElementById(containerId).innerHTML = html;
    });
})();