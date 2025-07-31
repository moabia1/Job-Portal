import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 z-10">
      {/* Landing Section */}
      <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get{" "}
            <img
              src="/logo.png"
              alt="Hirrd logo"
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousand of job listing or find the perfect candidate
        </p>
      </section>

      {/* Find Post job button */}
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button size="xl" variant="destructive">
            Post a job
          </Button>
        </Link>
      </div>

      {/* carousel */}
      <Carousel plugins={[Autoplay({ delay: 1500 })]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 item-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  className="h-9 sm:h-14 object-contain"
                  src={path}
                  alt={name}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* banner */}
      <img src="/banner.jpeg" alt="banner" className="w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card-1st */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>

        {/* Card-2nd */}
        <Card>
          <CardHeader>
            <CardTitle>For Employeers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, ans find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* accordion */}
      <Accordion type="single" collapsible>
        {faqs.map((faq, idx) => {
          return (
          <AccordionItem key={idx} value={`item-${idx+1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        )})}
      </Accordion>
    </main>
  );
};

export default LandingPage;
