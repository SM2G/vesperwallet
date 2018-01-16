var app = angular.module('vesper', []);

app.controller('FormController', function () {
    this.passphrase = "";
    this.salt = "";
    this.title = "Vesper Wallet";
    this.instructions = "<h5><u>Instructions:</u>\
    <ol>\
    <li>Choose a strong, random passphrase.</li>\
    <li>Input your passphrase and e-mail as salt to generate a seed.</li>\
    <li>Note your passphrase somewhere safe.</li>\
    </ol>\
    <strong>Note:</strong> This seed is generated in your browser and not sent anywhere.</h5>";

    document.getElementById("seed").innerHTML = this.instructions;

    this.reset = function() {
        this.passphrase = "";
        this.salt = "";
        document.getElementById("seed").innerHTML = this.instructions;
    };

    this.genSeed = function(passphrase, salt) {
        var seed = "";
        var derivedKey = sjcl.misc.pbkdf2(passphrase, salt, 65536, 2048);

        for(;seed.length < 81;seed += sjcl.codec.base64.fromBits(derivedKey).replace(/[^A-Z9]+/g, '')) {};
        seed = seed.substr(1, 81)

        splittedSeed = ""
        split = seed.match(/.{1,5}/g)
        for (i = 0; i < split.length; i++) {
            splittedSeed += "<code>" + split[i] + "</code> ";
        }

        document.getElementById("seed").innerHTML = "<h5><code><strong>" + seed + "</strong></code>"
        + "</br><small><a>" + splittedSeed + "</a></small>"
        + "</br><h5>Key length: <em>" + seed.length + "</em></h5>";
    };

});
