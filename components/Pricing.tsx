import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { BadgePercent, CircleCheck } from "lucide-react";
import { Button } from "./ui/button";

// Stored details and properties for each plan
const schemes = [
  {
    title: "Trail",
    price: "Try now",
    more: {
      desc: "Get personalised template",
    },
    popular: false,
    features: [
      "25+ data sources",
      "GPT4, LinkedIn and others",
      "Access to slack community",
      "10+ templates to scale your outbound",
    ],
    footerPoints: ["10+ templates to scale your outbound"],
  },
  {
    title: "Growth",
    price: "$229",
    more: {
      desc: null,
      discount: 50,
      original: 459,
    },
    popular: false,
    features: [
      "8,000  Credits",
      "Webhook, HTTP API",
      "Credit rollover (upto 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead.",
      "Dedicated 3 hours from Bitscale expert",
    ],
    footerPoints: [
      "Unlimited leads search",
      "Fully enriched 5000 leads",
      "Personalized outreach at scale",
    ],
  },
  {
    title: "Booster",
    price: "$499",
    more: {
      desc: null,
      discount: 50,
      original: 999,
    },
    popular: true,
    features: [
      "25,000 Credits",
      "Webhook, HTTP API",
      "Credit rollover (upto 2x plan credits)",
      "Outbound email integrations like Instantly, Smartlead.",
      "Dedicated 3 hours from Bitscale expert",
      "Advanced models like Claude Sonnet",
      "Dedicated 8 hours from Bitscale expert",
      "2 way Hubspot integration",
    ],
    footerPoints: [
      "Unlimited leads search",
      "Fully enriched 15000 leads",
      "Personalized outreach at scale",
    ],
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    more: {
      desc: "For individual pricing",
    },
    popular: false,
    features: [
      "Data privacy certification",
      "Priority Support",
      "Dedicated Bitscale expert",
      "Private Slack Channel",
      "Collaborative workspace and templates",
    ],
    footerPoints: [
      "Perfect for High-Volume End-to-End CRM Data Enrichment",
      "Unlimited list of leads with unlimited data points",
    ],
  },
];

function Pricing({ interval }: { interval: string }) {
  return (
    <div className="grid grid-cols-4 gap-6 w-9/12 mx-auto my-10">
      {/* Added fade-up animation to Card*/}
      {schemes.map((scheme) => (
        <Card
          className={`h-10/12 flex flex-col justify-between animate-fade-up ${
            scheme.popular &&
            "bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white"
          }`}
        >
          <div>
            <CardHeader className="flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <p className="font-medium mb-1">{scheme.title}</p>
                {scheme.popular && (
                  <p className="bg-[#CEE0FF] text-[#053D99] rounded-3xl w-fit p-2 py-1 text-xs">
                    Popular
                  </p>
                )}
              </div>

              <div className="font-bold text-3xl flex items-end">
                {scheme.price}{" "}
                {!scheme.more.desc && (
                  <p
                    className={`text-lg ${
                      scheme.popular ? "text-white" : "text-gray-500"
                    } font-medium`}
                  >
                    <span>/</span>
                    {interval}
                  </p>
                )}
              </div>
              {scheme.more.desc ? (
                <p
                  className={`${
                    scheme.popular ? "text-white" : "text-gray-500"
                  } text-xs`}
                >
                  {scheme.more.desc}
                </p>
              ) : (
                <div className="flex flex-row gap-2">
                  <div className="bg-[#ECFDF3] text-[#027A48] rounded-xl w-[80px] flex flex-row items-center justify-center gap-1">
                    <BadgePercent size={12} />
                    <p className="text-xs pr-1">{scheme.more.discount}% off</p>
                  </div>
                  <p
                    className={`w-1/3 font-bold ${
                      scheme.popular ? "text-white" : "text-gray-500"
                    } line-through`}
                  >
                    ${scheme.more.original}
                  </p>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {scheme.features.map((feature) => (
                <div
                  className={`flex flex-row items-center gap-2 mb-3 mr-2 ${
                    scheme.popular
                      ? "text-white"
                      : feature.includes("Credits")
                      ? "text-blue-700"
                      : "text-gray-500"
                  }`}
                >
                  <CircleCheck
                    size={15}
                    fill={scheme.popular ? `white` : `#374151`}
                    color={scheme.popular ? `#1E429F` : `white`}
                  />
                  <p
                    className={`text-sm ${
                      feature.includes("Credits") ? "font-bold" : "font-normal"
                    }  w-11/12`}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </CardContent>
          </div>

          <CardFooter className="flex flex-col">
            <div
              className={`w-full ${
                scheme.popular ? "bg-white" : "bg-blue-400"
              }  mb-4 h-px mx-auto`}
            ></div>
            <div className="flex flex-col mb-4 h-[120px]">
              <ul
                className={`list-disc ${
                  scheme.popular ? "text-white" : "text-gray-500"
                } ml-4`}
              >
                {scheme.footerPoints.map((feature) => (
                  <li className="text-[14.5px] font-semibold mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className={` ${
                scheme.popular
                  ? "bg-white hover:bg-white hover:opacity-90 text-black"
                  : "bg-[#1A56DB] hover:bg-[#1A56DB] hover:opacity-90"
              } `}
            >
              Continue with {scheme.title}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Pricing;
