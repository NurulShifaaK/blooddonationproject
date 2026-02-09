// import { motion } from "framer-motion";
// import { Droplet, Hospital, UserPlus, Search } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6 },
//   }),
// };

// const Home = () => {
//   return (
//     <div className="bg-slate-50 min-h-screen">
// <Navbar />
//       {/* HERO SECTION */}
//       <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//             Donate Blood. <br />
//             <span className="text-blue-600">Save Lives.</span>
//           </h1>

//           <p className="mt-6 text-slate-600 text-lg">
//             A trusted platform to find blood availability from hospitals
//             or nearby donors. Register once and help when it matters most.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <Link
//               to="/register"
//               className="px-6 py-3 shadow-2xs bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
//             >
//               Register Now
//             </Link>

//             <Link
//               to="/search"
//               className="px-6 py-3 border shadow-2xs border-blue-600/20 text-blue-600 rounded-lg font-medium hover:bg-blue-50"
//             >
//               Find Blood
//             </Link>
//           </div>
//         </motion.div>

//         {/* HERO IMAGE CARD */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="bg-white rounded-3xl shadow-xl p-8"
//         >
//           <div className="grid grid-cols-2 gap-4">
//             <StatCard title="Available Units" value="128+" />
//             <StatCard title="Hospitals" value="24" />
//             <StatCard title="Donors" value="860+" />
//             <StatCard title="Requests Today" value="36" />
//           </div>
//         </motion.div>
//       </section>

//       {/* BLOOD AVAILABILITY */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-semibold text-slate-900 mb-10">
//           Blood Availability
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {["A+", "B+", "O+", "AB+"].map((type, i) => (
//             <motion.div
//               key={type}
//               custom={i}
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               className="bg-white rounded-2xl shadow-md p-6"
//             >
//               <div className="flex items-center gap-3">
//                 <Droplet className="text-red-500" />
//                 <h3 className="text-xl font-semibold">{type}</h3>
//               </div>
//               <p className="mt-4 text-slate-600">
//                 Available in nearby hospitals & donors
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-slate-900 mb-12">
//             How It Works
//           </h2>

//           <div className="grid md:grid-cols-3 gap-10">
//             <HowCard
//               icon={<UserPlus />}
//               title="Register"
//               text="Create your profile as a donor or recipient."
//             />
//             <HowCard
//               icon={<Search />}
//               title="Search Blood"
//               text="Find available blood by group and location."
//             />
//             <HowCard
//               icon={<Hospital />}
//               title="Connect"
//               text="Contact hospitals or donors instantly."
//             />
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="bg-blue-600 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto px-6 text-center text-white"
//         >
//           <h2 className="text-3xl font-semibold">
//             One Registration Can Save Many Lives
//           </h2>
//           <p className="mt-4 text-blue-100">
//             Be ready to help when someone needs blood urgently.
//           </p>

//           <Link
//             to="/register"
//             className="inline-block mt-8 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50"
//           >
//             Get Started
//           </Link>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// /* ---------- SMALL COMPONENTS ---------- */

// const StatCard = ({ title, value }) => (
//   <div className="bg-slate-50 rounded-xl p-5">
//     <p className="text-sm text-slate-500">{title}</p>
//     <h3 className="text-2xl font-semibold text-slate-900 mt-2">{value}</h3>
//   </div>
// );

// const HowCard = ({ icon, title, text }) => (
//   <motion.div
//     whileHover={{ y: -6 }}
//     className="bg-slate-50 rounded-2xl p-8 shadow-sm"
//   >
//     <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
//       {icon}
//     </div>
//     <h3 className="text-xl font-semibold">{title}</h3>
//     <p className="mt-3 text-slate-600">{text}</p>
//   </motion.div>
// );



import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Droplet,
  Heart,
  Users,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import Navbar from "./Navbar";

/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-6">
             Trusted Blood Donation Network
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect Donors with Life-Saving Care
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A professional healthcare platform connecting donors, hospitals,
            and patients with real-time coordination.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/signup"
              className="px-8 py-4 bg-blue-900 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-red-800"
            >
              Register as Donor <ArrowRight size={18} />
            </Link>

            <Link
              to="/blood-requests"
              className="px-8 py-4 border border-black/20 text-gray-700 rounded-xl font-semibold hover:bg-red-50"
            >
              Find Blood Now
            </Link>
          </div>

          {/* STATS */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {[
              { icon: Users, label: "Active Donors", value: "12K+" },
              { icon: Heart, label: "Lives Saved", value: "45K+" },
              { icon: MapPin, label: "Partner Hospitals", value: "180+" },
              { icon: TrendingUp, label: "Success Rate", value: "98%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-white rounded-2xl flex flex-col gap-2 p-6 shadow border border-black/20"
              >
                <stat.icon className="text-blue-950" />
                <p className="text-sm text-gray-500">{stat.label}</p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOOD TYPES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Blood Type Availability
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Live donor availability across locations
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {["O+", "O-", "A+", "B+"].map((type) => (
              <motion.div
                key={type}
                variants={item}
                className="bg-white border border-black/20 rounded-2xl p-6 shadow hover:shadow-lg"
              >
                
                <h3 className="text-3xl font-bold">{type}</h3>
                <p className="text-gray-500 mb-4">Available</p>
                <button className="text-blue-900 font-semibold">
                  View Details →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How BloodCare Works
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                //icon: CheckCircle2,
                num: "01",
                title: "Register",
                desc: "Create a verified donor or hospital profile.",
              },
              {
                //icon: Zap,
                num: "02",
                title: "Match",
                desc: "Get matched instantly with urgent requests.",
              },
              {
                // icon: Award,
                num: "03",
                title: "Save Lives",
                desc: "Donate blood and track your impact.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-white p-8 rounded-2xl shadow border border-black/20"
              >
                {/* <step.icon className="text-red-600 mb-4" size={32} /> */}
                <span className="text-4xl text-red-100 font-bold">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Healthcare-Grade Features
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Clock, title: "Real-Time Availability" },
              { icon: TrendingUp, title: "Analytics Dashboard" },
              { icon: Heart, title: "Health Monitoring" },
              { icon: Users, title: "Community Network" },
              { icon: Award, title: "Donor Recognition" },
              { icon: MapPin, title: "Location Services" },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-gray-50 p-6 rounded-2xl border border-black/20 flex flex-col items-center gap-4 text-center"
              >
                <f.icon className="text-blue-950 mb-3" />
                <h3 className="font-bold">{f.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Be Ready. Save Lives.</h2>
        <p className="mb-8 text-white/90">
          One registration can save someone tomorrow.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold"
        >
          Get Started <ArrowRight size={18} />
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-10 text-center text-sm text-gray-500">
        © 2025 BloodCare. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
