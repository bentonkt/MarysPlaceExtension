// const jquery = require('jquery');
$(document).ready(function() {
    // Your jQuery code here
    $('#LessonName').click(function() {
        alert('Element clicked!');
    });
});


// Load the list of all of the available lesson plans using 'index.json'
document.addEventListener('DOMContentLoaded', function() {
    fetch('index.json')
        .then(response => response.json())
        .then(data => {
            const fileList = data.files;
            console.log(data.files)
            const listContainer = document.createElement('ul');

            // Loop through all of the files and add them to the list
            fileList.forEach(filename => {
                const listItem = document.createElement('li');

                lessonName = filename.split("Lesson")[0]
                listItem.textContent = lessonName;
                listItem.id = lessonName;
                listItem.addEventListener('click', openLesson);
                listContainer.appendChild(listItem);
            });

            document.body.appendChild(listContainer);
        })
        .catch(error => {
            console.error("There was an error fetching the JSON:", error);
        });
});

document.getElementById('create').addEventListener('click', create);

function create() {
    window.location.href = 'creator.html'
}



// When a lesson is clicked, open and display the lesson plan
function openLesson(event) {
    
    var itemText = event.target.textContent.replace(/\s+/g, '');

    // \\chrome.browserAction.setPopup({popup: "lessonPlanPopup.html"});
    // window.location.href = 'lessonPlanPopup.html?data=' + encodeURIComponent(itemText);
    window.location.href = 'lessons/' + encodeURIComponent(itemText) + '/1/index.html';

    
    // document.addEventListener('DOMContentLoaded', function() {
    //     const lessonPlan = document.createElement("p")

    //     let lessonName = document.getElementById("LessonName");
    //     lessonName.innerText = itemText;

    //     fetch('LessonPlans/' + itemText + "Lesson Plan - KidzCoding.txt")
    //                 .then(response => response.text())
    //                 .then(content => {
    //                     lessonPlan.innerText = content;
    //                     // You can process or display the file content here
    //                 })
    //                 .catch(error => console.error(`Error fetching ${itemText}:`, error));

    //     document.body.appendChild(lessonPlan);
    // });

    


}


