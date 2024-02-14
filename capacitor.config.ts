import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hangman.app',
  appName: 'Hangman',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
