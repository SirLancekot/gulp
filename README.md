
## Получаем права администратора
```
sudo su
```
## Обновление пакетов и установка Node.js

```
apt update
apt install nodejs npm
```
## Если возникла ошибка 
```
sudo dpkg --configure -a
```
## Cоставляющие  Gulp ( проверка и установка)
```
node --version
npm --version
npx --version
```
## Устанавливаем   Gulp 
```
npm install --global gulp
```
## Создаем папку проекта и открываем её в терминале, чтобы создать  в ней package.json
```
npm install --global gulp
```
Далее 
```
package name: (gulp) gulp
```
## Заполняем основные графы.
```
package name: наименование
description (описание)
git repository ( репозиторий на гит)
keywords(ключевые слова )
author (автор)
```

## devDependencies 
```
npm install --save-dev gulp
```
## Проверка версии
```
gulp --version
```
## Создать набрать в  gulpfile 
```
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```
В терминале  VS code ввести  gulp

Если результат такой 
```
[17:21:09] Using gulpfile /opt/lampp/htdocs/gulp/gulpfile.js
[17:21:09] Starting 'default'...
[17:21:09] Finished 'default' after 2.16 ms
```
То Gulp настроен.

  ## Полезные ссылки
  ```
  https://gulpjs.com/docs/en/getting-started/quick-start/#install-the-gulp-command-line-utility
  ```
  
  ```
  https://routerus.com/how-to-install-node-js-on-ubuntu-20-04/
  ```
  
