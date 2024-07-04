"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CountdownTimer from "./countDownTimer";
import { ImageSection } from "./image-section";
import Link from "next/link";
import { addEmail } from "@/lib/supabase";
import { LoaderCircle } from "lucide-react";

export function Main() {
  const [submissionFail, setSubmissionFail] = useState(false);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await addEmail(email);
      if (error) {
        if (
          error.message.includes(
            'duplicate key value violates unique constraint "earlyaccessusers_email_key"'
          )
        ) {
          setSubmissionFail(true);
          setMessage("You have already submitted your email!");
        } else {
          throw new Error(error.message);
        }
      } else {
        setSubmissionFail(false);
        setMessage("Submission Successful!");
        setEmail("");
      }
    } catch (error: any) {
      setSubmissionFail(true);
      setMessage("Error submitting email");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white hide-scrollbar h-screen">
      <header className="flex justify-between md:justify-around items-center p-4">
        <Link className="hidden md:block" href="https://x.com/Nitinnennn">
          <Button
            className="font-montserrat bg-orange-500 text-white"
          >
            Follow on X
          </Button>
        </Link>
        <Link href="/">
          <div className="flex items-center justify-center ">
            <TrakizIcon />
            <span className="text-2xl font-bold ml-1">Trakiz</span>
          </div>
        </Link>
        <div className="md:flex space-x-4">
          <Link href="https://www.linkedin.com/in/shibtain/">
            <Button
              className="bg-orange-500 font-montserrat text-white"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center text-center space-y-2 p-8 mt-32">
        <h1 className="text-5xl font-montserrat">
          <i className="text-gray-500">We&apos;re</i>
          <br className="block md:hidden" />
          <i> launching </i>
          <i className="text-gray-500"> in</i>
        </h1>
        <div className="text-6xl">
          <CountdownTimer />
        </div>
        <p className="font-poppins">
          Stay focused with AI, chat about your to-dos, and achieve your goals
          with ease.
          <br />
          Welcome to Trakiz!
        </p>
      </main>
      <div className="flex flex-col justify-center items-center md:space-x-4 mt-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:space-x-4"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-64 text-white text-[0.9rem] bg-black font-poppins placeholder:text-white"
          />
          <div className="w-64 mt-4 md:m-0 md:w-[140px] flex justify-center">
            <Button
              type="submit"
              className="w-[140px] h-[40px] bg-orange-500 font-montserrat text-white m-0 p-0"
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="w-6 h-6 animate-spin" />
              ) : (
                "Get Early Access"
              )}
            </Button>
          </div>
        </form>
        <span className="mt-4">
          {submissionFail ? (
            <p className="text-sm font-montserrat text-red-500">{message}</p>
          ) : (
            <p className="text-sm font-montserrat text-green-500">{message}</p>
          )}
        </span>
      </div>
      <div>
        <ImageSection />
      </div>
      <main className="flex flex-col justify-center items-center text-center space-y-2 p-8 mt-26">
        <div className="w-full max-w-3xl">
          <div className="space-y-2 mt-4">
            <Accordion type="single" collapsible className="w-full text-start">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start">
                  What is Trakiz ?
                </AccordionTrigger>
                <AccordionContent className="font-poppins">
                  Ever wished you had a personal assistant that could help you
                  conquer your to-do list, manage your goals, and keep you
                  motivated? Meet Trakiz - the AI-powered productivity wizard
                  that’s here to make your life easier, funnier, and more
                  organized!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start">
                  How Trakiz uses AI ?
                </AccordionTrigger>
                <AccordionContent className="font-poppins">
                  Trakiz isn&apos;t just any old productivity tool; it&apos;s
                  powered by some seriously smart AI. Imagine having a
                  super-intelligent friend who knows your goals, understands
                  your schedule, and can break down even the most daunting tasks
                  into bite-sized pieces. That&apos;s Trakiz!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start">
                  Is my data secure with Trakiz?
                </AccordionTrigger>
                <AccordionContent className="font-poppins">
                  Absolutely! Your data is safer with us than a squirrel&apos;s
                  stash of acorns. We use top-notch encryption and security
                  protocols to make sure your information is protected. So,
                  relax and let Trakiz handle your tasks while you focus on more
                  important things.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-start">
                  Can Trakiz help me break down my goals?
                </AccordionTrigger>
                <AccordionContent className="font-poppins">
                  You betcha! Trakiz is like a goal-whisperer. Whether you want
                  to learn a new skill, get fit, or finally finish that novel,
                  Trakiz will break down your goals into manageable tasks and
                  keep you on track. Think of it as having a tiny motivational
                  speaker in your pocket – without the cheesy quotes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-start">
                  Is Trakiz available on both desktop and mobile devices?
                </AccordionTrigger>
                <AccordionContent className="font-poppins">
                  Indeed it is! Whether you’re a desktop devotee or a mobile
                  maven, Trakiz is there for you. Use it on your morning
                  commute, during your lunch break, or when you’re pretending to
                  work while actually browsing cat videos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <footer className="flex justify-between items-center p-4 border-t border-gray-700 mt-5">
        <div className="flex flex-row">
        <p className="text-sm text-muted-foreground">
          ©2024 The Trakiz Team
        </p>
        <HeartIcon className="pl-2 w-6 h-6 border-none" />
        </div>
        <div className="flex space-x-4">
          <Link href="https://x.com/Nitinnennn">
            <TwitterIcon className="w-6 h-6" />
          </Link>
          <Link href="https://www.instagram.com/officialtrakiz/">
            <InstagramIcon className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/shibtain/">
            <LinkedinIcon className="w-6 h-6" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#F97316"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TrakizIcon() {
  return (
    <Image src="/logooftrakiz.png" alt="Trakiz Logo" width={50} height={50} />
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
