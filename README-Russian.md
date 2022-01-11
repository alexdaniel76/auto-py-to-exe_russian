<h1 align="center">Auto PY to EXE</h1>
<p align="center">Конвертер .py в .exe с использованием простого графического интерфейса и <a href="https://www.pyinstaller.org/">PyInstaller</a> на Python.</p>

<p align="center">
    <img src="https://nitratine.net/posts/auto-py-to-exe/feature.png" alt="Empty interface">
</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI Version"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI Supported Versions"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="License"></a>
    <a href="https://pepy.tech/project/auto-py-to-exe"><img src="https://static.pepy.tech/badge/auto-py-to-exe/month" alt="Downloads Per Month"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Supported Platforms"></a>
</p>

Чтобы прочитать README на английском языке, [нажмите](./README.md)

## Начало работы

### Необходимые условия

- Python : 3.5-3.9

_Чтобы интерфейс отображался на изображениях, вам понадобится Сhrome. Если Сhrome не установлен или не поставлен, будет использоваться браузер по умолчанию._

> Как и [PyInstaller 4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), Python 2.7 больше не поддерживается. Прочитай "[Python 2.7 Support](#python-27-support)" ниже приведены инструкции по использованию этого инструмента с Python 2.7.

### Установка и использование

#### Установка через [PyPI](https://pypi.org/project/auto-py-to-exe/)

Вы можете установить этот проект с помощью PyPI:

```
$ pip install auto-py-to-exe
```

Затем, чтобы запустить его, выполните следующие действия в терминале:

```
$ auto-py-to-exe
```

### Установка через [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)

```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```

Затем, чтобы запустить его, выполните следующие действия в терминале:

```
$ auto-py-to-exe
```

#### Запуск локально через [Github](https://github.com/brentvollebregt/auto-py-to-exe) (без установки)

Вы можете запустить этот проект локально, выполнив следующие действия:

1. Клонировать / скачать [репозитории](https://github.com/brentvollebregt/auto-py-to-exe)
2. Откройте cmd / terminal и перейти в проект
3. Выполнять `python -m pip install -r requirements.txt`

Теперь, чтобы запустить приложение, выполните `python -m auto_py_to_exe`. Откроется окно Chrome в режиме приложения, в котором запущен проект.

> Убедитесь, что вы находитесь в каталоге ниже auto_py_to_exe (вы будете после шага 3) при вызове `python -m auto_py_to_exe`, или вам нужно будет ссылаться на папку auto_py_to_exe абсолютно / относительно того места, где вы сейчас находитесь.

## Использование приложения

1. Выберите расположение файла (вставьте или используйте проводник)
   - Контур станет синим, когда файл существует
2. Выберите другие параметры и добавьте такие вещи, как значок или другие файлы
3. Нажмите большую синюю кнопку внизу, чтобы конвертировать
4. Найдите свои преобразованные файлы в /на выходе после завершения

_Легко. :)_

### Аргументы

Использование: `auto-py-to-exe [-nc] [-c [CONFIG]] [-o [PATH]] [filename]`

| Аргумент                       | Тип        | Описание                                                                                                                                   |
| ------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| filename                       | positional | Предварительно заполните поле «Расположение файла» в пользовательском интерфейсе.                                                          |
| -nc, --no-chrome               | optional   | Откройте пользовательский интерфейс, используя браузер по умолчанию (которым может быть Chrome). Хром искать не буду.                      |
| -nu, --no-ui                   | optional   | Не пытайтесь открыть пользовательский интерфейс в браузере и просто распечатайте адрес, по которому можно получить доступ к приложению.    |
| -c [CONFIG], --config [CONFIG] | optional   | Предоставьте файл конфигурации (json) для предварительного заполнения пользовательского интерфейса. Их можно создать на вкладке настроеки. |
| -o [PATH], --output-dir [PATH] | optional   | Установите выходной каталог по умолчанию. Это все еще можно изменить в пользовательском интерфейсе.                                        |

> Если вы запускаете этот пакет локально, вам нужно будет вызвать `python -m auto_py_to_exe` вместо `auto-py-to-exe`

### Конфигурации

Вместо того, чтобы вставлять одни и те же данные в пользовательский интерфейс снова и снова, вы можете экспортировать текущее состояние пользовательского интерфейса, перейдя в раздел «Импорт и экспорт конфигурации» в нижней части расширенной вкладки и экспортировав строку JSON в буфер обмена или файл. Затем его можно снова импортировать в пользовательский интерфейс, чтобы заново заполнить все поля.

## Видео

Если вам нужно что-то наглядное, чтобы помочь вам начать, [я сделал видео для первоначальной версии этого проекта](https://youtu.be/OZSZHmWSOeM); некоторые вещи могут отличаться, но по-прежнему применяются те же концепции.

## Проблемы с использованием инструмента

Если у вас возникли проблемы с упакованным исполняемым файлом или с этим инструментом в целом, я рекомендую вам прочитать [мое сообщение в блоге о распространенных проблемах при использовании auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). В этом посте рассказывается о том, что вам следует знать об упаковке скриптов Python, и об исправлениях, которые обычно идут не так.

## Python 2.7 Поддержка

Начиная с [PyInstaller v4.0](https://github.com/pyinstaller/pyinstaller/releases/tag/v4.0), выпущенного 9 августа 2020 г., Python 2.7 больше не поддерживается; хотя вы все еще можете использовать этот инструмент с Python 2.7, установив более старую версию PyInstaller. [PyInstaller v3.6](https://github.com/pyinstaller/pyinstaller/releases/tag/v3.6) была последней версией, поддерживающей Python 2.7; чтобы установить это, сначала удалите все существующие версии PyInstaller, а затем выполните `python -m pip install pyinstaller==3.6`.

## Тестирование

Тесты находятся в папке `tests/` и запускаются с помощью pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Скриншоты

| <!-- -->                                                                                                                                             | <!-- -->                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png)                | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png)    |
