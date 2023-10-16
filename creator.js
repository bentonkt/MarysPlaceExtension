// document.getElementById('generateBtn').addEventListener('click', function() {
//     const stepCount = parseInt(document.getElementById('stepCount').value);
//     const stepsContainer = document.getElementById('stepsContainer');
//     stepsContainer.innerHTML = '';
//     for (let i = 1; i <= stepCount; i++) {
//       const stepDiv = document.createElement('div');
//       stepDiv.innerHTML = `<label>Step ${i}:</label><textarea placeholder="Enter step description"></textarea><label class="custom-file-upload"><input type="file" accept="image/*" style="display: none;"><span>Upload Image</span></label><br>`;
//       stepsContainer.appendChild(stepDiv);
//     }
//     document.getElementById('createLessonBtn').style.display = 'block';
//   });
  
  // Tells extension what to when the "Create Lesson Plan" button is clicked
//   document.getElementById('createLessonBtn').addEventListener('click', function() {
//     const stepsContainer = document.getElementById('stepsContainer');
//     const textareas = stepsContainer.querySelectorAll('textarea');
//     const lessonTitle = document.getElementById('lessonTitle').value;
//     let lessonHtml = `<h1>${lessonTitle || 'Lesson Plan'}</h1>`;
//     textareas.forEach((textarea, index) => {
//       lessonHtml += `<h2>Step ${index + 1}:</h2><p>${textarea.value}</p>`;
//     });
//     const blob = new Blob([lessonHtml], { type: 'text/html' });
//     const url = URL.createObjectURL(blob);
//     chrome.tabs.create({ url: url });
//   });
  
//   stepsContainer.addEventListener('change', function(e) {
//     if (e.target && e.target.type === 'file') {
//         const fileName = e.target.files[0] ? e.target.files[0].name : '';
//         const span = e.target.nextElementSibling;
//         span.textContent = fileName || 'Upload Image';
//     }
// });

// $('#submit').on('click', function() {
  // $.ajax({
  //     url: 'insert.php',
  //     type: 'POST',
  //     data: $('#myForm').serialize(),
  //     success: function(response) {
  //         console.log("Response:", response);
  //     },
  //     error: function(error) {
  //         console.error("Error:", error);
  //     }
  // });









// document.getElementById('submit').addEventListener('click', function() {
//   const url = 'http://bentont.pythonanywhere.com/';

//   // lessonTitle = document.forms['myForm']['lessonTitle'].value;
//   // lessonPlan = document.forms['myForm']['lessonPlan'].value;
//   data = {"lessonPlan": "test", "lessonTitle": "this is a lesson palkn"};

//   fetch(url, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: data
//   })
//   .then(response => response.json())
//   .then(data => {
//       console.log(data);
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   }); 
// });




  $(document).ready(function(){
    $.ajax({
      type: "POST",
      url: "http://bentont.pythonanywhere.com/",
      data: {"lessonPlan": "test", "lessonTitle": "this is a lesson palkn"},
      success: function(response) {   
          let result = JSON.parse(response);
          result = result['success']
          if (result == true) {
              console.log("Kick added!");
          }
          else {
              console.error("Error adding kick. Please check inputs.");
          }
      },
      error: function(error) {
          console.error("Error:", error);
      }
  });
});


