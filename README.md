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
fa3406767012e0071f0e5fe9217727f9b7fa85a889fa6d2427b486e23e4b72f5  index.html
shasum -a 256 js/*
d09a8688f37c7442bb1e6699b46efb191d9281ef05a492586fa0f54dc4e5110a  js/sjcl.js
7cd6d05e48ae8923674c5304429873ae765cb0f884d7a71f6d49a4cda7068546  js/vesper.js
```

# Contribution policy

All contributions welcome.
