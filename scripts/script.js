let currentPage = 1; // track the current page
const totalPages = 4; // or set the total pages as per your content


scriptDir = "../../../scripts/"
// This gives you the full URL
var currentUrl = window.location.href;

// This gives you the path of the URL, including file name if it exists
var currentPath = window.location.pathname;

// This would remove the file name from the path, giving you just the "directory" part
var currentDirectory = currentPath.substring(0, currentPath.lastIndexOf('/'));

// To get the parent directory, we need to remove the trailing part of the current directory from the path
var parentDirectory = currentDirectory.substring(currentDirectory.lastIndexOf('/') + 1);

indices = getAllIndicesOf('/', currentDirectory);

currentPage = parseInt(parentDirectory);
let lessonName = currentDirectory.substring(indices[0] + 1, indices[1]);


// ADDING STYLE SHEET \\
// Create a new link element
var link = document.createElement("link");

link.rel = "stylesheet";
link.type = "text/css";
link.href = scriptDir + "style.css"; 

// Append the link element to the document head
document.head.appendChild(link);



// This function will change the page
function changePage(direction) {
    const newPageNumber = currentPage + direction;
    // Check the page boundaries
    if (newPageNumber < 1 || newPageNumber > totalPages) {
    return;
    }

    test = "../" + newPageNumber + "/index.html"
    window.location.href = "../" + newPageNumber + "/index.html";
    return test;
}


// NAVIGATION BUTTONS BETWEEN STEPS \\
document.getElementById('prev').addEventListener('click', function() {
    // Existing functionality
    num = changePage(-1);
    // Change the color of the button
    this.style.backgroundColor = 'blue'; // changes the background color of the button
    this.style.color = 'white'; // changes the text color of the button
});
document.getElementById('next').addEventListener('click', function() {
    num = changePage(1);
    // Change the color of the button
    this.style.backgroundColor = 'blue'; // changes the background color of the button
    this.style.color = 'white'; // changes the text color of the button

});


function getAllIndicesOf(searchStr, str, caseSensitive = false) {
    let searchLen = searchStr.length;
    if (searchLen === 0) {
        return [];
    }

    let startIndex = 0, index, indices = [];

    if (!caseSensitive) {
        // If it's not case sensitive, make both strings lower case for the comparison
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }

    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchLen;
    }

    indices = [indices[indices.length - 2], indices[indices.length - 1]];

    return indices;
}