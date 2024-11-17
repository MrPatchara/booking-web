document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        // เก็บข้อมูลจากฟอร์ม
        var formData = {
            name: document.getElementById('name').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value
        };

        // ส่งข้อมูลไปยัง Google Apps Script Web App
        fetch('https://script.google.com/macros/s/AKfycbyeCz1Iw146wVhZBNM1JZY6fvKPQqcL6VYExbQLpWJ5q1ydlrD5KwqXuNIkAa9_v0C0/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)  // ส่งข้อมูลในรูปแบบ JSON
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
