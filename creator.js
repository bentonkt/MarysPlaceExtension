document.getElementById('generateBtn').addEventListener('click', function() {
    const stepCount = parseInt(document.getElementById('stepCount').value);
    const stepsContainer = document.getElementById('stepsContainer');
    stepsContainer.innerHTML = '';
    for (let i = 1; i <= stepCount; i++) {
      const stepDiv = document.createElement('div');
      stepDiv.innerHTML = `<label>Step ${i}:</label><textarea placeholder="Enter step description"></textarea><label class="custom-file-upload"><input type="file" accept="image/*" style="display: none;"><span>Upload Image</span></label><br>`;
      stepsContainer.appendChild(stepDiv);
    }
    document.getElementById('createLessonBtn').style.display = 'block';
  });
  
  document.getElementById('createLessonBtn').addEventListener('click', function() {
    const stepsContainer = document.getElementById('stepsContainer');
    const textareas = stepsContainer.querySelectorAll('textarea');
    const lessonTitle = document.getElementById('lessonTitle').value;
    let lessonHtml = `<h1>${lessonTitle || 'Lesson Plan'}</h1>`;
    textareas.forEach((textarea, index) => {
      lessonHtml += `<h2>Step ${index + 1}:</h2><p>${textarea.value}</p>`;
    });
    const blob = new Blob([lessonHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    chrome.tabs.create({ url: url });
  });
  
  stepsContainer.addEventListener('change', function(e) {
    if (e.target && e.target.type === 'file') {
        const fileName = e.target.files[0] ? e.target.files[0].name : '';
        const span = e.target.nextElementSibling;
        span.textContent = fileName || 'Upload Image';
    }
});
