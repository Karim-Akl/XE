"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

// إنشاء Context
const ScrollContext = createContext();

// إنشاء Provider لتوفير البيانات للمكونات
export const ScrollProvider = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setState(true);
      } else {
        setState(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={state}>
      {children}
    </ScrollContext.Provider>
  );
};

// استخدام Context في مكونات أخرى
export const useScrollState = () => useContext(ScrollContext);
