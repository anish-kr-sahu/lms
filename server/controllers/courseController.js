import { Course } from "../models/courseModel.js";


export const createCourse = async (req,res) => {
    try {
        const {courseTitle, category } = req.body;
        if(!courseTitle || !category){
            return res.status(400).json({
                msg: "CourseTitle and Category is required"
            })
        }

        const course = await Course.create({
            courseTitle,
            category,
            creator: req.id
        });
        return res.status(200).json({
            course,
            msg:"Course created"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "failed to crreate course"
        })
        
    }
}