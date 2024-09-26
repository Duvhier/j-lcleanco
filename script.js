const menu = document.querySelector('.fa-bars');
const linksDiv = document.querySelector('.links-div');

menu.addEventListener('click', () => {
    linksDiv.classList.toggle('active');
});

document.getElementById('registro-link').addEventListener('click', function() {
        window.location.href = 'login.html'; 
    });
    
    document.getElementById('registrate-link').addEventListener('click', function() {
        window.location.href = 'login.html'; 
    });


    