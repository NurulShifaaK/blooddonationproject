// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";

// const Allproduct = () => {
//   const token = localStorage.getItem("token");

//   const [products, setProducts] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     Age: "",
//     Bloodgroup: "",
//     Location: "",
//     PhoneNo: "",
//     category: "individual",
//   });

//   // FETCH ALL BLOOD REQUESTS
//   const bloodcollection = async () => {
//     const res = await axios.get(
//       import.meta.env.VITE_BLOOD_DETAILS_API,{
//         headers:{
//           Authorization: `Bearer ${token}`,
//         }
//       }
//     );
//     setProducts(res.data.products);
//   };

//   useEffect(() => {
//     bloodcollection();
//   }, []);

//   // HANDLE INPUT CHANGE
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // SUBMIT DONATION
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await axios.post(
//       import.meta.env.VITE_BLOOD_DONATE_API,
//       formData
//     );

//     setShowForm(false);
//     bloodcollection(); // refresh dashboard
//   };
  

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />

//       {/* HEADER */}
//       <div className="px-6 py-6">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Blood Requests Dashboard
//         </h1>
//         <p className="text-gray-600">
//           A single donation can save multiple lives
//         </p>
//       </div>

//       {/* ACTION BAR */}
//       <div className="flex gap-4 justify-between px-6 mb-6">
//         <input
//           type="text"
//           placeholder="Search by blood group"
//           className="px-4 border border-black/30 w-full rounded-lg "
//         />
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg"
//         >
//           Post
//         </button>
//       </div>

//       {/* DASHBOARD CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
//         {products.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white shadow-md rounded-xl p-5 border border-black/10"
//           >
//             <div className="flex justify-between mb-2">
//               <h2 className="text-lg font-semibold">{item.name}</h2>
//               <span className="text-sm bg-blue-100 px-3 py-1 rounded-full font-semibold">
//                 {item.category}
//               </span>
//             </div>

//             <p className="text-gray-600/80 text-sm mb-3">
//               {item.description}
//             </p>

//             <div className="text-sm text-gray-700 space-y-1">
//               <p><b>Blood Group:</b> {item.Bloodgroup}</p>
//               <p><b>Age:</b> {item.Age}</p>
//               <p><b>Location:</b> {item.Location}</p>
//               <p><b>Phone:</b> {item.PhoneNo}</p>
//             </div>
//             <button className="mt-2 text-blue-900 font-semibold">Donate</button>
//           </div>
//         ))}
//       </div>

//       {/* DONATE FORM MODAL */}
//       {showForm && (
//         <div className="fixed inset-0 mt-14 px-10 bg-black/10 flex items-center justify-center">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-6 rounded-xl space-y-4"
//           >
//             <h2 className="text-xl font-bold text-center">Donation Registration</h2>

//             <input name="name" onChange={handleChange} placeholder="Name" className="w-full border border-black/20 px-3 py-1.5 rounded-lg" />
//             <input name="Age" onChange={handleChange} placeholder="Age" className="w-full border border-black/20 px-3 py-1.5 rounded-lg" />
//             <input name="Bloodgroup" onChange={handleChange} placeholder="Blood Group" className="w-full border border-black/20 px-3 py-2 rounded-lg" />
//             <input name="Location" onChange={handleChange} placeholder="Location" className="w-full border border-black/20 px-3 py-2 rounded-lg" />
//             <input name="PhoneNo" onChange={handleChange} placeholder="Phone No" className="w-full border border-black/20 px-3 py-2 rounded-lg" />
//             <textarea name="description" onChange={handleChange} placeholder="Description" className="w-full border border-black/20 px-3 py-2 rounded-lg" />
//             <select name="category" onChange={handleChange} className="w-full border border-black/20 px-3 py-2 rounded-lg">
//               <option value="individual">Individual</option>
//               <option value="hospital">Hospital</option>
//             </select>

//             <div className="flex justify-end gap-3">
//               <button
//                 type="button"
//                 onClick={() => setShowForm(false)}
//                 className="px-4 py-2 border text-gray-500 font-semibold border-black/20 rounded-xl"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-900 font-semibold text-white rounded-xl"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allproduct;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "./Navbar"; // Adjusted to your local import
import {
  Droplet,
  MapPin,
  Heart,
  Plus,
  Search,
  X,
  AlertCircle,
  CheckCircle,
  Phone,
} from 'lucide-react';

const Allproduct = () => {
  // --- API & State Logic ---
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    Age: "",
    Bloodgroup: "O+",
    Location: "",
    PhoneNo: "",
    category: "individual",
  });

  const bloodGroups = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

  // FETCH ALL BLOOD REQUESTS
  const bloodcollection = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BLOOD_DETAILS_API, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      setProducts(res.data.products || []);
    } catch (err) {
      console.error("Error fetching blood requests", err);
    }
  };

  useEffect(() => {
    bloodcollection();
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SUBMIT DONATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    try {
      await axios.post(
        import.meta.env.VITE_BLOOD_DONATE_API,
        formData
      );

      setFormSuccess(true);
      setTimeout(() => {
        setShowForm(false);
        setFormSuccess(false);
        bloodcollection(); // refresh dashboard
      }, 1500);

      // Reset form
      setFormData({
        name: "",
        description: "",
        Age: "",
        Bloodgroup: "O+",
        Location: "",
        PhoneNo: "",
        category: "individual",
      });
    } catch (err) {
      setFormError('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // FILTER LOGIC
  const filteredRequests = products.filter((item) => {
    const matchesSearch =
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodGroup = selectedBloodGroup ? item.Bloodgroup === selectedBloodGroup : true;
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesBloodGroup && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-900/10 via-white/5 to-blue-900/10 border-b border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Blood Requests Dashboard</h1>
              <p className="text-gray-600">A single donation can save multiple lives</p>
            </div>
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-800 transition-colors"
            >
              <Plus size={20} /> Post Request
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-sm font-medium text-gray-700">Blood Group:</span>
              {['All', 'O+', 'A+', 'B+', 'AB+'].map((bg) => (
                <button
                  key={bg}
                  onClick={() => setSelectedBloodGroup(bg === 'All' ? '' : bg)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    (bg === 'All' && !selectedBloodGroup) || selectedBloodGroup === bg
                      ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600'
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Requests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="bg-gray-50 p-5 pb-3">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <span className="text-[10px] uppercase tracking-wider bg-blue-100 text-blue-900 px-2 py-1 rounded-md font-bold">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-red-100">
                    <Droplet className="text-red-500" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{item.Bloodgroup}</p>
                    <p className="text-xs text-gray-500">Request Active</p>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-blue-900" /> {item.Location}</div>
                  <div className="flex items-center gap-2"><Phone size={16} className="text-blue-900" /> {item.PhoneNo}</div>
                  <div className="flex items-center gap-2"><Heart size={16} className="text-blue-900" /> Age: {item.Age}</div>
                </div>
                <button className="w-full mt-2 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Donate Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRequests.length === 0 && (
          <div className="text-center py-20">
            <Droplet size={48} className="mx-auto text-gray-200 mb-4" />
            <p className="text-gray-500">No blood requests found matching your filters.</p>
          </div>
        )}
      </div>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setShowForm(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-15 pointer-events-none"
            >
              <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl pointer-events-auto overflow-hidden">
                <div className="p-6 bg-blue-900 text-white flex justify-between items-center">
                  <h2 className="text-xl font-bold">Post Blood Request</h2>
                  <button onClick={() => setShowForm(false)}><X size={20} /></button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                  {formError && (
                    <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg flex items-center gap-2">
                      <AlertCircle size={16} /> {formError}
                    </div>
                  )}
                  {formSuccess && (
                    <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg flex items-center gap-2">
                      <CheckCircle size={16} /> Request posted successfully!
                    </div>
                  )}

                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2.5 border border-black/20 rounded-lg outline-none focus:border-blue-900" required />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <select name="Bloodgroup" value={formData.Bloodgroup} onChange={handleChange} className="text-center border border-black/20 bg-blue-900 text-white rounded-lg outline-none">
                      {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                    </select>
                    <input name="Age" value={formData.Age} onChange={handleChange} placeholder="Age" className="p-2.5 border border-black/20  rounded-lg outline-none" />
                  </div>

                  <input name="Location" value={formData.Location} onChange={handleChange} placeholder="Location (City, State)" className="w-full p-2.5 border border-black/20 rounded-lg outline-none" required />
                  <input name="PhoneNo" value={formData.PhoneNo} onChange={handleChange} placeholder="Phone Number" className="w-full p-2.5 border border-black/20 rounded-lg outline-none" required />
                  
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2.5  bg-blue-900 text-white border border-black/20 rounded-lg outline-none">
                    <option value="individual">Individual</option>
                    <option value="hospital">Hospital</option>
                  </select>

                  <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Urgency details..." rows={3} className="w-full p-2.5 border border-black/20 rounded-lg outline-none resize-none" />

                  <div className="flex gap-3 pt-2">
                    <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-2.5 border border-black/20 rounded-lg font-medium">Cancel</button>
                    <button type="submit" disabled={isSubmitting} className="flex-1 py-2.5 bg-blue-900 text-white rounded-lg font-medium disabled:opacity-50">
                      {isSubmitting ? "Posting..." : "Post Request"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Allproduct;