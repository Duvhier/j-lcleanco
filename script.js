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

    document.querySelector('.search-btn').addEventListener('click', function() {
        const searchValue = document.querySelector('.search').value.toLowerCase();
        
        const products = document.querySelectorAll('.producto');
        let found = false; 

        products.forEach(function(product) {
            const productName = product.querySelector('.producto-nombre').textContent.toLowerCase();
            
            if (productName.includes(searchValue)) {
                product.style.display = 'block';  
                found = true; 
            } else {
                product.style.display = 'none'; 
            }
        });

        if (!found) {
            document.getElementById('no-result').style.display = 'block';
        } else {
            document.getElementById('no-result').style.display = 'none';
        }
    });


    document.querySelector('.search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.querySelector('.search-btn').click();
        }
    });

    