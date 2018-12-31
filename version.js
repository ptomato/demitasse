const { writeFileSync, copyFileSync } = require('fs');

const PKG = require('./package.json');
['bdd', 'run', 'tap', 'pretty', 'json'].forEach((mod) => {
  const BNDL = require(`./${mod}/package.json`);
  BNDL.version = PKG.version;
  writeFileSync(`./${mod}/package.json`, JSON.stringify(BNDL, undefined, '  '));
  copyFileSync('README.md', `./${mod}/README.md`);
  copyFileSync('LICENSE.md', `./${mod}/LICENSE.md`);
  copyFileSync('RATIONALE.md', `./${mod}/RATIONALE.md`);
});
copyFileSync('README.md', `./run/README.md`);
copyFileSync('LICENSE.md', `./run/LICENSE.md`);
copyFileSync('RATIONALE.md', `./run/RATIONALE.md`);
