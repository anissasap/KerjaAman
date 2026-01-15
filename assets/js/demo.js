// ============================================
// KERJAAMAN - DEMO PAGE JAVASCRIPT
// Interactive demo simulation
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initDemo();
});

function initDemo() {
    // Get all demo elements
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const selectFileBtn = document.getElementById('selectFileBtn');
    const sampleCards = document.querySelectorAll('.sample-card');
    const tryAgainBtn = document.getElementById('tryAgain');
    const downloadReportBtn = document.getElementById('downloadReport');
    
    // Handle file input click
    if (selectFileBtn && fileInput) {
        selectFileBtn.addEventListener('click', () => fileInput.click());
    }
    
    // Handle file selection
    if (fileInput) {
        fileInput.addEventListener('change', handleFileUpload);
    }
    
    // Handle drag and drop
    if (uploadZone) {
        uploadZone.addEventListener('dragover', handleDragOver);
        uploadZone.addEventListener('dragleave', handleDragLeave);
        uploadZone.addEventListener('drop', handleDrop);
    }
    
    // Handle sample contract selection
    sampleCards.forEach(card => {
        const btn = card.querySelector('.btn');
        if (btn) {
            btn.addEventListener('click', () => {
                const contractType = card.dataset.type;
                startAnalysis(contractType);
            });
        }
    });
    
    // Handle try again button
    if (tryAgainBtn) {
        tryAgainBtn.addEventListener('click', resetDemo);
    }
    
    // Handle download report
    if (downloadReportBtn) {
        downloadReportBtn.addEventListener('click', handleDownload);
    }
}

// ===== FILE HANDLING =====
function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
        // Check file type
        const validTypes = ['application/pdf', 'application/msword', 
                          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        if (!validTypes.includes(file.type)) {
            showNotification('Format file tidak didukung. Gunakan PDF atau DOC.', 'error');
            return;
        }
        
        // Check file size (10MB)
        if (file.size > 10 * 1024 * 1024) {
            showNotification('File terlalu besar. Maksimal 10MB.', 'error');
            return;
        }
        
        // Start analysis with uploaded file name
        startAnalysis('upload', file.name);
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.style.borderColor = '#3b82f6';
    e.currentTarget.style.background = '#f0f9ff';
}

function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.style.borderColor = '#d1d5db';
    e.currentTarget.style.background = '#f9fafb';
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.style.borderColor = '#d1d5db';
    e.currentTarget.style.background = '#f9fafb';
    
    const file = e.dataTransfer.files[0];
    if (file) {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            // Manually set the file
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;
            handleFileUpload({ target: fileInput });
        }
    }
}

// ===== ANALYSIS SIMULATION =====
function startAnalysis(contractType, fileName = 'Kontrak_Kerja_PT_Example.pdf') {
    // Switch to analyzing step
    switchStep('step-analyzing');
    
    // Update contract type in results
    const contractTypeElement = document.getElementById('contractType');
    if (contractTypeElement) {
        const typeNames = {
            'pkwt': 'PKWT',
            'pkwtt': 'PKWTT',
            'freelance': 'Freelance',
            'upload': 'Upload'
        };
        contractTypeElement.textContent = `Kontrak ${typeNames[contractType] || 'PKWT'}`;
    }
    
    // Update file name
    const contractNameElement = document.getElementById('contractName');
    if (contractNameElement) {
        contractNameElement.textContent = fileName;
    }
    
    // Simulate analysis steps
    simulateAnalysis();
}

function simulateAnalysis() {
    const steps = [
        { id: 'analyze-1', delay: 500 },
        { id: 'analyze-2', delay: 1200 },
        { id: 'analyze-3', delay: 2000 },
        { id: 'analyze-4', delay: 2800 }
    ];
    
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    // Animate progress bar
    const progressInterval = setInterval(() => {
        progress += 2;
        if (progressBar) progressBar.style.width = progress + '%';
        if (progressText) progressText.textContent = progress + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            // Wait a bit then show results
            setTimeout(() => switchStep('step-results'), 500);
        }
    }, 50);
    
    // Update step icons
    steps.forEach(step => {
        setTimeout(() => {
            const element = document.getElementById(step.id);
            if (element) {
                const icon = element.querySelector('.check-icon');
                if (icon) {
                    icon.textContent = '✓';
                    icon.style.color = '#10b981';
                }
                element.classList.add('done');
            }
        }, step.delay);
    });
}

// ===== STEP NAVIGATION =====
function switchStep(stepId) {
    // Hide all steps
    const allSteps = document.querySelectorAll('.demo-step');
    allSteps.forEach(step => step.classList.remove('active'));
    
    // Show target step
    const targetStep = document.getElementById(stepId);
    if (targetStep) {
        targetStep.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function resetDemo() {
    // Reset file input
    const fileInput = document.getElementById('fileInput');
    if (fileInput) fileInput.value = '';
    
    // Reset progress
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.textContent = '0%';
    
    // Reset analysis steps
    const analyzeSteps = document.querySelectorAll('.analyzing-step');
    analyzeSteps.forEach(step => {
        const icon = step.querySelector('.check-icon');
        if (icon) {
            icon.textContent = '⏳';
            icon.style.color = '';
        }
        step.classList.remove('done');
    });
    
    // Switch back to upload step
    switchStep('step-upload');
}

// ===== DOWNLOAD HANDLER =====
function handleDownload() {
    showNotification('✓ Laporan PDF berhasil didownload!');
    
    // In a real app, this would generate and download a PDF
    // For demo purposes, we just show a notification
    console.log('Download report requested');
}

// Utility function (if not in main.js)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
