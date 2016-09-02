# [community.meteorite.bi](http://community.meteorite.bi/)

[![saiku-community-website-preview](preview.png)](http://community.meteorite.bi/)

This repository contains the source code of the website [community.meteorite.bi](http://community.meteorite.bi/). If you're looking for the source code of the project, check the official [Saiku](https://github.com/OSBI/saiku) repository.

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
# Clone this repository
$ git clone git@github.com:OSBI/saiku_community_website.git
$ cd saiku_community_website

# install dependencies
$ npm install
# run tasks and serve
$ gulp
```

### Tasks

- `gulp`: Initialize watch for changes and a server (localhost:3000);
- `gulp bower-install`: Call for bower and dependencies;
- `gulp copy-files`: Call for copy files;
- `gulp js`: Execute js files;
- `gulp stylus`: Compile stylus files;
- `gulp imagemin`: Compress image files;
- `gulp watch`: Call for watch files;
- `gulp jade`: Compile jade files;
- `gulp browser-sync`: Serve files from `/www/`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request  :)

English is the universal language nowadays, so please don't create or comment on issues using another language.

## License

[Apache License Version 2](https://github.com/OSBI/saiku_community_website/blob/master/LICENSE) © Meteorite BI
