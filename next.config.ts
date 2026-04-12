import type { NextConfig } from 'next';
import { resolve } from 'path';

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
    },
    turbopack: {
        root: resolve('.'),
    },
};

export default nextConfig;
