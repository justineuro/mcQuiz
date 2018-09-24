// create arrays for dataset labels and questions topics
datList = [ 'formulas', 'trivia', 'arithmetic', 'algebra', 'trigonometry', 'calculus', 'mensuration', 'linear algebra' ];
topicsList = [ 'Formulas', 'Trivia', 'Arithmetic', 'Algebra', 'Trigonometry', 'Calculus', 'Mensuration', 'Linear Algebra' ];
aes = 1; // indicator for data aes-encryotion
tex = 'texzilla'; // either texzilla or mathjax

// create array of paired dataset and topic
pairedTopicsList = [];
for (var ind = 0; ind < datList.length; ind++) {
	pairedTopicsList[ind] = [datList[ind], topicsList[ind]];
}

/* create dataset array for each dataset (see datList above);
 * randomize using sort() and compare function */
formulas = [ 
["U2FsdGVkX1+opnEwnssuigOwxVSL2O0VgxCSyaEWSS1w2/PJBh4sS9CsONTWHxVEl3VQvpN1/qEyt0BvtdM2wFee+6CgcrdFxvk4UQuNoeQ=",
"U2FsdGVkX18uT6Y6ofwEdg9O3KtpOGa9QX4wpFFrqXWwd7NXcqhSv62iyMhYf78bPSnYYQUwehBZevzUGLtA5gUbHkogKH5ozowyXooicwE=",
 "U2FsdGVkX1/BZRDe3opSel9WQTrFiFAFYYqfWVRZWdY="], 
["U2FsdGVkX18HgorwGfdcKNmM38sqclmqAFN/1cFqLvjxBD7EH5CL1AxO2Vy4rqi9MKELFCNyTEhmK5n5m88frA75WRpIapZViImBhE+DJ6E=",
"U2FsdGVkX1/Hwb3bGwYxxInFx5FVLAsMUMrITteJ/06UmV4MA5oLWJNT3LrDu4SYmDO8e18la1OUcKzX2E+WUA9PHkvLaT5EJzCbrvO7DKE=",
 "U2FsdGVkX19gU5EianXpRLhWiqJfsBSNYOAZ37g4yzE="], 
["U2FsdGVkX1/MZFpsLLSVjLNrGX/R133rTu3xBASyj5zKdJBKChmqncptWpuEwkPx",
"U2FsdGVkX19XBf4p/ENhjtnmFn1+3TPyN9z0sK8+ui7EeF7QHCl5gDvgwth1r+g1/+uR4F2/7dTyHYAfZJON5QFeigU7FlFFVEHsKqpawoQrkxrO40kTVjN4XfeZiDuyXlDSFqAPt6eThMGk8DmLhw==",
 "U2FsdGVkX18U+k8VgGScjiK+bcKGlYSf35wiTCx5d+k="] 
];
formulas = formulas.sort(function(a, b){return 0.5 - Math.random()}); 

trivia = [ 
["U2FsdGVkX18cwyv8Q072EI5qeW57bkERoyogywDRg6k52IPBnAFyJbbQZqRnftW5EXQ7gvmMkq0GLABXdEwj0A==",
"U2FsdGVkX1+/x0aWNB9Xqez629cHqOXE/2sV/NvU3aBqsZdRD9p1andpkDKeju55HoR6bhLlChLNF7ZVS9Mcw4eGzrw8GAD+0P3/ZvjDU4rPZ8VbaZD1sEU2U0t6T1TTKPXDPx5pK01yCt3D76QL0L8+pBbEgtKCUsWerjcz6Pf12Tmifd2voR1Uuoa199dm",
 "U2FsdGVkX1+gBcCmnpl6uU1BOtTCa+5vIoDL2P21QUQ="], 
["U2FsdGVkX18CW6K49gFEju9pkWciYJyRB7tdLrU/5eMg/V2ReUfzWEIIuBDAKcqn",
"U2FsdGVkX19Js1KaPnA0pnO4+VKjC5xCpyRPalxmHn0Pg9OnQIKookn5d3XcPalz+eqlYRmWaBeSdndFxf1JXKjC6fmBy59yuda4uPEVIj2EPGBfnPSRVnrUlrgPzibXFZoistQeQgui5eHwW/FIguDQjhbIZ/d5kTXTdOmM2BI=",
 "U2FsdGVkX1/UkG2bhDfrwUcrJqjjJIOjZR81bmaoIfU="], 
["U2FsdGVkX18lgNHkmm8y+iY89X4vik8nuimIp3CUWwXRMG32VYr1p8pv08kmIpS14zouRDttkYY8kmkCForCvw==",
"U2FsdGVkX1/melHyMxFe7nAH343UyBmXd8htftBXSh6YB2aJJmD/kGv4iNUGbfgvvLWcIj6L51iMR16dzIEGB37tVwBjnOoAil/6YwAUlwsDe74gkidXECG+NsYnI+c21WanpSmoHx0O5eWn3ZXuLMk57F9wqrMBdVcEQxy6y/1CErHMii19t7y3R6AhJ3SC",
 "U2FsdGVkX188piaOeIQFvV1MMttP3Lyxmqw4Ee2erRQ="] 
];
trivia = trivia.sort(function(a, b){return 0.5 - Math.random()});

arithmetic = [ 
["U2FsdGVkX189/VwCNUjwyXEq6r1rAwtY319rKlwXBxc=",
"U2FsdGVkX1/4AQLXpwSKvcqKRIy20DU9WWG4Jrs2sO4Ziiqmr5CCcVdjvd1gNmgF",
 "U2FsdGVkX1+hqj7JjF72PYhFQnCdyS/7XbW+AervaSE="], 
["U2FsdGVkX19K+IIchpw6OhtLy12RuqYY9WUWVXNDlKs=",
"U2FsdGVkX19nGqO2aiN5wOr2eaoA+luG+gUd2umuAeDlFlmvBHuyBDBnNKTNCQU2/S1e/KtmWxJW1jFA5ENgUw==",
 "U2FsdGVkX18NMKfON/wQnAW/VveXZVxmteNqPNymfQY="], 
["U2FsdGVkX1+kj9bntJR343T6kseeko0v+b71RS39ygA=",
"U2FsdGVkX1+AUryFAe3rvPzqPt6OLN+mt5TdsGxv9latSgcUHVr70YUYzdzi6tVkG0WW0e99bn1MwljBZ19ZMw==",
 "U2FsdGVkX1/mETLraE2hKps6WhiAeQJzQ8scOjw7LX8="] 
];
arithmetic = arithmetic.sort(function(a, b){return 0.5 - Math.random()});

algebra = [ 
["U2FsdGVkX18o4yb8uu+tgtq6k1E/K5h9DQxNIEkEJXc=",
"U2FsdGVkX19AzQGHP/1D1MpS4nm6fvCvV/H1xorJTKTeUtRZyx2Dpt+iLewt5B/dLiXvJg2vzxx6TnITT+vO/tE3fQx6OO4/XsTmDXrmvdU=",
 "U2FsdGVkX19OPhqITDepzCWYVPUMQ+HqjS8RSKWiT/U="], 
["U2FsdGVkX18Gp5v+VCzK3G19kCZUqd47+VUwHhQSsu0=",
"U2FsdGVkX19Ke3330HyjAhI9R4C2wGqn4wKt+ODAWFMTDTIoRJIVpCJOCgE8XjqWFDkmUNPVLoKGD9lXbh7DuA==",
 "U2FsdGVkX19NTZgiBWBFlN+Z0HurvnVNHFWRNdaYVJg="], 
["U2FsdGVkX193jp0POEBXQMA5+Mq3c7UyDHR7uBKZ44U=",
"U2FsdGVkX1/wjJ3JEuI+xgBpIKQxnpZ3hUPzWyICz+d9WFYiz3i3XGRSqFsJBFrP7kTC8oQI6iLm34XpFtkZChZzDzHUbGf1CFqeS1FD/Zo=",
 "U2FsdGVkX18D7u4L2LMickFZnH6Sg0sWYHJE788cy84="], 
["U2FsdGVkX1+WOC5pb4CRPwwkBUZhufZ4sQwKdHXwyrIdZ+NCN1shaKMQ5H0ZRe9J",
"U2FsdGVkX180SJNrlwy5XXmLEtnHmk1yvWHWRNPlIz2jba0GAXZ736xxUWbfSBqg",
 "U2FsdGVkX18nyeVMP2yqAwC01AANll+llnRdOdL3tE4="] 
];
algebra = algebra.sort(function(a, b){return 0.5 - Math.random()});
