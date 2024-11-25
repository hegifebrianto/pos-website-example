// src/hooks/useDelayedLoading.js

import { useState, useEffect } from "react";

const useDelayedLoading = (delay = 500) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
};

export default useDelayedLoading;
