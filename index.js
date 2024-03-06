            // const express = require('express');
            // const app = express();

            // const users = [{
            //     name : "manas", 
            //     kidneys : [{
            //         healthy : false
            //     }]
            // }]


            // app.get('/', function(req, res){
            // // return no of kidneys, healthy or not
            // const manasKidneys = users[0].kidneys;
            // const noOfKidneys = manasKidneys.length;
            // let noOfHealthyKidneys = 0;
           
            // const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
            // res.json({
                
            //     noOfKidneys,
            //     noOfHealthyKidneys,
            //     noOfUnhealthyKidneys
            //     })
            // })
            // app.use(express.json());

            // app.post('/', function(req, res){
            //     const isHealthy = req.body.isHealthy;
            //     users[0].kidneys.push({
            //         healthy: isHealthy  
            //     })
            //     res.json({
            //         msg: "Done"
            //     })
            // })

            // app.put('/', function(req, res){
            //     for(let i=0; i<users[0].kidneys.length; i++){
            //         users[0].kidneys[i].healthy = true;
            //     }
            //     res.json({

            //     });
                
            // })

            // app.delete('/', function(req, res){
            //     if(isThereAtleastOneUnhealthyKidney()){
            //         const healthyKidneys = users[0].kidneys.filter(kidney => kidney.healthy);
            //         users[0].kidneys = healthyKidneys;
            //         res.json({
            //             msg : "Unhealthy kidneys removed"
            //         })
                    
            //     }else{
            //         res.status(411).json({
            //             msg: "you have no bad kidneys"
            //         });
            //     }
            //     });
               

            //     function isThereAtleastOneUnhealthyKidney() {
            //         let atleastOneUnhealthyKidney = false;
            //         for (let i = 0; i < users[0].kidneys.length; i++) {
            //             if (!users[0].kidneys[i].healthy) {
            //                 atleastOneUnhealthyKidney = true;
            //             }
            //         }
            //         return atleastOneUnhealthyKidney;
            //     }
                
            //     app.listen(3000);
            

















    const express = require("express");
    const { z } = require("zod");

    const app = express();
    
    const schema = z.object({
        email : z.string().email(),
        password : z.string().min(8),
        country : z.enum(['US', 'IND'])

    })

    app.use(express.json());

    app.post("/health-checkup", function (req, res){

    const validationResult = schema.safeParse(req.body)
        if(validationResult.success){
                res.json( validationResult);
        }else{
                res.status(400).json({
                        error: "validationResult.err"
                })

        }
   
    });
    

    
    // app.use(function(err, req, res, next){
    //     res.json({
    //         msg: "something is up with our server"
    //     })
    // })
    app.listen(3000);
