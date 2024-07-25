import {
    PiArrowRight,
    PiCheckCircleFill,
    PiClipboardLight,
    PiHouseFill,
    PiShareLight,
    PiUserCheck,
} from "react-icons/pi";
import Image from "next/image";

const items = [
    {
        icon: <PiUserCheck className="text-2xl text-sky-600" />,
        name: " Secure Digital Identity",
        button: (
            <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
                Create and manage your unique decentralized identifier (DID) on the
                blockchain.
            </div>
        ),
    },
    {
        icon: <PiCheckCircleFill className="text-2xl text-orange-500" />,
        name: "Identity Verification ",
        button: (
            <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
                Submit identity ID and get verified by trusted third parties.
            </div>
        ),
    },
    {
        icon: <PiClipboardLight className="text-2xl text-green-500" />,
        name: " Manage Your Profile",
        button: (
            <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
                Update personal details and manage your credentials easily.
            </div>
        ),
    },
    {
        icon: <PiShareLight className="text-2xl text-red-500" />,
        name: "Share Your Identity",
        button: (
            <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
                Share your verified digital identity securely with others and on all
                social media accounts.
            </div>
        ),
    },
];

const Section = () => {
    return (
        <>
            <div className="flex flex-col pt-32  items-center justify-center">
                <div
                    className="text-3xl xl:text-5xl font-medium justify-center
           items-center flex"
                >
                    Endless ways to use it
                </div>
                <div className="text-sky-500 flex items-center  hover:cursor-pointer pt-6">
                    Learn How <PiArrowRight className="ml-3 text-sm " />
                </div>
            </div>

        </>
    );
};

export default Section;