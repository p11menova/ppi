// data.js
const FinanceData = {
    // Константы
    CATEGORIES: {
        EXPENSE: [
            { id: 'food', name: 'Еда', icon: 'utensils', color: '#f72585' },
            { id: 'transport', name: 'Транспорт', icon: 'car', color: '#4361ee' },
            { id: 'housing', name: 'Жилье', icon: 'home', color: '#4cc9f0' },
            { id: 'utilities', name: 'Коммунальные', icon: 'bolt', color: '#f1c40f' },
            { id: 'entertainment', name: 'Развлечения', icon: 'film', color: '#7209b7' },
            { id: 'shopping', name: 'Шоппинг', icon: 'shopping-bag', color: '#f8961e' },
            { id: 'health', name: 'Здоровье', icon: 'heart', color: '#e74c3c' },
            { id: 'education', name: 'Образование', icon: 'graduation-cap', color: '#3498db' },
            { id: 'communication', name: 'Связь', icon: 'phone', color: '#2ecc71' },
            { id: 'other', name: 'Другое', icon: 'ellipsis-h', color: '#95a5a6' }
        ],
        INCOME: [
            { id: 'salary', name: 'Зарплата', icon: 'money-bill-wave', color: '#2ecc71' },
            { id: 'freelance', name: 'Фриланс', icon: 'laptop-code', color: '#9b59b6' },
            { id: 'investment', name: 'Инвестиции', icon: 'chart-line', color: '#1abc9c' },
            { id: 'gift', name: 'Подарки', icon: 'gift', color: '#e74c3c' },
            { id: 'bonus', name: 'Бонусы', icon: 'star', color: '#f1c40f' },
            { id: 'other_income', name: 'Другое', icon: 'ellipsis-h', color: '#95a5a6' }
        ]
    },

    // Хранение данных
    storage: {
        get(key) {
            try {
                const item = localStorage.getItem(`finance_${key}`);
                return item ? JSON.parse(item) : null;
            } catch (error) {
                console.error(`Ошибка чтения ${key}:`, error);
                return null;
            }
        },

        set(key, value) {
            try {
                localStorage.setItem(`finance_${key}`, JSON.stringify(value));
                return true;
            } catch (error) {
                console.error(`Ошибка записи ${key}:`, error);
                return false;
            }
        },

        remove(key) {
            try {
                localStorage.removeItem(`finance_${key}`);
                return true;
            } catch (error) {
                console.error(`Ошибка удаления ${key}:`, error);
                return false;
            }
        },

        clear() {
            try {
                const keys = Object.keys(localStorage).filter(key => key.startsWith('finance_'));
                keys.forEach(key => localStorage.removeItem(key));
                return true;
            } catch (error) {
                console.error('Ошибка очистки хранилища:', error);
                return false;
            }
        }
    },

    // Работа с транзакциями
    transactions: {
        getAll() {
            return this.storage.get('transactions') || [];
        },

        getById(id) {
            const transactions = this.getAll();
            return transactions.find(t => t.id === id);
        },

        getByDateRange(startDate, endDate) {
            const transactions = this.getAll();
            return transactions.filter(t => {
                const date = new Date(t.date);
                return date >= startDate && date <= endDate;
            });
        },

        getByCategory(categoryId) {
            const transactions = this.getAll();
            return transactions.filter(t => t.category === categoryId);
        },

        getByType(type) {
            const transactions = this.getAll();
            return transactions.filter(t => t.type === type);
        },

        add(transaction) {
            const transactions = this.getAll();
            transaction.id = Date.now();
            transaction.createdAt = new Date().toISOString();
            transactions.push(transaction);
            this.storage.set('transactions', transactions);
            return transaction;
        },

        update(id, updates) {
            const transactions = this.getAll();
            const index = transactions.findIndex(t => t.id === id);
            if (index !== -1) {
                transactions[index] = { ...transactions[index], ...updates };
                this.storage.set('transactions', transactions);
                return true;
            }
            return false;
        },

        delete(id) {
            const transactions = this.getAll();
            const filtered = transactions.filter(t => t.id !== id);
            this.storage.set('transactions', filtered);
            return filtered.length !== transactions.length;
        },

        getStats() {
            const transactions = this.getAll();
            const stats = {
                totalIncome: 0,
                totalExpense: 0,
                totalSavings: 0,
                byCategory: {},
                monthly: {},
                dailyAverage: 0
            };

            transactions.forEach(t => {
                if (t.type === 'income') {
                    stats.totalIncome += t.amount;
                } else if (t.type === 'expense') {
                    stats.totalExpense += t.amount;
                } else if (t.type === 'savings') {
                    stats.totalSavings += t.amount;
                }

                // Статистика по категориям
                if (!stats.byCategory[t.category]) {
                    stats.byCategory[t.category] = { income: 0, expense: 0 };
                }
                if (t.type === 'income') {
                    stats.byCategory[t.category].income += t.amount;
                } else if (t.type === 'expense') {
                    stats.byCategory[t.category].expense += t.amount;
                }

                // Месячная статистика
                const date = new Date(t.date);
                const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                if (!stats.monthly[monthKey]) {
                    stats.monthly[monthKey] = { income: 0, expense: 0, savings: 0 };
                }
                stats.monthly[monthKey][t.type] += t.amount;
            });

            // Средний дневной расход
            if (transactions.length > 0) {
                const oldestDate = new Date(Math.min(...transactions.map(t => new Date(t.date))));
                const today = new Date();
                const daysDiff = Math.ceil((today - oldestDate) / (1000 * 60 * 60 * 24));
                stats.dailyAverage = stats.totalExpense / Math.max(daysDiff, 1);
            }

            return stats;
        }
    },

    // Работа с целями
    goals: {
        getAll() {
            return this.storage.get('goals') || [];
        },

        getById(id) {
            const goals = this.getAll();
            return goals.find(g => g.id === id);
        },

        getActive() {
            const goals = this.getAll();
            return goals.filter(g => {
                if (!g.deadline) return true;
                const deadline = new Date(g.deadline);
                return deadline >= new Date() && g.current < g.target;
            });
        },

        getCompleted() {
            const goals = this.getAll();
            return goals.filter(g => g.current >= g.target);
        },

        add(goal) {
            const goals = this.getAll();
            goal.id = Date.now();
            goal.createdAt = new Date().toISOString();
            goal.current = goal.current || 0;
            goals.push(goal);
            this.storage.set('goals', goals);
            return goal;
        },

        update(id, updates) {
            const goals = this.getAll();
            const index = goals.findIndex(g => g.id === id);
            if (index !== -1) {
                goals[index] = { ...goals[index], ...updates };
                this.storage.set('goals', goals);
                return true;
            }
            return false;
        },

        delete(id) {
            const goals = this.getAll();
            const filtered = goals.filter(g => g.id !== id);
            this.storage.set('goals', filtered);
            return filtered.length !== goals.length;
        },

        addToGoal(id, amount) {
            const goal = this.getById(id);
            if (!goal) return false;

            const newCurrent = Math.min(goal.current + amount, goal.target);
            return this.update(id, { current: newCurrent });
        }
    },

    // Работа с бюджетом
    budget: {
        get() {
            return this.storage.get('budget') || {
                monthly: 0,
                categories: {}
            };
        },

        setMonthly(amount) {
            const budget = this.get();
            budget.monthly = amount;
            return this.storage.set('budget', budget);
        },

        setCategoryLimit(categoryId, limit) {
            const budget = this.get();
            budget.categories[categoryId] = limit;
            return this.storage.set('budget', budget);
        },

        getCategoryLimit(categoryId) {
            const budget = this.get();
            return budget.categories[categoryId] || 0;
        },

        getCategorySpent(categoryId, period = 'month') {
            const transactions = this.transactions.getByCategory(categoryId);
            const now = new Date();
            let startDate;

            if (period === 'month') {
                startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            } else if (period === 'week') {
                const day = now.getDay();
                const diff = now.getDate() - day + (day === 0 ? -6 : 1);
                startDate = new Date(now.setDate(diff));
            } else if (period === 'year') {
                startDate = new Date(now.getFullYear(), 0, 1);
            }

            const filtered = transactions.filter(t => {
                const date = new Date(t.date);
                return date >= startDate && t.type === 'expense';
            });

            return filtered.reduce((sum, t) => sum + t.amount, 0);
        },

        getRemaining(categoryId, period = 'month') {
            const limit = this.getCategoryLimit(categoryId);
            const spent = this.getCategorySpent(categoryId, period);
            return Math.max(0, limit - spent);
        },

        getProgress(categoryId, period = 'month') {
            const limit = this.getCategoryLimit(categoryId);
            if (limit === 0) return 0;

            const spent = this.getCategorySpent(categoryId, period);
            return Math.min((spent / limit) * 100, 100);
        }
    },

    // Работа с пользователем
    user: {
        get() {
            return this.storage.get('user') || {
                name: 'Пользователь',
                email: '',
                currency: 'RUB',
                language: 'ru',
                theme: 'light'
            };
        },

        update(updates) {
            const user = this.get();
            const updated = { ...user, ...updates };
            return this.storage.set('user', updated);
        },

        setCurrency(currency) {
            return this.update({ currency });
        },

        setTheme(theme) {
            return this.update({ theme });
        },

        setLanguage(language) {
            return this.update({ language });
        }
    },

    // Рекомендации
    recommendations: {
        generate() {
            const stats = this.transactions.getStats();
            const budget = this.budget.get();
            const goals = this.goals.getActive();
            const recommendations = [];

            // Проверка превышения бюджета
            Object.keys(budget.categories).forEach(categoryId => {
                const progress = this.budget.getProgress(categoryId);
                if (progress > 100) {
                    const category = [...this.CATEGORIES.EXPENSE, ...this.CATEGORIES.INCOME]
                        .find(c => c.id === categoryId);

                    if (category) {
                        recommendations.push({
                            type: 'budget_exceeded',
                            priority: 'high',
                            title: `Превышен бюджет по "${category.name}"`,
                            message: `Вы потратили ${Math.round(progress)}% от установленного лимита.`,
                            action: 'review_category',
                            actionText: 'Пересмотреть бюджет'
                        });
                    }
                }
            });

            // Проверка низких сбережений
            const savingsRate = (stats.totalSavings / Math.max(stats.totalIncome, 1)) * 100;
            if (savingsRate < 10) {
                recommendations.push({
                    type: 'low_savings',
                    priority: 'medium',
                    title: 'Низкий уровень сбережений',
                    message: `Вы откладываете только ${Math.round(savingsRate)}% от дохода. Старайтесь откладывать хотя бы 10-20%.`,
                    action: 'add_savings_goal',
                    actionText: 'Добавить цель'
                });
            }

            // Проверка целей
            goals.forEach(goal => {
                const daysLeft = goal.deadline ?
                    Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)) :
                    Infinity;

                if (daysLeft < 30 && daysLeft > 0) {
                    const progress = (goal.current / goal.target) * 100;
                    if (progress < 80) {
                        recommendations.push({
                            type: 'goal_deadline',
                            priority: 'high',
                            title: `Приближается срок цели "${goal.name}"`,
                            message: `Осталось ${daysLeft} дней, выполнено только ${Math.round(progress)}%.`,
                            action: 'view_goal',
                            actionText: 'Посмотреть цель'
                        });
                    }
                }
            });

            // Сортировка по приоритету
            recommendations.sort((a, b) => {
                const priorityOrder = { high: 0, medium: 1, low: 2 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            });

            return recommendations.slice(0, 5); // Максимум 5 рекомендаций
        }
    },

    // Экспорт данных
    exportData() {
        return {
            transactions: this.transactions.getAll(),
            goals: this.goals.getAll(),
            budget: this.budget.get(),
            user: this.user.get(),
            exportedAt: new Date().toISOString()
        };
    },

    // Импорт данных
    importData(data) {
        try {
            if (data.transactions) {
                this.storage.set('transactions', data.transactions);
            }
            if (data.goals) {
                this.storage.set('goals', data.goals);
            }
            if (data.budget) {
                this.storage.set('budget', data.budget);
            }
            if (data.user) {
                this.storage.set('user', data.user);
            }
            return true;
        } catch (error) {
            console.error('Ошибка импорта данных:', error);
            return false;
        }
    },

    // Сброс данных
    resetData() {
        return this.storage.clear();
    },

    // Вспомогательные функции
    utils: {
        formatCurrency(amount, currency = 'RUB') {
            return new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        },

        formatDate(date, format = 'short') {
            const d = new Date(date);
            if (format === 'short') {
                return d.toLocaleDateString('ru-RU');
            } else if (format === 'long') {
                return d.toLocaleDateString('ru-RU', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
            return d.toISOString().split('T')[0];
        },

        getMonthName(monthIndex) {
            const months = [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
            ];
            return months[monthIndex];
        },

        getWeekDates() {
            const now = new Date();
            const day = now.getDay();
            const diff = now.getDate() - day + (day === 0 ? -6 : 1);
            const startOfWeek = new Date(now.setDate(diff));
            const weekDates = [];

            for (let i = 0; i < 7; i++) {
                const date = new Date(startOfWeek);
                date.setDate(startOfWeek.getDate() + i);
                weekDates.push(date);
            }

            return weekDates;
        }
    }
};

// Экспорт для глобального использования
window.FinanceData = FinanceData;