# pakr-static

[Pakr](https://github.com/yieme/pakr) static asset server

## Installation

This module is installed via npm:

```sh
npm i pakr-static --save
```

## Setup

Place packages to serve in ```/public/PACKAGE_NAME/PACKAGE_VERSION/PACKAGE_NAME.EXTENSION```

Add package description to: ```/public/pakr.json```

## Run

```sh
node index.js
```

## Heroku Deploy

```sh
heroku app:create pakr-static-server
git push heroku master
```

## Rights

Copyright (C) 2015 by Yieme, License: MIT
