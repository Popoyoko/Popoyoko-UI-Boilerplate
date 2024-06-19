#!/usr/bin/env node

const { execSync } = require('child_process');

function installBoilerplate() {
  try {
    console.log('Installing popoyoko boilerplate...');
    execSync('npm install --save git@github.com:Popoyoko/popoyoko-ui.git#package popouoko-ui-token-generator', { stdio: 'inherit' });
    console.log('Installation complete.');
  } catch (error) {
    console.error('Error installing popoyoko boilerplate:', error);
    process.exit(1);
  }
}

installBoilerplate();