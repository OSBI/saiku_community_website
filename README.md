# [community.meteorite.bi](http://community.meteorite.bi/)

[![saiku-community-website-preview](preview.png)](http://community.meteorite.bi/)

This repository contains the source code of the website [community.meteorite.bi](http://community.meteorite.bi/). If you're looking for the source code of the project, check the official [Saiku](https://github.com/OSBI/saiku) repository.

## Getting Started

### Installation

First of all, install the dependencies to run this website.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
# Clone this repository
$ git clone git@github.com:OSBI/saiku_community_website.git
$ cd saiku_community_website

# install dependencies
$ yarn (or npm i)
# run tasks and serve
$ gulp
```

### Tasks

- `gulp`: Initialize watch for changes and a server ([localhost:3000](http://localhost:3000/));
- `gulp assets-install`: Call to install assets;
- `gulp copy-files`: Call to copy files;
- `gulp js`: Execute js files;
- `gulp stylus`: Compile stylus files;
- `gulp imagemin`: Compress image files;
- `gulp watch`: Call to watch files;
- `gulp jade`: Compile jade files;
- `gulp favicon-install`: Call to generate favicon;
- `gulp browser-sync`: Serve files from `/www/`.

## Browser Support

We do care about it.

![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

If you want to help, please read the [Contributing](https://github.com/OSBI/saiku_community_website/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/OSBI/saiku_community_website/releases).

## License

[Apache License Version 2](https://github.com/OSBI/saiku_community_website/blob/master/LICENSE) © [Meteorite BI](http://www.meteorite.bi/)
