"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { PiArrowRight } from "react-icons/pi";
import {
  IconFingerprint,
  IconShieldLock,
  IconNetwork,
  IconUserCircle,
} from "@tabler/icons-react";

const features = [
  {
    icon: <IconFingerprint className="w-8 h-8 mr-2 text-purple-600" />,
    name: "Decentralized Identity",
    description: "Create your unique DID on the blockchain",
  },
  {
    icon: <IconShieldLock className="w-8 h-8 mr-2 text-green-600" />,
    name: "Enhanced Security",
    description: "Control your data with advanced encryption",
  },
  {
    icon: <IconNetwork className="w-8 h-8 mr-2 text-blue-600" />,
    name: "Seamless Integration",
    description: "Use your identity across multiple platforms",
  },
  {
    icon: <IconUserCircle className="w-8 h-8 mr-2 text-red-600" />,
    name: "User-Centric Design",
    description: "Intuitive interface for easy management",
  },
];

const HeroSection = () => {
  const ref = useRef(null);
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            BendApp
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering Users with Secure, Decentralized Digital Identities
          </p>
          <Link href="/">
            <Button className="py-3 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
              <span className="text-lg">Get Started</span>
              <PiArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/assets/digital-identity.svg"
              alt="Digital Identity"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Reshape Your Digital Identity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className={`p-6 rounded-xl transition-all duration-300 ease-in-out ${
                    activeFeature === feature
                      ? "bg-white shadow-lg"
                      : "bg-gray-50"
                  }`}
                  onMouseEnter={() => setActiveFeature(feature)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-3">
                    {feature.icon}
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;