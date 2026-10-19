export type ToolCall = {
  id: string
  tool: string
  isDone: boolean
}

declare global {
  interface PluginState {
    'tool-calls-sidebar': {
      calls: ToolCall[]
      isPaneOpen: boolean
    }
  }
}