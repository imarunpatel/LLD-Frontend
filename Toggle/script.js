document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const status = document.getElementById('status');

    toggleSwitch.addEventListener('change', () => {
        status.textContent = toggleSwitch.checked ? 'ON' : 'OFF'
    })
})