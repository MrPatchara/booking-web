document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const time = document.getElementById('time').value;
  
    const formData = {
      name: name,
      phone: phone,
      service: service,
      time: time
    };
  
    fetch('https://script.google.com/macros/s/AKfycbxZMrPltI0WQ9DvwguDyD5ViUdXIgujpBjwoVSZ6mlXyJbioRF5cIKOf6Mf76fXB7KdZg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert('จองคิวสำเร็จ');
      document.getElementById('bookingForm').reset();
    })
    .catch(error => {
      alert('เกิดข้อผิดพลาด: ' + error);
    });
  });
  