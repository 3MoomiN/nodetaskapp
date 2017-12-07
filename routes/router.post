router.post('/', function(req, res, next) { 
Task.addTask(req.body, function(err, count) { 
if (err) { 
res.json(err); 
} else { 
res.json(req.body); //or return count for 1 & 0 
} 
}); 
});