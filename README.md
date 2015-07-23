# Decontamination/Quarantine

1. Decontamination - system process that listens for events from other actors, which are:
 - command line tool `dct -- git clone git@github.com/LongLiveCHIEF/decontamination`
 - Native OS client with html5 interface for installing deps, or pointing to a manifest and installing/managing manifest
 - IDE Plugin that binds to the system process 
2. Calls out to the quarantine proxy to check against blacklist
3. Quarantine is an admin dashboard that
 - lets admins search/explore for installed software by user, machine
 - configure blacklists by url, name, license
 - set whitelists by url, or for users on a package/url
4. The Quarantine API:
 - hashes files to look for malicious software
 - looks for README's, LICENSE, and VERSION files, or manifest entries
 
## Stories

## Contributing

Contribution is open to all. For feature requests, please open an issue. PR's accepted, but must follow the following javascript style rules:

- no use of es6 classes - period
- use commonjs style require only
- any new dependency must come with a description of why the dependency is required or useful enough to be included

### Development Setup

Requires React DevTools for the full debugging experience

1. Fork the repo
2. Clone your fork
3. Run `npm install` from inside the cloned project
4. Run `npm start` to build and open the app in dev mode
