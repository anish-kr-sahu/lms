import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AddCourse = () => {
    const navigate = useNavigate();
    const isLoading = true;
  return (
    <div className="flex-1 mx-10">
      <div className="mb-4">
        <h1 className="font-bold text-xl">
          Lets add Course, add some basic details for your new Course
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="courseTitle"
            placeholder="Your Course Name"
          />
        </div>
        <div>
          <Label>Category</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>category</SelectLabel>
                <SelectItem value="apple">Next Js</SelectItem>
                <SelectItem value="banana">Data Science</SelectItem>
                <SelectItem value="blueberry">Frontend Development</SelectItem>
                <SelectItem value="grapes">Fullstack Development</SelectItem>
                <SelectItem value="pineapple">MERN Stack Development</SelectItem>
                <SelectItem value="pineapple">Javascript </SelectItem>
                <SelectItem value="pineapple">Python</SelectItem>
                <SelectItem value="pineapple">Docker</SelectItem>
                <SelectItem value="pineapple">MongoDB</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => navigate("/admin/course")}>Back</Button>
            <Button disabled={isLoading}>
                {
                    isLoading ? (
                        <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        </>
                    ): "Create"

                }
                </Button>
        </div>
      </div>
    </div>
  );
};
