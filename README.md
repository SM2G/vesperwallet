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
790c5d963a3b4a9c98edb9041a656bcda16e2b164594e9e5531393e46123d57e  index.html
shasum -a 256 js/*
d09a8688f37c7442bb1e6699b46efb191d9281ef05a492586fa0f54dc4e5110a  js/sjcl.js
4d525bf89593c61ee7f9d3319eed317c7867cc68f2e4942dfd794ed4e5b1c91f  js/vesper.js
```

# Contribution policy

All contributions welcome.
