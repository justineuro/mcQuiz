## txt2aes and aes2txt
An example for encrypting/decrypting a file containing math codes for TeXZilla is given.  The encrypted lines are constructed into arrays and appended to the `setDat-tz-aes.js` folder inside the `js` folder of the main project directory.

### To encrypt
```bash
./txt2aes q-tz.txt
```
The output file is `q-tz-aes.txt`.

### To decrypt
```
./aes2txt q-tz-aes.txt
```

The input file needs a -aes.txt suffix+extension.

### MathJax example
The files 'q-jax.txt`, `q-jax-aes.txt`, and `q-jax.dec.txt` are used or obtained when the redering of the mathematics is done using MathJax.