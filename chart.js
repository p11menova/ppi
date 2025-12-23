let trendChart, categoriesChart;

function initCharts(data) {
    console.log('Инициализация графиков...', data);
    
    // Уничтожаем существующие графики если есть
    if (trendChart) {
        trendChart.destroy();
        trendChart = null;
    }
    if (categoriesChart) {
        categoriesChart.destroy();
        categoriesChart = null;
    }
    
    // Инициализируем графики
    initTrendChart(data);
    // Круговая диаграмма категорий перенесена в раздел "Бюджет"
    
    console.log('Графики инициализированы');
}

function initTrendChart(data) {
    const ctx = document.getElementById('trendChart');
    if (!ctx) {
        console.warn('Canvas trendChart не найден');
        return;
    }
    
    // Проверяем, что canvas видим и имеет размер
    const analyticsPage = document.getElementById('analyticsPage');
    if (!analyticsPage || !analyticsPage.classList.contains('active')) {
        console.warn('Страница аналитики не активна, откладываем инициализацию');
        setTimeout(() => initTrendChart(data), 500);
        return;
    }
    
    // Убеждаемся, что canvas имеет размер
    const container = ctx.parentElement;
    if (container && container.offsetHeight === 0) {
        console.warn('Контейнер графика не имеет высоты');
        setTimeout(() => initTrendChart(data), 300);
        return;
    }

    // Генерируем данные за последние 7 дней
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const incomeData = [2500, 3200, 1800, 4200, 3800, 2100, 2900];
    const expenseData = [1500, 2200, 2800, 1900, 3100, 2400, 1800];

    // Уничтожаем предыдущий график если есть
    if (trendChart) {
        try {
            trendChart.destroy();
        } catch (e) {
            console.warn('Ошибка при уничтожении старого графика:', e);
        }
        trendChart = null;
    }

    // Проверяем, что Chart доступен
    if (typeof Chart === 'undefined') {
        console.error('Chart.js не загружен');
        return;
    }

    try {
        trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [
                {
                    label: 'Доходы',
                    data: incomeData,
                    borderColor: '#0EA5E9',
                    backgroundColor: 'rgba(14, 165, 233, 0.2)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#0EA5E9',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: 'Расходы',
                    data: expenseData,
                    borderColor: '#64748B',
                    backgroundColor: 'rgba(100, 116, 139, 0.2)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#64748B',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: {
                            size: 12
                        },
                        color: 'var(--text-primary)'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + new Intl.NumberFormat('ru-RU').format(context.parsed.y) + ' ₽';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false,
                        color: function(context) {
                            if (context.tick && context.tick.value === 0) {
                                return 'rgba(0, 0, 0, 0.1)';
                            }
                            return 'rgba(0, 0, 0, 0.05)';
                        }
                    },
                    ticks: {
                        callback: function(value) {
                            return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
                        },
                        font: {
                            size: 11
                        },
                        padding: 10,
                        color: function() {
                            return getComputedStyle(document.documentElement).getPropertyValue('--text-secondary') || '#6C757D';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        padding: 10,
                        color: function() {
                            return getComputedStyle(document.documentElement).getPropertyValue('--text-secondary') || '#6C757D';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 12,
                            weight: '600'
                        },
                        color: 'var(--text-primary)'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#343A40',
                    bodyColor: '#343A40',
                    borderColor: '#E9ECEF',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${new Intl.NumberFormat('ru-RU').format(context.parsed.y)} ₽`;
                        }
                    }
                }
            }
        }
    });
    } catch (error) {
        console.error('Ошибка создания графика тренда:', error);
    }
}

function initCategoriesChart(data) {
    const ctx = document.getElementById('categoriesChart');
    if (!ctx) {
        console.warn('Canvas categoriesChart не найден');
        return;
    }
    
    // Проверяем, что страница активна
    const analyticsPage = document.getElementById('analyticsPage');
    if (!analyticsPage || !analyticsPage.classList.contains('active')) {
        console.warn('Страница аналитики не активна, откладываем инициализацию');
        setTimeout(() => initCategoriesChart(data), 500);
        return;
    }
    
    // Убеждаемся, что canvas имеет размер
    const container = ctx.parentElement;
    if (container && container.offsetHeight === 0) {
        console.warn('Контейнер графика не имеет высоты');
        setTimeout(() => initCategoriesChart(data), 300);
        return;
    }

    // Рассчитываем расходы по категориям
    const categories = data.categories.filter(c => c.budget > 0);
    const categoryData = categories.map(category => {
        const spent = data.transactions
            .filter(t => t.type === 'expense' && t.category === category.id)
            .reduce((sum, t) => sum + t.amount, 0);
        return spent;
    });

    const categoryLabels = categories.map(c => c.name);
    const categoryColors = categories.map(c => c.color);

    // Уничтожаем предыдущий график если есть
    if (categoriesChart) {
        try {
            categoriesChart.destroy();
        } catch (e) {
            console.warn('Ошибка при уничтожении старого графика:', e);
        }
        categoriesChart = null;
    }

    // Проверяем, что Chart доступен
    if (typeof Chart === 'undefined') {
        console.error('Chart.js не загружен');
        return;
    }

    try {
        categoriesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: categoryLabels,
            datasets: [{
                data: categoryData,
                backgroundColor: categoryColors,
                borderWidth: 0,
                borderRadius: 8,
                spacing: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000
            },
            cutout: '65%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#343A40',
                    bodyColor: '#343A40',
                    borderColor: '#E9ECEF',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
                            return `${context.label}: ${new Intl.NumberFormat('ru-RU').format(value)} ₽ (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    } catch (error) {
        console.error('Ошибка создания графика категорий:', error);
    }
}

// Обновление графиков
function updateCharts(data) {
    if (trendChart) {
        trendChart.update();
    }

    if (categoriesChart) {
        const categories = data.categories.filter(c => c.budget > 0);
        const categoryData = categories.map(category => {
            const spent = data.transactions
                .filter(t => t.type === 'expense' && t.category === category.id)
                .reduce((sum, t) => sum + t.amount, 0);
            return spent;
        });

        categoriesChart.data.datasets[0].data = categoryData;
        categoriesChart.update();
    }
}

// Экспорт функций
window.initCharts = initCharts;
window.updateCharts = updateCharts;