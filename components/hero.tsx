"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Eye, Shield } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-red-500">Shaping Skills</span>{" "}
                <span className="text-gray-900">for a Stronger Tomorrow</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                SKILLEM SERVICES equips young professionals with industry-relevant skills, empowering them for impactful careers in both corporate and community sectors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image Carousel */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {[
                      "/images/slide-1.jpg",
                      "/images/slide-2.jpg",
                      "/images/slide-3.jpg",
                    ].map((src, index) => (
                      <CarouselItem
                        key={index}
                        className="relative w-full aspect-video overflow-hidden"
                      >
                        <Image
                          fill
                          quality={100}
                          src={src}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights - Updated with program details */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Holistic Skill Development
              </h3>
              <p className="text-gray-600 text-sm">
                Practical knowledge & behavioral confidence
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Eye className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Real-World Industry Exposure
              </h3>
              <p className="text-gray-600 text-sm">
                Internships, site visits & live projects
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Dedicated Mentorship & Support
              </h3>
              <p className="text-gray-600 text-sm">
                Career guidance & placement assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}