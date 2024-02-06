const block = document.querySelector('.our-tack_person-photo');
block.addEventListener('mouseover', function() {
    block.style.transform = 'scale(1.1)'; 
    block.style.boxShadow = '10px 0px 20px rgba(0,0,0,0.3)'; 
});
block.addEventListener('mouseout', function() {
    block.style.transform = 'scale(1)'; 
    block.style.boxShadow = 'none'; 
});
