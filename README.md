# Task Tracker

**Task Tracker** — это ToDo-приложение, созданное с использованием TypeScript, React и React Hooks, которое позволяет эффективно управлять списком задач.

## Функционал

- **Добавление задач**: Легко добавляйте новые задачи в список через интуитивно понятное поле ввода.
- **Фильтрация задач**:
  - Общий список задач.
  - Только невыполненные задачи.
  - Только выполненные задачи.
- **Статистика задач**: Отображение количества оставшихся невыполненных задач.
- **Очистка списка**: Возможность удалить все выполненные задачи.
- **Дружественный интерфейс**: Простой и понятный дизайн.

## Технологии

- **TypeScript** — строго типизированный язык для повышения надежности кода.
- **React** — библиотека для построения пользовательских интерфейсов.
- **React Hooks** — управление состоянием и жизненным циклом компонентов.
- **Jest и React Testing Library** — тестирование ключевых функций.

## Установка

1. Клонируйте репозиторий проекта:

   ```bash
   git clone https://github.com/Frontess/task-tracker.git

   ```

2. Перейдите в папку проекта:

```bash
cd task-tracker
 ```
3. Установите зависимости:

```bash
npm install
```
4. Запустите проект:

```bash
npm start
```
Приложение будет доступно по адресу: http://localhost:3000.

Скрипты
npm start — Запускает проект в режиме разработки.

npm build — Создает оптимизированную сборку для продакшена.

npm test — Запускает тесты.

Папки и файлы

Структура проекта:
```plaintext
task-tracker/
├── src/
│ ├── components/ # Компоненты приложения
│ │ ├── AddTask.tsx # Компонент для добавления задач
│ │ ├── TaskList.tsx # Компонент для отображения списка задач
│ │ ├── TaskItem.tsx # Компонент задачи
│ │ ├── FilterTabs.tsx # Компонент фильтрации задач
│ ├── hooks/ # Кастомные хуки
│ │ └── useTasks.ts # Хук для управления задачами
│ ├── context/ # Контекст состояния задач
│ │ └── TasksContext.tsx # Контекст задач
│ ├── styles/ # Стили приложения
│ │ └── styles.css
│ ├── App.tsx # Главный компонент приложения
│ ├── index.tsx # Точка входа приложения
│ └── types.ts # Типизация задач
├── package.json # Настройки проекта и зависимости
├── tsconfig.json # Конфигурация TypeScript
├── public/
│ └── index.html # Главный HTML файл
└── README.md # Описание проекта
