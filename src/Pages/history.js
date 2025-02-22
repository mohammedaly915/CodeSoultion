// SurveyPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {generalOptions , challengeOptions} from './Data'
import { useNavigate } from 'react-router-dom';

// Custom Select Component
const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <label className="block text-gray-300 mb-2 text-sm font-medium">{label}</label>
      <motion.div
        className="bg-gray-800/80 backdrop-blur-md rounded-xl p-3 flex items-center justify-between cursor-pointer text-gray-200 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {value || "Select an option..."}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 w-full mt-1 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl max-h-48 overflow-y-auto"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-3 py-2 text-gray-200 hover:bg-gray-700/70 cursor-pointer transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Main Survey Page Component
const RecommedPage = () => {
  const [formData, setFormData] = useState({
    country: "Egypt",
    experience: "1-3 years",
    role: "Laboratory Technician or Specialist",
    ai_familiarity: "Familiar",
    ai_usage: "Limited use",
    financial_constraints: "Significant Barrier",
    ethical_concerns: "Major Barrier",
    staff_resistance: "Moderate Barrier",
    lack_of_training: "Moderate Barrier",
    regulatory_compliance: "Significant Barrier",
  });
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  // Handle form submission
  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setResponse(null);
    console.dir(formData);
    
    try {

      navigate("/review", { state: { formData } });

    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-white-900 py-12 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
          Laboratory AI Survey
        </h1>

        {/* General Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6">General Information</h2>
          <div className="space-y-6">
            <CustomSelect
              label="In which country is your laboratory or organization based?"
              options={generalOptions.country}
              value={formData.country}
              onChange={(value) => setFormData({ ...formData, country: value })}
            />
            <CustomSelect
              label="How many years of experience do you have in your field?"
              options={generalOptions.experience}
              value={formData.experience}
              onChange={(value) => setFormData({ ...formData, experience: value })}
            />
            <CustomSelect
              label="What is your role in the organization?"
              options={generalOptions.role}
              value={formData.role}
              onChange={(value) => setFormData({ ...formData, role: value })}
            />
            <CustomSelect
              label="How familiar are you with AI technologies in laboratory operations?"
              options={generalOptions.aiFamiliarity}
              value={formData.aiFamiliarity}
              onChange={(value) => setFormData({ ...formData, aiFamiliarity: value })}
            />
            <CustomSelect
              label="To what extent is AI currently used in your laboratory operations?"
              options={generalOptions.aiUsage}
              value={formData.aiUsage}
              onChange={(value) => setFormData({ ...formData, aiUsage: value })}
            />
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6">Challenges to AI Implementation</h2>
          <div className="space-y-6">
            <CustomSelect
              label="Financial constraints"
              options={challengeOptions}
              value={formData.financialConstraints}
              onChange={(value) => setFormData({ ...formData, financialConstraints: value })}
            />
            <CustomSelect
              label="Ethical concerns (e.g., data privacy, transparency)"
              options={challengeOptions}
              value={formData.ethicalConcerns}
              onChange={(value) => setFormData({ ...formData, ethicalConcerns: value })}
            />
            <CustomSelect
              label="Staff resistance to change"
              options={challengeOptions}
              value={formData.staffResistance}
              onChange={(value) => setFormData({ ...formData, staffResistance: value })}
            />
            <CustomSelect
              label="Lack of training and education"
              options={challengeOptions}
              value={formData.lackOfTraining}
              onChange={(value) => setFormData({ ...formData, lackOfTraining: value })}
            />
            <CustomSelect
              label="Regulatory compliance issues"
              options={challengeOptions}
              value={formData.regulatoryCompliance}
              onChange={(value) => setFormData({ ...formData, regulatoryCompliance: value })}
            />
          </div>
        </section>

        {/* Submit Button */}
        <motion.button
          onClick={handleSubmit}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Submitting..." : "Check"}
        </motion.button>

        {/* Response/Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-500/20 rounded-xl text-red-200 shadow-md">
            {error}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RecommedPage;


// ReviewPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';


// Review Item Component
const ReviewItem = ({ label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <span className="text-gray-300 font-medium sm:w-1/2">{label}</span>
    <span className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white font-semibold px-4 py-2 rounded-lg sm:w-1/2 text-center shadow-[0_0_10px_rgba(79,70,229,0.2)]">
      {value}
    </span>
  </motion.div>
);

const ReviewPage = () => {
  const location = useLocation();
  const data = location.state;
  const RecommendationData=data.formData  
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("https://abdelrahman12012-dr-helmy.hf.space/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(RecommendationData),
      });

      if (!res.ok) throw new Error("API request failed");

      const data = await res.json();
      setResponse(data);
      navigate('/result', { state: { result: data } }); // Navigate to ResultPage with data
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
          Review Your Responses
        </h1>

        {/* General Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6 pb-2">General Information</h2>
          <div className="space-y-4">
            <ReviewItem
              label="In which country is your laboratory or organization based?"
              value={RecommendationData.country}
            />
            <ReviewItem
              label="How many years of experience do you have in your field?"
              value={RecommendationData.experience}
            />
            <ReviewItem
              label="What is your role in the organization?"
              value={RecommendationData.role}
            />
            <ReviewItem
              label="How familiar are you with AI technologies in laboratory operations?"
              value={RecommendationData.ai_familiarity}
            />
            <ReviewItem
              label="To what extent is AI currently used in your laboratory operations?"
              value={RecommendationData.ai_usage}
            />
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6 pb-2">Challenges to AI Implementation</h2>
          <div className="space-y-4">
            <ReviewItem
              label="Financial constraints"
              value={RecommendationData.financial_constraints}
            />
            <ReviewItem
              label="Ethical concerns (e.g., data privacy, transparency)"
              value={RecommendationData.ethical_concerns}
            />
            <ReviewItem
              label="Staff resistance to change"
              value={RecommendationData.staff_resistance}
            />
            <ReviewItem
              label="Lack of training and education"
              value={RecommendationData.lack_of_training}
            />
            <ReviewItem
              label="Regulatory compliance issues"
              value={RecommendationData.regulatory_compliance}
            />
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Get AI Recommendation"}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gray-700/80 text-white font-semibold rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300"
            onClick={() => navigate('/survey')} // Assuming Edit takes back to SurveyPage
          >
            Edit Responses
          </motion.button>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-500/20 rounded-xl text-red-200 shadow-md">
            {error}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ReviewPage;

// ResultPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa'; // Using react-icons for AI icon

const ResultPage = () => {
  const location = useLocation();
  const result = location.state?.result || { predicted_strategy: "No recommendation available" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
          AI Recommendation
        </h1>

        {/* Animated Result Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
          className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-6 shadow-lg flex items-center gap-4"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaRobot className="text-4xl text-blue-300" />
          </motion.div>
          <div>
            <p className="text-gray-300 text-sm mb-2">Based on your input, our AI suggests:</p>
            <p className="text-white text-lg font-semibold">{result.predicted_strategy}</p>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 py-3 px-6 bg-gray-700/80 text-white font-semibold rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300"
          onClick={() => window.history.back()}
        >
          Back to Review
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ResultPage;

