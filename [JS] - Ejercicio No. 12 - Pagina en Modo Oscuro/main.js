document.getElementById('toggle').addEventListener('change', function(event) {
    if (event.target.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    
});