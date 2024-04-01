// DECLARING VARIABLES AND CONSTANTS

const galleryItems = document.getElementsByClassName("gallery_item");
const extendedViews = document.getElementsByClassName("extended_view");
const extendedViewContainer = document.getElementById("extended_view_container");
let galleryContainer = document.getElementById("container");
let backIcon = document.getElementById("backIcon");
let personalisationBar = document.getElementById('personalisationBar');

// GALLERY VIEW MAIN EVENTS

    // WHEN CLICKED ON GALLERY ITEM
for(let i=0; i<galleryItems.length; i++){
    galleryItems[i].addEventListener("click", function() {
        // ITEMS TO VIEW
        extendedViewContainer.style.display = "block";
        extendedViews[i].style.display = "block";
        backIcon.style.display = "inline";
        personalisationBar.style.display = "flex";
    });
}

    // WHEN CLICKED ON BACK ICON
backIcon.addEventListener("click", function() {
        // ITEMS TO HIDE
    extendedViewContainer.style.display = "none";
    for(let i=0; i<extendedViews.length; i++){
        extendedViews[i].style.display = "none";
    }
    backIcon.style.display = "none";
    personalisationBar.style.display = "none";
        // ITEMS TO VIEW
    galleryContainer.style.display = "grid";
    
});

// EXTENDED VIEW PERSONALISATION EVENTS

// CHANGE OF FONT
    // to "Roboto"
document.getElementById("roboto-regular").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        // REMOVING EXISTING FONT CUSTOMISATIONS
        extendedViews[i].classList.remove("montserrat", "eb-garamond");
        // ADDING CUSTOMISATION
        extendedViews[i].classList.add("roboto-regular");
    }
});
    // to "Montserrat"
document.getElementById("montserrat").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        // REMOVING EXISTING FONT CUSTOMISATIONS
        extendedViews[i].classList.remove("roboto-regular", "eb-garamond");
        // ADDING CUSTOMISATION
        extendedViews[i].classList.add("montserrat");
    }
});
    // to "eb-geramond"
document.getElementById("poppins").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        // REMOVING EXISTING FONT CUSTOMISATIONS
        extendedViews[i].classList.remove("roboto-regular", "montserrat");
        // ADDING CUSTOMISATION
        extendedViews[i].classList.add("poppins");
    }
});

// CHANGE OF FONT SIZE
    // to 16px
document.getElementById("size_16").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        // ADDING CUSTOMISATION
        extendedViews[i].querySelector(".extended_view_text").style.fontSize = "16px";
        extendedViews[i].querySelector(".extended_view_heading").style.fontSize = "16px";
    }
});
    // to 18px
document.getElementById("size_18").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        // ADDING CUSTOMISATION
        extendedViews[i].querySelector(".extended_view_text").style.fontSize = "18px";
        extendedViews[i].querySelector(".extended_view_heading").style.fontSize = "18px";
    }
});
    // to 20px
document.getElementById("size_20").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        // ADDING CUSTOMISATION
        extendedViews[i].querySelector(".extended_view_text").style.fontSize = "20px";
        extendedViews[i].querySelector(".extended_view_heading").style.fontSize = "20px";
    }
});

// CHANGE OF BACKGROUND COLOR

    // to white
document.getElementById("white_bg_option").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        // ADDING CUSTOMISATION
        extendedViews[i].style.backgroundColor = "white";
        extendedViews[i].style.color = "black";
        // ADDING CUSTOMISATION TO HEADING
        extendedViews[i].querySelector(".extended_view_heading").style.backgroundColor = "white";
        extendedViews[i].querySelector(".extended_view_heading").style.color = "black";
        // CHANGING SCROLLBAR COLORS
    }
});

    // to beige
document.getElementById("beige_bg_option").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
            // ADDING CUSTOMISATION TO TEXT VIEW
            extendedViews[i].style.backgroundColor = "#F4ECD8";
            extendedViews[i].style.color = "black";
            // ADDING CUSTOMISATION TO HEADING
            extendedViews[i].querySelector(".extended_view_heading").style.backgroundColor = "#F4ECD8";
            extendedViews[i].querySelector(".extended_view_heading").style.color = "black";
    }
});

    // to black
document.getElementById("black_bg_option").addEventListener("click", function() {
    for(let i=0; i<extendedViews.length; i++){
        // ADDING CUSTOMISATION TEXT VIEW
        extendedViews[i].style.backgroundColor = "black";
        extendedViews[i].style.color = "white";
        // ADDING CUSTOMISATION TO HEADING
        extendedViews[i].querySelector(".extended_view_heading").style.backgroundColor = "black";
        extendedViews[i].querySelector(".extended_view_heading").style.color = "white";
    }
});
