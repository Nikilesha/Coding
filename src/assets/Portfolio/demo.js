function createAllocationChart() {
    const allocationData = [
        { category: 'Equity', value: 65, color: '#2563eb' },
        { category: 'Debt', value: 20, color: '#10b981' },
        { category: 'Hybrid', value: 15, color: '#7c3aed' }
    ];

    const chart = document.getElementById('allocationChart');
    chart.innerHTML = '';

    allocationData.forEach(item => {
        const bar = document.createElement('div');
        bar.className = 'allocation-bar';
        bar.style.height = `${item.value}%`;  // Fixed interpolation
        bar.style.backgroundColor = item.color;
        bar.setAttribute('data-label', `${item.category} ${item.value}%`);  // Fixed interpolation
        chart.appendChild(bar);
    });
}

// Calculate and update portfolio returns
function updatePortfolioReturns() {
    const rows = document.querySelectorAll('#holdingsTable tbody tr');
    let totalInvested = 0;
    let totalValue = 0;

    rows.forEach(row => {
        const invested = parseFloat(row.cells[4].textContent.replace('₹', '').replace(',', ''));
        const currentValue = parseFloat(row.cells[5].textContent.replace('₹', '').replace(',', ''));
        
        totalInvested += invested;
        totalValue += currentValue;

        const returnPercent = ((currentValue - invested) / invested * 100).toFixed(1);
        row.cells[6].textContent = `${returnPercent}%`;  // Fixed interpolation
        row.cells[6].className = currentValue >= invested ? 'positive' : 'negative';
    });

    // Update summary cards
    const totalReturn = totalValue - totalInvested;
    
    document.querySelector('.portfolio-summary .summary-card:nth-child(1) h2').textContent = 
        `₹${totalInvested.toLocaleString('en-IN')}`;  // Fixed interpolation
    
    document.querySelector('.portfolio-summary .summary-card:nth-child(2) h2').textContent = 
        `₹${totalValue.toLocaleString('en-IN')}`;  // Fixed interpolation
    
    document.querySelector('.portfolio-summary .summary-card:nth-child(2) p').textContent = 
        `${totalReturn >= 0 ? '+' : ''}₹${Math.abs(totalReturn).toLocaleString('en-IN')} ${totalReturn >= 0 ? 'profit' : 'loss'}`;  // Fixed interpolation
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createAllocationChart();
    updatePortfolioReturns();
});
