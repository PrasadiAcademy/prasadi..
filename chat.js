document.addEventListener("DOMContentLoaded", function () {
    var popupContainer = document.getElementById("popupContainer");
    var closeBtn = document.getElementById("closeBtn");
    var popupDelay = 10000; // Set the delay in milliseconds (e.g., 10000ms = 10 seconds)

    // Function to show the popup ad
    function showPopupAd() {
        popupContainer.style.display = "block";
    }

    // Show the popup ad after the specified delay
    setTimeout(showPopupAd, popupDelay);

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });
});

