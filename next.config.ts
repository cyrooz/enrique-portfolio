import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compiler: {
    // Enables the SWC styled-components transform (not required but useful)
    styledComponents: true,
  },

  
};

export default nextConfig;
