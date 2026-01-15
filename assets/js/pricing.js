// ============================================
// KERJAAMAN - PRICING PAGE JAVASCRIPT
// Toggle billing and update prices
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initPricing();
});

function initPricing() {
    const billingToggle = document.getElementById('billingToggle');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', toggleBilling);
    }
}

function toggleBilling(e) {
    const isYearly = e.target.checked;
    
    // Get all price elements
    const priceAmounts = document.querySelectorAll('.price-amount');
    const yearlyNotes = document.querySelectorAll('.yearly-note');
    
    priceAmounts.forEach(priceAmount => {
        const monthlyPrice = priceAmount.dataset.monthly;
        const yearlyPrice = priceAmount.dataset.yearly;
        
        if (monthlyPrice && yearlyPrice) {
            if (isYearly) {
                // Show yearly price (divided by 12 for monthly display)
                const yearlyMonthly = Math.round(parseInt(yearlyPrice.replace(/\./g, '')) / 12);
                priceAmount.textContent = `Rp ${yearlyMonthly.toLocaleString('id-ID')}`;
            } else {
                // Show monthly price
                priceAmount.textContent = `Rp ${monthlyPrice}`;
            }
        }
    });
    
    // Toggle yearly notes visibility
    yearlyNotes.forEach(note => {
        note.style.display = isYearly ? 'block' : 'none';
    });
}
