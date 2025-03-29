import { Client } from 'discord.js';
import { config } from '@/config';
import { loadEvents } from './loaders/events';
import { loadCommands } from './loaders/commands';
const client: Client = new Client({
  intents: Array(),
});

(async () => {
  await loadEvents(client);
  await loadCommands(client);
  await client.login(config.token);
})();
