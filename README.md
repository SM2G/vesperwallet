# Vesper Wallet

An IOTA Seed generator that relies on standard Javascript crypto library.

# Use

The Wallet is served directly through Github Pages at the following address: https://sm2g.github.io/vesperwallet/

Input your secret passphrase and e-mail used as salt to generate a seed. Then transfer funds to your IOTA tangle address through the IOTA Wallet.
When you want to retrieve the funds, simply repeat the procedure to recover your secret Seed.

Please note that this is a currently a *work in progress* project.

# External components

* [Standford Javascript Crypto Library](http://bitwiseshiftleft.github.io/sjcl/)

* [Angular JS](https://angularjs.org/)

* [Skeleton](http://getskeleton.com/)

# Checksums

If you prefer to use the Wallet offline, make sure your checksums match.

```
shasum -a 256 index.html
129113fcd1f56f40ce46214727770b86f4129b2ba03e5d60f7956ec90efbf5df  index.html
shasum -a 256 js/*
d09a8688f37c7442bb1e6699b46efb191d9281ef05a492586fa0f54dc4e5110a  js/sjcl.js
7cd6d05e48ae8923674c5304429873ae765cb0f884d7a71f6d49a4cda7068546  js/vesper.js
```

# Contribution policy

All contributions welcome.
