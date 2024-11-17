document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the usual way

    // Retrieve form data
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;

    // Prepare the data to be sent in the request body
    const formData = {
        name: name,
        date: date,
        time: time,
        service: service
    };

    // Send data to Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbyeCz1Iw146wVhZBNM1JZY6fvKPQqcL6VYExbQLpWJ5q1ydlrD5KwqXuNIkAa9_v0C0/exec', {
        method: 'POST',
        mode: 'no-cors',  // Set CORS mode to 'no-cors'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Convert form data to JSON format
    })
  
    .then(response => {
        // Since 'no-cors' mode doesn't allow reading the response, just log a message
        console.log('Request sent successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
    });

});

//แสดง alert ว่าส่งข้อมูลสำเร็จ
function myFunction() {
  alert("ทําการจองสำเร็จ กรุณารอการติดต่อกลับจากทางร้านค่ะ");
  window.location.href = "test.html";
}

