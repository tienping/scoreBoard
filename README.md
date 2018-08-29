This a project to show a display panel and control panel, utilizing firebase database



#### Rumble Charts
https://rumble-charts.github.io
https://rumble-charts.github.io/rumble-charts/#bars

#### Heroku Setup
-> cd [root directory]
-> heroku create
-> touch to a Procfile with the following line: web: npm run start:prod
-> heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#v[latest version, find here https://github.com/heroku/heroku-buildpack-nodejs/releases] -a [your app name]
-> git add and git commit
-> git push heroku master
-> heroku ps:scale web=1
-> heroku config:set NPM_CONFIG_PRODUCTION=false