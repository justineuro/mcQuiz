// create arrays for dataset labels and questions topics
datList = [ 'formulas', 'trivia', 'arithmetic', 'algebra', 'trigonometry', 'calculus', 'mensuration', 'linear algebra' ];
topicsList = [ 'Formulas', 'Trivia', 'Arithmetic', 'Algebra', 'Trigonometry', 'Calculus', 'Mensuration', 'Linear Algebra' ];
aes = 0; // 0 for no encryption, 1 for AES-encrypted
tex = "texzilla"; //either texzilla or mathjax

// create array of paired dataset and topic
pairedTopicsList = [];
for (var ind = 0; ind < datList.length; ind++) {
	pairedTopicsList[ind] = [datList[ind], topicsList[ind]];
}

/* create dataset array for each dataset (see datList above);
 * randomize using sort() and compare function */
formulas = [
	[ "\\text{The area of a circle with a radius of } r \\text{ is} ",
{1:"\\pi r^2", 2:"2\\pi r", 3:"\\sqrt{\\pi r}", 4:"\\sqrt{\\pi}r"},
""
	],
	[ "\\text{An equation of a } \\mathbf{unit\\; circle} \\text{ is}",
	{
		4:" xy = 1 ",
		3:" y = x^2 ",
		2:" y = x + 1 ",
		1:' x^2 + y^2 = 1 '
	}, ""
	],
	[ "\\text{Euler's formula is }",
	{
		2:" x^2 + y^2 = 1 ",
		1:" e^{i  \\theta} =   \\cos  \\theta + i  \\sin  \\theta ",
		3:" E = mc^2 ",
		4:" A =   \\pi r^2 "
	}, "" 
	]
];
formulas = formulas.sort(function(a, b){return 0.5 - Math.random()});

trivia = [ 
	[ "\\text{Inventors of the Calculus}",
	{
		1:"\\text{Leibniz and Newton}",
		2:"\\text{Einstein and Bose}",
		3:"\\text{Cauchy and Schwartz}",
		4:"\\text{Riemann and Stieltjes}"
	}, ""
	],
	[ "\\text{The odd man/men out is }", 
	{
		2:"\\text{Euclid}",
		4:"\\text{Bolyai and Lobachevsky}",
		3:"\\text{Gauss}",
		1:"\\text{Pascal and Laplace}"
	}, ""
	],
	[ "\\text{Co-discoverers of Probability}",
	{
		3:"\\text{DeMoivre and Bernoulli}",
		1:"\\text{Fermat and Pascal}",
		2:"\\text{Laplace and Gauss}",
		4:"\\text{Polya and Kolgomorov}"
	}, ''
	]
];
trivia = trivia.sort(function(a, b){return 0.5 - Math.random()});

arithmetic = [ 
	[ "1 + 1 = ",
		{
		1:"2",
		2:"1",
		3:"3",
		4:"4"
	}, ""
	],
	[ "20\\% + 30\\% = ",
	{
		2:"1/3",
		3:"1/5",
		1:"1/2",
		4:"1/6"
	}, ""
	],
	[ "1/2 + 1/3 = ",
	{
		4:"1/5",
		3:"1/6",
		2:"1 1/5",
		1:"5/6",
	}, ""
	]
];
arithmetc = arithmetic.sort(function(a, b){return 0.5 - Math.random()});

algebra = [ 
[ "x^2 -5x + 6 = ",
	{
		2:"(x-4)(x-2)",
		3:" (x-1)(x-6) ",
		1:" (x-2)(x-3) ",
		4:" (x+2)(x-3) "
	}, ""
	],
	[ " x^3  \\times x^2 ",
	{
		1:" x^5 ",
		2:" x^6 ",
		3:" x^{2/3} ",
		4:" x^{3/2} "
	}, ""
	],
	[ " (x-y)(x+y) ",
	{
		1:" x^2 - y^2 ",
		2:" x^2 + y^2 ",
		3:" x^2 -xy + y^2 ",
		4:" x^2 +xy - y^2 "
	}, ""
	],
	[ " \\log_{10} 100 =  ",
	{
		3:"1",
		4:"4",
		1:"2",
		2:"3"
	}, "" 
	]
];
algebra = algebra.sort(function(a, b){return 0.5 - Math.random()});
