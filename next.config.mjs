/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.ca-adv.vn", "vnggames.com", "lucents.xyz"],
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default nextConfig;
