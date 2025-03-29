import type { SlashCommandBuilder } from "discord.js"

type Command = {
    data: SlashCommandBuilder,
    execute: (...args: any[]) => void
}