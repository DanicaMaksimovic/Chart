const line = document.querySelector('#lineChart')
const labels = [
    '21maj',
    '22maj',
    '23maj',
    '24maj',
    '25maj',
]
new Chart(line, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
        {
            labels: 'Ponovljeni pregledi',
            data:[1844, 1554, 1273, 1284, 1126],
            borderColor: 'rgba(66, 255, 255, 1)',
        },
        {
            labels: 'Pregledi',
            data: [1199, 1314, 1147, 1403, 1217],
            borderColor: 'rgba(55, 20, 250, 1)',
        }
]
    }
})

const bar = document.querySelector('#barChart')
new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64'],
        datasets: [
        {
            labels: 'Godin',
            data: ['1.7', '43.3', '34.4', '13.6', '5.6', '1.2'],
            borderColor: [
                'rgba(230, 179, 255,1)',
                'rgba(255, 163, 102,1)',
                'rgba(102, 153, 255,1)',
                'rgba(255, 255, 0,1)',
                'rgba(0, 255, 255,1)',
                'rgba(0, 255, 0,1)'
                        ]
        }
        ]
    }
})