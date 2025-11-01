// src/components/ProjectCopy.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../api";
import { assets } from "../assets/assets";

const ProjectCopy = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const getLands = async () => {
      try {
        const data = await fetchProjects();
        setLands(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch lands");
        setLoading(false);
      }
    };
    getLands();
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (loading)
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading lands...</div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );

  return (
    <section id="Projects" className="container mx-auto py-16 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 lang="ar" className="text-3xl md:text-4xl font-bold mb-4">
          اكتشف المشاريع المتاحة
          <span className="ml-2 font-light">
            <span className="underline underline-offset-4 decoration-1">
              
            </span>
          </span>
        </h2>
        <p lang="ar" className="text-gray-600 max-w-md mx-auto">
          تعرّف على فرص استثمارية مختارة بعناية، تجمع بين النموّ المستقبلي ونمط الحياة والقيمة المستدامة.
        </p>
      </div>

      {/* Slider Controls */}
      <div className="flex justify-end items-center mb-6">
        <button
          onClick={() => scroll("left")}
          className="p-1 bg-[#3b6d72] rounded mr-2"
          aria-label="Previous Projects"
        >
          <img src={assets.leftArrow} alt="Previous" className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-1 bg-[#3b6d72] rounded"
          aria-label="Next Projects"
        >
          <img src={assets.rightArrow} alt="Next" className="w-6 h-6" />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {lands.map((land) => (
          <article
            key={land._id}
            className="w-[380px] h-[500px] bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 transition-transform duration-300 hover:-translate-y-1"
          >
            <img
  src={`${import.meta.env.VITE_API_URL}${land.photo}`}
  alt={land.location}
  className="w-full h-64 object-cover"
  onError={(e) => (e.target.src = "https://via.placeholder.com/400x300?text=No+Image")}
  loading="lazy"
/>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {land.location}
              </h3>
              <div className="text-sm text-gray-600 mb-3">
                <span className="inline-block bg-[#3b6d72] bg-opacity-10 text-[#3b6d72] px-3 py-1 rounded-full">
                  {land.size} m²
                </span>
              </div>
              <p className="text-gray-700 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                {land.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* No Results */}
      {lands.length === 0 && (
        <div className="text-center text-gray-600 mt-8">
          No lands available at the moment.
        </div>
      )}

      {/* View All Projects Button */}
      <div className="text-center mt-12">
        <Link
          to="/projects"
          className="inline-block bg-[#3b6d72] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#335b61] transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectCopy;
