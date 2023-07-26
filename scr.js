function pageTransition(targetURL) {
    // Add your transition effect code here
    document.body.classList.add("fadeOut");
    setTimeout(function() {
      // Redirect to the target URL after the transition effect
      window.location.href = targetURL;
    }, 500); // Adjust the timing based on your transition effect
  }

  // Get references to the anchor tags by their IDs
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  // Add onclick event listeners to the anchor tags
  link1.onclick = function() {
    // Call the pageTransition function with the target URL as an argument
    pageTransition("sanat.html");
  };

  link2.onclick = function() {
    // Call the pageTransition function with the target URL as an argument
    pageTransition("chat.html");
  };

  link3.onclick = function() {
    // Call the pageTransition function with the target URL as an argument
    pageTransition("newabout.html");
  };