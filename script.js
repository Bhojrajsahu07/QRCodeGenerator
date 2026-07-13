const canvas = document.getElementById('qr');
const input = document.getElementById('input');
const button = document.getElementById('qr-generate');

// 1. Initialize the QR code generator ONCE outside the click event
const qr = new QRious({
    element: canvas,
    size: 200,       // Matches the 200px width/height in our CSS
    value: '',       // Starts blank
    background: '#ffffff',
    foreground: '#000000'
});

// 2. Update the value dynamically on button click
button.addEventListener('click', () => {
    const url = input.value.trim();
    
    if (url) {
        qr.value = url; // qrious will automatically redraw when this changes
    } else {
        alert('Please enter a valid URL');
    }
});