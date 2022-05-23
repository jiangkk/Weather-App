const { execSync } = require('child_process');

const exec = cmd => execSync(cmd, { stdio: 'inherit' });

exec('git checkout pages');
exec('git branch --set-upstream-to=origin/pages pages');
exec('git pull');
exec('git merge main --no-edit');
exec('npm i && npm run build');
exec('git add .');
exec(`git commit -am 'docs: update pages'`);
exec('git push origin pages');
exec('git checkout -');
exec('git checkout .');