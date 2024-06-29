const express = require('express')
const router = new express.Router()
const Student = require("../models/studensts");


router.post("/students" ,(req , res) => {
     const user =  new Student(req.body);
       user.save().then(() => {
        res.status(201).send(user);
    } ).catch((e) => {

    } )

 } )

 router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const userVal = await user.save();
      res.status(201).send(userVal);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  

  router.get( '/students' , async(req , res) => {
  
    try {
       let sutdentsData = await Student.find()
       console.log( 'Students Data', sutdentsData)
      res.status(201).send(sutdentsData)
    }catch(e) {
       res.status(401).send(`the error is ${e}`)
    }
} )






  router.get( '/student' , async(req , res) => {
  
        try {
           let sutdentsData = await Student.findOne({name:"vinodsd Thapa"})
           console.log(sutdentsData)
          res.status(201).send(sutdentsData)
        }catch(e) {
           res.status(401).send(`the error is ${e}`)
        }
  } )
  
  router.delete("/student/:id", async (req, res) => {
    try {
      const val = await Student.findOneAndDelete(req.params.id);
      console.log(val);
      if (!req.params.id) {
        res.status(404).send("Bad request");
      }
      res.status(201).send(val);
    } catch (e) {
      res.status(500).send("Request Time Out error");
    }
  });
  
  router.patch("/student/:email", async (req, res) => {
    try {
      const updateData = await Student.findOneAndUpdate({ email: req.params.email }, req.body, {
        new: true,
      });
      console.log("Update data", updateData);
      res.status(200).send(updateData);
      if (!req.params.email) {
        res.status(401).send("Unvalid request");
      }
    } catch (error) {
      res.status(401).send(error);
    }
  });
  

  
  router.get("/student/:id", async (req, res) => {
    try {
      const id = req.params.id;
      let sutdentsData = await Student.findById(id);
      res.status(201).send(sutdentsData);
      console.log(sutdentsData);
    } catch (e) {
      res.status(401).send("Failed to load the Data");
    }
  });
  

module.exports = router;