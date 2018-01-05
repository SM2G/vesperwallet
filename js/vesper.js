var app = angular.module('vesper', []);

app.controller('FormController', function () {
    this.passphrase = "";
    this.salt = "";
    this.title = "Vesper Wallet";

    this.reset = function() {
        this.passphrase = "";
        this.salt = "";
    };

    this.genSeed = function(passphrase, salt) {
        var seed = "";
        var derivedKey = sjcl.misc.pbkdf2(passphrase, salt, 1000, 256);

        for(;seed.length < 81;seed += sjcl.codec.base64.fromBits(derivedKey).replace(/[^A-Z9]+/g, '')) {};
        seed = seed.substr(1, 81)

        document.getElementById("seed").innerHTML = "<code>" + seed + "</code>"
        + "</br>Key length: " + seed.length;
    };

});
