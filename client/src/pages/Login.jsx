import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
export const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };
  const handelRegistration = (type) => {
    const inputData = type === "signup"? signupInput: loginInput;
    console.log(inputData);
  }
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="name"
                    name="name"
                    value={signupInput.name}
                    placeholder="anish"
                    onChange={(e) => changeInputHandler(e, "signup")}
                    required="true"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={signupInput.email}
                    placeholder="anish@gmail.com"
                    onChange={(e) => changeInputHandler(e, "signup")}
                    required="true"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={signupInput.password}
                    placeholder="xxxxx"
                    onChange={(e) => changeInputHandler(e, "signup")}
                    required="true"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handelRegistration("signup")}>Sign up</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={loginInput.email}
                    placeholder="anish@gmail.com"
                    onChange={(e) => changeInputHandler(e, "login")}
                    required="true"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={loginInput.password}
                    placeholder="xxxxx"
                    onChange={(e) => changeInputHandler(e, "login")}
                    required="true"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handelRegistration("login")}>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
