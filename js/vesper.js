var app = angular.module('vesper', []);

app.controller('FormController', function () {
    this.passphrase = "";
    this.salt = "";
    this.title = "Vesper Wallet";

    this.reset = function() {
        this.passphrase = "";
        this.salt = "";
        document.getElementById("seed").innerHTML = "<h5>Input your passphrase and e-mail as salt to generate a seed.</br><strong>Note:</strong> This seed is generated in your browser and not sent anywhere.</h5>";
    };

    this.genSeed = function(passphrase, salt) {
        var seed = "";
        var derivedKey = sjcl.misc.pbkdf2(passphrase, salt, 50000, 256);

        for(;seed.length < 81;seed += sjcl.codec.base64.fromBits(derivedKey).replace(/[^A-Z9]+/g, '')) {};
        seed = seed.substr(1, 81)

        document.getElementById("seed").innerHTML = "<h5><code><strong>" + seed + "</strong></code>"
        + "</br>Key length: <em>" + seed.length + "</em></h5>";
    };

});
