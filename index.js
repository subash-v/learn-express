const Joi=require('joi');// to handle validation 
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  {
    id: 1,
    name: "courses-1"
  },
  {
    id: 2,
    name: "courses-2"
  },
  {
    id: 3,
    name: "courses-3"
  }
];


//_________________________________________GET METHOD______________________________

//root
app.get("/", (req, res) => {
  res.send("Hello world!");
});




// /api/posts/2012/12/20
app.get("/api/posts/:year/:month/:date", (req, res) => {
    res.send(req.params);
  });
  


  
  // query parameter /api/posts/2019/12/20?sortBy=name
  app.get("/api/posts/:year/:month/:date", (req, res) => {
    res.send(req.query);
  });
  




// localhost:5000/api/courses
app.get("/api/courses", (req, res) => {
  res.send(courses);
});





// courses with id
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    //404
    res.status(404).send("the course with given ID was not matched");
  res.send(course);
});

//__________________________________END___________________________________________



//_______________________POST method_____________________________________________


app.post("/api/courses", (req, res) => {
    const {error} = validateCourse(req.body);//getting result.error
     if (error) 
       return res.status(400).send(error.details[0].message);  

//     const schema={
//         name:Joi.string().min(3).required()
//     };

//     const result=Joi.validate(req.body,schema);
   
//  // if (!req.body.name || req.body.name.length < 3) {
//     if (result.error) {
//     //400 Bad request
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }


  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});
//____________________________END___________________________________________________








//____________________________PUT METHOD________________________________________

app.put('/api/courses/:id',(req,res)=>{
    //look up the course id
    //if not existing return 404
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if (!course) //404
        return  res.status(404).send("the course with given ID was not matched");

    //validate
    //if invalid, return 400
    // const schema={
    //     name:Joi.string().min(3).required()
    // };
    // const result=Joi.validate(req.body,schema);
    // if (result.error) {
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    //   }
   
    const {error} = validateCourse(req.body);//getting result.error
     if (error) 
        return res.status(400).send(error.details[0].message);
     
    

    //update course
    course.name=req.body.name;
    //return the updated course
    res.send(course);



});
//___________________________________END____________________________________________


//_________________________________DELETE METHOD__________________________________________
app.delete('/api/courses/:id',(req,res)=>{
    //LOOK up course
    //NOT existing , return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) //404
     return res.status(404).send("the course with given ID was not matched");

    //delete
   const index = courses.indexOf(course);
   courses.splice(index,1);

    //return the same course
    res.send(course)
})



//__________________________________END___________________________________________



//____________________________VALIDATION FUNC USING JOI______________________________
function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);  
}
//________________________________END____________________________________________________


//PORT
//set PORT=5000
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}`));
