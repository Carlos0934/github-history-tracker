import type { Config } from '@jest/types'
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFiles: ['dotenv/config'],
}

export default config
