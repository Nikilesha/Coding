document.addEventListener("DOMContentLoaded", function () {
    // Tab navigation
    const tabs = document.querySelectorAll(".horizontal-tabs ul li a");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Remove active class from all tabs and tab panes
            tabs.forEach(t => t.parentElement.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            // Add active class to the clicked tab
            this.parentElement.classList.add("active");
            
            // Show corresponding tab content
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Investment button click event
    document.querySelectorAll(".btn-invest").forEach(button => {
        button.addEventListener("click", function () {
            alert("Investment feature coming soon!");
        });
    });

    // Back button functionality
    document.querySelector(".back-button a").addEventListener("click", function (event) {
        event.preventDefault();
        window.history.back();
    });
});