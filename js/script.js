document.addEventListener("DOMContentLoaded", (event) => { 
    document.querySelector(".arrow-box").addEventListener("click", function (e) {
        document.querySelector(".arrow-box").classList.toggle('left-side')
        document.querySelector(".navbar-vertical").classList.toggle("d-none")
    })

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Submitted', 'Pending'],
            datasets: [{
            label: '# of Results by status',
            data: [75, 25],
            borderWidth: 1,
            backgroundColor: [
                '#00CFFF',
                '#49FBFF',
            ],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {  // Corrected from 'plugin' to 'plugins'
            legend: {
                display: true,
                position: 'top',  // Position the legend to the right
                labels: {
                boxWidth: 16, // Set width of the box
                boxHeight: 16, // Set height of the box (available in Chart.js 3.x+)
                usePointStyle: true, // Use point style to apply border-radius
                padding: 20, // Optional: Increase spacing between the legend items
                },
            },
            },
            scales: {
            // y: {
            //   beginAtZero: true
            // }
            }
        }
    });

    const ctxRatio = document.getElementById('ratio');

    new Chart(ctxRatio, {
        type: 'doughnut',
        data: {
            labels: ['Leased', 'Purchased'],
            datasets: [{
            label: 'Buy/ Lease Ratio',
            data: [75, 25],
            borderWidth: 1,
            backgroundColor: [
                '#00CFFF',
                '#49FBFF',
            ],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {  // Corrected from 'plugin' to 'plugins'
            legend: {
                display: true,
                position: 'top',  // Position the legend to the right
                labels: {
                boxWidth: 16, // Set width of the box
                boxHeight: 16, // Set height of the box (available in Chart.js 3.x+)
                usePointStyle: true, // Use point style to apply border-radius
                padding: 20, // Optional: Increase spacing between the legend items
                },
            },
            },
            scales: {
            // y: {
            //   beginAtZero: true
            // }
            }
        }
    });

    const ctx2 = document.getElementById('byScore');

    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Above 160', 'Between 100 - 160', 'Below 100'],
            datasets: [{
            label: '# of Results by score',
            data: [35, 50, 15],
            borderWidth: 1,
            backgroundColor: [
                '#04BE42',
                '#FFB232',
                '#E51A1A'
            ],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {  // Corrected from 'plugin' to 'plugins'
            legend: {
                display: true,
                position: 'top',
                labels: {
                boxWidth: 16, // Set width of the box
                boxHeight: 16, // Set height of the box (available in Chart.js 3.x+)
                usePointStyle: true, // Use point style to apply border-radius
                padding: 20, // Optional: Increase spacing between the legend items
                },  
            },
            },
            scales: {
            // y: {
            //   beginAtZero: true
            // }
            }
        }
    });


    const ctx3 = document.getElementById('byAssessment').getContext('2d');

    new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Assessment A', 'Assessment B', 'Assessment C'], // Labels for each bar
        datasets: [
        {
            label: 'Above 160',
            data: [30, 20, 50], // Values for Segment 1 in each bar
            backgroundColor: '#E51A1A', // Color for Segment 1
            maxBarThickness: 20
        },
        {
            label: 'Between 100 - 160',
            data: [50, 40, 30], // Values for Segment 2 in each bar
            backgroundColor: '#FFB232', // Color for Segment 2
            maxBarThickness: 20
        },
        {
            label: 'Below 100',
            data: [20, 40, 20], // Values for Segment 3 in each bar
            backgroundColor: '#04BE42', // Color for Segment 3
            maxBarThickness: 20
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
        legend: {
            display: true,
            position: 'top', // Position legend to the right
            labels: {
            boxWidth: 16,
            boxHeight: 16,
            borderRadius: 4,
            padding: 20,
            },
        },
        },
        scales: {
        x: {
                stacked: true, // Enable stacking for the x-axis
                barPercentage: 0.2, // Reduce the width of each individual bar (0.5 means 50% of the available space)
                categoryPercentage: 0.2,
        },
        y: {
            stacked: true, // Enable stacking for the y-axis
            beginAtZero: true,
        },
        }
    }
    });

})



