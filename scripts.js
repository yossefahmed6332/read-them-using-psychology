document.addEventListener("DOMContentLoaded", function() {
    const buyNowButton = document.querySelector('.buy-now-btn');
    buyNowButton.addEventListener('mouseover', function() {
        buyNowButton.style.backgroundColor = '#ff5722';
    });

    buyNowButton.addEventListener('mouseout', function() {
        buyNowButton.style.backgroundColor = '#000';
    });
});
