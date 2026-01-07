/**
 * Centralized image assets for the application.
 * Import images from this file to ensure consistent usage across the app.
 *
 * Usage:
 *   import { Images } from '../assets/images';
 *   <Image source={Images.logo} />
 */

// App branding
export const logo = require('./logo.jpg');
export const appIcon = require('../icon.png');
export const adaptiveIcon = require('../adaptive-icon.png');
export const splashIcon = require('../splash-icon.png');
export const favicon = require('../favicon.png');

// Navigation icons
export const chatIcon = require('./chat.png');
export const plusIcon = require('./plus.png');
export const questionIcon = require('./question.png');
export const settingIcon = require('./setting.png');
export const helpIcon = require('./help.png');

// Grouped exports for convenience
export const Images = {
  // Branding
  logo,
  appIcon,
  adaptiveIcon,
  splashIcon,
  favicon,

  // Navigation
  chat: chatIcon,
  plus: plusIcon,
  question: questionIcon,
  setting: settingIcon,
  help: helpIcon,
} as const;

// Navigation icon map for dynamic access
export const NavIcons = {
  services: plusIcon,
  inquiries: questionIcon,
  notifications: chatIcon,
  settings: settingIcon,
  help: helpIcon,
} as const;

export default Images;
