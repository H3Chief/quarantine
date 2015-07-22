# Decontamination/Quarantine

1. Decontamination - system process that listens for events from other actors, which are:
 - command line tool 'dct -- git clone git@github.com/LongLiveCHIEF/decontamination'
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

