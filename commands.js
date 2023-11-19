import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple announce command
const ANNOUNCE_COMMAND = {
  name: 'announce',
  description: 'Send announcement to the server',
  options: [
    {
      type: 3,
      name: 'announcement',
      description: 'Announcement:',
      required: true,
    },
  ],
  type: 1,
};


const ALL_COMMANDS = [ ANNOUNCE_COMMAND ];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);