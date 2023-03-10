import { BaseTerminalProfile } from 'tabby-terminal'

export interface Shell {
    id: string
    name: string
    command: string
    args?: string[]
    env: Record<string, string>

    /**
     * Base path to which shell's internal FS is relative
     * Currently used for WSL only
     */
    fsBase?: string

    cwd?: string

    /**
     * SVG icon
     */
    icon?: string

    hidden?: boolean
}

/**
 * Extend to add support for more shells
 */
export abstract class ShellProvider {
    abstract provide (): Promise<Shell[]>
}


export interface SessionOptions {
    restoreFromPTYID?: string
    name?: string
    command: string
    args?: string[]
    cwd?: string
    env?: Record<string, string>
    width?: number
    height?: number
    pauseAfterExit?: boolean
    runAsAdministrator?: boolean
}

export interface LocalProfile extends BaseTerminalProfile {
    options: SessionOptions
}

export interface ChildProcess {
    pid: number
    ppid: number
    command: string
}
