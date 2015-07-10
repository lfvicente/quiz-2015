// GET /quizes/question
exports.question = function(req, res){
	res.render('quizes/question', {pregunta: 'Capital de Grecia'});
}

// GET /quizes/answer
exports.answer = function(req, res){
	If (req.query.respuesta === 'Atenas'){ 
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
}