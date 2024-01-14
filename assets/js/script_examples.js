// header_loader.js
(function () {
  // Get the current script location
  const scriptElement = document.currentScript;
  const scriptPath = scriptElement.src;

  // Extract the base path from the script location
  const basePath = scriptPath.substring(0, scriptPath.lastIndexOf('/') + 1);
  //const currentPath = window.location.pathname; // Get the current path
  win_location_path = window.location.pathname; // Get the current path
  const currentPath = win_location_path.endsWith('/') ? win_location_path : win_location_path.substring(0, win_location_path.lastIndexOf('/') + 1) ;

  //console.log('The base path :' , basePath)
  console.log('The current path :' , currentPath)
  console.log('The Path value is ', currentPath + 'header.html')

  // Use fetch to load the content of snippet.html
  fetch(`${currentPath}header.html`)
  //fetch(`header.html`)
    .then(response => response.text())
    .then(html => {
      // Determine the relative path based on the script location
      //const currentPath = window.location.pathname; // Get the current path
      const relativePath = new URL(currentPath, basePath).pathname; // Combine with the script base path

      // Replace #CONTENT_PATH# with the relative path
      const modifiedHTML = html.replace(/#CONTENT_PATH#/g, relativePath);

      // Insert the modified HTML content into the specified container
      const containerId = scriptElement.getAttribute('data-container-id');
      document.getElementById(containerId).innerHTML = modifiedHTML;
    });
})();



<script>
//Use fetch to load the content of snippet.html
/*
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    // Insert the HTML content into the container element
    document.getElementById('header').innerHTML = html;
  });

// Use fetch to load the content of snippet.html
fetch('left_sidebar.html')
  .then(response => response.text())
  .then(html => {
    // Insert the HTML content into the container element
    document.getElementById('left_navigation').innerHTML = html;
  });
*/
</script>
