/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['res.cloudinary.com', "portfolio-eminataren.s3.us-east-1.amazonaws.com"]
    // }
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'portfolio-eminataren.s3.us-east-1.amazonaws.com',
                port: '',
                pathname: '**',
            },
        ],
    },

};

export default nextConfig;
