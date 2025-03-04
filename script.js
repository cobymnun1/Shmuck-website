document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const countdownSection = document.querySelector('.countdown-section');
    const launchTime = new Date('2025-03-03T23:59:00-05:00').getTime(); // March 3rd, 11:59 PM EST

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchTime - now;

        if (distance <= 0) {
            // Launch time has passed
            countdownElement.innerHTML = 'LAUNCHED!';
            countdownSection.innerHTML = `
                <h2>LAUNCHED!</h2>
                <div class="countdown-timer">
                    <p>The foolishness has begun!</p>
                    <div id="countdown">LAUNCHED!</div>
                    <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=DZJoPJHSXQYJYoQv7iiPikTEodx4TnNhn6nEWnz161Qh" 
                       target="_blank" 
                       class="buy-now countdown-buy">
                        BUY NOW ON RAYDIUM
                    </a>
                </div>
            `;
        } else {
            // Calculate remaining time
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

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