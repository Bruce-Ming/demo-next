module.exports = {
  apps: [
    {
      name: 'app-name',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p ' + (process.env.PORT || 8567),
      watch: false,
      autorestart: true,
    },
  ],
}
