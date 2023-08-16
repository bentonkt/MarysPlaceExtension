
document.addEventListener('DOMContentLoaded', function() {
    let params = new URLSearchParams(window.location.search);
    let itemText = params.get('data');

    const lessonPlan = document.getElementById("LessonText");


    let lessonName = document.getElementById("LessonName");
    lessonName.innerText = itemText;

    fetch('LessonPlans/' + itemText + "Lesson Plan - KidzCoding.txt")
                .then(response => response.text())
                .then(content => {
                    lessonPlan.innerText = content;
                    // You can process or display the file content here
                })
    .catch(error => console.error(`Error fetching ${itemText}:`, error));

});
