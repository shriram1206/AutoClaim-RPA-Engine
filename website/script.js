document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('claimForm');
    const resultContainer = document.getElementById('resultContainer');
    const statusValue = document.getElementById('statusValue');
    const statusMessage = document.getElementById('statusMessage');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Fake status generation - deterministic based on claim number 
    function generateStatus(claimNumber) {
        const lastChar = claimNumber.trim().slice(-1);
        const num = parseInt(lastChar, 10);

        if (isNaN(num)) {
            return 'Pending'; 
        }

        if (num % 3 === 0) {
            return 'Approved';
        } else if (num % 3 === 1) {
            return 'Pending';
        } else {
            return 'Rejected';
        }
    }

    function getStatusMessage(status) {
        switch(status) {
            case 'Approved':
                return 'Your claim has been fully processed and approved for payment.';
            case 'Pending':
                return 'Your claim is currently under review by our specialists.';
            case 'Rejected':
                return 'Your claim has been denied. Please review your Explanation of Benefits (EOB).';
            default:
                return 'Status unknown.';
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const claimNumber = document.getElementById('claimNumber').value;

        // Simulate network delay for realism 
        submitBtn.textContent = 'Checking...';
        submitBtn.disabled = true;
        resultContainer.classList.add('hidden');

        setTimeout(() => {
            const status = generateStatus(claimNumber);
            
            // Update UI with results
            statusValue.textContent = status;
            statusValue.className = 'status-value ' + status.toLowerCase();
            statusMessage.textContent = getStatusMessage(status);

            // Show the result box
            resultContainer.classList.remove('hidden');
            
            // Reset button state
            submitBtn.textContent = 'Verify Claim — Free';
            submitBtn.disabled = false;
            
        }, 1000); 
    });
    
    resetBtn.addEventListener('click', () => {
        form.reset();
        resultContainer.classList.add('hidden');
    });
});
