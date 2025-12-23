const FinanceApp = {
    // Конфигурация
    config: {
        currency: 'RUB',
        theme: 'light',
        notifications: true,
        language: 'ru',
        backup: true
    },

    // Данные приложения
    data: {
        user: {
            name: 'Иван Иванов',
            email: 'ivan@example.com',
            avatar: 'ИИ'
        },
        transactions: [
            {
                id: 1,
                type: 'expense',
                amount: 1250,
                category: 'food',
                description: 'Кафе "Уют"',
                date: new Date().toISOString().split('T')[0],
                time: '14:30'
            },
            {
                id: 2,
                type: 'expense',
                amount: 3400,
                category: 'transport',
                description: 'Заправка',
                date: new Date().toISOString().split('T')[0],
                time: '10:15'
            },
            {
                id: 3,
                type: 'income',
                amount: 85000,
                category: 'salary',
                description: 'Зарплата',
                date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
                time: '09:00'
            },
            {
                id: 4,
                type: 'expense',
                amount: 15000,
                category: 'shopping',
                description: 'Одежда',
                date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
                time: '16:45'
            }
        ],
        categories: [
            { id: 'food', name: 'Еда', icon: 'utensils', color: '#64748B', budget: 15000 },
            { id: 'transport', name: 'Транспорт', icon: 'car', color: '#0EA5E9', budget: 8000 },
            { id: 'shopping', name: 'Шоппинг', icon: 'shopping-bag', color: '#475569', budget: 10000 },
            { id: 'entertainment', name: 'Развлечения', icon: 'film', color: '#1E3A8A', budget: 5000 },
            { id: 'health', name: 'Здоровье', icon: 'heart', color: '#1E40AF', budget: 3000 },
            { id: 'education', name: 'Образование', icon: 'graduation-cap', color: '#7DD3FC', budget: 2000 },
            { id: 'salary', name: 'Зарплата', icon: 'money-bill-wave', color: '#0EA5E9', budget: 0 },
            { id: 'freelance', name: 'Фриланс', icon: 'laptop-code', color: '#3B82F6', budget: 0 },
            { id: 'investment', name: 'Инвестиции', icon: 'chart-line', color: '#1E3A8A', budget: 0 }
        ],
        goals: [
            {
                id: 1,
                name: 'Отпуск в Турции',
                target: 150000,
                current: 97500,
                deadline: '2024-06-01',
                color: '#1E3A8A'
            },
            {
                id: 2,
                name: 'Новый ноутбук',
                target: 80000,
                current: 24000,
                deadline: '2024-04-15',
                color: '#3B82F6'
            }
        ],
        budget: {
            monthly: 100000,
            spent: 39220,
            remaining: 60780
        }
    },

    // ... остальной код остается таким же, как в предыдущем app.js ...

    // Функция для обновления цветов в категориях
    updateCategoryColors() {
        // Обновляем цвета категорий в соответствии с банковской палитрой
        this.data.categories = this.data.categories.map(cat => {
            const newColors = {
                'food': '#64748B',
                'transport': '#0EA5E9',
                'shopping': '#475569',
                'entertainment': '#1E3A8A',
                'health': '#1E40AF',
                'education': '#7DD3FC',
                'salary': '#0EA5E9',
                'freelance': '#3B82F6',
                'investment': '#1E3A8A',
                'other': '#ADB5BD'
            };

            return {
                ...cat,
                color: newColors[cat.id] || cat.color
            };
        });
    },
    config: {
        currency: 'RUB',
        theme: 'light',
        notifications: true,
        language: 'ru',
        backup: true
    },

    // Данные приложения
    data: {
        user: {
            name: 'Иван Иванов',
            email: 'ivan@example.com',
            avatar: 'ИИ'
        },
        transactions: [
            {
                id: 1,
                type: 'expense',
                amount: 1250,
                category: 'food',
                description: 'Кафе "Уют"',
                date: new Date().toISOString().split('T')[0],
                time: '14:30'
            },
            {
                id: 2,
                type: 'expense',
                amount: 3400,
                category: 'transport',
                description: 'Заправка',
                date: new Date().toISOString().split('T')[0],
                time: '10:15'
            },
            {
                id: 3,
                type: 'income',
                amount: 85000,
                category: 'salary',
                description: 'Зарплата',
                date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
                time: '09:00'
            },
            {
                id: 4,
                type: 'expense',
                amount: 15000,
                category: 'shopping',
                description: 'Одежда',
                date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
                time: '16:45'
            }
        ],
        categories: [
            { id: 'food', name: 'Еда', icon: 'utensils', color: '#64748B', budget: 15000 },
            { id: 'transport', name: 'Транспорт', icon: 'car', color: '#0EA5E9', budget: 8000 },
            { id: 'shopping', name: 'Шоппинг', icon: 'shopping-bag', color: '#475569', budget: 10000 },
            { id: 'entertainment', name: 'Развлечения', icon: 'film', color: '#1E3A8A', budget: 5000 },
            { id: 'health', name: 'Здоровье', icon: 'heart', color: '#1E40AF', budget: 3000 },
            { id: 'education', name: 'Образование', icon: 'graduation-cap', color: '#7DD3FC', budget: 2000 },
            { id: 'salary', name: 'Зарплата', icon: 'money-bill-wave', color: '#0EA5E9', budget: 0 },
            { id: 'freelance', name: 'Фриланс', icon: 'laptop-code', color: '#3B82F6', budget: 0 },
            { id: 'investment', name: 'Инвестиции', icon: 'chart-line', color: '#1E3A8A', budget: 0 }
        ],
        goals: [
            {
                id: 1,
                name: 'Отпуск в Турции',
                target: 150000,
                current: 97500,
                deadline: '2024-06-01',
                color: '#1E3A8A'
            },
            {
                id: 2,
                name: 'Новый ноутбук',
                target: 80000,
                current: 24000,
                deadline: '2024-04-15',
                color: '#00D4AA'
            }
        ],
        budget: {
            monthly: 100000,
            spent: 39220,
            remaining: 60780
        }
    },

    // Состояние приложения
    state: {
        currentPage: 'home',
        modalOpen: false,
        currentTransactionType: 'expense',
        selectedCategory: null,
        filterActive: false,
        filterSettings: {
            type: 'all',
            category: 'all',
            period: 'month',
            amountFrom: null,
            amountTo: null
        },
        sortOrder: 'date-desc'
    },

    // Инициализация
    init() {
        console.log('🚀 FinFlow запущен!');

        this.setupViewport();
        this.loadData();
        this.setupEventListeners();
        
        // Убеждаемся, что goals - это массив перед инициализацией UI
        if (!Array.isArray(this.data.goals)) {
            this.data.goals = [];
        }
        
        this.initUI();
        this.checkConnection();
        this.setupTheme();
        this.initModals();
        this.setupRippleEffects();

        // Регистрация Service Worker для PWA
        this.registerServiceWorker();
    },
    
    // Инициализация модальных окон
    initModals() {
        // Убеждаемся, что модальные окна скрыты при загрузке
        const modalOverlay = document.getElementById('modalOverlay');
        const filterModalOverlay = document.getElementById('filterModalOverlay');
        
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            modalOverlay.style.display = '';
        }
        
        if (filterModalOverlay) {
            filterModalOverlay.classList.remove('active');
            filterModalOverlay.style.display = '';
        }
        
        // Предотвращаем закрытие при клике внутри модального окна
        const modal = document.getElementById('addTransactionModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
        
        const filterModal = document.getElementById('filterModal');
        if (filterModal) {
            filterModal.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    },

    // Настройка viewport
    setupViewport() {
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
    },

    // Настройка темы
    setupTheme() {
        const savedTheme = localStorage.getItem('finflowTheme');
        if (savedTheme) {
            this.config.theme = savedTheme;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.config.theme = 'dark';
        }

        this.applyTheme();
        this.updateThemeIcon();
    },

    // Регистрация Service Worker
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('Service Worker зарегистрирован:', registration);
                    })
                    .catch(error => {
                        console.log('Ошибка регистрации Service Worker:', error);
                    });
            });
        }
    },

    // Загрузка данных
    loadData() {
        this.showLoader();

        try {
            // Пытаемся загрузить из localStorage
            const savedData = localStorage.getItem('finflowData');
            if (savedData) {
                const parsed = JSON.parse(savedData);
                
                // Правильно объединяем массивы, чтобы не потерять данные
                if (parsed.transactions && Array.isArray(parsed.transactions)) {
                    this.data.transactions = parsed.transactions;
                }
                if (parsed.categories && Array.isArray(parsed.categories)) {
                    this.data.categories = parsed.categories;
                }
                if (parsed.goals && Array.isArray(parsed.goals)) {
                    this.data.goals = parsed.goals;
                }
                if (parsed.user) {
                    this.data.user = { ...this.data.user, ...parsed.user };
                }
                if (parsed.budget) {
                    this.data.budget = { ...this.data.budget, ...parsed.budget };
                }
            }

            const savedConfig = localStorage.getItem('finflowConfig');
            if (savedConfig) {
                this.config = JSON.parse(savedConfig);
            }

            // Убеждаемся, что goals - это массив
            if (!Array.isArray(this.data.goals)) {
                this.data.goals = [];
            }

            this.updateUI();
            this.showToast('Данные загружены', 'Готово к работе!', 'success');

        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
            this.showToast('Ошибка', 'Не удалось загрузить данные', 'error');
        } finally {
            setTimeout(() => this.hideLoader(), 500);
        }
    },

    // Сохранение данных
    saveData() {
        try {
            localStorage.setItem('finflowData', JSON.stringify(this.data));
            localStorage.setItem('finflowConfig', JSON.stringify(this.config));
            localStorage.setItem('finflowTheme', this.config.theme);
        } catch (error) {
            console.error('Ошибка сохранения:', error);
        }
    },

    // Настройка обработчиков событий
    setupEventListeners() {
        // Навигация
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.page;
                this.navigateTo(page);
            });
        });

        // Быстрые действия
        const quickAddIncome = document.getElementById('quickAddIncome');
        if (quickAddIncome) {
            quickAddIncome.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            this.openTransactionModal('income');
        });
        }

        const quickAddExpense = document.getElementById('quickAddExpense');
        if (quickAddExpense) {
            quickAddExpense.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            this.openTransactionModal('expense');
        });
        }

        const quickTransfer = document.getElementById('quickTransfer');
        if (quickTransfer) {
            quickTransfer.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openAddSavingsModal();
            });
        }

        // Клик по аватару открывает профиль
        const profileAvatarClick = document.getElementById('profileAvatarClick');
        if (profileAvatarClick) {
            profileAvatarClick.addEventListener('click', () => {
                this.navigateTo('profile');
            });
        }

        // Переключение темы
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            this.toggleTheme();
        });
        }

        // Поиск
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showToast('Поиск', 'Функция поиска в разработке', 'info');
            });
        }

        // Уведомления
        const notificationsBtn = document.getElementById('notificationsBtn');
        if (notificationsBtn) {
            notificationsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showToast('Уведомления', 'У вас 2 новых уведомления', 'info');
            });
        }

        // Модальные окна - закрытие по клику на крестик
        const closeModalBtn = document.getElementById('closeModal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            this.closeModal();
        });
        }

        // Закрытие по клику на overlay (обработчик добавляется динамически при открытии)
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.state.modalOpen) {
                this.closeModal();
            }
        });

        // Форма транзакции - используем делегирование событий
        document.addEventListener('submit', (e) => {
            if (e.target && e.target.id === 'transactionForm') {
            e.preventDefault();
                e.stopPropagation();
                console.log('Форма отправлена через делегирование');
            this.saveTransaction();
            }
        });
        
        // Также добавляем прямой обработчик на форму для надежности
        const transactionForm = document.getElementById('transactionForm');
        if (transactionForm) {
            transactionForm.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Форма отправлена через прямой обработчик');
                this.saveTransaction();
            });
            
            // Добавляем обработчик на кнопку submit
            const submitBtn = transactionForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                // Удаляем старые обработчики, если есть
                const newSubmitBtn = submitBtn.cloneNode(true);
                submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
                
                newSubmitBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Кнопка сохранения нажата');
                    
                    // Проверяем валидность формы
                    if (transactionForm.checkValidity()) {
                        this.saveTransaction();
                    } else {
                        transactionForm.reportValidity();
                    }
                });
            }
        }

        // Выбор типа транзакции (используем делегирование событий для динамически создаваемых элементов)
        const transactionModal = document.getElementById('addTransactionModal');
        if (transactionModal) {
            transactionModal.addEventListener('click', (e) => {
                const typeOption = e.target.closest('.type-option');
                if (typeOption) {
                    e.preventDefault();
                    e.stopPropagation();
                    const type = typeOption.dataset.type;
                this.setTransactionType(type);
                    
                    // Обновляем активное состояние
                    document.querySelectorAll('.type-option').forEach(opt => {
                        opt.classList.remove('active');
            });
                    typeOption.classList.add('active');
                }
        });
        }

        // Просмотр всех транзакций
        document.getElementById('viewAllTransactions').addEventListener('click', () => {
            this.showAllTransactions();
        });

        // Просмотр категорий
        document.getElementById('viewCategories').addEventListener('click', () => {
            this.navigateTo('budget');
        });

        // Просмотр целей
        document.getElementById('viewGoals').addEventListener('click', () => {
            this.showAllGoals();
        });

        // Добавление новой цели через кнопку
        const addGoalBtn = document.getElementById('addGoalBtn');
        if (addGoalBtn) {
            addGoalBtn.addEventListener('click', (e) => {
            e.preventDefault();
                e.stopPropagation();
                this.openAddGoalModal();
        });
        }


        // Настройки
        document.getElementById('notificationsToggle').addEventListener('change', (e) => {
            this.config.notifications = e.target.checked;
            this.saveData();
        });

        document.getElementById('backupToggle').addEventListener('change', (e) => {
            this.config.backup = e.target.checked;
            this.saveData();
        });

        // Интеграции
        document.getElementById('connectBank').addEventListener('click', () => {
            this.connectBank();
        });

        document.getElementById('exportData').addEventListener('click', () => {
            this.exportData();
        });

        // Выход
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
        });

        // Редактирование профиля
        document.getElementById('editProfileBtn').addEventListener('click', () => {
            this.editProfile();
        });

        // Назад на главную
        document.getElementById('backToHome')?.addEventListener('click', () => {
            this.navigateTo('home');
        });

        document.getElementById('backFromGoal')?.addEventListener('click', () => {
            this.navigateTo('home');
        });

        // Фильтрация
        document.getElementById('filterTransactions')?.addEventListener('click', () => {
            this.openFilterModal();
        });

        // Сортировка
        document.getElementById('sortTransactions')?.addEventListener('click', () => {
            this.toggleSortOrder();
        });

        // Период аналитики
        const analyticsPeriod = document.getElementById('analyticsPeriod');
        if (analyticsPeriod) {
            analyticsPeriod.addEventListener('change', (e) => {
            this.updateAnalytics(e.target.value);
        });
        }

        // Настройки бюджета
        const budgetSettings = document.getElementById('budgetSettings');
        if (budgetSettings) {
            budgetSettings.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showToast('Настройки бюджета', 'Функция в разработке', 'info');
            });
        }

        // Управление лимитами - используем делегирование событий для динамических элементов
        document.addEventListener('click', (e) => {
            if (e.target && (e.target.id === 'manageLimits' || e.target.closest('#manageLimits'))) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Кнопка "Управлять" нажата');
                this.openManageCategoriesModal();
            }
        });

        // Развернуть график
        const expandChart = document.getElementById('expandChart');
        if (expandChart) {
            expandChart.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showToast('График', 'Функция развертывания в разработке', 'info');
            });
        }

        // Форма цели
        const goalForm = document.getElementById('goalForm');
        if (goalForm) {
            goalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveGoal();
            });
        }

        // Выбор цвета цели
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', (e) => {
                document.querySelectorAll('.color-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                e.currentTarget.classList.add('active');
            });
        });

        // Сетевые события
        window.addEventListener('online', () => {
            this.showToast('Соединение восстановлено', 'Синхронизируем данные...', 'success');
        });

        window.addEventListener('offline', () => {
            this.showToast('Нет соединения', 'Работаем в оффлайн-режиме', 'warning');
        });

        // Сохранение при закрытии
        window.addEventListener('beforeunload', () => {
            this.saveData();
        });
    },

    // Инициализация UI
    initUI() {
        this.updateDate();
        this.updateBalance();
        this.renderGoals();
        this.updateProfile();
        this.applyTheme();

        // Инициализация графиков - отложенная инициализация при открытии страницы аналитики
        // Графики будут инициализированы при открытии страницы аналитики
    },

    // Обновление UI
    updateUI() {
        this.updateBalance();
        this.renderGoals();
        this.updateProfile();

        // Обновляем графики
        if (typeof updateCharts === 'function') {
            updateCharts(this.data);
        }
    },

    // Переключение темы
    toggleTheme() {
        this.config.theme = this.config.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.updateThemeIcon();
        this.saveData();

        this.showToast(
            this.config.theme === 'dark' ? 'Темная тема' : 'Светлая тема',
            'Тема изменена',
            'info'
        );
    },

    // Применение темы
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.config.theme);
        document.querySelector('meta[name="theme-color"]').setAttribute('content',
            this.config.theme === 'dark' ? '#0F172A' : '#1E3A8A'
        );
    },

    // Обновление иконки темы
    updateThemeIcon() {
        const icon = document.getElementById('themeIcon');
        if (icon) {
            // Показываем солнце в светлой теме, луну в темной
            icon.className = this.config.theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    },

    // Навигация
    navigateTo(page) {
        // Обновляем активную страницу
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });

        const pageElement = document.getElementById(`${page}Page`);
        if (pageElement) {
            pageElement.classList.add('active');
        }

        // Обновляем навигацию
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === page) {
                item.classList.add('active');
            }
        });

        // Обновляем состояние
        this.state.currentPage = page;

        // Прокручиваем наверх
        if (pageElement) {
            pageElement.scrollTop = 0;
        }

        // Обновляем контент страницы
        this.updatePageContent(page);
    },

    // Обновление контента страницы
    updatePageContent(page) {
        switch(page) {
            case 'home':
                this.updateHomePage();
                break;
            case 'transactions':
                this.renderAllTransactions();
                break;
            case 'budget':
                this.updateBudgetPage();
                break;
            case 'analytics':
                this.updateAnalyticsPage();
                break;
            case 'profile':
                this.updateProfilePage();
                break;
            case 'addGoal':
                this.updateAddGoalPage();
                break;
        }
    },

    // Обновление домашней страницы
    updateHomePage() {
        this.renderGoals();
    },

    // Обновление страницы бюджета
    updateBudgetPage() {
        this.renderBudgetCategories();
        this.setupBudgetPageListeners();
        this.initBudgetChart();
    },

    // Инициализация графика категорий для бюджета
    initBudgetChart() {
        const ctx = document.getElementById('budgetCategoriesChart');
        if (!ctx) return;

        const budgetPage = document.getElementById('budgetPage');
        if (!budgetPage || !budgetPage.classList.contains('active')) {
            setTimeout(() => this.initBudgetChart(), 300);
            return;
        }

        // Уничтожаем предыдущий график если есть
        if (window.budgetCategoriesChart) {
            try {
                window.budgetCategoriesChart.destroy();
            } catch (e) {
                console.warn('Ошибка при уничтожении старого графика:', e);
            }
        }

        if (typeof Chart === 'undefined') {
            console.error('Chart.js не загружен');
            return;
        }

        // Получаем данные по категориям
        const categoriesWithSpent = this.data.categories
            .filter(c => c.budget > 0)
            .map(cat => {
                const spent = this.calculateCategorySpent(cat.id);
                return {
                    name: cat.name,
                    spent: spent,
                    color: cat.color
                };
            })
            .filter(c => c.spent > 0);

        if (categoriesWithSpent.length === 0) {
            ctx.parentElement.innerHTML = '<div style="text-align: center; padding: var(--space-xl); color: var(--text-secondary);">Нет данных для отображения</div>';
            return;
        }

        try {
            window.budgetCategoriesChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: categoriesWithSpent.map(c => c.name),
                    datasets: [{
                        data: categoriesWithSpent.map(c => c.spent),
                        backgroundColor: categoriesWithSpent.map(c => c.color),
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                usePointStyle: true,
                                font: {
                                    size: 12
                                },
                                color: 'var(--text-primary)'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = ((context.parsed / total) * 100).toFixed(1);
                                    return `${context.label}: ${this.formatCurrency(context.parsed)} (${percentage}%)`;
                                }
                            }
                        }
                    },
                    cutout: '65%',
                    animation: {
                        animateRotate: true,
                        animateScale: true
                    }
                }
            });
        } catch (error) {
            console.error('Ошибка создания графика бюджета:', error);
        }
    },

    // Настройка обработчиков страницы бюджета
    setupBudgetPageListeners() {
        const manageLimits = document.getElementById('manageLimits');
        if (manageLimits) {
            // Удаляем старый обработчик, если есть
            const newManageLimits = manageLimits.cloneNode(true);
            manageLimits.parentNode.replaceChild(newManageLimits, manageLimits);
            
            // Добавляем новый обработчик
            newManageLimits.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Кнопка "Управлять" нажата (локальный обработчик)');
                this.openManageCategoriesModal();
            });
        } else {
            console.warn('Кнопка manageLimits не найдена');
        }
    },

    // Обновление страницы аналитики
    updateAnalyticsPage() {
        this.updateAnalytics();
        
        // Инициализируем графики при открытии страницы аналитики
        const initGraphs = () => {
            const analyticsPage = document.getElementById('analyticsPage');
            
            // Проверяем, что страница активна
            if (!analyticsPage || !analyticsPage.classList.contains('active')) {
                console.log('Страница аналитики не активна');
                return false;
            }
            
            const trendChartEl = document.getElementById('trendChart');
            
            if (!trendChartEl) {
                console.warn('Canvas элемент trendChart не найден');
                return false;
            }
            
            // Проверяем, что Chart.js загружен
            if (typeof Chart === 'undefined') {
                console.error('Chart.js не загружен');
                return false;
            }
            
            // Инициализируем графики
            if (typeof window.initCharts === 'function') {
                try {
                    window.initCharts(this.data);
                    console.log('Графики инициализированы успешно');
                    return true;
                } catch (error) {
                    console.error('Ошибка инициализации графиков:', error);
                    return false;
                }
            } else {
                console.warn('Функция initCharts не найдена');
                return false;
            }
        };
        
        // Пробуем инициализировать с задержками для надежности
        let attempts = 0;
        const maxAttempts = 5;
        
        const tryInit = () => {
            attempts++;
            if (initGraphs()) {
                return; // Успешно инициализировано
            }
            
            if (attempts < maxAttempts) {
                setTimeout(tryInit, 300);
            } else {
                console.error('Не удалось инициализировать графики после', maxAttempts, 'попыток');
            }
        };
        
        // Запускаем инициализацию сразу и с задержкой для надежности
        tryInit();
        setTimeout(tryInit, 500);
    },

    // Обновление страницы профиля
    updateProfilePage() {
        this.updateProfile();
    },

    // Обновление страницы добавления цели
    updateAddGoalPage() {
        this.setupGoalForm();
    },

    // Обновление даты
    updateDate() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const dateString = now.toLocaleDateString('ru-RU', options);
        const today = dateString.charAt(0).toUpperCase() + dateString.slice(1);
    },

    // Обновление баланса
    updateBalance() {
        const income = this.calculateTotalIncome();
        const expense = this.calculateTotalExpense();
        const savings = this.calculateTotalSavings();
        const balance = income - expense;

        // Обновляем DOM
        const totalBalanceEl = document.getElementById('totalBalance');
        const incomeTotalEl = document.getElementById('incomeTotal');
        const expenseTotalEl = document.getElementById('expenseTotal');
        const savingsTotalEl = document.getElementById('savingsTotal');

        if (totalBalanceEl) totalBalanceEl.textContent = this.formatCurrency(balance);
        if (incomeTotalEl) incomeTotalEl.textContent = this.formatCurrency(income);
        if (expenseTotalEl) expenseTotalEl.textContent = this.formatCurrency(expense);
        if (savingsTotalEl) savingsTotalEl.textContent = this.formatCurrency(savings);
    },

    // Обновление совета
    updateTip() {
        const tips = [
            '💰 Как стать богаче: Откладывайте минимум 20% от каждого дохода. Богатство приходит не от больших доходов, а от умения сохранять.',
            '🚀 Инвестируйте в себя! Образование и навыки - это лучшие активы, которые никто не сможет у вас отнять.',
            '💎 Правило 50/30/20: 50% на нужды, 30% на желания, 20% на сбережения. Следуйте этому правилу и станете богаче.',
            '📈 Создайте несколько источников дохода. Богатые люди не полагаются на одну зарплату - они создают пассивный доход.',
            '🎯 Ставьте финансовые цели! Четкие цели помогают накапливать богатство быстрее. Начните с малого и увеличивайте.',
            '💪 Контролируйте каждую копейку. Богатство строится не на больших суммах, а на дисциплине и регулярности.',
            '🌟 Инвестируйте разумно. Не храните все деньги под матрасом - пусть они работают на вас через инвестиции.',
            '🔥 Откажитесь от импульсных покупок. Богатство - это не то, что вы тратите, а то, что вы сохраняете и приумножаете.',
            '💼 Создайте финансовую подушку на 6 месяцев расходов. Это ваш фундамент для смелых финансовых решений.',
            '⚡ Автоматизируйте сбережения. Настройте автоматический перевод 20% на отдельный счет - и богатство будет расти само.',
            '🎓 Изучайте финансовую грамотность. Знания о деньгах - это инвестиция, которая окупается всю жизнь.',
            '💎 Покупайте активы, а не пассивы. Активы приносят деньги, пассивы их забирают. Различайте их!',
            '💵 Как стать богаче: Начните с малого. Даже 1000₽ в месяц, инвестированные под 10% годовых, через 20 лет превратятся в 760 000₽!',
            '🎯 Богатство = Доходы - Расходы. Увеличивайте разницу, и станете богаче. Это простое уравнение успеха!',
            '📊 Ведите учет всех трат. Знание - сила! Когда вы видите, куда уходят деньги, вы можете их контролировать и стать богаче.',
            '💡 Как стать богаче: Платите себе первым. Сначала отложите 20%, потом тратьте остальное. Это изменит вашу жизнь!',
            '🏆 Богатые люди думают о долгосрочной перспективе. Инвестируйте в будущее, а не тратьте на сиюминутные удовольствия.',
            '💪 Как стать богаче: Увеличьте свой доход на 10% или сократите расходы на 10%. Оба способа работают одинаково хорошо!',
            '🌟 Создайте план богатства. Запишите, сколько хотите накопить за год, и разбейте на месячные цели. Это работает!',
            '🔥 Как стать богаче: Окружите себя финансово грамотными людьми. Вы станете средним из 5 человек, с которыми общаетесь.',
            '💼 Богатство - это не количество денег, а свобода выбора. Копите не ради цифр, а ради свободы жить так, как хотите.',
            '⚡ Как стать богаче: Реинвестируйте прибыль. Не тратьте все заработанное - пусть деньги работают на вас снова и снова.',
            '🎓 Изучайте истории успеха богатых людей. Учитесь на их опыте, но создавайте свой путь к богатству.',
            '💎 Как стать богаче: Диверсифицируйте доходы. Не кладите все яйца в одну корзину - создайте несколько источников.',
            '📈 Богатство растет экспоненциально. Начните сегодня, и через 10 лет вы удивитесь, как много накопили!',
            '🎯 Как стать богаче: Живите ниже своих возможностей. Разница между доходами и расходами - это ваш путь к богатству.',
            '💪 Богатые люди инвестируют в знания. Каждый рубль, потраченный на обучение, вернется сторицей.',
            '🌟 Как стать богаче: Автоматизируйте инвестиции. Настройте автоплатежи - и богатство будет расти без вашего участия.',
            '🔥 Богатство - это привычка. Формируйте правильные финансовые привычки каждый день, и станете богаче.',
            '💼 Как стать богаче: Отслеживайте свой прогресс. Ведите учет накоплений и празднуйте каждую маленькую победу!',
            '⚡ Богатые люди покупают время. Они платят за то, что освобождает их время для создания большего дохода.',
            '🎓 Как стать богаче: Читайте книги о финансах. Каждая прочитанная книга - это шаг к финансовой свободе.',
            '💎 Богатство начинается с мышления. Думайте как богатый человек: фокусируйтесь на возможностях, а не на проблемах.',
            '📊 Как стать богаче: Анализируйте каждую крупную покупку. Спросите себя: "Это актив или пассив?" Выбирайте активы!',
            '🎯 Богатые люди не боятся ошибок. Они учатся на них и становятся еще богаче. Не бойтесь инвестировать в себя!',
            '💪 Как стать богаче: Создайте систему, а не цели. Система сбережений работает лучше, чем разовые попытки.',
            '🌟 Богатство - это марафон, а не спринт. Будьте терпеливы, последовательны, и вы станете богаче.',
            '🔥 Как стать богаче: Оптимизируйте налоги. Изучите налоговые льготы и используйте их для увеличения накоплений.',
            '💼 Богатые люди инвестируют в недвижимость, акции, бизнес. Начните с малого, но начните сегодня!',
            '⚡ Как стать богаче: Создайте резервный фонд. 6 месяцев расходов в резерве дадут вам свободу для смелых решений.',
            '🎓 Богатство = Время × Деньги. Увеличьте любой из факторов, и станете богаче. Начните с того, что проще!',
            '💎 Как стать богаче: Окружите себя успешными людьми. Их энергия и знания помогут вам стать богаче.',
            '📈 Богатые люди думают о процентах, а не о рублях. 10% от 100 000₽ лучше, чем 1000₽ от 10 000₽.',
            '🎯 Как стать богаче: Создайте пассивный доход. Пусть деньги работают на вас, пока вы спите!',
            '💪 Богатство - это выбор. Выбирайте инвестиции вместо трат, обучение вместо развлечений, будущее вместо настоящего.'
        ];

        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        const tipText = document.getElementById('tipText');
        if (tipText) {
            tipText.textContent = randomTip;
        }
    },

    // Расчет доходов
    calculateTotalIncome() {
        return this.data.transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);
    },

    // Расчет расходов
    calculateTotalExpense() {
        return this.data.transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
    },

    // Расчет сбережений
    calculateTotalSavings() {
        // Суммируем накопления из целей
        const goalsSavings = this.data.goals.reduce((sum, g) => sum + g.current, 0);
        
        // Суммируем транзакции типа savings
        const savingsTransactions = this.data.transactions
            .filter(t => t.type === 'savings')
            .reduce((sum, t) => sum + t.amount, 0);
        
        return goalsSavings + savingsTransactions;
    },

    // Рендер транзакций
    renderTransactions() {
        const container = document.getElementById('recentTransactions');
        if (!container) return;

        const recentTransactions = this.data.transactions
            .sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time))
            .slice(0, 5);

        if (recentTransactions.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-exchange-alt" style="font-size: 48px; color: var(--gray); margin-bottom: var(--space);"></i>
                    <div style="font-weight: 600; margin-bottom: var(--space-xs); color: var(--dark);">
                        Нет транзакций
                    </div>
                    <div style="color: var(--gray); font-size: var(--font-size-sm);">
                        Добавьте первую операцию
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = recentTransactions.map(transaction => {
            const category = this.data.categories.find(c => c.id === transaction.category);
            const icon = category?.icon || 'question-circle';
            const name = category?.name || 'Другое';
            const color = category?.color || '#94A3B8';

            return `
                <div class="transaction-item ${transaction.type}" data-id="${transaction.id}">
                    <div class="transaction-left">
                        <div class="transaction-icon" style="background: ${color};">
                            <i class="fas fa-${icon}"></i>
                        </div>
                        <div class="transaction-info">
                            <div class="transaction-name">${transaction.description}</div>
                            <div class="transaction-meta">
                                <span class="transaction-category">${name}</span>
                                <span class="transaction-date">${this.formatDate(transaction.date)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="transaction-right">
                        <div class="transaction-amount ${transaction.type === 'income' ? 'amount-income' : 'amount-expense'}">
                            ${transaction.type === 'income' ? '+' : '-'}${this.formatCurrency(transaction.amount, false)}
                        </div>
                        <div class="transaction-time">${transaction.time}</div>
                    </div>
                </div>
            `;
        }).join('');

        // Добавляем обработчики кликов
        container.querySelectorAll('.transaction-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id);
                this.editTransaction(id);
            });
        });
    },

    // Рендер категорий
    renderCategories() {
        const container = document.getElementById('categoriesPreview');
        if (!container) return;

        const topCategories = this.data.categories
            .filter(c => c.budget > 0)
            .slice(0, 4);

        if (topCategories.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="text-align: center; padding: var(--space-xl); color: var(--gray);">
                    <i class="fas fa-tags" style="font-size: 48px; margin-bottom: var(--space);"></i>
                    <div style="font-weight: 600; margin-bottom: var(--space-xs); color: var(--dark);">
                        Нет категорий
                    </div>
                    <div style="font-size: var(--font-size-sm);">
                        Добавьте категории в настройках бюджета
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = topCategories.map(category => {
            const spent = this.calculateCategorySpent(category.id);
            const percent = Math.min((spent / category.budget) * 100, 100);

            return `
                <div class="category-preview" data-category="${category.id}">
                    <div class="category-header">
                        <div class="category-icon" style="background: ${category.color};">
                            <i class="fas fa-${category.icon}"></i>
                        </div>
                        <div class="category-name">${category.name}</div>
                    </div>
                    <div class="category-amount">${this.formatCurrency(spent)}</div>
                    <div class="category-progress">
                        <div class="category-used">из ${this.formatCurrency(category.budget)}</div>
                        <div class="category-percent">${Math.round(percent)}%</div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percent}%; background: ${category.color};"></div>
                    </div>
                </div>
            `;
        }).join('');
    },

    // Рендер целей
    renderGoals() {
        const container = document.getElementById('goalsPreview');
        if (!container) return;

        // Убеждаемся, что goals - это массив
        if (!Array.isArray(this.data.goals)) {
            this.data.goals = [];
        }

        console.log('renderGoals: текущие цели:', this.data.goals);

        // Показываем все цели, а не только первые 2
        const activeGoals = this.data.goals
            .filter(g => g && g.current < g.target);
        
        console.log('renderGoals: активные цели для отображения:', activeGoals);

        if (activeGoals.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="text-align: center; padding: var(--space-xl); color: var(--gray);">
                    <i class="fas fa-bullseye" style="font-size: 48px; margin-bottom: var(--space);"></i>
                    <div style="font-weight: 600; margin-bottom: var(--space-xs); color: var(--dark);">
                        Нет целей
                    </div>
                    <div style="font-size: var(--font-size-sm);">
                        Создайте первую цель для накоплений
                    </div>
                    <button class="btn btn-outline btn-sm mt-3" id="createFirstGoal">
                        <i class="fas fa-plus"></i>
                        Создать цель
                    </button>
                </div>
            `;

            document.getElementById('createFirstGoal')?.addEventListener('click', () => {
                this.navigateTo('addGoal');
            });

            return;
        }

        container.innerHTML = activeGoals.map(goal => {
            const percent = Math.min((goal.current / goal.target) * 100, 100);
            const remaining = goal.target - goal.current;
            const deadline = goal.deadline ? this.formatDate(goal.deadline) : 'Без срока';

            return `
                <div class="goal-preview" data-goal="${goal.id}">
                    <div class="goal-header">
                        <div class="goal-info">
                            <div class="goal-name">${goal.name}</div>
                            <div class="goal-target">Цель: ${this.formatCurrency(goal.target)}</div>
                        </div>
                        <div class="goal-progress">${Math.round(percent)}%</div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percent}%; background: ${goal.color};"></div>
                    </div>
                    <div class="goal-stats">
                        <div class="goal-saved">Накоплено: ${this.formatCurrency(goal.current)}</div>
                        <div class="goal-remaining">Осталось: ${this.formatCurrency(remaining)}</div>
                    </div>
                    <div style="font-size: var(--font-size-xs); color: var(--gray); margin-top: var(--space-sm);">
                        Срок: ${deadline}
                    </div>
                </div>
            `;
        }).join('');

        // Добавляем обработчики кликов
        container.querySelectorAll('.goal-preview').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.goal);
                this.showGoalDetails(id);
            });
        });
    },

    // Обновление профиля
    updateProfile() {
        const user = this.data.user;
        const userNameEl = document.getElementById('userName');
        const userEmailEl = document.getElementById('userEmail');
        const userAvatarEl = document.getElementById('userAvatar');
        const userNameSmallEl = document.getElementById('userNameSmall');
        const userAvatarSmallEl = document.getElementById('userAvatarSmall');

        if (userNameEl) userNameEl.textContent = user.name;
        if (userEmailEl) userEmailEl.textContent = user.email;
        if (userAvatarEl) userAvatarEl.textContent = user.avatar;
        if (userNameSmallEl) userNameSmallEl.textContent = user.name.split(' ')[0];
        if (userAvatarSmallEl) userAvatarSmallEl.textContent = user.avatar;
    },

    // Открытие модального окна транзакции
    openTransactionModal(type = 'expense') {
        this.state.currentTransactionType = type;

        // Устанавливаем активный тип
        document.querySelectorAll('.type-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.type === type) {
                option.classList.add('active');
            }
        });

        // Сбрасываем форму
        const form = document.getElementById('transactionForm');
        if (form) {
        form.reset();
        }

        // Устанавливаем текущую дату
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('date');
        if (dateInput) {
            dateInput.value = today;
        }

        // Заполняем категории
        this.renderCategoryOptions(type);

        // Показываем модальное окно
        const modalOverlay = document.getElementById('modalOverlay');
        const modal = document.getElementById('addTransactionModal');
        
        if (!modalOverlay || !modal) {
            console.error('Модальное окно не найдено');
            return;
        }
        
        // Убираем inline стили, если они есть
        modalOverlay.style.display = '';
        modal.style.display = '';
        
        // Добавляем класс для показа
        modalOverlay.classList.add('active');
        this.state.modalOpen = true;

        // Добавляем обработчик закрытия по клику на overlay
        const handleOverlayClick = (e) => {
            if (e.target === modalOverlay) {
                this.closeModal();
                modalOverlay.removeEventListener('click', handleOverlayClick);
            }
        };
        modalOverlay.addEventListener('click', handleOverlayClick);

        // Фокус на поле суммы после анимации
        setTimeout(() => {
            const amountInput = document.getElementById('amount');
            if (amountInput) {
                amountInput.focus();
            }
        }, 300);
    },

    // Рендер категорий для выбора
    renderCategoryOptions(type) {
        const container = document.getElementById('categoriesGrid');
        if (!container) return;

        let categories = [];

        if (type === 'income') {
            categories = this.data.categories.filter(c =>
                ['salary', 'freelance', 'investment'].includes(c.id)
            );
            // Добавляем категорию "Другое" для доходов
            categories.push({
                id: 'other_income',
                name: 'Другое',
                icon: 'ellipsis-h',
                color: '#94A3B8'
            });
        } else if (type === 'expense') {
            // Стандартные категории
            const standardCategories = this.data.categories.filter(c =>
                ['food', 'transport', 'shopping', 'entertainment', 'health', 'education'].includes(c.id)
            );
            categories = [...standardCategories];
            
            // Добавляем пользовательские категории
            const customCategories = this.data.categories.filter(c => c.id.startsWith('custom_'));
            categories = [...categories, ...customCategories];
            
            // Добавляем категорию "Другое" для расходов
            categories.push({
                id: 'other',
                name: 'Другое',
                icon: 'ellipsis-h',
                color: '#94A3B8'
            });
            // Добавляем кнопку для создания своей категории
            categories.push({
                id: 'custom_category',
                name: '+ Создать категорию',
                icon: 'plus-circle',
                color: '#1E3A8A',
                isCustom: true
            });
        } else {
            categories = [{
                id: 'transfer',
                name: 'Перевод',
                icon: 'exchange-alt',
                color: '#1E3A8A'
            }];
        }

        if (categories.length === 0) {
            categories = [{
                id: 'other',
                name: 'Другое',
                icon: 'ellipsis-h',
                color: '#94A3B8'
            }];
        }

        const standardCategories = ['food', 'transport', 'shopping', 'entertainment', 'health', 'education', 'other', 'other_income'];
        
        container.innerHTML = categories.map(category => {
            const isUserCategory = category.id.startsWith('custom_');
            const isStandard = standardCategories.includes(category.id);
            const canDelete = isUserCategory && !category.isCustom && !isStandard;
            
            return `
                <div class="category-option" data-category="${category.id}" data-custom="${category.isCustom || false}" data-can-delete="${canDelete}" style="position: relative;">
                <div class="category-option-icon" style="background: ${category.color};">
                    <i class="fas fa-${category.icon}"></i>
                </div>
                <div class="category-option-name">${category.name}</div>
                    ${canDelete ? `
                        <button class="category-delete-btn" onclick="event.stopPropagation(); FinanceApp.deleteCategoryFromList('${category.id}');" title="Удалить категорию">
                            <i class="fas fa-times"></i>
                        </button>
                    ` : ''}
            </div>
            `;
        }).join('');

        // Выбираем первую категорию
        const firstOption = container.querySelector('.category-option');
        if (firstOption) {
            firstOption.classList.add('active');
            this.state.selectedCategory = firstOption.dataset.category;
        }

        // Добавляем обработчики выбора с улучшенной обратной связью
        container.querySelectorAll('.category-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Проверяем, не является ли это кнопкой создания своей категории
                if (option.dataset.custom === 'true') {
                    this.openCreateCategoryModal();
                    return;
                }
                
                // Убираем активное состояние у всех
                container.querySelectorAll('.category-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                
                // Добавляем активное состояние выбранной категории
                option.classList.add('active');
                this.state.selectedCategory = option.dataset.category;
            });
        });
    },

    // Установка типа транзакции
    setTransactionType(type) {
        this.state.currentTransactionType = type;
        this.renderCategoryOptions(type);
        
        // Обновляем активное состояние типа
        document.querySelectorAll('.type-option').forEach(opt => {
            opt.classList.remove('active');
        });
        const activeTypeOption = document.querySelector(`.type-option[data-type="${type}"]`);
        if (activeTypeOption) {
            activeTypeOption.classList.add('active');
        }
    },

    // Сохранение транзакции
    saveTransaction() {
        console.log('saveTransaction вызвана');
        
        const amountInput = document.getElementById('amount');
        const descriptionInput = document.getElementById('description');
        const dateInput = document.getElementById('date');
        const recurringInput = document.getElementById('recurring');
        
        if (!amountInput || !dateInput) {
            console.error('Не найдены обязательные поля формы');
            this.showToast('Ошибка', 'Форма не найдена', 'error');
            return;
        }
        
        const amount = parseFloat(amountInput.value);
        const description = descriptionInput ? descriptionInput.value.trim() : '';
        const date = dateInput.value;
        const isRecurring = recurringInput ? recurringInput.checked : false;

        // Валидация
        if (!amount || amount <= 0 || isNaN(amount)) {
            this.showToast('Ошибка', 'Введите корректную сумму', 'error');
            amountInput.focus();
            return;
        }

        if (!date) {
            this.showToast('Ошибка', 'Выберите дату', 'error');
            dateInput.focus();
            return;
        }
        
        // Проверяем, что выбран тип транзакции
        if (!this.state.currentTransactionType) {
            this.showToast('Ошибка', 'Выберите тип операции', 'error');
            return;
        }
        
        // Проверяем, что выбрана категория
        if (!this.state.selectedCategory) {
            this.showToast('Ошибка', 'Выберите категорию', 'error');
            return;
        }

        // Создаем транзакцию
        const transaction = {
            id: Date.now(),
            type: this.state.currentTransactionType,
            amount: amount,
            category: this.state.selectedCategory || 'other',
            description: description,
            date: date,
            time: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            }),
            isRecurring: isRecurring,
            createdAt: new Date().toISOString()
        };

        // Добавляем в данные
        this.data.transactions.unshift(transaction);

        // Обновляем баланс и бюджет
        this.updateBalance();
        this.updateBudgetProgress();

        // Сохраняем
        this.saveData();

        // Обновляем UI
        this.updateUI();

        // Закрываем модальное окно
        this.closeModal();

        // Показываем уведомление
        this.showToast('Успех', 'Транзакция добавлена', 'success');
    },

    // Редактирование транзакции
    editTransaction(id) {
        const transaction = this.data.transactions.find(t => t.id === id);
        if (!transaction) return;

        this.openTransactionModal(transaction.type);

        // Заполняем форму данными транзакции
        setTimeout(() => {
            document.getElementById('amount').value = transaction.amount;
            document.getElementById('description').value = transaction.description;
            document.getElementById('date').value = transaction.date;

            // Выбираем категорию
            const categoryOption = document.querySelector(`.category-option[data-category="${transaction.category}"]`);
            if (categoryOption) {
                document.querySelectorAll('.category-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                categoryOption.classList.add('active');
                this.state.selectedCategory = transaction.category;
            }
        }, 100);
    },

    // Показать все транзакции
    showAllTransactions() {
        this.navigateTo('transactions');
        this.renderAllTransactions();
    },

    // Рендер всех транзакций
    renderAllTransactions() {
        const container = document.getElementById('allTransactions');
        if (!container) return;

        // Фильтрация транзакций
        let filteredTransactions = [...this.data.transactions];

        if (this.state.filterActive) {
            filteredTransactions = this.applyFilters(filteredTransactions);
        }

        // Сортировка транзакций
        filteredTransactions = this.applySorting(filteredTransactions);

        if (filteredTransactions.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="text-align: center; padding: var(--space-2xl); color: var(--gray);">
                    <i class="fas fa-exchange-alt" style="font-size: 64px; margin-bottom: var(--space); opacity: 0.3;"></i>
                    <div style="font-size: var(--font-size-lg); font-weight: 600; margin-bottom: var(--space); color: var(--dark);">
                        ${this.state.filterActive ? 'Нет транзакций по фильтру' : 'Нет транзакций'}
                    </div>
                    <div style="margin-bottom: var(--space-xl); color: var(--gray);">
                        ${this.state.filterActive ? 'Попробуйте изменить условия фильтра' : 'Добавьте первую операцию'}
                    </div>
                    <button class="btn btn-primary" id="addFirstTransaction">
                        <i class="fas fa-plus"></i>
                        ${this.state.filterActive ? 'Сбросить фильтры' : 'Добавить операцию'}
                    </button>
                </div>
            `;

            document.getElementById('addFirstTransaction')?.addEventListener('click', () => {
                if (this.state.filterActive) {
                    this.resetFilters();
                } else {
                    this.openTransactionModal();
                }
            });

            return;
        }

        // Группируем по датам
        const grouped = {};
        filteredTransactions.forEach(transaction => {
            const date = transaction.date;
            if (!grouped[date]) {
                grouped[date] = [];
            }
            grouped[date].push(transaction);
        });

        container.innerHTML = Object.entries(grouped).map(([date, transactions]) => {
            const dateObj = new Date(date);
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);

            let dateLabel = this.formatDate(date);
            if (date === today.toISOString().split('T')[0]) {
                dateLabel = 'Сегодня';
            } else if (date === yesterday.toISOString().split('T')[0]) {
                dateLabel = 'Вчера';
            }

            return `
                <div class="transactions-group">
                    <div class="group-header">
                        <div class="group-date">${dateLabel}</div>
                        <div class="group-total">
                            ${this.formatCurrency(
                                transactions.reduce((sum, t) =>
                                    t.type === 'income' ? sum + t.amount : sum - t.amount, 0
                                )
                            )}
                        </div>
                    </div>
                    <div class="transactions-list">
                        ${transactions.map(transaction => {
                            const category = this.data.categories.find(c => c.id === transaction.category);
                            const icon = category?.icon || 'question-circle';
                            const name = category?.name || 'Другое';
                            const color = category?.color || '#94A3B8';

                            return `
                                <div class="transaction-item ${transaction.type}" data-id="${transaction.id}">
                                    <div class="transaction-left">
                                        <div class="transaction-icon" style="background: ${color};">
                                            <i class="fas fa-${icon}"></i>
                                        </div>
                                        <div class="transaction-info">
                                            <div class="transaction-name">${transaction.description}</div>
                                            <div class="transaction-meta">
                                                <span class="transaction-category">${name}</span>
                                                <span class="transaction-time">${transaction.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="transaction-right">
                                        <div class="transaction-amount ${transaction.type === 'income' ? 'amount-income' : 'amount-expense'}">
                                            ${transaction.type === 'income' ? '+' : '-'}${this.formatCurrency(transaction.amount, false)}
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('');

        // Добавляем обработчики кликов
        container.querySelectorAll('.transaction-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id);
                this.editTransaction(id);
            });
        });
    },

    // Применение фильтров
    applyFilters(transactions) {
        let filtered = [...transactions];
        const filter = this.state.filterSettings;

        // Фильтр по типу
        if (filter.type !== 'all') {
            filtered = filtered.filter(t => t.type === filter.type);
        }

        // Фильтр по категории
        if (filter.category !== 'all') {
            filtered = filtered.filter(t => t.category === filter.category);
        }

        // Фильтр по периоду
        if (filter.period !== 'all') {
            const now = new Date();
            let startDate;

            switch(filter.period) {
                case 'today':
                    startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                    break;
                case 'week':
                    const day = now.getDay();
                    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
                    startDate = new Date(now.getFullYear(), now.getMonth(), diff);
                    break;
                case 'month':
                    startDate = new Date(now.getFullYear(), now.getMonth(), 1);
                    break;
                case 'year':
                    startDate = new Date(now.getFullYear(), 0, 1);
                    break;
            }

            filtered = filtered.filter(t => {
                const date = new Date(t.date);
                return date >= startDate;
            });
        }

        // Фильтр по сумме
        if (filter.amountFrom) {
            filtered = filtered.filter(t => t.amount >= parseFloat(filter.amountFrom));
        }

        if (filter.amountTo) {
            filtered = filtered.filter(t => t.amount <= parseFloat(filter.amountTo));
        }

        return filtered;
    },

    // Применение сортировки
    applySorting(transactions) {
        const sorted = [...transactions];

        switch(this.state.sortOrder) {
            case 'date-desc':
                return sorted.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
            case 'date-asc':
                return sorted.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
            case 'amount-desc':
                return sorted.sort((a, b) => b.amount - a.amount);
            case 'amount-asc':
                return sorted.sort((a, b) => a.amount - b.amount);
            default:
                return sorted;
        }
    },

    // Переключение порядка сортировки
    toggleSortOrder() {
        const orders = ['date-desc', 'date-asc', 'amount-desc', 'amount-asc'];
        const currentIndex = orders.indexOf(this.state.sortOrder);
        this.state.sortOrder = orders[(currentIndex + 1) % orders.length];

        this.renderAllTransactions();

        const sortLabels = {
            'date-desc': 'По дате (сначала новые)',
            'date-asc': 'По дате (сначала старые)',
            'amount-desc': 'По сумме (сначала большие)',
            'amount-asc': 'По сумме (сначала малые)'
        };

        this.showToast('Сортировка', sortLabels[this.state.sortOrder], 'info');
    },

    // Открытие модального окна фильтрации
    openFilterModal() {
        this.populateFilterCategories();
        this.setFilterValues();

        const filterModalOverlay = document.getElementById('filterModalOverlay');
        const filterModal = document.getElementById('filterModal');
        
        if (!filterModalOverlay || !filterModal) {
            console.error('Модальное окно фильтрации не найдено');
            return;
        }
        
        // Убираем inline стили
        filterModalOverlay.style.display = '';
        filterModal.style.display = '';
        
        // Показываем модальное окно
        filterModalOverlay.classList.add('active');

        // Обработчики для формы фильтрации
        const filterForm = document.getElementById('filterForm');
        if (filterForm) {
            filterForm.onsubmit = (e) => {
            e.preventDefault();
            this.applyFilterSettings();
        };
        }

        const resetFiltersBtn = document.getElementById('resetFilters');
        if (resetFiltersBtn) {
            resetFiltersBtn.onclick = () => {
            this.resetFilters();
        };
        }

        const closeFilterBtn = document.getElementById('closeFilterModal');
        if (closeFilterBtn) {
            closeFilterBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
            this.closeFilterModal();
        };
        }
        
        // Закрытие по клику на overlay
        const handleOverlayClick = (e) => {
            if (e.target === filterModalOverlay) {
                this.closeFilterModal();
            }
        };
        filterModalOverlay.addEventListener('click', handleOverlayClick);
    },

    // Закрытие модального окна фильтрации
    closeFilterModal() {
        const filterModalOverlay = document.getElementById('filterModalOverlay');
        
        if (!filterModalOverlay) {
            return;
        }
        
        // Убираем класс active
        filterModalOverlay.classList.remove('active');
        
        // Убираем inline стили
        filterModalOverlay.style.display = '';
    },

    // Заполнение категорий для фильтра
    populateFilterCategories() {
        const select = document.getElementById('filterCategory');
        select.innerHTML = '<option value="all">Все категории</option>';

        this.data.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.name;
            select.appendChild(option);
        });
    },

    // Установка значений фильтров
    setFilterValues() {
        const filter = this.state.filterSettings;

        document.getElementById('filterType').value = filter.type;
        document.getElementById('filterCategory').value = filter.category;
        document.getElementById('filterPeriod').value = filter.period;
        document.getElementById('filterAmountFrom').value = filter.amountFrom || '';
        document.getElementById('filterAmountTo').value = filter.amountTo || '';
    },

    // Применение настроек фильтра
    applyFilterSettings() {
        this.state.filterSettings = {
            type: document.getElementById('filterType').value,
            category: document.getElementById('filterCategory').value,
            period: document.getElementById('filterPeriod').value,
            amountFrom: document.getElementById('filterAmountFrom').value || null,
            amountTo: document.getElementById('filterAmountTo').value || null
        };

        this.state.filterActive = true;
        this.closeFilterModal();
        this.renderAllTransactions();

        this.showToast('Фильтр', 'Фильтры применены', 'success');
    },

    // Сброс фильтров
    resetFilters() {
        this.state.filterActive = false;
        this.state.filterSettings = {
            type: 'all',
            category: 'all',
            period: 'month',
            amountFrom: null,
            amountTo: null
        };

        this.renderAllTransactions();
        this.showToast('Фильтр', 'Фильтры сброшены', 'info');
    },

    // Показать все цели
    showAllGoals() {
        // Убеждаемся, что goals - это массив
        if (!Array.isArray(this.data.goals)) {
            this.data.goals = [];
        }

        const allGoals = this.data.goals;

        if (allGoals.length === 0) {
            const modalHTML = `
                <div class="modal-header">
                    <h3 class="modal-title">Мои цели</h3>
                    <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="empty-state" style="text-align: center; padding: var(--space-2xl); color: var(--gray);">
                        <i class="fas fa-bullseye" style="font-size: 64px; margin-bottom: var(--space); opacity: 0.3;"></i>
                        <div style="font-size: var(--font-size-lg); font-weight: 600; margin-bottom: var(--space); color: var(--dark);">
                            Нет целей
                        </div>
                        <div style="margin-bottom: var(--space-xl); color: var(--gray);">
                            Создайте первую цель для накоплений
                        </div>
                        <button class="btn btn-primary" onclick="FinanceApp.closeModal(); FinanceApp.openAddGoalModal();">
                            <i class="fas fa-plus"></i>
                            Создать цель
                        </button>
                    </div>
                </div>
            `;
            this.showCustomModal(modalHTML);
            return;
        }

        // Разделяем цели на активные и завершенные
        const activeGoals = allGoals.filter(g => g.current < g.target);
        const completedGoals = allGoals.filter(g => g.current >= g.target);

        let goalsHTML = '';

        // Активные цели
        if (activeGoals.length > 0) {
            goalsHTML += `
                <div style="margin-bottom: var(--space-xl);">
                    <h4 style="font-size: var(--font-size-lg); font-weight: 600; margin-bottom: var(--space-md); color: var(--text-primary);">
                        Активные цели (${activeGoals.length})
                    </h4>
                    <div style="display: flex; flex-direction: column; gap: var(--space-md);">
                        ${activeGoals.map(goal => {
                            const percent = Math.min((goal.current / goal.target) * 100, 100);
                            const remaining = goal.target - goal.current;
                            const deadline = goal.deadline ? this.formatDate(goal.deadline) : 'Без срока';
                            
                            return `
                                <div class="goal-item" style="border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: var(--space-md); background: var(--bg-secondary); cursor: pointer;" onclick="FinanceApp.showGoalDetails(${goal.id})">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-sm);">
                                        <div style="flex: 1;">
                                            <div style="font-size: var(--font-size-lg); font-weight: 600; color: var(--text-primary); margin-bottom: var(--space-xs);">
                                                ${goal.name}
                                            </div>
                                            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">
                                                Срок: ${deadline}
                                            </div>
                                        </div>
                                        <div style="text-align: right;">
                                            <div style="font-size: var(--font-size-xl); font-weight: 700; color: ${goal.color};">
                                                ${Math.round(percent)}%
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress-bar" style="height: 8px; margin-bottom: var(--space-sm); background: var(--bg-tertiary); border-radius: var(--radius);">
                                        <div class="progress-fill" style="width: ${percent}%; background: ${goal.color}; border-radius: var(--radius);"></div>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; font-size: var(--font-size-sm);">
                                        <div style="color: var(--text-secondary);">
                                            Накоплено: <strong style="color: var(--text-primary);">${this.formatCurrency(goal.current)}</strong>
                                        </div>
                                        <div style="color: var(--text-secondary);">
                                            Осталось: <strong style="color: var(--text-primary);">${this.formatCurrency(remaining)}</strong>
                                        </div>
                                    </div>
                                    <div style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: var(--space-xs);">
                                        Цель: ${this.formatCurrency(goal.target)}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        // Завершенные цели
        if (completedGoals.length > 0) {
            goalsHTML += `
                <div style="margin-bottom: var(--space-xl);">
                    <h4 style="font-size: var(--font-size-lg); font-weight: 600; margin-bottom: var(--space-md); color: var(--text-primary);">
                        Завершенные цели (${completedGoals.length})
                    </h4>
                    <div style="display: flex; flex-direction: column; gap: var(--space-md);">
                        ${completedGoals.map(goal => {
                            const percent = 100;
                            const deadline = goal.deadline ? this.formatDate(goal.deadline) : 'Без срока';
                            
                            return `
                                <div class="goal-item completed" style="border: 1px solid var(--success); border-radius: var(--radius-lg); padding: var(--space-md); background: var(--bg-secondary); opacity: 0.8; cursor: pointer;" onclick="FinanceApp.showGoalDetails(${goal.id})">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-sm);">
                                        <div style="flex: 1;">
                                            <div style="font-size: var(--font-size-lg); font-weight: 600; color: var(--text-primary); margin-bottom: var(--space-xs); display: flex; align-items: center; gap: var(--space-xs);">
                                                ${goal.name}
                                                <i class="fas fa-check-circle" style="color: var(--success); font-size: var(--font-size);"></i>
                                            </div>
                                            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">
                                                Срок: ${deadline}
                                            </div>
                                        </div>
                                        <div style="text-align: right;">
                                            <div style="font-size: var(--font-size-xl); font-weight: 700; color: var(--success);">
                                                100%
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress-bar" style="height: 8px; margin-bottom: var(--space-sm); background: var(--bg-tertiary); border-radius: var(--radius);">
                                        <div class="progress-fill" style="width: 100%; background: var(--success); border-radius: var(--radius);"></div>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; font-size: var(--font-size-sm);">
                                        <div style="color: var(--text-secondary);">
                                            Накоплено: <strong style="color: var(--success);">${this.formatCurrency(goal.current)}</strong>
                                        </div>
                                        <div style="color: var(--success); font-weight: 600;">
                                            Цель достигнута! 🎉
                                        </div>
                                    </div>
                                    <div style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: var(--space-xs);">
                                        Цель: ${this.formatCurrency(goal.target)}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Все мои цели</h3>
                <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
            </div>
            <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
                ${goalsHTML}
                <div style="margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--border-color);">
                    <button class="btn btn-primary btn-block" onclick="FinanceApp.closeModal(); FinanceApp.openAddGoalModal();">
                        <i class="fas fa-plus"></i>
                        Создать новую цель
                    </button>
                </div>
            </div>
        `;

        this.showCustomModal(modalHTML);
    },

    // Показать детали цели
    showGoalDetails(id) {
        const goal = this.data.goals.find(g => g.id === id);
        if (!goal) return;

        const percent = Math.min((goal.current / goal.target) * 100, 100);
        const remaining = goal.target - goal.current;

        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">${goal.name}</h3>
                <button class="modal-close" onclick="FinanceApp.closeGoalModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div style="text-align: center; margin-bottom: var(--space-xl);">
                    <div style="font-size: var(--font-size-3xl); font-weight: 700; color: ${goal.color}; margin-bottom: var(--space);">
                        ${Math.round(percent)}%
                    </div>
                    <div class="progress-bar" style="height: 12px; margin: 0 auto var(--space); max-width: 300px;">
                        <div class="progress-fill" style="width: ${percent}%; background: ${goal.color};"></div>
                    </div>
                    <div style="font-size: var(--font-size); margin-bottom: var(--space);">
                        <strong>${this.formatCurrency(goal.current)}</strong> из ${this.formatCurrency(goal.target)}
                    </div>
                    <div style="color: var(--text-secondary); font-size: var(--font-size-sm);">
                        Осталось накопить: ${this.formatCurrency(remaining)}
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Добавить к цели</label>
                    <div class="amount-input">
                        <input type="number" id="addToGoalAmount" class="form-input" placeholder="0" step="100" min="100">
                        <span class="currency">₽</span>
                    </div>
                </div>

                <button class="btn btn-primary btn-block" onclick="FinanceApp.addToGoal(${id})">
                    <i class="fas fa-plus"></i>
                    Добавить
                </button>

                <button class="btn btn-outline btn-block mt-3" onclick="FinanceApp.deleteGoal(${id})">
                    <i class="fas fa-trash"></i>
                    Удалить цель
                </button>
            </div>
        `;

        this.showCustomModal(modalHTML);
    },

    // Добавить к цели
    addToGoal(id) {
        const amountInput = document.getElementById('addToGoalAmount');
        const amount = parseFloat(amountInput.value);

        if (!amount || amount <= 0) {
            this.showToast('Ошибка', 'Введите корректную сумму', 'error');
            return;
        }

        const goal = this.data.goals.find(g => g.id === id);
        if (!goal) return;

        const newAmount = Math.min(goal.current + amount, goal.target);
        goal.current = newAmount;

        this.saveData();
        this.updateUI();
        this.closeGoalModal();

        this.showToast('Успех', `Добавлено ${this.formatCurrency(amount)} к цели`, 'success');
    },

    // Удалить цель
    deleteGoal(id) {
        if (confirm('Вы уверены, что хотите удалить эту цель?')) {
            this.data.goals = this.data.goals.filter(g => g.id !== id);
            this.saveData();
            this.updateUI();
            this.closeGoalModal();

            this.showToast('Успех', 'Цель удалена', 'success');
        }
    },

    // Закрыть модальное окно цели
    closeGoalModal() {
        document.querySelector('.modal-overlay.active')?.classList.remove('active');
        document.getElementById('modalOverlay').classList.remove('active');
    },

    // Открыть модальное окно добавления накоплений
    openAddSavingsModal() {
        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Добавить к накоплениям</h3>
                <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Сумма</label>
                    <div class="amount-input">
                        <input type="number" id="savingsAmount" class="form-input" placeholder="0" step="100" min="100" required>
                        <span class="currency">₽</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Описание (необязательно)</label>
                    <input type="text" id="savingsDescription" class="form-input" placeholder="Например: Отложено с зарплаты">
                </div>
                <button class="btn btn-primary btn-block" onclick="FinanceApp.saveSavings()">
                    <i class="fas fa-piggy-bank"></i>
                    Добавить к накоплениям
                </button>
            </div>
        `;
        this.showCustomModal(modalHTML);
    },

    // Сохранить накопления
    saveSavings() {
        const amountInput = document.getElementById('savingsAmount');
        const descriptionInput = document.getElementById('savingsDescription');
        const amount = parseFloat(amountInput.value);
        const description = descriptionInput.value.trim() || 'Накопления';

        if (!amount || amount <= 0) {
            this.showToast('Ошибка', 'Введите корректную сумму', 'error');
            return;
        }

        // Создаем транзакцию типа savings
        const transaction = {
            id: Date.now(),
            type: 'savings',
            amount: amount,
            category: 'savings',
            description: description,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toTimeString().split(' ')[0].substring(0, 5),
            createdAt: new Date().toISOString()
        };

        this.data.transactions.push(transaction);
        this.saveData();
        this.updateUI();
        this.closeModal();

        this.showToast('Успех', `Добавлено ${this.formatCurrency(amount)} к накоплениям`, 'success');
    },

    // Открыть модальное окно создания цели
    openAddGoalModal() {
        const today = new Date();
        const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
        const formattedDate = nextMonth.toISOString().split('T')[0];

        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Новая цель</h3>
                <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Название цели</label>
                    <input type="text" id="goalNameModal" class="form-input" placeholder="Например: Новый ноутбук" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Целевая сумма</label>
                    <div class="amount-input">
                        <input type="number" id="goalTargetModal" class="form-input" placeholder="0" step="1000" min="1000" required>
                        <span class="currency">₽</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Срок достижения</label>
                    <input type="date" id="goalDeadlineModal" class="form-input" value="${formattedDate}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Цвет цели</label>
                    <div class="color-picker" id="goalColorPickerModal">
                        <div class="color-option" style="background: #1E3A8A;" data-color="#1E3A8A"></div>
                        <div class="color-option" style="background: #3B82F6;" data-color="#3B82F6"></div>
                        <div class="color-option" style="background: #0EA5E9;" data-color="#0EA5E9"></div>
                        <div class="color-option" style="background: #475569;" data-color="#475569"></div>
                        <div class="color-option" style="background: #64748B;" data-color="#64748B"></div>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" onclick="FinanceApp.saveGoalFromModal()">
                    <i class="fas fa-save"></i>
                    Создать цель
                </button>
            </div>
        `;
        this.showCustomModal(modalHTML);

        // Выбираем первый цвет по умолчанию
        setTimeout(() => {
            const firstColor = document.querySelector('#goalColorPickerModal .color-option');
            if (firstColor) {
                firstColor.classList.add('active');
            }

            // Добавляем обработчики выбора цвета
            document.querySelectorAll('#goalColorPickerModal .color-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    document.querySelectorAll('#goalColorPickerModal .color-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    e.currentTarget.classList.add('active');
                });
            });
        }, 100);
    },

    // Сохранить цель из модального окна
    saveGoalFromModal() {
        const nameInput = document.getElementById('goalNameModal');
        const targetInput = document.getElementById('goalTargetModal');
        const deadlineInput = document.getElementById('goalDeadlineModal');
        
        if (!nameInput || !targetInput || !deadlineInput) {
            console.error('Поля формы не найдены');
            this.showToast('Ошибка', 'Форма не найдена', 'error');
            return;
        }

        const name = nameInput.value.trim();
        const target = parseFloat(targetInput.value);
        const deadline = deadlineInput.value;
        const colorOption = document.querySelector('#goalColorPickerModal .color-option.active');
        const color = colorOption ? colorOption.dataset.color : '#1E3A8A';

        // Валидация
        if (!name) {
            this.showToast('Ошибка', 'Введите название цели', 'error');
            nameInput.focus();
            return;
        }

        if (!target || target <= 0 || isNaN(target)) {
            this.showToast('Ошибка', 'Введите корректную целевую сумму', 'error');
            targetInput.focus();
            return;
        }

        if (!deadline) {
            this.showToast('Ошибка', 'Выберите срок достижения', 'error');
            deadlineInput.focus();
            return;
        }

        // Убеждаемся, что goals - это массив
        if (!Array.isArray(this.data.goals)) {
            this.data.goals = [];
        }

        // Создаем цель
        const goal = {
            id: Date.now(),
            name: name,
            target: target,
            current: 0,
            deadline: deadline,
            color: color,
            createdAt: new Date().toISOString()
        };

        console.log('Создана цель:', goal);
        console.log('Текущие цели до добавления:', this.data.goals);

        // Добавляем в данные
        this.data.goals.push(goal);

        console.log('Текущие цели после добавления:', this.data.goals);

        // Сохраняем
        this.saveData();
        
        // Проверяем, что данные сохранились
        const savedData = localStorage.getItem('finflowData');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            console.log('Сохраненные цели в localStorage:', parsed.goals);
        }

        // Обновляем UI
        this.updateUI();
        
        // Принудительно обновляем отображение целей
        this.renderGoals();

        // Закрываем модальное окно
        this.closeModal();

        // Показываем уведомление
        this.showToast('Успех', `Цель "${name}" создана!`, 'success');
    },

    // Открыть модальное окно создания своей категории
    openCreateCategoryModal() {
        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Создать свою категорию</h3>
                <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Название категории</label>
                    <input type="text" id="customCategoryName" class="form-input" placeholder="Например: Спорт" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Иконка</label>
                    <select id="customCategoryIcon" class="form-select">
                        <option value="dumbbell">🏋️ Спорт</option>
                        <option value="gamepad">🎮 Игры</option>
                        <option value="music">🎵 Музыка</option>
                        <option value="book">📚 Книги</option>
                        <option value="coffee">☕ Кафе</option>
                        <option value="gift">🎁 Подарки</option>
                        <option value="heart">❤️ Благотворительность</option>
                        <option value="star">⭐ Разное</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Цвет</label>
                    <div class="color-picker" id="customCategoryColorPicker">
                        <div class="color-option" style="background: #1E3A8A;" data-color="#1E3A8A"></div>
                        <div class="color-option" style="background: #3B82F6;" data-color="#3B82F6"></div>
                        <div class="color-option" style="background: #0EA5E9;" data-color="#0EA5E9"></div>
                        <div class="color-option" style="background: #475569;" data-color="#475569"></div>
                        <div class="color-option" style="background: #64748B;" data-color="#64748B"></div>
                        <div class="color-option" style="background: #94A3B8;" data-color="#94A3B8"></div>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" onclick="FinanceApp.saveCustomCategory()">
                    <i class="fas fa-save"></i>
                    Создать категорию
                </button>
            </div>
        `;
        this.showCustomModal(modalHTML);

        // Выбираем первый цвет по умолчанию
        setTimeout(() => {
            const firstColor = document.querySelector('#customCategoryColorPicker .color-option');
            if (firstColor) {
                firstColor.classList.add('active');
            }

            // Добавляем обработчики выбора цвета
            document.querySelectorAll('#customCategoryColorPicker .color-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    document.querySelectorAll('#customCategoryColorPicker .color-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    e.currentTarget.classList.add('active');
                });
            });
        }, 100);
    },

    // Сохранить свою категорию
    saveCustomCategory() {
        const nameInput = document.getElementById('customCategoryName');
        const iconInput = document.getElementById('customCategoryIcon');
        const colorOption = document.querySelector('#customCategoryColorPicker .color-option.active');
        
        if (!nameInput || !iconInput) {
            this.showToast('Ошибка', 'Форма не найдена', 'error');
            return;
        }

        const name = nameInput.value.trim();
        const icon = iconInput.value;
        const color = colorOption ? colorOption.dataset.color : '#94A3B8';

        // Валидация
        if (!name) {
            this.showToast('Ошибка', 'Введите название категории', 'error');
            nameInput.focus();
            return;
        }

        // Проверяем, нет ли категории с таким же названием
        const existingCategory = this.data.categories.find(c => 
            c.name.toLowerCase() === name.toLowerCase() && c.id.startsWith('custom_')
        );
        if (existingCategory) {
            this.showToast('Ошибка', 'Категория с таким названием уже существует', 'error');
            return;
        }

        // Создаем категорию
        const category = {
            id: `custom_${Date.now()}`,
            name: name,
            icon: icon,
            color: color,
            budget: 0
        };

        // Добавляем в данные
        this.data.categories.push(category);

        // Сохраняем
        this.saveData();

        // Обновляем выбор категорий в модальном окне транзакции
        this.renderCategoryOptions(this.state.currentTransactionType);

        // Выбираем новую категорию
        setTimeout(() => {
            const categoryOption = document.querySelector(`.category-option[data-category="${category.id}"]`);
            if (categoryOption) {
                document.querySelectorAll('.category-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                categoryOption.classList.add('active');
                this.state.selectedCategory = category.id;
            }
        }, 100);

        // Закрываем модальное окно создания категории
        this.closeModal();

        // Показываем уведомление
        this.showToast('Успех', `Категория "${name}" создана`, 'success');
    },

    // Удалить категорию из списка выбора
    deleteCategoryFromList(categoryId) {
        const category = this.data.categories.find(c => c.id === categoryId);
        if (!category) {
            this.showToast('Ошибка', 'Категория не найдена', 'error');
            return;
        }

        // Проверяем, есть ли транзакции с этой категорией
        const transactionsWithCategory = this.data.transactions.filter(t => t.category === categoryId);
        const hasTransactions = transactionsWithCategory.length > 0;

        let confirmMessage = `Вы уверены, что хотите удалить категорию "${category.name}"?`;
        if (hasTransactions) {
            confirmMessage = `У категории "${category.name}" есть ${transactionsWithCategory.length} транзакций. Они будут перенесены в категорию "Другое". Удалить категорию?`;
        }

        if (!confirm(confirmMessage)) {
            return;
        }

        // Переносим транзакции в категорию "Другое", если есть
        if (hasTransactions) {
            transactionsWithCategory.forEach(transaction => {
                transaction.category = 'other';
            });
        }

        // Удаляем категорию
        this.data.categories = this.data.categories.filter(c => c.id !== categoryId);

        // Сохраняем
        this.saveData();

        // Обновляем список категорий
        this.renderCategoryOptions(this.state.currentTransactionType);

        // Показываем уведомление
        this.showToast('Успех', `Категория "${category.name}" удалена`, 'success');
    },

    // Показать кастомное модальное окно
    showCustomModal(content) {
        const modalOverlay = document.getElementById('modalOverlay');
        modalOverlay.innerHTML = `
            <div class="modal">
                ${content}
            </div>
        `;
        modalOverlay.classList.add('active');
    },

    // Настройка формы цели
    setupGoalForm() {
        const today = new Date();
        const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
        const formattedDate = nextMonth.toISOString().split('T')[0];

        document.getElementById('goalDeadline').value = formattedDate;

        // Выбираем первый цвет по умолчанию
        const firstColor = document.querySelector('.color-option');
        if (firstColor) {
            firstColor.classList.add('active');
        }
    },

    // Сохранение цели
    saveGoal() {
        const name = document.getElementById('goalName').value.trim();
        const target = parseFloat(document.getElementById('goalTarget').value);
        const deadline = document.getElementById('goalDeadline').value;
        const colorOption = document.querySelector('.color-option.active');
        const color = colorOption ? colorOption.dataset.color : '#1E3A8A';

        // Валидация
        if (!name) {
            this.showToast('Ошибка', 'Введите название цели', 'error');
            return;
        }

        if (!target || target <= 0) {
            this.showToast('Ошибка', 'Введите корректную целевую сумму', 'error');
            return;
        }

        if (!deadline) {
            this.showToast('Ошибка', 'Выберите срок достижения', 'error');
            return;
        }

        // Создаем цель
        const goal = {
            id: Date.now(),
            name: name,
            target: target,
            current: 0,
            deadline: deadline,
            color: color,
            createdAt: new Date().toISOString()
        };

        // Добавляем в данные
        this.data.goals.push(goal);

        // Сохраняем
        this.saveData();

        // Возвращаемся на главную
        this.navigateTo('home');

        // Обновляем UI
        this.updateUI();

        // Показываем уведомление
        this.showToast('Успех', 'Цель создана', 'success');
    },

    // Обновление прогресса бюджета
    updateBudgetProgress() {
        const spent = this.calculateTotalExpense();
        const remaining = this.data.budget.monthly - spent;
        const percent = Math.min((spent / this.data.budget.monthly) * 100, 100);

        // Обновляем данные
        this.data.budget.spent = spent;
        this.data.budget.remaining = remaining;

        // Обновляем UI
        const progressFill = document.querySelector('.budget-progress .progress-fill');
        if (progressFill) {
            progressFill.style.width = `${percent}%`;
        }
    },

    // Рендер категорий бюджета
    renderBudgetCategories() {
        const container = document.getElementById('budgetCategories');
        if (!container) return;

        const categoriesWithBudget = this.data.categories.filter(c => c.budget > 0);

        if (categoriesWithBudget.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="text-align: center; padding: var(--space-2xl); color: var(--gray);">
                    <i class="fas fa-chart-pie" style="font-size: 64px; margin-bottom: var(--space); opacity: 0.3;"></i>
                    <div style="font-size: var(--font-size-lg); font-weight: 600; margin-bottom: var(--space); color: var(--dark);">
                        Нет категорий с лимитами
                    </div>
                    <div style="margin-bottom: var(--space-xl); color: var(--gray);">
                        Добавьте лимиты для категорий в настройках
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = categoriesWithBudget.map(category => {
            const spent = this.calculateCategorySpent(category.id);
            const percent = Math.min((spent / category.budget) * 100, 100);
            const remaining = category.budget - spent;

            return `
                <div class="budget-category">
                    <div class="category-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-lg);">
                        <div class="category-info" style="flex: 1;">
                            <div style="display: flex; align-items: center; gap: var(--space); margin-bottom: var(--space-xs);">
                                <div class="category-icon" style="background: ${category.color}; width: 40px; height: 40px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                                    <i class="fas fa-${category.icon}"></i>
                                </div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--font-size-md);">${category.name}</div>
                            </div>
                            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">
                                Лимит: ${this.formatCurrency(category.budget)}
                            </div>
                        </div>
                        <div class="category-limit">${Math.round(percent)}%</div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percent}%; background: ${category.color};"></div>
                    </div>
                    <div class="category-stats">
                        <div class="category-used">Потрачено: ${this.formatCurrency(spent)}</div>
                        <div class="category-remaining">Осталось: ${this.formatCurrency(remaining)}</div>
                    </div>
                </div>
            `;
        }).join('');
    },

    // Открыть модальное окно управления категориями
    openManageCategoriesModal() {
        console.log('openManageCategoriesModal вызвана');
        // Получаем все категории расходов
        const standardCategories = ['food', 'transport', 'shopping', 'entertainment', 'health', 'education', 'other'];
        const expenseCategories = this.data.categories.filter(c => 
            standardCategories.includes(c.id) || c.id.startsWith('custom_')
        );
        
        console.log('Найдено категорий:', expenseCategories.length);

        const categoriesHTML = expenseCategories.map(category => {
            const currentBudget = category.budget || 0;
            const isStandard = standardCategories.includes(category.id);
            const canDelete = !isStandard; // Можно удалять только пользовательские категории
            
            return `
                <div class="category-manage-item" data-category-id="${category.id}" style="border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: var(--space-md); margin-bottom: var(--space-md); background: var(--bg-secondary);">
                    <div style="display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-md);">
                        <div class="category-icon" style="background: ${category.color}; width: 48px; height: 48px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                            <i class="fas fa-${category.icon}"></i>
                        </div>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; color: var(--text-primary); font-size: var(--font-size-md); margin-bottom: var(--space-xs);">
                                ${category.name} ${isStandard ? '<span style="font-size: var(--font-size-xs); color: var(--text-secondary);">(стандартная)</span>' : ''}
                            </div>
                            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">
                                Лимит: ${this.formatCurrency(currentBudget)}
                            </div>
                        </div>
                        <div style="display: flex; gap: var(--space-xs);">
                            <button class="btn-icon btn-sm" onclick="FinanceApp.editCategory('${category.id}')" title="Редактировать">
                                <i class="fas fa-edit"></i>
                            </button>
                            ${canDelete ? `<button class="btn-icon btn-sm" onclick="FinanceApp.deleteCategory('${category.id}')" title="Удалить" style="color: var(--danger);">
                                <i class="fas fa-trash"></i>
                            </button>` : ''}
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom: 0;">
                        <label class="form-label" style="font-size: var(--font-size-sm);">Лимит бюджета (₽)</label>
                        <div class="amount-input">
                            <input type="number" 
                                   id="budget_${category.id}" 
                                   class="form-input" 
                                   placeholder="0" 
                                   step="100" 
                                   min="0" 
                                   value="${currentBudget}">
                            <span class="currency">₽</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Управление категориями</h3>
                <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
            </div>
            <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
                <div style="margin-bottom: var(--space-lg); color: var(--text-secondary); font-size: var(--font-size-sm);">
                    Управляйте категориями расходов: устанавливайте лимиты, редактируйте или удаляйте категории.
                </div>
                ${categoriesHTML || '<div style="text-align: center; padding: var(--space-xl); color: var(--text-secondary);">Нет категорий</div>'}
                <div style="margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--border-color); display: flex; flex-direction: column; gap: var(--space-md);">
                    <button class="btn btn-primary btn-block" onclick="FinanceApp.openCreateCategoryModalFromManage()">
                        <i class="fas fa-plus"></i>
                        Добавить новую категорию
                    </button>
                    <button class="btn btn-outline btn-block" onclick="FinanceApp.saveCategoryBudgets()">
                        <i class="fas fa-save"></i>
                        Сохранить лимиты
                    </button>
                </div>
            </div>
        `;

        this.showCustomModal(modalHTML);
    },

    // Сохранить лимиты категорий
    saveCategoryBudgets() {
        // Получаем все категории расходов
        const expenseCategories = this.data.categories.filter(c => 
            ['food', 'transport', 'shopping', 'entertainment', 'health', 'education', 'other'].includes(c.id) ||
            c.id.startsWith('custom_')
        );

        let hasChanges = false;

        expenseCategories.forEach(category => {
            const budgetInput = document.getElementById(`budget_${category.id}`);
            if (budgetInput) {
                const newBudget = parseFloat(budgetInput.value) || 0;
                if (category.budget !== newBudget) {
                    category.budget = newBudget;
                    hasChanges = true;
                }
            }
        });

        if (hasChanges) {
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showToast('Успех', 'Лимиты категорий обновлены', 'success');
        } else {
            this.showToast('Информация', 'Изменений не обнаружено', 'info');
        }
    },

    // Редактировать категорию
    editCategory(categoryId) {
        const category = this.data.categories.find(c => c.id === categoryId);
        if (!category) {
            this.showToast('Ошибка', 'Категория не найдена', 'error');
            return;
        }

        const standardCategories = ['food', 'transport', 'shopping', 'entertainment', 'health', 'education', 'other'];
        const isStandard = standardCategories.includes(categoryId);

        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Редактировать категорию</h3>
                <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Название категории</label>
                    <input type="text" id="editCategoryName" class="form-input" value="${category.name}" ${isStandard ? 'readonly' : ''} required>
                    ${isStandard ? '<div style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: var(--space-xs);">Стандартные категории нельзя редактировать</div>' : ''}
                </div>
                <div class="form-group">
                    <label class="form-label">Иконка</label>
                    <select id="editCategoryIcon" class="form-select" ${isStandard ? 'disabled' : ''}>
                        <option value="utensils" ${category.icon === 'utensils' ? 'selected' : ''}>🍴 Еда</option>
                        <option value="car" ${category.icon === 'car' ? 'selected' : ''}>🚗 Транспорт</option>
                        <option value="shopping-bag" ${category.icon === 'shopping-bag' ? 'selected' : ''}>🛍️ Шоппинг</option>
                        <option value="film" ${category.icon === 'film' ? 'selected' : ''}>🎬 Развлечения</option>
                        <option value="heart" ${category.icon === 'heart' ? 'selected' : ''}>❤️ Здоровье</option>
                        <option value="graduation-cap" ${category.icon === 'graduation-cap' ? 'selected' : ''}>🎓 Образование</option>
                        <option value="dumbbell" ${category.icon === 'dumbbell' ? 'selected' : ''}>🏋️ Спорт</option>
                        <option value="gamepad" ${category.icon === 'gamepad' ? 'selected' : ''}>🎮 Игры</option>
                        <option value="music" ${category.icon === 'music' ? 'selected' : ''}>🎵 Музыка</option>
                        <option value="book" ${category.icon === 'book' ? 'selected' : ''}>📚 Книги</option>
                        <option value="coffee" ${category.icon === 'coffee' ? 'selected' : ''}>☕ Кафе</option>
                        <option value="gift" ${category.icon === 'gift' ? 'selected' : ''}>🎁 Подарки</option>
                        <option value="ellipsis-h" ${category.icon === 'ellipsis-h' ? 'selected' : ''}>⋯ Другое</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Цвет</label>
                    <div class="color-picker" id="editCategoryColorPicker">
                        <div class="color-option ${category.color === '#1E3A8A' ? 'active' : ''}" style="background: #1E3A8A;" data-color="#1E3A8A"></div>
                        <div class="color-option ${category.color === '#3B82F6' ? 'active' : ''}" style="background: #3B82F6;" data-color="#3B82F6"></div>
                        <div class="color-option ${category.color === '#0EA5E9' ? 'active' : ''}" style="background: #0EA5E9;" data-color="#0EA5E9"></div>
                        <div class="color-option ${category.color === '#475569' ? 'active' : ''}" style="background: #475569;" data-color="#475569"></div>
                        <div class="color-option ${category.color === '#64748B' ? 'active' : ''}" style="background: #64748B;" data-color="#64748B"></div>
                        <div class="color-option ${category.color === '#94A3B8' ? 'active' : ''}" style="background: #94A3B8;" data-color="#94A3B8"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Лимит бюджета (₽)</label>
                    <div class="amount-input">
                        <input type="number" id="editCategoryBudget" class="form-input" value="${category.budget || 0}" step="100" min="0">
                        <span class="currency">₽</span>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: var(--space-md);">
                    <button class="btn btn-primary btn-block" onclick="FinanceApp.saveEditedCategory('${categoryId}')">
                        <i class="fas fa-save"></i>
                        Сохранить изменения
                    </button>
                    ${!isStandard ? `
                        <button class="btn btn-outline btn-block" onclick="FinanceApp.deleteCategoryFromEdit('${categoryId}')" style="color: var(--danger); border-color: var(--danger);">
                            <i class="fas fa-trash"></i>
                            Удалить категорию
                        </button>
                    ` : ''}
                </div>
            </div>
        `;

        this.showCustomModal(modalHTML);

        // Добавляем обработчики выбора цвета
        setTimeout(() => {
            document.querySelectorAll('#editCategoryColorPicker .color-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    document.querySelectorAll('#editCategoryColorPicker .color-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    e.currentTarget.classList.add('active');
                });
            });
        }, 100);
    },

    // Сохранить отредактированную категорию
    saveEditedCategory(categoryId) {
        const category = this.data.categories.find(c => c.id === categoryId);
        if (!category) {
            this.showToast('Ошибка', 'Категория не найдена', 'error');
            return;
        }

        const standardCategories = ['food', 'transport', 'shopping', 'entertainment', 'health', 'education', 'other'];
        const isStandard = standardCategories.includes(categoryId);

        const nameInput = document.getElementById('editCategoryName');
        const iconInput = document.getElementById('editCategoryIcon');
        const budgetInput = document.getElementById('editCategoryBudget');
        const colorOption = document.querySelector('#editCategoryColorPicker .color-option.active');

        if (!nameInput || !iconInput || !budgetInput) {
            this.showToast('Ошибка', 'Форма не найдена', 'error');
            return;
        }

        const name = nameInput.value.trim();
        if (!name) {
            this.showToast('Ошибка', 'Введите название категории', 'error');
            return;
        }

        // Обновляем категорию
        if (!isStandard) {
            category.name = name;
            category.icon = iconInput.value;
        }
        category.color = colorOption ? colorOption.dataset.color : category.color;
        category.budget = parseFloat(budgetInput.value) || 0;

        this.saveData();
        this.updateUI();
        this.closeModal();
        this.showToast('Успех', 'Категория обновлена', 'success');
    },

    // Удалить категорию
    deleteCategory(categoryId) {
        const category = this.data.categories.find(c => c.id === categoryId);
        if (!category) {
            this.showToast('Ошибка', 'Категория не найдена', 'error');
            return;
        }

        const standardCategories = ['food', 'transport', 'shopping', 'entertainment', 'health', 'education', 'other', 'other_income'];
        if (standardCategories.includes(categoryId)) {
            this.showToast('Ошибка', 'Стандартные категории нельзя удалять', 'error');
            return;
        }

        // Проверяем, есть ли транзакции с этой категорией
        const transactionsWithCategory = this.data.transactions.filter(t => t.category === categoryId);
        if (transactionsWithCategory.length > 0) {
            if (!confirm(`У категории "${category.name}" есть ${transactionsWithCategory.length} транзакций. Вы уверены, что хотите удалить категорию? Транзакции будут перенесены в категорию "Другое".`)) {
                return;
            }
            // Переносим транзакции в категорию "Другое"
            transactionsWithCategory.forEach(transaction => {
                transaction.category = 'other';
            });
        } else {
            if (!confirm(`Вы уверены, что хотите удалить категорию "${category.name}"?`)) {
                return;
            }
        }

        // Удаляем категорию
        this.data.categories = this.data.categories.filter(c => c.id !== categoryId);

        this.saveData();
        this.updateUI();
        this.closeModal();
        this.showToast('Успех', `Категория "${category.name}" удалена`, 'success');
        
        // Если открыто окно управления, обновляем его
        setTimeout(() => {
            const manageModal = document.querySelector('.modal-overlay.active');
            if (manageModal) {
                this.openManageCategoriesModal();
            }
        }, 300);
    },

    // Удалить категорию из окна редактирования
    deleteCategoryFromEdit(categoryId) {
        this.closeModal(); // Закрываем окно редактирования
        this.deleteCategory(categoryId); // Вызываем функцию удаления
    },

    // Открыть модальное окно создания категории из управления
    openCreateCategoryModalFromManage() {
        this.closeModal(); // Закрываем текущее модальное окно
        
        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Создать новую категорию</h3>
                <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Название категории</label>
                    <input type="text" id="customCategoryName" class="form-input" placeholder="Например: Спорт" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Иконка</label>
                    <select id="customCategoryIcon" class="form-select">
                        <option value="dumbbell">🏋️ Спорт</option>
                        <option value="gamepad">🎮 Игры</option>
                        <option value="music">🎵 Музыка</option>
                        <option value="book">📚 Книги</option>
                        <option value="coffee">☕ Кафе</option>
                        <option value="gift">🎁 Подарки</option>
                        <option value="heart">❤️ Благотворительность</option>
                        <option value="star">⭐ Разное</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Цвет</label>
                    <div class="color-picker" id="customCategoryColorPicker">
                        <div class="color-option" style="background: #1E3A8A;" data-color="#1E3A8A"></div>
                        <div class="color-option" style="background: #3B82F6;" data-color="#3B82F6"></div>
                        <div class="color-option" style="background: #0EA5E9;" data-color="#0EA5E9"></div>
                        <div class="color-option" style="background: #475569;" data-color="#475569"></div>
                        <div class="color-option" style="background: #64748B;" data-color="#64748B"></div>
                        <div class="color-option" style="background: #94A3B8;" data-color="#94A3B8"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Лимит бюджета (₽)</label>
                    <div class="amount-input">
                        <input type="number" id="customCategoryBudget" class="form-input" placeholder="0" step="100" min="0" value="0">
                        <span class="currency">₽</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" onclick="FinanceApp.saveCustomCategoryFromManage()">
                    <i class="fas fa-save"></i>
                    Создать категорию
                </button>
            </div>
        `;
        this.showCustomModal(modalHTML);

        // Выбираем первый цвет по умолчанию
        setTimeout(() => {
            const firstColor = document.querySelector('#customCategoryColorPicker .color-option');
            if (firstColor) {
                firstColor.classList.add('active');
            }

            // Добавляем обработчики выбора цвета
            document.querySelectorAll('#customCategoryColorPicker .color-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    document.querySelectorAll('#customCategoryColorPicker .color-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    e.currentTarget.classList.add('active');
                });
            });
        }, 100);
    },

    // Сохранить категорию из управления
    saveCustomCategoryFromManage() {
        const nameInput = document.getElementById('customCategoryName');
        const iconInput = document.getElementById('customCategoryIcon');
        const budgetInput = document.getElementById('customCategoryBudget');
        const colorOption = document.querySelector('#customCategoryColorPicker .color-option.active');

        if (!nameInput || !iconInput || !budgetInput) {
            this.showToast('Ошибка', 'Форма не найдена', 'error');
            return;
        }

        const name = nameInput.value.trim();
        if (!name) {
            this.showToast('Ошибка', 'Введите название категории', 'error');
            return;
        }

        const color = colorOption ? colorOption.dataset.color : '#94A3B8';
        const budget = parseFloat(budgetInput.value) || 0;

        // Проверяем, нет ли категории с таким же названием
        const existingCategory = this.data.categories.find(c => c.name.toLowerCase() === name.toLowerCase());
        if (existingCategory) {
            this.showToast('Ошибка', 'Категория с таким названием уже существует', 'error');
            return;
        }

        // Создаем категорию
        const category = {
            id: `custom_${Date.now()}`,
            name: name,
            icon: iconInput.value,
            color: color,
            budget: budget
        };

        // Добавляем в данные
        this.data.categories.push(category);

        // Сохраняем
        this.saveData();
        this.updateUI();
        this.closeModal();
        this.showToast('Успех', 'Категория создана', 'success');

        // Открываем окно управления снова
        setTimeout(() => {
            this.openManageCategoriesModal();
        }, 300);
    },

    // Расчет потраченного по категории
    calculateCategorySpent(categoryId) {
        return this.data.transactions
            .filter(t => t.type === 'expense' && t.category === categoryId)
            .reduce((sum, t) => sum + t.amount, 0);
    },

    // Обновление аналитики
    updateAnalytics(period = 'month') {
        // Здесь можно обновить графики на основе выбранного периода
        console.log('Обновление аналитики за период:', period);

        // Обновляем статистику
        this.updateStats(period);
    },

    // Обновление статистики
    updateStats(period) {
        const container = document.getElementById('detailedStats');
        if (!container) return;

        // Фильтруем транзакции по периоду
        let filteredTransactions = [...this.data.transactions];
        const now = new Date();
        let startDate;

        switch(period) {
            case 'week':
                const day = now.getDay();
                const diff = now.getDate() - day + (day === 0 ? -6 : 1);
                startDate = new Date(now.getFullYear(), now.getMonth(), diff);
                break;
            case 'month':
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
                break;
            case 'quarter':
                const quarter = Math.floor(now.getMonth() / 3);
                startDate = new Date(now.getFullYear(), quarter * 3, 1);
                break;
            case 'year':
                startDate = new Date(now.getFullYear(), 0, 1);
                break;
            default:
                startDate = new Date(0); // Все время
        }

        filteredTransactions = filteredTransactions.filter(t => {
            const date = new Date(t.date);
            return date >= startDate;
        });

        // Рассчитываем статистику
        const income = filteredTransactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const expense = filteredTransactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        const savings = this.data.goals
            .reduce((sum, g) => sum + g.current, 0);

        const transactionsCount = filteredTransactions.length;
        const avgTransaction = transactionsCount > 0 ? (income + expense) / transactionsCount : 0;

        // Находим самую частую категорию расходов
        const expenseCategories = {};
        filteredTransactions
            .filter(t => t.type === 'expense')
            .forEach(t => {
                expenseCategories[t.category] = (expenseCategories[t.category] || 0) + 1;
            });

        let mostFrequentCategory = 'Нет данных';
        let maxCount = 0;
        Object.entries(expenseCategories).forEach(([category, count]) => {
            if (count > maxCount) {
                maxCount = count;
                const cat = this.data.categories.find(c => c.id === category);
                mostFrequentCategory = cat ? cat.name : category;
            }
        });

        container.innerHTML = `
            <div class="stat-item">
                <div class="stat-value">${transactionsCount}</div>
                <div class="stat-label">Операций</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${this.formatCurrency(avgTransaction, false)}</div>
                <div class="stat-label">Средняя операция</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${mostFrequentCategory}</div>
                <div class="stat-label">Частая категория</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${this.data.goals.length}</div>
                <div class="stat-label">Активных целей</div>
            </div>
        `;
    },

    // Подключение банка
    connectBank() {
        this.showToast('Подключение банка', 'Имитация подключения...', 'info');

        // Имитация процесса подключения
        setTimeout(() => {
            this.showToast('Успех', 'Банк успешно подключен', 'success');
        }, 2000);
    },

    // Экспорт данных
    exportData() {
        try {
            const data = {
                transactions: this.data.transactions,
                categories: this.data.categories,
                goals: this.data.goals,
                budget: this.data.budget,
                user: this.data.user,
                config: this.config,
                exportedAt: new Date().toISOString()
            };

            const dataStr = JSON.stringify(data, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', `finflow-export-${new Date().toISOString().split('T')[0]}.json`);
            linkElement.click();

            this.showToast('Экспорт данных', 'Данные успешно экспортированы', 'success');
        } catch (error) {
            console.error('Ошибка экспорта:', error);
            this.showToast('Ошибка', 'Не удалось экспортировать данные', 'error');
        }
    },

    // Редактирование профиля
    editProfile() {
        const modalHTML = `
            <div class="modal-header">
                <h3 class="modal-title">Редактирование профиля</h3>
                <button class="modal-close" onclick="FinanceApp.closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="profileForm">
                    <div class="form-group">
                        <label class="form-label">Имя</label>
                        <input type="text" id="profileName" class="form-input" value="${this.data.user.name}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" id="profileEmail" class="form-input" value="${this.data.user.email}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Инициалы для аватара</label>
                        <input type="text" id="profileAvatar" class="form-input" value="${this.data.user.avatar}" maxlength="2" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">
                        <i class="fas fa-save"></i>
                        Сохранить изменения
                    </button>
                </form>
            </div>
        `;

        this.showCustomModal(modalHTML);

        document.getElementById('profileForm').onsubmit = (e) => {
            e.preventDefault();
            this.saveProfile();
        };
    },

    // Сохранение профиля
    saveProfile() {
        const name = document.getElementById('profileName').value.trim();
        const email = document.getElementById('profileEmail').value.trim();
        const avatar = document.getElementById('profileAvatar').value.trim().toUpperCase();

        // Валидация
        if (!name || !email || !avatar) {
            this.showToast('Ошибка', 'Заполните все поля', 'error');
            return;
        }

        // Обновляем данные
        this.data.user.name = name;
        this.data.user.email = email;
        this.data.user.avatar = avatar;

        // Сохраняем
        this.saveData();

        // Обновляем UI
        this.updateProfile();

        // Закрываем модальное окно
        this.closeModal();

        this.showToast('Успех', 'Профиль обновлен', 'success');
    },

    // Выход
    logout() {
        if (confirm('Вы уверены, что хотите выйти?')) {
            // Очищаем данные
            localStorage.removeItem('finflowData');
            localStorage.removeItem('finflowConfig');
            localStorage.removeItem('finflowTheme');

            // Перезагружаем страницу
            location.reload();
        }
    },

    // Проверка соединения
    checkConnection() {
        if (!navigator.onLine) {
            this.showToast('Оффлайн режим', 'Некоторые функции могут быть недоступны', 'warning');
        }
    },

    // Закрытие модального окна
    closeModal() {
        const modalOverlay = document.getElementById('modalOverlay');
        const modal = document.getElementById('addTransactionModal');
        
        if (!modalOverlay) {
            return;
        }
        
        // Убираем класс active для скрытия
        modalOverlay.classList.remove('active');
        this.state.modalOpen = false;
        this.state.selectedCategory = null;

        // Сбрасываем форму
        const form = document.getElementById('transactionForm');
        if (form) {
            form.reset();
        }
        
        // Убираем inline стили, если они были установлены
        if (modalOverlay) {
            modalOverlay.style.display = '';
        }
        if (modal) {
            modal.style.display = '';
        }
    },

    // Показать загрузчик
    showLoader() {
        document.getElementById('loaderOverlay').classList.add('active');
    },

    // Скрыть загрузчик
    hideLoader() {
        document.getElementById('loaderOverlay').classList.remove('active');
    },

    // Показать уведомление
    showToast(title, message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');

        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-${this.getToastIcon(type)}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        container.appendChild(toast);

        // Автоматическое скрытие
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 5000);

        // Закрытие по клику
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.remove();
        });
    },

    // Получить иконку для уведомления
    getToastIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    },

    // Форматирование валюты
    formatCurrency(amount, withSymbol = true) {
        return new Intl.NumberFormat('ru-RU', {
            style: withSymbol ? 'currency' : 'decimal',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount).replace('RUB', '₽');
    },

    // Форматирование даты
    formatDate(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return 'Сегодня';
        }
        if (date.toDateString() === yesterday.toDateString()) {
            return 'Вчера';
        }

        return date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'short'
        });
    },

    // Настройка ripple эффектов для всех кнопок
    setupRippleEffects() {
        const interactiveElements = document.querySelectorAll(
            'button, .quick-action, .nav-item, .header-btn, .modal-close, .section-link, ' +
            '.btn-outline, .btn-icon, .btn-logout, .type-option, .category-option, ' +
            '.color-option, .back-btn, .setting-item, .integration-item, .transaction-item, ' +
            '.btn-primary, .btn, a.btn'
        );

        interactiveElements.forEach(element => {
            // Пропускаем кнопки submit внутри форм - для них форма сама обработает событие
            if (element.type === 'submit' && element.closest('form')) {
                return;
            }
            
            element.addEventListener('click', function(e) {
                // Создаем ripple эффект
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                // Удаляем старые ripple
                const existingRipples = this.querySelectorAll('.ripple');
                existingRipples.forEach(r => r.remove());

                this.appendChild(ripple);

                // Удаляем ripple после анимации
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
};

// Экспорт для глобального использования
window.FinanceApp = FinanceApp;