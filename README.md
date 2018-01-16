# Vesper Wallet

An IOTA Seed generator that relies on standard Javascript crypto library.

# Use

The Wallet is served directly through Github Pages at the following address: https://sm2g.github.io/vesperwallet/

Input your secret passphrase and e-mail used as salt to generate a seed. Then transfer funds to your IOTA tangle address through the IOTA Wallet software.
When you want to retrieve the funds, simply repeat the procedure to recover your secret Seed.

For a complete secure usage, here's my advice:

1. Perform a `git clone https://github.com/SM2G/vesperwallet.git` of the project and review the code. Make sure I didn't place any backdoor.
1. Compare SHA256 signatures of the HTML file and [sjcl](http://bitwiseshiftleft.github.io/sjcl/) library to ensure I haven't modified it.
1. Go offline.
1. Use the Vesper Wallet locally on your computer, input your secret passphrase and note the generated seed.

Repeat the same procedure to recover the seed when needed.

# External components

* [Standford Javascript Crypto Library](http://bitwiseshiftleft.github.io/sjcl/)

* [Angular JS](https://angularjs.org/)

* [Skeleton](http://getskeleton.com/)

# Checksums

If you prefer to use the Wallet offline, make sure your checksums match.

```
shasum -a 256 index.html
ea87ffad9e51cd802d091db0e84356ea43a259190b18f2d66f524b8dd3f99b09  index.html
shasum -a 256 js/*
d09a8688f37c7442bb1e6699b46efb191d9281ef05a492586fa0f54dc4e5110a  js/sjcl.js
433a6984826f8d1167adb6290352668e7ad4d799083200e41b37db0e82ae3460  js/vesper.js
```

# Contribution policy

All contributions welcome.
