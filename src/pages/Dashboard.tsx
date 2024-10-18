import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [showBiometricPrompt, setShowBiometricPrompt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      // Show biometric prompt on first login
      const hasShownBiometricPrompt = localStorage.getItem('hasShownBiometricPrompt');
      if (!hasShownBiometricPrompt) {
        setShowBiometricPrompt(true);
        localStorage.setItem('hasShownBiometricPrompt', 'true');
      }
    }
  }, [user, navigate]);

  const handleBiometricPrompt = (allow: boolean) => {
    setShowBiometricPrompt(false);
    if (allow) {
      // Implement biometric authentication logic here
      console.log('Biometric authentication allowed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.username}!</h2>
                <p>Device ID: {user?.deviceId}</p>
                {/* Add more dashboard content here */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {showBiometricPrompt && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-xl">
            <h2 className="text-xl font-bold mb-4">Enable Biometric Authentication?</h2>
            <p className="mb-6">Would you like to use biometric authentication for faster login in the future?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => handleBiometricPrompt(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Not Now
              </button>
              <button
                onClick={() => handleBiometricPrompt(true)}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;