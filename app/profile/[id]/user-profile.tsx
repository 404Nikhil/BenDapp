"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useToast } from "@/components/ui/use-toast";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";
import {
  IconBriefcase2,
  IconCake,
  IconClock,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
  IconBriefcase,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { getUserByUsername } from "@/utils/queries";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

const tabs = [
  {
    icon: (
      <PiSparkleLight className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded-md" />
    ),
    name: "AI",
    feature: "Now with Q&A",
    description: "Ask literally anything. identiBot Will answer.",
    more: (
      <div className="text-purple-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: (
      <PiBookOpenTextLight className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded-md" />
    ),
    name: "Create ID",
    description: "Get your ID on the blockchain.",
    more: (
      <div className="text-red-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },

  {
    icon: (
      <PiTargetLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded-md" />
    ),
    name: "Privacy ",
    description: "Control who sees your information",
    more: (
      <div className="text-blue-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: (
      <PiFileThin className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded-md" />
    ),
    name: "Find Jobs",
    description: "Discover developer opportunities.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/RunningDoodle.svg",
  },
];

const UserProfile = (params: any) => {
  const [formData, setFormData] = useState<any>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    home_address: "",
    date_of_birth: "",
    education: "",
    work_history: "",
    phone_number: "",
    job_title: "",
    x: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    linkedin: "",
    info: "",
    imageUrl: "",
    skills: ["UI/UX", "DevOps", "FrontEnd Dev"],
  });
  const { toast } = useToast();
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountryCode(response.data.country_code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };

    fetchCountryCode();
  }, []);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        let userInfo = (await getUserByUsername(params.param)) as any;
        console.log(userInfo);

        setFormData({
          first_name: userInfo.basicInfo.firstName,
          last_name: userInfo.basicInfo.lastName,
          username: params.param,
          email: userInfo.basicInfo.email,
          home_address: userInfo.basicInfo.homeAddress,
          date_of_birth: userInfo.basicInfo.dateOfBirth,
          education: userInfo.professionalInfo.education,
          work_history: userInfo.professionalInfo.workHistory,
          phone_number: userInfo.basicInfo.phoneNumber,
          job_title: userInfo.professionalInfo.jobTitle,
          x: userInfo.socialLinks.x,
          instagram: userInfo.socialLinks.instagram,
          tiktok: userInfo.socialLinks.tiktok,
          youtube: userInfo.socialLinks.youtube,
          linkedin: userInfo.socialLinks.linkedin,
          info: userInfo.professionalInfo.info,
          skills: userInfo.professionalInfo.skills,
          imageUrl: userInfo.professionalInfo.imageURL,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "User Doesn't exist",
        });
        console.error("Error fetching country code:", error);
      }
    };
    getUserInfo();
  }, []);

  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
<div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center pt-4 mx-3">
        <div className="text-center flex flex-col items-center justify-center">
          <img
            className="w-20 h-20 object-cover object-center p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={formData.imageUrl || "/images/avatar.jpg"}
            alt="Bordered avatar"
          />
          <p className="font-medium text-gray-700 py-2">
            @{`${formData.username}` || `hilkin`}
          </p>
          <p className="text-sm text-gray-700 py-1">
            {formData.info || "making digital identity on blockchain"}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 py-2 w-full">
          <div className="flex flex-row items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
            <IconBriefcase width={17} height={17} />
            <p className="text-sm">{formData.job_title || "Company"}</p>
          </div>
          <div className="flex flex-row items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
            <IconMapPin width={17} height={17} />
            <p className="text-sm">{countryCode}</p>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex flex-row items-center bg-gray-100 space-x-2 px-3 py-2 rounded-lg">
            <IconMail width={17} height={17} />
            <p className="text-sm">{formData.email || "xyz@gmail.com"}</p>
          </div>
          <div className="flex flex-row items-center bg-gray-100 mt-2 space-x-2 px-3 py-2 rounded-lg">
            <IconPhone width={17} height={17} />
            <p className="text-sm">
              {formData.phone_number || "+00 123 456 789"}
            </p>
          </div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            Skills
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          {formData.skills.map((skill: string, index: number) => (
            <div
              key={index}
              className="flex flex-row items-center bg-gray-100 w-max space-x-2 px-3 py-2 rounded-lg"
            >
              <p className="text-xs">{skill}</p>
            </div>
          ))}
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            Socials
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-2 w-full">
          {formData.x && (
            <Link href={formData.x}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandX width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.instagram && (
            <Link href={formData.instagram}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandInstagram width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.youtube && (
            <Link href={formData.youtube}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandYoutube width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.tiktok && (
            <Link href={formData.tiktok}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandTiktok width={24} height={24} color="white" />
              </div>
            </Link>
          )}
          {formData.linkedin && (
            <Link href={formData.linkedin}>
              <div className="flex flex-row w-11 h-11 cursor-pointer items-center bg-black p-3 rounded-full">
                <IconBrandLinkedin width={24} height={24} color="white" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default UserProfile;