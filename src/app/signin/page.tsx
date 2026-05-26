"use client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email as string,
      password: user.password as string,
    });

    if (data) {
      toast.success("Login successful");
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
      <Card className="w-full max-w-md border rounded-2xl shadow-md p-6 sm:p-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Login</h1>

          <p className="text-sm text-gray-500 mt-2">
            Start your study with Study Nook
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
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

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            type="submit"
          >
            Login
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <Separator className="flex-1" />

          <span className="text-sm text-gray-500 whitespace-nowrap">
            Or sign in with
          </span>

          <Separator className="flex-1" />
        </div>

        {/* Github Login */}
        <Button onClick={signIn} className="w-full rounded-lg">
          <FaGithub className="text-lg" />
          Sign in with GitHub
        </Button>

        {/* Register */}
        <div className="flex justify-center mt-5">
          <p className="text-sm text-gray-600 text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
