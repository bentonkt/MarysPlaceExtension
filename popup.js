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


// When a lesson is clicked, open and display the lesson plan
function openLesson(event) {
    
    const itemText = event.target.textContent;

    // chrome.browserAction.setPopup({popup: "lessonPlanPopup.html"});
    window.location.href = 'lessonPlanPopup.html?data=' + encodeURIComponent(itemText);

    
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
