## <img alt="mcQuiz Logo" src="res/mcQuiz-lib.gif" style="margin-bottom: -5px" height="50" width="50" valign="middle"></img>**mcQuiz**

[**mcQuiz**](https://justineuro.github.io/mcQuiz) is a multiple-choice question-and-answer web app.  It comes with a number of versions depending on how mathematical expressions are rendered ([TeXZilla](https://github.com/fred-wang/TeXZilla) or [MathJax](https://mathjax.org)) and whether the question-and-answer data is encrypted (with or without [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) encryption done using [CryptoJS](https://code.google.com/p/crypto-js)).  

A demo can be found at [https://justineuro.github.io/mcQuiz](https://justineuro.github.io/mcQuiz).

## Using as a Template
One can easily modify the available datasets by editing the question-and-answer data file, e.g., `setDat-mc-tz-noaes.js` and `setDat-mc-tz-aes.js`, that are found inside the `js` folder under the main directory:

1. Modify the 2nd and 3rd lines of the question-and-answer data file to add more topics.  Simply add entries to the data labels array (`datList`) and the topics array (`topicsList`).
2. Modify, as needed, the 4th line to set the `aes` indicator (0 for no encryption, 1 for AES-encrypted).
3. Modify the 5th line, as needed, to indicate how math rendering will be done (`texzilla` for TeXZilla or `mathjax` for MathJax).
4. Add the additional datasets at the bottom of question-and-answer data set file (`setDat-mc-tz-aes.js`) as arrays.
5. One may opt to randomize the questions by using the sort() and compare function.  See the examples given at the end of each data array already in `setDat-mc-tz-aes.js`.


## Acknowledgements
Special thanks to [W3Schools](https://www.w3schools.com/) for their tutorials on [html](https://www.w3schools.com/html), [javascript](https://www.w3schools.com/js), [css](https://www.w3schools.com/css), and [bootstrap](https://www.w3schools.com/bootstrap); [Bootstrap, Inc.](http://getbootstrap.com) and [Bootstrap Live Customizer](https://www.bootstrap-live-customizer.com) for the green cerulean-derived style sheet themes; JS Foundation et al. for the [jQuery 3.3.1](https://jquery.com/) Javascript Library; Jeff Mott for [CryptoJS v.3.2.1](https://code.google.com/p/crypto-js); Fred Wang for [TeXZilla](https://github.com/fred-wang/TeXZilla); Dave Gandy for the [Font Awesome 4.7.0](http://fontawesome.io) icons; [OpenSSLWiki](https://wiki.openssl.org/index.php/Command_Line_Utilities) and [OpenSSL Command-Line HOWTO](https://www.madboa.com/geek/openssl/) by Paul Heinlein for infomation on AES-encryption using `openssl enc`; [StackOverflow](https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click) [user:nico](https://stackoverflow.com/users/2654866/nico) for the `smoothScroll.js` script; [user:ovidb](https://stackoverflow.com/users/1828653/ovidb), [user:wenceslaus](https://stackoverflow.com/users/6220986/wenceslaus), [user:tomas-kirda](https://stackoverflow.com/users/88662/tomas-kirda), and [user:miro](https://stackoverflow.com/users/559079/miro) for their answers to [javascript-string-encryption-and-decryption](https://stackoverflow.com/questions/18279141/javascript-string-encryption-and-decryption); [user:paul-fournel](https://stackoverflow.com/users/1621981/paul-fournel) and [user:mtyson](https://stackoverflow.com/users/467240/mtyson) for their answers to [how-do-i-make-javascript-beep](https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep) from which `coinBump.js` is based; [user:kornel](https://stackoverflow.com/users/27009/kornel), [user:basil-bourque](https://stackoverflow.com/users/642706/basil-bourque), and [user:456584](https://stackoverflow.com/users/456584/user456584) for their answers to [sound-effects-in-javascript-html5](https://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5); [Simple sounds](https://flukeout.github.io/simple-sounds/) for the `coin.ogg` and `bump.ogg` answer audio; The Document Foundation for [LibreOffice](https://www.libreoffice.org/en), [Poppler Developers](http://poppler.freedesktop.org) for `pdftoppm` and Dmitry Groshev, Mark Tyler, Xiaolin Wu et. al. for [mtPaint](http://mtpaint.sourceforge.net/), [ImageMagick](https://www.imagemagick.org/) `convert`, ---these softwares were employed for generating the [**mcQuiz**](https://justineuro.github.io/mcQuiz) [**icon**](res/mcQuiz-lib.gif); Colomban Wendling, Nick Teleaven et al. for [Geany 1.28 IDE](http://www.geany.org/).  Much thanks, too, to the [Debian Project](https://www.debian.org) for the Debian 8 (Jessie) GNU/Linux OS, and [GitHub](https://github.com) for its generosity in providing space for [this project](https://github.com/justineuro/mcQuiz-tz-aes).  

## License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"><b>mcQuiz-tz</b></span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/justineuro/" property="cc:attributionName" rel="cc:attributionURL">Justine Leon A. Uro</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/justineuro/mcQuiz" rel="dct:source">https://github.com/justineuro/mcQuiz</a>
