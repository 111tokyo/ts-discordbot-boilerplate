import type { Command } from "@/types/command"
import { type ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from "discord.js"

const command: Command = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("› Permet d'afficher la latence du bot !"),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const clientPing = interaction.client.ws.ping
        await interaction.reply({ content: `Pong! (\`${clientPing}\`ms)`, flags: MessageFlags.Ephemeral })
        return
    }
}

export default command