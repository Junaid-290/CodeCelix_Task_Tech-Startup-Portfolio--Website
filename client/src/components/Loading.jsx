import { motion } from 'framer-motion';
import './Loading.css';

const Loading = () => {
  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="logo-glow" />
          <svg viewBox="0 0 100 100" className="logo-svg">
            <defs>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <motion.path
              className="logo-triangle"
              d="M50 10 L90 80 H10 Z"
              fill="none"
              stroke="url(#loadingGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.circle
              className="logo-circle"
              cx="50"
              cy="55"
              r="12"
              fill="url(#loadingGradient)"
            />
            <motion.circle
              className="orb orb-1"
              cx="50"
              cy="10"
              r="3"
              fill="#6366F1"
            />
            <motion.circle
              className="orb orb-2"
              cx="50"
              cy="90"
              r="3"
              fill="#EC4899"
            />
          </svg>
        </motion.div>
        
        <motion.div 
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="loading-brand">NexaFlow</span>
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </motion.div>
        
        <motion.div 
          className="loading-bar-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="loading-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
