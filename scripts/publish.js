const { execSync } = require('child_process');

const exec = cmd => execSync(cmd, { stdio: 'inherit' });

exec('git checkout pages');
exec('git pull origin main');
exec('npm i && npm run build');
exec('git add . && git commit -m "docs: update pages"');
exec('git push origin pages');
exec('git checkout -');