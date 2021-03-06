// create arrays for dataset labels and questions topics
datList = [ 'formulas', 'trivia', 'arithmetic', 'algebra', 'trigonometry', 'calculus', 'mensuration', 'linear algebra' ];
topicsList = [ 'Formulas', 'Trivia', 'Arithmetic', 'Algebra', 'Trigonometry', 'Calculus', 'Mensuration', 'Linear Algebra' ];
aes = 1; // 0 for no encryption, 1 for AES-encrypted
tex = "mathjax"; //either texzilla or mathjax

// create array of paired dataset and topic
pairedTopicsList = [];
for (var ind = 0; ind < datList.length; ind++) {
	pairedTopicsList[ind] = [datList[ind], topicsList[ind]];
}

/* create dataset array for each dataset (see datList above);
 * randomize using sort() and compare function */
formulas = [ 
["U2FsdGVkX1+AfMJiTIU/VvHxQ2cFMFk3iwNkCs2F46qXQBlt6xgP65SyRY0Q8oTxG/UyZKGewd9gjNa1NFYkmQ==",
"U2FsdGVkX18HFZ0g/jE12QJF/H7EaMsDRGVO74p9Epgy4I2sX/9k9frkjdsEE/FPSmAh6ADutWrFe18KJw99oSqgFxwfLQfuu5rladjypGljRf01iQKXWMa1A0rT0FR7",
 "U2FsdGVkX1/tAUIfI2D8vIkxLsucrBVYaQg6PC5x+oQ="], 
["U2FsdGVkX18tbETYPRCc5Rem8RNEeKFmMHkE/aVhsD/MhbYIn0PteiMFVxHQOpfyGOyALRy1FayLYw+McRIZbg==",
"U2FsdGVkX1+le2rhweUmVBH3AMDrJKOE0m9xxQh+Z5kjw7MpTtwqhVwFpf9KuF8zxn+D18XUh4XJ2pWXUwxEcYGva5H6kpwU8nM+3NSpiUvgNNLEZySAiO1Ym+L03ED3",
 "U2FsdGVkX1+ZcbTU9Js2E97/wtURonxcx+krTTsNbzI="], 
["U2FsdGVkX18wL+8fWljUWufLt1fUQeoMcc1Xw/hbO+VDBuCHIJRIsM2WbCkyxdjq",
"U2FsdGVkX1+ZqyYA3CRj/KHwhktqHqjpzmwkK1j8jE5w5PT6EG7LtsnKZWIobciOM9vcSyZZCxZ4hExrJGm4NkmfAoHMrJSbQVjYs+HVNJbzFbpbx6+cN9nyajj0FK2du9ycapVJFjJikwVScU+w+CKjsC7/N2lAZq4KNr3Q87U=",
 "U2FsdGVkX1+Y3bf/Ps/4+xoXX5sSvBtdiYHkHk/v7fU="], 
];
formulas = formulas.sort(function(a, b){return 0.5 - Math.random()});

trivia = [ 
["U2FsdGVkX18rCp5tQ/dX97wHsnUe+JroUsfXOSsaHRd/P5i6ZFr2d0UacuK+reci",
"U2FsdGVkX1+NcbMwgM3mlFmbyKMiApQrhxM12xVUldbWsrO4zrUdeeUcCNx+Ro0bgSaDq7jQfRwsCST12VHxJkSlEIQzb4K1xfGIIS5zG9Cbh5SOBrSXEN3EXGhQkK2VFpR7KwdNrmLhOH2atUshv2LMZFw8DTBJRps+kYnQJ7E=",
 "U2FsdGVkX194yNuiwNmvcxtw5U9MI7/+cN/QGZhq23s="], 
["U2FsdGVkX1/ajUYooEW++ZSh0IT6al6nF+dDMRk/3x3NLbBPSZfA5sIZfYnjk2G1",
"U2FsdGVkX1/YyZtywSbq0qhWEK2DgshJ0BdTwxd7iX3QXw7V4za3zvbujFX61v7Jo10MgH57O4UfqCDlA/aAufbK8dDYNqHhdkV/tl3jl+4=",
 "U2FsdGVkX18E1OQZ2kip/hfHaxkwCREolrb+8w6HWVM="], 
["U2FsdGVkX1+l8mux91H3Ro/yknNvQo11A3klVeEW+gT2Mhuc96+Ee1JSHaFpFmfp",
"U2FsdGVkX19JcAF9gx5kmy2uvr+JAnhUfuBStP45TfOhhOXsTO1tnVaI0slHK7dp4VBDunAoCRvFL/+FkYQH/3PnHxeZGx7xqWZMpdwd/Xk3ZbTsyWHXJZ5XbNcTNDLdfmQFSlnDeDuaLbzafhW3FAwo+WZUyAXYzaVs7ijUrK8=",
 "U2FsdGVkX1/x9vWOOuAk/CdS0hmFjsVAB7MsyFOKyTg="], 
];
trivia = trivia.sort(function(a, b){return 0.5 - Math.random()});

arithmetic = [ 
["U2FsdGVkX19VNxK29r6UY71cXSSACQxXdLpVlwr6uLc=",
"U2FsdGVkX18VhTf2PmdXyF6zqllfNE251X1Ms20PwJ10PapFe0F/VSvuuCwqn1VB",
 "U2FsdGVkX18yQhp73bB2lodz38b4QuF2yHvmQgBFX9Y="], 
["U2FsdGVkX1/9PZEDrrBPK9P72g1RHLEgBaWL6W772L4=",
"U2FsdGVkX1+2GkKYQBa7gXXP9I6DvLroQlf2n6p+L+6YbjigfK6Bd6OI625I7HVSzPjs6cbtmtjhU5lbsvcprQ==",
 "U2FsdGVkX183pYJnHW/kwH8Hl+2wPob1xhQ6njyUiYs="], 
["U2FsdGVkX19GTpOpuVQ1v+a8mo3v0KDyxnAPUoXaif0=",
"U2FsdGVkX19E5LG7CNvtPv/L2vEXdEkUoE0tr2JJJb54mC2FLxLx+PtI/ls4x0Nwk553tjaSzJx6Cu0m89rZ3A==",
 "U2FsdGVkX1/WWTqC6iskpvcyWF3d1V8oPTpJIzeijwE="], 
];
arithmetc = arithmetic.sort(function(a, b){return 0.5 - Math.random()});

algebra = [ 
["U2FsdGVkX1+7IY6bnLEQaQKi8KOrdJhZ8I1aA/VuusXIWzrqxMnDwzmxdIGV0/4i",
"U2FsdGVkX1/mg8vemwqJCsN+I+U36nAykrcY96r0jHU7uHzM8dSztbQpciYcGXEcJ3i9k511tP3J/gJDF+diHKNoevpuYSObYUKHHSJS+Iokynk5MFAzB2l4L2htm6G7",
 "U2FsdGVkX1+Z3PnvHYqKe+YBloRGSQFAnkTkfthr+bA="], 
["U2FsdGVkX1+XFE1VAxFuRq/nullx0TSTMHbb6YQ5prM=",
"U2FsdGVkX1+OlQrkrILglV7lhV3//DFVv2IWAbotPLgW4Di/huBtR4P/tPCu2nk2AEa3O7uGEJRgyILZh+VI5BmkX07jiHLBZhMK+1GVX2k=",
 "U2FsdGVkX1/w31uI9MDAvrc+f+ZB9w/PGZgbOcOQrgM="], 
["U2FsdGVkX1/Q8QTJ5g2hqSk5tnhnvaeq9dLjLMkgIf8=",
"U2FsdGVkX19irN40qPbU+v9SM07J4aZ6ybK5BbQB20GUXD7osQ8W/dK9WNly7QnC10NnnzrIuMRTRUOUFuxJ/Us0Fpwa92mIe6X+D6DNbyE8ChfuSh7LMZnZZ2XVqQRb",
 "U2FsdGVkX1+3sy71okoe5RHTla703VpBDVTjb3PCNLY="], 
["U2FsdGVkX1/7mzwPKfhQYIm7nAhDXwYK3/FY74J10iFR02SneVLQikFPaFg8zHlL",
"U2FsdGVkX18cfPK5QSm7SQb2fHJIWZOEBFFKXR6BTPIzTGDi6qGFc9DyMMiBzjoT",
 "U2FsdGVkX1+TsXc4yaPwn+2qDBZM7NODTGRhU5v25wY="], 
];
algebra = algebra.sort(function(a, b){return 0.5 - Math.random()});
