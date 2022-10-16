const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const chalk = require('chalk');

const { spawn } = require('child_process');
const handlebars = require('handlebars');
/**
 * abc-xyz => AbcXyz
 * @param {*} str
 */
const varCase = (str) =>
  str
    .replace(/-[a-z]/g, (m) => m[1].toUpperCase())
    .replace(/^.{1}/, (m) => m.toUpperCase());
const lowCase = (str) =>
  str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, '');

(async () => {
  // 获取命令传递的参数
  const components = process.argv[2];

  const dirName = lowCase(components);
  const componentName = varCase(components);
  // 生成文件夹
  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${dirName}`)], {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'));

  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName
    });

    const newPath = filePath
      .replace('scripts/template', `src/${dirName}`)
      .replace('component', dirName)
      .replace('Component', componentName)
      .replace('.hbs', '');

    await fs.writeFile(newPath, result);

    console.log(chalk.green(`write ${newPath} success`));
  });
})();
