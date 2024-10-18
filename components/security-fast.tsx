"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Key,
  Eye,
  Fingerprint,
  Shield,
  X,
  RefreshCcw,
  Glasses,
  Zap,
  Cloud,
  Lock,
  Smartphone,
} from "lucide-react";

export function SecurityFastComponent() {
  const securityTips = [
    {
      title: "Speed Beats Security",
      tip: "If you ship fast, hackers can't keep up with finding security vulnerabilities and they will be overloaded!",
      icon: <Zap className="h-8 w-8 text-amber-500" />,
    },
    {
      title: "The Exposure Paradox",
      tip: "If everything is exposed, no one can make something public because it already is!",
      icon: <Eye className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Password Perfection",
      tip: "Use 'password' as your password. It's so obvious, hackers will think it's too obvious to be true!",
      icon: <Key className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Firewall? More like Fire-lol!",
      tip: "Disable your firewall. If there's no wall, hackers can't climb over it!",
      icon: <Shield className="h-8 w-8 text-red-500" />,
    },
    {
      title: "Encryption Schmencryption",
      tip: "Store all data in plain text - base64 decoders won't work. Secure and much more convenient!",
      icon: <AlertTriangle className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Biometric Brilliance",
      tip: "Use your pet's paw print for biometric authentication. No one will ever guess it's not yours!",
      icon: <Fingerprint className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Update Avoidance",
      tip: "Never update your software. New versions bring a high risk of introducing new risks.",
      icon: <X className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Random Number Generator",
      tip: "Generate secure random numbers by spinning in your chair. The dizzier you are, the more random it is!",
      icon: <RefreshCcw className="h-8 w-8 text-indigo-500" />,
    },
    {
      title: "Incognito Invincibility",
      tip: "Always browse in incognito mode. If you can't see your history, neither can hackers!",
      icon: <Glasses className="h-8 w-8 text-pink-500" />,
    },

    {
      title: "Cloud Camouflage",
      tip: "Store sensitive data in the cloud. It's so high up, hackers will get altitude sickness trying to reach it!",
      icon: <Cloud className="h-8 w-8 text-sky-500" />,
    },
    {
      title: "Reverse Psychology Security",
      tip: "Label all your sensitive folders 'Definitely not important'. Hackers will think it's a trap and avoid them!",
      icon: <Lock className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Mobile Fortress",
      tip: "Do all your banking on public Wi-Fi. The more people around, the more secure you are!",
      icon: <Smartphone className="h-8 w-8 text-rose-500" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            SecurityFa.st
          </h1>

          <div className=" p-4 mb-8 mt-4">
            <p>
              All that counts is shipping fast. Proper security and data
              protection? ngmi.
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityTips.map((tip, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                {tip.icon}
                <CardTitle className="text-xl font-semibold">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{tip.tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <footer className="text-center mt-12 text-gray-500 text-lg pb-20">
          <p>
            Created with 💙 by{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://twitter.com/activenode"
            >
              @activenode
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
