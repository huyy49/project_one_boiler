const fs = require('fs');
const path = require('path');

const baseFile = path.join('utils/base.html')
const copiedFile = path.join(`public/html/${process.argv[2]}.html`)
const newRoute = `app.get('/${process.argv[2]}', (req, res) => res.sendFile(html_dir + \'${process.argv[2]}.html\', { root: __dirname }))\n`

const modifyTitleTag = () => {
  const titleParam = process.argv[2];
  const newTitle = `${titleParam.charAt(0).toUpperCase()}${titleParam.slice(1)}`;

  fs.readFile(copiedFile, 'utf-8', (err, data) => {
    if (err) throw err;

    const replacedTitle = data.replace(/<title>(.*?)<\/title>/g, `<title>${newTitle}</title>`);
    fs.writeFile(copiedFile, replacedTitle, (writeErr) => {
      if (writeErr) throw writeErr;
      console.log(`Title of Screen is ${newTitle}`);
    });
  });
};

fs.copyFile(baseFile, copiedFile, (err) => {
  if (err) throw err;
  console.log('Screen Generated!');

  modifyTitleTag();
});


fs.appendFile(path.join('index.js'), newRoute, (err) => {
  if (err) throw err;
  console.log('Route Added!');
});
