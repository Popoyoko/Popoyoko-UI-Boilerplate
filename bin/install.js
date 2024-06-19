const { execSync } = require('child_process');
const path = require('path');
const readline = require('readline');

function getUserInput(prompt, defaultValue) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    if (defaultValue) {
      process.stdout.write(`\x1b[2m${defaultValue}\x1b[0m`);
      process.stdout.write('\n');
    }

    rl.question(prompt, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function installBoilerplate() {
  try {

    const defaultProjectName = 'my-popoyoko-project'; 
    const projectName = await getUserInput(`Enter a name for your project folder (default: ${defaultProjectName}): `, defaultProjectName);

    console.log(`Creating popoyoko boilerplate project in "${projectName}"...`);

    execSync(`mkdir ${projectName}`);
    process.chdir(projectName);

    execSync('npm install --save git@github.com:Popoyoko/popoyoko-ui.git#package popoyoko-ui-token-generator', { stdio: 'inherit' });

    console.log('Installation complete.');
  } catch (error) {
    console.error('Error installing popoyoko boilerplate:', error);
    process.exit(1);
  }
}

installBoilerplate();
