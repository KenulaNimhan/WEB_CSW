let pageOneHeader = document.getElementById("page_one_heading");
let pageTwoHeader = document.getElementById("page_two_heading");
let pageThreeHeader = document.getElementById("page_three_heading");

let pageDetails = document.getElementsByClassName("page_info");
console.log(pageDetails)

pageOneHeader.addEventListener("mouseover", function() {
    pageDetails[0].style.display = "block";
});
pageOneHeader.addEventListener("mouseleave", function() {
    pageDetails[0].style.display = "none";
});


pageTwoHeader.addEventListener("mouseover", function() {
    pageDetails[1].style.display = "block";
});
pageTwoHeader.addEventListener("mouseleave", function() {
    pageDetails[1].style.display = "none";
});


pageThreeHeader.addEventListener("mouseover", function() {
    pageDetails[2].style.display = "block";
});
pageThreeHeader.addEventListener("mouseleave", function() {
    pageDetails[2].style.display = "none";
});