        // Simple completion after 6 seconds
        setTimeout(() => {
            document.querySelector('.sphere').style.display = 'none';
            document.querySelector('.scan-ring').style.display = 'none';
            document.querySelector('.status-text').style.display = 'none';
            document.getElementById('completion').style.display = 'flex';
        }, 6000);
