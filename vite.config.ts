import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    define: {
        'process.env': loadEnv(process.env.NODE_ENV, process.cwd())
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components'),
            'contexts': path.resolve(__dirname, './src/contexts'),
            'hooks': path.resolve(__dirname, './src/hooks'),
            'utils': path.resolve(__dirname, './src/utils')
        },
    },
});