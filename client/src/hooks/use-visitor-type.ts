import { useState, useEffect } from 'react';

type VisitorType = {
  type: 'curious' | 'recruiter';
  email?: string;
  lastShownDate?: string; // Store the date as YYYY-MM-DD
};

const isNewDay = (lastShownDate?: string): boolean => {
  if (!lastShownDate) return true;
  
  const today = new Date().toISOString().split('T')[0]; // Gets YYYY-MM-DD
  return today !== lastShownDate;
};

export function useVisitorType() {
  const [showModal, setShowModal] = useState(false);
  const [visitorType, setVisitorType] = useState<VisitorType | null>(null);

  useEffect(() => {
    const checkAndShowModal = () => {
      const storedData = localStorage.getItem('visitorType');
      
      if (storedData) {
        const data = JSON.parse(storedData) as VisitorType;
        setVisitorType(data);
        
        // Check if it's a new day
        if (isNewDay(data.lastShownDate)) {
          setTimeout(() => setShowModal(true), 1500);
        }
      } else {
        // First time visitor
        setTimeout(() => setShowModal(true), 1500);
      }
    };

    checkAndShowModal();
  }, []);

  const handleSubmit = async (type: 'curious' | 'recruiter', email?: string) => {
    try {
      const today = new Date().toISOString().split('T')[0]; // Gets YYYY-MM-DD
      const visitorData: VisitorType = {
        type,
        email,
        lastShownDate: today
      };
      
      // Save to localStorage
      setVisitorType(visitorData);
      localStorage.setItem('visitorType', JSON.stringify(visitorData));
      
      // Send to backend
      const response = await fetch('/api/visitor-stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, email })
      });

      if (!response.ok) {
        throw new Error('Failed to register visitor');
      }

      setShowModal(false);
    } catch (error) {
      console.error('Error registering visitor:', error);
      // Still close modal and save locally even if API call fails
      setShowModal(false);
    }
  };

  return {
    showModal,
    setShowModal,
    visitorType,
    onSubmit: handleSubmit
  };
} 