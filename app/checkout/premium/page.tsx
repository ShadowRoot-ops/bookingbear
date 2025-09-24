// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Check,
//   Clock,
//   BarChart3,
//   Upload,
//   Crown,
//   ArrowLeft,
//   Image,
//   Video,
//   Music,
//   Users,
//   Zap,
// } from "lucide-react";
// import Button from "@/components/ui/button";
// import Link from "next/link";

// const PremiumPlanPage = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedDate, setSelectedDate] = useState("2024-03-15");
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [fileTypes, setFileTypes] = useState([]);

//   const handleFileUpload = (event) => {
//     const files = Array.from(event.target.files);
//     if (files.length > 0) {
//       setSelectedFiles(files);
//       const types = files.map((file) => {
//         if (file.type.startsWith("image/")) return "image";
//         if (file.type.startsWith("video/")) return "video";
//         if (file.type.startsWith("audio/")) return "audio";
//         return "unknown";
//       });
//       setFileTypes(types);
//     }
//   };

//   const handlePayment = () => {
//     if (selectedFiles.length === 0) {
//       alert("Please upload your content files before proceeding to payment.");
//       return;
//     }

//     setIsLoading(true);
//     setTimeout(() => {
//       const bookingId = `PRE${Date.now()}`;
//       const fileNames = selectedFiles.map(
//         (file) => `${bookingId}_${file.name}`
//       );
//       alert(
//         `Payment Successful! Booking ID: ${bookingId}\nFiles saved as: ${fileNames.join(
//           ", "
//         )}`
//       );
//       setIsLoading(false);
//     }, 2000);
//   };

//   const planFeatures = [
//     {
//       icon: <Crown className="w-5 h-5 text-[#ec4e39]" />,
//       title: "Complete Premium Package",
//       description: "Post + Boost + Instagram Story + Multiple story mentions",
//     },
//     {
//       icon: <Clock className="w-5 h-5 text-[#ec4e39]" />,
//       title: "72-Hour Display",
//       description: "Maximum visibility for 72 hours across all platforms",
//     },
//     {
//       icon: <Upload className="w-5 h-5 text-[#ec4e39]" />,
//       title: "All File Types Supported",
//       description: "Upload unlimited photos, videos, and audio files",
//     },
//     {
//       icon: <Zap className="w-5 h-5 text-[#ec4e39]" />,
//       title: "Premium Time Slots",
//       description: "Best posting times for maximum engagement",
//     },
//     {
//       icon: <Users className="w-5 h-5 text-[#ec4e39]" />,
//       title: "Dedicated Campaign Manager",
//       description: "Personal account manager for your campaign",
//     },
//     {
//       icon: <BarChart3 className="w-5 h-5 text-[#ec4e39]" />,
//       title: "Advanced Analytics Dashboard",
//       description: "Real-time analytics with detailed insights and reports",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-[#afa18f]">
//       {/* Header */}
//       <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-8">
//         <Link
//           href="/calendar"
//           className="inline-flex items-center gap-2 text-[#afa18f] hover:text-[#ec4e39] transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back to Calendar
//         </Link>
//       </div>

//       {/* Main Content */}
//       <div className="px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
//         <div className="max-w-4xl mx-auto">
//           {/* Plan Header */}
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ec4e39] to-[#ff6b47] text-white rounded-full px-6 py-3 mb-6">
//               <Crown className="w-5 h-5 fill-current" />
//               <span className="font-bold uppercase text-sm tracking-wider">
//                 Premium Plan - Maximum Visibility
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold text-[#afa18f] mb-4">
//               ₹999
//             </h1>

//             <p className="text-xl text-[#afa18f] opacity-80 mb-2">
//               Per Premium Campaign
//             </p>

//             <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 inline-block">
//               <p className="text-[#ec4e39] font-semibold">
//                 Selected Date:{" "}
//                 {new Date(selectedDate).toLocaleDateString("en-US", {
//                   weekday: "long",
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </p>
//             </div>
//           </motion.div>

//           {/* Features Grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             {planFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 hover:border-[#ec4e39]/50 transition-colors"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0">{feature.icon}</div>
//                   <div>
//                     <h3 className="text-[#afa18f] font-semibold mb-2">
//                       {feature.title}
//                     </h3>
//                     <p className="text-[#afa18f] opacity-70 text-sm">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* File Upload Section */}
//           <motion.div
//             className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <h2 className="text-2xl font-bold text-[#afa18f] mb-6">
//               Upload Your Premium Content
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <div className="text-center">
//                 <Image className="w-8 h-8 text-[#ec4e39] mx-auto mb-2" />
//                 <h3 className="font-semibold text-[#afa18f] mb-1">Photos</h3>
//                 <p className="text-sm text-[#afa18f] opacity-70">
//                   Unlimited uploads
//                 </p>
//               </div>
//               <div className="text-center">
//                 <Video className="w-8 h-8 text-[#ec4e39] mx-auto mb-2" />
//                 <h3 className="font-semibold text-[#afa18f] mb-1">Videos</h3>
//                 <p className="text-sm text-[#afa18f] opacity-70">
//                   HD quality supported
//                 </p>
//               </div>
//               <div className="text-center">
//                 <Music className="w-8 h-8 text-[#ec4e39] mx-auto mb-2" />
//                 <h3 className="font-semibold text-[#afa18f] mb-1">Audio</h3>
//                 <p className="text-sm text-[#afa18f] opacity-70">
//                   Professional quality
//                 </p>
//               </div>
//             </div>

//             <div className="border-2 border-dashed border-[#333] rounded-xl p-8 text-center hover:border-[#ec4e39]/50 transition-colors">
//               <Upload className="w-12 h-12 text-[#afa18f] opacity-50 mx-auto mb-4" />

//               {selectedFiles.length > 0 ? (
//                 <div className="mb-4">
//                   <p className="text-[#ec4e39] font-semibold mb-2">
//                     {selectedFiles.length} File
//                     {selectedFiles.length > 1 ? "s" : ""} Selected:
//                   </p>
//                   <div className="max-h-32 overflow-y-auto">
//                     {selectedFiles.map((file, index) => (
//                       <div key={index} className="text-[#afa18f] text-sm mb-1">
//                         {file.name} ({fileTypes[index]} •{" "}
//                         {(file.size / (1024 * 1024)).toFixed(2)} MB)
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="mb-4">
//                   <p className="text-[#afa18f] font-semibold mb-2">
//                     Upload multiple content files
//                   </p>
//                   <p className="text-sm text-[#afa18f] opacity-70">
//                     Upload photos, videos, and audio files (Max 100MB per file,
//                     unlimited files)
//                   </p>
//                 </div>
//               )}

//               <input
//                 type="file"
//                 id="fileUpload"
//                 accept="image/*,video/*,audio/*"
//                 onChange={handleFileUpload}
//                 multiple
//                 className="hidden"
//               />

//               <label
//                 htmlFor="fileUpload"
//                 className="inline-block bg-[#ec4e39] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#ec4e39]/90 transition-colors cursor-pointer"
//               >
//                 {selectedFiles.length > 0 ? "Change Files" : "Select Files"}
//               </label>
//             </div>
//           </motion.div>

//           {/* What's Included */}
//           <motion.div
//             className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <h2 className="text-2xl font-bold text-[#afa18f] mb-6">
//               Premium Plan - Everything Included
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {[
//                 "Instagram post + boost + stories",
//                 "72-hour maximum visibility",
//                 "Premium posting time slots",
//                 "All file types unlimited uploads",
//                 "Enhanced reach (5x more audience)",
//                 "Advanced analytics dashboard",
//                 "Multiple story mentions",
//                 "Dedicated campaign manager",
//                 "Real-time performance monitoring",
//                 "Priority customer support",
//                 "Custom campaign optimization",
//                 "Detailed ROI reporting",
//                 "A/B testing options",
//                 "Competitor analysis report",
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   <Check className="w-5 h-5 text-[#ec4e39] flex-shrink-0" />
//                   <span className="text-[#afa18f] text-sm">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Premium Benefits */}
//           <motion.div
//             className="bg-gradient-to-r from-[#ec4e39]/10 to-[#ff6b47]/10 border border-[#ec4e39]/30 rounded-2xl p-8 mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//           >
//             <h3 className="text-[#ec4e39] font-bold text-xl mb-4 flex items-center gap-2">
//               <Crown className="w-6 h-6" />
//               Premium Exclusive Benefits
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="text-[#afa18f] font-semibold mb-2">
//                   Dedicated Manager
//                 </h4>
//                 <p className="text-[#afa18f] opacity-80 text-sm">
//                   Personal campaign manager for strategy, optimization, and
//                   support throughout your campaign.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-[#afa18f] font-semibold mb-2">
//                   Advanced Analytics
//                 </h4>
//                 <p className="text-[#afa18f] opacity-80 text-sm">
//                   Real-time dashboard with detailed insights, ROI tracking, and
//                   competitor analysis.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-[#afa18f] font-semibold mb-2">
//                   Premium Timing
//                 </h4>
//                 <p className="text-[#afa18f] opacity-80 text-sm">
//                   Best posting times based on audience analytics for maximum
//                   engagement and reach.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-[#afa18f] font-semibold mb-2">
//                   Multi-Story Features
//                 </h4>
//                 <p className="text-[#afa18f] opacity-80 text-sm">
//                   Multiple story mentions throughout the 72-hour period for
//                   sustained visibility.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Payment Section */}
//           <motion.div
//             className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-[#afa18f] mb-4">
//                 Ready for Maximum Impact?
//               </h2>
//               <p className="text-[#afa18f] opacity-70 mb-8">
//                 Upload your content and launch your premium Instagram campaign
//                 with dedicated support
//               </p>

//               <div className="max-w-md mx-auto">
//                 <div className="bg-[#0a0a0a] rounded-xl p-6 mb-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-[#afa18f]">Premium Plan</span>
//                     <span className="text-[#afa18f] font-bold">₹999</span>
//                   </div>
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-[#afa18f] opacity-70">
//                       File Uploads
//                     </span>
//                     <span className="text-[#ec4e39] opacity-70">Unlimited</span>
//                   </div>
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-[#afa18f] opacity-70">
//                       Campaign Manager
//                     </span>
//                     <span className="text-[#ec4e39] opacity-70">Included</span>
//                   </div>
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-[#afa18f] opacity-70">
//                       Platform Fee
//                     </span>
//                     <span className="text-[#afa18f] opacity-70">₹0</span>
//                   </div>
//                   <div className="border-t border-[#333] pt-4">
//                     <div className="flex justify-between items-center">
//                       <span className="text-[#afa18f] font-bold">Total</span>
//                       <span className="text-[#ec4e39] font-bold text-xl">
//                         ₹999
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <Button
//                   onClick={handlePayment}
//                   disabled={isLoading || selectedFiles.length === 0}
//                   className={`w-full py-4 text-lg font-semibold transition-colors ${
//                     selectedFiles.length > 0
//                       ? "bg-[#ec4e39] text-white hover:bg-[#ec4e39]/90"
//                       : "bg-gray-600 text-gray-400 cursor-not-allowed"
//                   }`}
//                 >
//                   {isLoading ? (
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                       Processing Payment...
//                     </div>
//                   ) : selectedFiles.length === 0 ? (
//                     "Upload Files to Continue"
//                   ) : (
//                     `Pay ₹999 Now`
//                   )}
//                 </Button>

//                 <p className="text-xs text-[#afa18f] opacity-60 mt-4">
//                   Secure payment powered by Razorpay. Your dedicated campaign
//                   manager will contact you within 30 minutes of payment
//                   confirmation.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumPlanPage;
