const translationMap = {
    ui: { // Static UI elements
        title: {
            scriptLocation: {
                en: 'Script Location',
                zh: '脚本位置',
                ru: 'Расположение файла'
            },
            oneFile: {
                en: 'Onefile',
                zh: '单文件',
                ru: 'Один файл'
            },
            consoleWindow: {
                en: 'Console Window',
                zh: '控制台窗口',
                ru: 'Консольное приложение'
            },
            icon: {
                en: 'Icon',
                zh: '图标',
                ru: 'Значек'
            },
            additionalFiles: {
                en: 'Additional Files',
                zh: '附加文件',
                ru: 'Дополнительные файлы'
            },
            advanced: {
                en: 'Advanced',
                zh: '高级',
                ru: 'Дополнительно'
            },
            settings: {
                en: 'Settings',
                zh: '设置',
                ru: 'Настройки'
            },
            currentCommand: {
                en: 'Current Command',
                zh: '当前命令',
                ru: 'Текущая команда'
            },
            output: {
                en: 'Output',
                zh: '输出',
                ru: 'Вывод'
            },
            specificOptions: {
                en: 'auto-py-to-exe Specific Options',
                zh: 'auto-py-to-exe 特定的选项',
                ru: 'auto-py-to-exe Особые параметры'
            },
            outputDirectory: {
                en: 'Output Directory',
                zh: '输出路径',
                ru: 'Выходная папка'
            },
            increaseRecursionLimit: {
                en: 'Increase Recursion Limit',
                zh: '增加递归限制',
                ru: 'Увеличить предел рекурсии'
            },
            manuallyProvideOptions: {
                en: 'Manually Provide Options',
                zh: '手动提供选项',
                ru: 'Укажите параметры вручную'
            },
            manualArgumentInput: {
                en: 'Manual Argument Input',
                zh: '手动参数输入',
                ru: 'Ручной ввод аргумента'
            },
            configuration: {
                en: 'Configuration',
                zh: '配置',
                ru: 'Конфигурация'
            }
        },
        button: {
            browse: {
                en: 'Browse',
                zh: '浏览',
                ru: 'Открыть'
            },
            oneDirectory: {
                en: 'One Directory',
                zh: '单目录',
                ru: 'Одна папка'
            },
            oneFile: {
                en: 'One File',
                zh: '单文件',
                ru: 'Один файл'
            },
            consoleBased: {
                en: 'Console Based',
                zh: '基于控制台的',
                ru: 'На основе консоли'
            },
            windowBased: {
                en: 'Window Based (hide the console)',
                zh: '基于窗口的 (隐藏控制台)',
                ru: 'На основе окна (скрыть консоль)'
            },
            addFiles: {
                en: 'Add Files',
                zh: '添加文件',
                ru: 'Добавить файлы'
            },
            addFolder: {
                en: 'Add Folder',
                zh: '添加目录',
                ru: 'Добавить папку'
            },
            addBlank: {
                en: 'Add Blank',
                zh: '添加空白',
                ru: 'Добавить пустое'
            },
            importConfig: {
                en: 'Import Config From JSON File',
                zh: '从JSON文件导入配置',
                ru: 'Импортировать конфигурацию из файла JSON'
            },
            exportConfig: {
                en: 'Export Config To JSON File',
                zh: '将配置导出到JSON文件',
                ru: 'Экспорт конфигурации в файл JSON '
            },
            convert: {
                en: 'Convert .py to .exe',
                zh: '将.PY转换为.EXE',
                ru: 'Преобразование .py в .exe'
            },
            openOutputFolder: {
                en: 'Open Output Folder',
                zh: '打开输出目录',
                ru: 'Открыть папку вывода'
            },
            enable: {
                en: 'Enable',
                zh: '开启',
                ru: 'Включить'
            }
        },
        links: {
            helpPost: {
                en: 'Help Post',
                zh: '帮助帖子',
                ru: 'Помощь'
            }
        },
        placeholders: {
            pathToFile: {
                en: 'Path to file',
                zh: '文件路径',
                ru: 'Путь к файлу'
            },
            icoFile: {
                en: '.ico file',
                zh: '图标路径',
                ru: '.ico файл'
            },
            directory: {
                en: 'DIRECTORY',
                zh: '目录',
                ru: 'КАТАЛОГ'
            },
            arguments: {
                en: 'ARGUMENTS',
                zh: '参数',
                ru: 'АРГУМЕНТЫ'
            },
        },
        helpText: {
            outputDirectory: {
                en: 'The directory to put the output in. Will be created if it doesn\'t exist',
                zh: '用于放置输出的目录。如果不存在，将创建该目录',
                ru: 'Каталог, в который будет помещен результат. Будет создан, если он не существует.'
            },
            increaseRecursionLimit: {
                en: 'Having this enabled will set the recursion limit to 5000 using sys.setrecursionlimit(5000).',
                zh: '启用此功能将使用sys.setrecursionlimit（5000）将递归限制设置为5000。',
                ru: 'Если этот параметр включен, ограничение рекурсии будет установлено на 5000 с помощью sys.setrecursionlimit (5000).'
            },
            manualArgumentInput: {
                en: 'Inject raw text into the generated command.',
                zh: '将原始文本插入到生成的命令中。',
                ru: ''
            }
        },
        notes: {
            oneFileAdditionalFilesNote: {
                en: 'Be careful when using additional files with onefile mode;\n' +
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    'and update your code to work with PyInstaller.',
                zh: '使用单文件模式的附加文件时要小心;\n'+
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">read this</a>\n' +
                    '并更新您的代码以使用PyInstaller。',
                ru: 'Будьте осторожны при использовании дополнительных файлов в режиме одного файла;\n' +
                    '<a href="https://stackoverflow.com/a/13790741/" style="text-decoration: none;">прочтите это</a>\n' +
                    'и обновите свой код для работы с PyInstaller.'
            },
            rootDirectory: {
                en: 'If you want to put files in the root directory, put a period (.) in the destination.',
                zh: '如果要将文件放到根目录中，请在目标目录中输入句点(.)。',
                ru: 'Если вы хотите поместить файлы в корневой каталог, поставьте точку (.) В месте назначения.'
            },
            somethingWrongWithOutput: {
                en: 'Something wrong with your exe? Read\n' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    this post on how to fix common issues\n' +
                    '</a>\n' +
                    'for possible solutions.',
                zh: '你的exe有问题? 阅读' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    这篇文章是关于如何修复常见问题的\n' +
                    '</a>\n' +
                    '寻找可能的解决方案。',
                ru: 'Что-то не так с вашим exe-файлом? Прочтите\n' +
                    '<a href="https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=application_link&utm_campaign=auto_py_to_exe_help&utm_content=bottom" target="_blank">\n' +
                    '    этот пост о том, как исправить распространенные проблемы\n' +
                    '</a>\n' +
                    'для возможных решений.'
            }
        }
    },
    // Elements dynamically added to the DOM
    dynamic: {
        title: {
            // For the usage of constants.js:advancedSections
            generalOptions: {
                en: 'General Options',
                zh: '常规选项',
                ru: 'Общие настройки'
            },
            whatToBundleWhereToSearch: {
                en: 'What to bundle, where to search',
                zh: '捆绑什么，搜索哪里',
                ru: 'Что связать, где искать'
            },
            howToGenerate: {
                en: 'How to generate',
                zh: '如何生成',
                ru: 'Как сгенерировать'
            },
            windowsSpecificOptions: {
                en: 'Windows specific options',
                zh: 'Windows特定选项',
                ru: 'Параметры, специфичные для Windows'
            },
            windowsSideBySideAssemblySearchingOptions: {
                en: 'Windows Side-by-side Assembly searching options (advanced)',
                zh: '窗口并排汇编搜索选项(高级)',
                ru: 'Параметры поиска параллельных сборок Windows (дополнительно)'
            },
            macOsxSpecificOptions: {
                en: 'Mac OS X specific options',
                zh: 'Mac OS X特定选项',
                ru: 'Особые параметры для Mac OS X'
            },
            rarelyUsedSpecialOptions: {
                en: 'Rarely used special options',
                zh: '很少使用的特殊选项',
                ru: 'Редко используемые специальные опции'
            },
            other: {
                en: 'Other',
                zh: '其他',
                ru: 'Другие'
            },
        },
        button: {
            // For the usage of interface.js_createSubSectionInAdvanced
            browseForFile: {
                en: 'Browse for File',
                zh: '浏览文件',
                ru: 'Добавить файла'
            },
            browseForFolder: {
                en: 'Browse for Folder',
                zh: '浏览文件夹',
                ru: 'Добавить папку'
            },
            enable: {
                en: 'Enable',
                zh: '开启',
                ru: 'Включить'
            },
            converting: {
                en: 'Converting...',
                zh: '转换中······',
                ru: 'Конвертация..'
            },
            clearOutput: {
                en: 'Clear Output',
                zh: '清除输出f',
                ru: 'Очистить Вывод'
            },
        },
        modal: {
            configModalTitle: {
                en: 'Override current configuration?',
                zh: '覆盖当前配置？',
                ru: 'Переопределить текущую конфигурацию?'
            },
            configModalDescription: {
                en: 'All previously inserted values will be erased.',
                zh: '所有先前插入的值将被删除。',
                ru: 'Все ранее вставленные значения будут удалены.'
            },
            configModalConfirmButton: {
                en: 'Confirm',
                zh: '确认',
                ru: 'Подтвердить'
            },
            configModalCancelButton: {
                en: 'Cancel',
                zh: '取消',
                ru: 'Отмена'
            }
        }
    },
    // Things like alerts
    nonDom: {
        alert: {
            noScriptsLocationProvided: {
                en: 'You have not provided your scripts location.\nPlease enter this at the top of the page.',
                zh: '您尚未提供脚本位置。\n请在页面顶部输入。',
                ru: 'Вы не указали местоположение своих скриптов. \nВведите это в верхней части страницы.'
            },
            overwritePreviousOutput: {
                en: 'This action will overwrite a previous output in the output folder.\nContinue?',
                zh: '此操作将覆盖输出文件夹中以前的输出。\n是否继续？',
                ru: 'Это действие перезапишет предыдущий вывод в выходной папке. \nПродолжить?'
            }
        },
    }
};

const translate = (language) => {
    if (language === undefined) {
        language = currentLanguage;
    }

    // Check that the language is supported
    language = _checkLanguageIsSupportedOrDefault(language);
    currentLanguage = language;

    // Update text inside elements
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach(element => {
        const keys = element.dataset.i18n.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        // If there is a translation, translate otherwise use the default language
        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.innerHTML = translationBlock[language];
        } else {
            element.innerHTML = translationBlock[_defaultLanguage];
        }
    });

    // Update placeholders
    const placeholdersToTranslate = document.querySelectorAll("[data-i18n_placeholder]");
    placeholdersToTranslate.forEach(element => {
        const keys = element.dataset.i18n_placeholder.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.placeholder = translationBlock[language];
        } else {
            element.placeholder = translationBlock[_defaultLanguage];
        }
    });

    // Update titles
    const titleToTranslate = document.querySelectorAll("[data-i18n_title]");
    titleToTranslate.forEach(element => {
        const keys = element.dataset.i18n_title.split(".");
        const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

        if (translationBlock !== undefined && translationBlock[language] !== undefined) {
            element.title = translationBlock[language];
        } else {
            element.title = translationBlock[_defaultLanguage];
        }
    });
};

const _getLanguage = () => {
    const language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
          navigator.language || // All browsers
          navigator.userLanguage; // IE <= 10

    let shortLang = language;
    if (shortLang.indexOf('-') !== -1) {
        shortLang = shortLang.split('-')[0];
    }
    if (shortLang.indexOf('_') !== -1) {
        shortLang = shortLang.split('_')[0];
    }

    return shortLang;
};

const _checkLanguageIsSupportedOrDefault = (language) => {
    if (supportedLanguages.map(x => x.code).indexOf(language) !== -1) {
        return language;
    } else {
        return _defaultLanguage;
    }
};

const getTranslation = (path) => {
    const keys = path.split(".");
    const translationBlock = keys.reduce((obj, i) => obj[i], translationMap);

    if (translationBlock !== undefined && translationBlock[currentLanguage] !== undefined) {
        return translationBlock[currentLanguage];
    } else {
        return translationBlock[_defaultLanguage];
    }
};

const _defaultLanguage = 'en';
const supportedLanguages = [
    {
        name: 'English',
        code: 'en',
    },
    {
        name: 'Chinese Simplified (简体中文)',
        code: 'zh',
    },
    {
        name: 'Russian (Русский)',
        code: 'ru',
    },
];
let currentLanguage = _checkLanguageIsSupportedOrDefault(_getLanguage()); // Keeps track of the current language
