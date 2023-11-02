module.exports = {
    apps: [{
      name: "yash node",
      script : "./server.js",
      watch_delay: 1000,
      watch:true,
      ignore_watch : ["node_modules", "public", "seeddata"],
      autorestart: true, // THIS is the important part, this will tell PM2 to restart your app if it falls over
      max_memory_restart: '1G'
    }]
  }