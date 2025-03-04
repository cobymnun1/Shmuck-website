document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Buy Now button animation
    const buyButton = document.querySelector('.buy-now');
    if (buyButton) {
        buyButton.addEventListener('click', () => {
            // Add your buy functionality here
            window.open('https://pancakeswap.finance/swap', '_blank');
        });
    }

    // Add scroll animation for features
    const features = document.querySelectorAll('.feature');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(feature);
    });

    // Copy contract address functionality
    const contractAddress = document.getElementById('contract-address');
    const copyHint = document.querySelector('.copy-hint');
    
    if (contractAddress && copyHint) {
        contractAddress.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(contractAddress.textContent);
                const originalText = copyHint.textContent;
                copyHint.textContent = 'Copied!';
                setTimeout(() => {
                    copyHint.textContent = originalText;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }
}); 