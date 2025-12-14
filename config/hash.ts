// Importing the hash configuration from @adonisjs/hash
import { defineConfig, drivers } from '@adonisjs/core/hash'

const hashConfig = defineConfig({
  default: 'argon', // Default hasher

  list: {
    argon: drivers.argon2({
      version: 0x13, // Hex code for Argon2d (Argon2i is the default)
      variant: 'id', // Argon2id variant is recommended
      iterations: 3,
      memory: 65536,
      parallelism: 4,
      saltSize: 16,
      hashLength: 32,
    })
  }
})

export default hashConfig

/**
 * Inferring types for the list of hashers you have configured
 * in your application.
 */
declare module '@adonisjs/core/types' {
  export interface HashersList extends InferHashers<typeof hashConfig> {}
}