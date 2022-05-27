

### 安装本地开发环境

// TODO

### 初始化项目

// TODO

### 配置代码格式化

1. vscode 安装插件`eslint`和`prettier`

2. 编辑`.eslintrc.js`

   ```
   //.eslintrc.js
   module.exports = {
     parser: 'babel-eslint',
     env: {
       es6: true,
     },
     extends: ['standard', 'plugin:prettier/recommended'],
     globals: {
       Atomics: 'readonly',
       SharedArrayBuffer: 'readonly',
     },
     parserOptions: {
       ecmaFeatures: {
         jsx: true,
         legacyDecorators: true,
       },
       ecmaVersion: 2018,
       sourceType: 'module',
     },
     plugins: ['react'],
   
     rules: {
       /**
        * 这里可以设置规则：
        * "off" or 0 - 关闭规则
        * "warn" or 1 - 将规则作为警告打开（不影响退出代码）
        * "error" or 2 - 将规则作为错误打开（退出代码为1）
        */
       'no-unused-vars': 0, //不能有声明后未被使用的变量或参数
       'react/sort-comp': 1, //强制组件方法顺序
       camelcase: 2, //强制驼峰法命名
       'prettier/prettier': [
         'error',
         // 如果插件配置中修改了相关选项，
         // 则必须在此添加相对应的自定义规则否则就会出现编辑器格式化后ESlint检查无法通过的情况。
         {
           printWidth: 120,
         },
       ],
     },
   }
   ```

3. 编辑`.prettierrc.js`

   ```
   //.prettierrc.js
   module.exports = {
     printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80
     tabWidth: 2, //一个tab代表几个空格数
     useTabs: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
     singleQuote: true, //字符串是否使用单引号，默认为false，使用双引号
     semi: false, //行位是否使用分号，默认为true
     trailingComma: 'all', //是否使用尾逗号，有三个可选值"<none|es5|all>"
     bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
     wrapAttributes: false, //强制换行属性（当它有多个时，默认值为false）
     sortAttributes: true, //按字母顺序排序属性（默认值：false）
     jsxBracketSameLine: false, // //将>多行JSX元素放在最后一行的末尾，而不是单独放在下一行
     arrowParens: 'avoid', //箭头函数参数只有一个时是否要有小括号
     endOfLine: 'auto', // 兼容Mac与Windows文本文件换行符的序列监测规则
   }
   ```

4. 编辑`.vscode/settings.json`

   ```
   {
   	"editor.tabSize": 2,
   	// 默认使用prettier格式化支持的文件
   	"editor.defaultFormatter": "esbenp.prettier-vscode",
   	"editor.codeActionsOnSave": {
   		//自动整理页面所有import引用，包括删除未使用到的import、多import归类整理、排序等
   		"source.organizeImports": true,
   		"source.fixAll": true
   	},
   	//每次保存的时候自动格式化
   	"editor.formatOnSave": true,
   	//每次保存的时候将代码按eslint格式进行修复
   	// "eslint.autoFixOnSave": true,
   	"window.zoomLevel": 0
   }
   ```

**完成以上步骤即可实现保存代码自动格式化，保证大家的代码风格统一，具体的细节可以根据实际情况修改**