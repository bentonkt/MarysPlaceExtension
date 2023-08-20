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


    fetch(chrome.runtime.getURL('LessonPlans/ Addition Calculator Coding Lesson Plan - KidzCoding.docx'))
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
    // Use Mammoth to convert the ArrayBuffer of the .docx file to HTML
    mammoth.convertToHtml({arrayBuffer: arrayBuffer})
      .then(result => {
        const html = result.value;
        output = getElementById('output');
        output.innerHTML = html;
      })
      .catch(error => {
        console.error("Conversion error:", error);
      });
  })
  .catch(error => {
    console.error("Fetching error:", error);
  });

    
    function displayResult(result) {
        document.getElementById('output').innerHTML = result.value;
    }
    
    function handleError(err) {
        console.log(err);
    }
});
