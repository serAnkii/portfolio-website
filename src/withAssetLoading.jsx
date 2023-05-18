// withAssetLoading.js (HOC) or useAssetLoading.js (custom hook)
import React, { useState, useEffect } from 'react';

// HOC version
const withAssetLoading = (WrappedComponent) => {
  return (props) => {
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    useEffect(() => {
      const loadAssets = async () => {
        // Perform any asynchronous tasks here, such as fetching data or loading images
        // Once all assets are loaded, set assetsLoaded to true
        // For example:
        await fetch('https://example.com/my-assets').then(() => {
          setAssetsLoaded(true);
        });
      };

      loadAssets();
    }, []);

    if (!assetsLoaded) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAssetLoading;
