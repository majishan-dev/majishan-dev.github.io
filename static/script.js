document.addEventListener('DOMContentLoaded', function() {
    fetch('static/courses.json')
        .then(response => response.json())
        .then(courses => {
            const courseList = document.getElementById('course-list');
            courses.forEach(course => {
                const element = document.createElement('div');
                element.className = 'course-item';
                element.innerHTML = `
                    <div class="course-title">${course.title}</div>
                    <div class="course-instructor">Instructor: ${course.instructor}</div>
                    <div class="course-date">Completed on: ${course.completeDate}</div>
                `;
                courseList.appendChild(element);
            });
        })
        .catch(error => {
            console.error('Error loading the courses:', error);
            courseList.innerHTML = '<p>Failed to load courses. Please try again later.</p>';
        });
});
