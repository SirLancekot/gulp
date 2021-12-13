Создаем и выполняем инициализацию  проекта 
```
npm init
```
Указываем название проекта, остальные поля - по желанию.
Установка  gulp в наш проект
```
npm i gulp
```
Создаем  в проекте папки "add" и "dist"

Создаем главный файл "gulpfile.js"

Определяем константы 
 ```
// Определяем константы Gulp
	const { src, dest, parallel, series, watch } = require('gulp');
```

## Установим Live Server 
```
npm i browser-sync --save-dev
```

## Подключим Browsersync в проект:
```
// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');
 
// Подключаем Browsersync
const browserSync = require('browser-sync').create();
```
## Функция для логики работы «Browsersync»
```
// Определяем логику работы Browsersync
	function browsersync() {
		browserSync.init({ // Инициализация Browsersync
			server: { baseDir: 'app/' }, // Указываем папку сервера
			notify: false, // Отключаем уведомления
			online: true // Режим работы: true или false
		})
	}
```
Обратите внимание, что название функции не должно совпадать с названием переменной или константы, в которую мы подключаем пакет. Поэтмоу, в данном случае, название функции browsersync() будет содержать только строчные буквы.

Для того, чтобы получить готовый к запуску таск, функцию или комбинацию функций необходимо экспортировать.

Допишем далее в gulpfile.js:
```
// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
	exports.browsersync = browsersync;
```
 Создадим в папке «app/» индексный файл «index.html»

## Работа со скриптами 
Создадим функцию scripts() до экспорта задач. Данная функция будет обрабатывать скрипты нашего проекта:
  ```
function scripts() {
	return src([ // Берем файлы из источников
		'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
		'app/js/app.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
		])
	.pipe(concat('app.min.js')) // Конкатенируем в один файл
	.pipe(uglify()) // Сжимаем JavaScript
	.pipe(dest('app/js/')) // Выгружаем готовый файл в папку назначения
	.pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
}
```

Для работы данной функции нам понадобятся модули «gulp-concat» и «gulp-uglify-es».  
```
npm i gulp-concat gulp-uglify-es --save-dev
```
Модуль   concat объединяет файлы(jquery.min.js и app.js) и преобразует  в app.min.js
Модуль   uglify - сжимает файл

 ## Подключаем данные модули
 ```
 // Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');
 
// Подключаем Browsersync
const browserSync = require('browser-sync').create();
 
// Подключаем gulp-concat
const concat = require('gulp-concat');
 
// Подключаем gulp-uglify-es
const uglify = require('gulp-uglify-es').default;
```
## Устанавливаем JQuery
```
npm i jquery --save-dev
```
Далее экспортируем функцию scripts() в таск. В нижней части «gulpfile.js», где у нас размещен предыдущий экспорт, добавляем экспорт таска scripts:
```
// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;
 
// Экспортируем функцию scripts() в таск scripts
exports.scripts = scripts;
```

## Добавляем разметку в html 
```
<!DOCTYPE html>
<html lang="en">
 
<head>
 
	<meta charset="UTF-8">
	<title>Document</title>
 
	<!-- Подключаем стили проекта -->
	<link rel="stylesheet" href="css/app.min.css">
 
</head>
 
<body>
 
	<p>Далеко-далеко за словесными горами в стране, гласных и согласных...</p>
 
	<!-- Подключаем оптимизированное изображение -->
	<img src="images/dest/image.jpg" alt="Alt">
 
	<!-- Подключаем скрипты проекта -->
	<script src="js/app.min.js"></script>
 
</body>
</html>
```
## Автоматическое обновление страницы в браузере
Создаем новую функцию startwatch(), которая запустит наблюдение за изменениями файлов. 
```
function startwatch() {
	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	}
```
Добавляем данную функцию в дефолтный экспорт 
```
// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;
 
// Экспортируем функцию scripts() в таск scripts
exports.scripts = scripts;
 
// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(scripts, browsersync, startwatch);
```
## Работа со стилями

В папке «app/» создадим папку «sass». В папке «sass» создадим новый файл «main.sass» и наполняем след. контентом 
```
// Содержимое файла main.sass
body
	// display: none
	display: grid
```
Установим одной командой модули «gulp-sass», «sass», «gulp-less», «gulp-autoprefixer» и «gulp-clean-css»:
```
npm i --save-dev gulp-sass sass gulp-less gulp-autoprefixer gulp-clean-css
```
И подключим их в проект:
```
// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');
 
// Подключаем Browsersync
const browserSync = require('browser-sync').create();
 
// Подключаем gulp-concat
const concat = require('gulp-concat');
 
// Подключаем gulp-uglify-es
const uglify = require('gulp-uglify-es').default;
 
// Подключаем модули gulp-sass и gulp-less
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');
 
// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');
 
// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');
```
Внимание! Для корректной работы Sass в настоящее время требуется установить дополнительный пакет "sass" 
```
npm i -D sass
```
, а подключать модули Sass в gulpfile.js следует следующим образом: 
```
const sass = require('gulp-sass')(require('sass'));
```

Создадим переменную preprocessor в самом начале «gulpfile.js»: 
```
// Определяем переменную "preprocessor"
let preprocessor = 'sass'; // Выбор препроцессора в проекте - sass или less
 
// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');
 
// ...
```
Теперь создадим функцию styles(), которая будет обрабатывать стили проекта, конкатенировать и сжимать.
```
function styles() {
	return src('app/' + preprocessor + '/main.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('app.min.css')) // Конкатенируем в файл app.min.js
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минифицируем стили
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
	}
```

Экспортируем функцию styles() в задачу. Для этого добавим перед дефолтным экспортом exports.styles:

```
// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;
 
// Экспортируем функцию scripts() в таск scripts
exports.scripts = scripts;
 
// Экспортируем функцию styles() в таск styles
exports.styles = styles;
 
// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(scripts, browsersync, startwatch);
```
После выполнения в терминале команды gulp styles будет создан файл стилей проекта «app/css/app.min.css». 

## Слежение  за изменениями 
```
function startwatch() {
	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	
	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', styles);
}
```
И добавить функцию в дефолтный экспорт
```
// ...
 
// Экспортируем дефолтный таск с нужным набором функций
exports.default = parallel(styles, scripts, browsersync, startwatch);
```

## Слежение  за изменениями HTML
Добавляем в функцию startwatch(): 
```
function startwatch() {
	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	
	// Мониторим файлы препроцессора на изменения
	watch('app/**/' + preprocessor + '/**/*', styles);
	
	// Мониторим файлы HTML на изменения
	watch('app/**/*.html').on('change', browserSync.reload);
	}
```