module.exports = {
  apps : [{
    name: 've-project',
    script: 'npm',
    args: 'run start:production',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'zhang_xinyu',
      host : '120.79.4.192',
      port:  '22222',
      ref  : 'origin/master',
      repo : 'git@github.com:zhang1024899756/ve-project.git',
      path : '/www/ve-project',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
