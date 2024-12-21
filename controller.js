const sequelize = require('./config');
const BoardAndClassSelection = require('./Models/BoardAndClassSelection');
const InstituteType = require('./Models/InstituteType');
const Subject = require('./Models/Subject');
const User = require('./Models/User');
require("dotenv").config();

const controller = () => {
    return {
        addUser: async (req, res) => {
            try {
              
                const data = {
                    name: req.body.name
                };
              
                const mydata = await User.create(data);
             
      
                return res.status(200).json({
                  success: true,
                  message: "User created successfully",
                  data: mydata
                });
            } catch (error) {
              console.log(error);
                return res.status(500).json({ 
                    success: false, 
                    message: "Internal server error"
                });
            }
        },
        instituteTypeSelection: async (req, res) => {
            try {
              
                const data = {
                    institute_type: req.body.institute_type,
                    user_id: req.body.user_id
                };
              
                const mydata = await InstituteType.create(data);
             
      
                return res.status(200).json({
                  success: true,
                  message: "Institute type registered successfully",
                  data: mydata
                });
            } catch (error) {
              console.log(error);
                return res.status(500).json({ 
                    success: false, 
                    message: "Internal server error"
                });
            }
        },
        selectClassAndStandard: async (req, res) => {
            try {
              
                const data = {
                    user_id: req.body.user_id,
                    institute_type_selection_id: req.body.institute_type_selection_id,
                    board_or_class: req.body.board_or_class,
                    medium: req.body.medium,
                    standard: req.body.standard
                };
              
                const mydata = await BoardAndClassSelection.create(data);
             
      
                return res.status(200).json({
                  success: true,
                  message: "Board and class selected successfully",
                  data: mydata
                });
            } catch (error) {
              console.log(error);
                return res.status(500).json({ 
                    success: false, 
                    message: "Internal server error"
                });
            }
        },
        selectSubject: async (req, res) => {
            try {
              
                const data = {
                    board_or_class_selection_id: req.body.board_or_class_selection_id,
                    subject: req.body.subject,
                };
              
                const mydata = await Subject.create(data);
             
      
                return res.status(200).json({
                  success: true,
                  message: "Subject name created successfully",
                  data: mydata
                });
            } catch (error) {
              console.log(error);
                return res.status(500).json({ 
                    success: false, 
                    message: "Internal server error"
                });
            }
        },
    };
};
module.exports = controller;