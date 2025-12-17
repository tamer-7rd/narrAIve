// PostCSS необходим для работы с Tailwind CSS
// Он обрабатывает CSS-файлы и применяет плагины (Tailwind и Autoprefixer)
// Next.js автоматически использует эту конфигурацию при сборке проекта
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // Плагин для обработки Tailwind CSS директив
    autoprefixer: {}, // Автоматически добавляет вендорные префиксы для совместимости с браузерами
  },
}
