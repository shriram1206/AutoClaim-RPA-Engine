document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('claimForm');
    const resultContainer = document.getElementById('resultContainer');
    const statusValue = document.getElementById('statusValue');
    const statusMessage = document.getElementById('statusMessage');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Generate deterministic raw medical billing codes and explanations
    function generateRawEOB(claimNumber) {
        const lastChar = claimNumber.trim().slice(-1);
        const num = parseInt(lastChar, 10);

        if (isNaN(num) || num % 3 === 1) {
            return 'EDI-277: Claim received. Status: IN-REVIEW. Payer Remarks: Pending manual adjudication by medical director. Code: MA-89. Encounter: Office Visit (CPT 99214). Billed Amount: ₹4,500.';
        }

        if (num % 3 === 0) {
            return 'EDI-835: Remittance Advice. Encounter: MRI (CPT 70551). Billed Amount: ₹15,000. Payer Allowed: ₹12,500. Patient Responsibility (PR-1): ₹2,500. Claim Processed and Cleared for EFT.';
        } else {
            return 'EDI-835: Remittance Advice. Encounter: Knee Surgery (CPT 29881). Billed Amount: ₹45,000. Payer Response: CO-4 (The procedure code is inconsistent with the modifier used). Claim Denied.';
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
            const rawEOB = generateRawEOB(claimNumber);
            
            // Update UI with results
            statusValue.textContent = 'RAW EOB DATA:';
            statusValue.className = 'status-value pending';
            statusMessage.textContent = rawEOB;

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
