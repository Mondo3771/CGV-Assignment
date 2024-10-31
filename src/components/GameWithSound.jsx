import React, { useEffect, useState } from 'react';
import acc from '../assets/audio_files/CarSound.mp3'; // Path to your car sound file
import skid from '../assets/audio_files/Skidsound.mp3'; // Path to your tire skid sound file

const GameWithSound = () => {
  const [carAudio] = useState(new Audio(acc)); // Create an audio object for the car sound
  const [tireAudio] = useState(new Audio(skid)); // Create an audio object for the tire sound
  const [keyHeldStart, setKeyHeldStart] = useState(null); // Track when the key was pressed

  useEffect(() => {
    const shortPressStart = 5; // Start point for short key press (in seconds)
    const longPressStart = 12; // Start point for long key press (in seconds)
    const loopEnd = 20; // Define the loop end point (in seconds)
    let intervalId; // Variable to store the interval ID

    carAudio.volume = 0.65; 
    tireAudio.volume = 0.4;

    const handleKeyDown = (event) => {
      if (event.code === 'ArrowUp') {
        if (carAudio.paused) {
          playCarSound(); // Start from 5s for every press
        }
        if (!keyHeldStart) {
          setKeyHeldStart(Date.now()); // Record the time when the key is pressed
        }
      } else if (event.code === 'ArrowRight' && tireAudio.paused) {
        playTireSound(); 
      } else if (event.code === 'ArrowLeft' && tireAudio.paused) {
        playTireSound(); 
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === 'ArrowUp') {
        stopCarSound(); // Stop the car sound when key is released
        setKeyHeldStart(null); // Reset key held start time
      } else if (event.code === 'ArrowRight') {
        stopTireSound(); 
      } else if (event.code === 'ArrowLeft') {
        stopTireSound();
      }
    };

 
    const playCarSound = () => {
      carAudio.currentTime = shortPressStart; // Set to 5 seconds every time the key is pressed
      carAudio.play().catch((error) => {
        console.error('Car audio play failed:', error);
      });

      // For looping if the key is held down long enough
      intervalId = setInterval(() => {
        if (keyHeldStart) {
          const heldDuration = Date.now() - keyHeldStart;
          if (heldDuration >= 18000 && !isLongPress) { // Check if held for 18 seconds
            carAudio.currentTime = longPressStart; // Set to 12 seconds for looping
            carAudio.loop = true; // Enable looping
            setIsLongPress(true); // Set long press flag
          } else if (heldDuration < 18000) {
            carAudio.loop = false; // Disable looping for short press
            setIsLongPress(false); // Reset long press flag
          }
        }
      }, 1000); // Check every second
    };

    const stopCarSound = () => {
      carAudio.pause(); // Stop the audio
      carAudio.currentTime = shortPressStart; // Reset to 5 seconds for the next play
      clearInterval(intervalId); // Clear the interval when stopping the sound
    };

    const playTireSound = () => {
      tireAudio.currentTime = 0; 
      tireAudio.play().catch((error) => {
        console.error('Tire audio play failed:', error); 
      });
    };

    const stopTireSound = () => {
      tireAudio.pause(); 
      tireAudio.currentTime = 0; 
    };

    // Attach event listeners for keydown and keyup events
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup event listeners and intervals when component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      clearInterval(intervalId); // Clear the interval when unmounting
    };
  }, [carAudio, tireAudio, keyHeldStart]); // Dependencies for useEffect

  return null; // This component doesn't render anything visually 
};

export default GameWithSound; // Export the component
