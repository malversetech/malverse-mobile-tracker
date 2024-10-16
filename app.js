// Add loading indicator to DOM
const loadingOverlay = document.createElement('div');
loadingOverlay.className = 'loading-overlay';
loadingOverlay.innerHTML = `
    <div class="loading-spinner"></div>
    <div class="loading-text">Loading...</div>
`;
document.body.appendChild(loadingOverlay);

// Add status indicator to DOM
const statusIndicator = document.createElement('div');
statusIndicator.className = 'status-indicator';
document.body.appendChild(statusIndicator);

// Show status message
function showStatus(message, duration = 3000) {
    statusIndicator.textContent = message;
    statusIndicator.classList.add('visible');
    setTimeout(() => {
        statusIndicator.classList.remove('visible');
    }, duration);
}

// Installation handling
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;

    installBtn.addEventListener('click', async () => {
        loadingOverlay.style.display = 'flex';
        
        try {
            await deferredPrompt.prompt();
            const choiceResult = await deferredPrompt.userChoice;
            
            if (choiceResult.outcome === 'accepted') {
                showStatus('Installation successful!');
                console.log('User accepted the A2HS prompt');
            } else {
                showStatus('Installation cancelled');
                console.log('User dismissed the A2HS prompt');
            }
        } catch (error) {
            showStatus('Installation failed');
            console.error('Installation error:', error);
        } finally {
            loadingOverlay.style.display = 'none';
            deferredPrompt = null;
        }
    });
});

// Service Worker registration
if ('serviceWorker' in navigator) {
    loadingOverlay.style.display = 'flex';
    
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker Registered', registration);
            showStatus('App ready for offline use');
        })
        .catch((error) => {
            console.error('Service Worker Registration Failed', error);
            showStatus('Offline support unavailable');
        })
        .finally(() => {
            loadingOverlay.style.display = 'none';
        });
}

// Network status handling
window.addEventListener('online', () => {
    showStatus('Back online');
});

window.addEventListener('offline', () => {
    showStatus('You are offline');
});

// Check if app is installed
window.addEventListener('appinstalled', (evt) => {
    showStatus('App successfully installed');
    installBtn.hidden = true;
});
