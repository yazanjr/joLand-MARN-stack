import React, { useState, useEffect } from "react";
import { fetchProjects } from "../api";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [lands, setLands] = useState([]);
  const [selectedLand, setSelectedLand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLands = async () => {
      try {
        const data = await fetchProjects();
        setLands(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects");
        setLoading(false);
      }
    };
    getLands();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <>
      {/* ✅ Add Navbar/Header */}
      

      <section className="container mx-auto py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          All <span className="font-light underline">Projects</span>
        </h2>

        {/* Grid of Lands */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {lands.map((land) => (
            <motion.article
              key={land._id}
              layoutId={land._id}
              onClick={() => setSelectedLand(land)}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}${land.photo}`}
                alt={land.location}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {land.location}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{land.size} m²</p>
                <p className="text-gray-700 line-clamp-3">{land.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {lands.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No projects available yet.
          </div>
        )}

        {/* Back to home */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block bg-[#3b6d72] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#335b61] transition"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* ✅ Popup Modal */}
      <AnimatePresence>
        {selectedLand && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLand(null)} // click outside to close
          >
            <motion.div
              layoutId={selectedLand._id}
              className="bg-white rounded-xl overflow-hidden max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()} // prevent background click
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`${import.meta.env.VITE_API_URL}${selectedLand.photo}`}
                alt={selectedLand.location}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {selectedLand.location}
                </h3>
                <p className="text-gray-600 mb-3">
                  Size: {selectedLand.size} m²
                </p>
                <p className="text-gray-700">{selectedLand.description}</p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedLand(null)}
                className="absolute top-4 right-4 bg-[#3b6d72] text-white rounded-full px-3 py-1 text-sm hover:bg-[#2f5458]"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AllProjects;
