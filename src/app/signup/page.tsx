"use client";

import { Card, Separator } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Radio, RadioGroup } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user, "create user");

    const { data, error } = await authClient.signUp.email({
      email: user.email as string,
      password: user.password as string,
      name: user.name as string,
      image: user.image as string,

      fetchOptions: {
        body: {
          role: user.role,
        },
      },
      callbackURL: "/",
    });

    if (data) {
      toast.success("User created successfully");
      router.push("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const signIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md p-6 sm:p-8 border rounded-2xl shadow-md">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Create Account</h1>

          <p className="text-sm text-gray-500 mt-2">
            Start your study with Study Nook
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
          <TextField isRequired name="name" type="text" className="w-full">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField name="image" type="url" className="w-full">
            <Label>Image URL</Label>
            <Input placeholder="https://example.com/image.jpg" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <Description className="text-xs">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* role */}
          <RadioGroup name="role" defaultValue="seeker">
            <Label>Select Role</Label>
            <Description>Select Role</Description>
            <Radio value="seeker" name="seeker">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Seeker</Label>
                <Description>Seeker</Description>
              </Radio.Content>
            </Radio>
            <Radio value="recruiter" name="recruiter">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Recruiter</Label>
                <Description>Recruiter</Description>
              </Radio.Content>
            </Radio>
          </RadioGroup>

          <Button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg"
            type="submit"
          >
            Create Account
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <Separator className="flex-1" />

          <span className="text-sm text-gray-500 whitespace-nowrap">
            Or sign up with
          </span>

          <Separator className="flex-1" />
        </div>

        {/* Github Button */}
        <Button onClick={signIn} className="w-full rounded-lg">
          <FaGithub className="text-lg" />
          Sign in with GitHub
        </Button>

        {/* Login Link */}
        <div className="flex justify-center mt-5">
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
