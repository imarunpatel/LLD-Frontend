document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tab');
    const tabPanels = document.querySelectorAll('.tab-panel')

    tabs.forEach(tab => {
        console.log(tab)
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('active')
                t.setAttribute('aria-selected', 'false')
            })
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
            })

            tab.classList.add('active')
            tab.setAttribute('aria-selected', 'true');
            const panelId = tab.getAttribute('aria-controls');
            document.getElementById(panelId).classList.add('active')
            console.log(panelId)
        })


    })
})