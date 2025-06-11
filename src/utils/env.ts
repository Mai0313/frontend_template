/**
 * Centralized Environment Variable Management
 *
 * This module provides a unified interface for accessing all VITE_ environment variables
 * with proper validation and default values.
 */

// Environment variables that require values (will throw error if not provided)
const REQUIRED_ENV_VARS = ["VITE_WEBSITE_TITLE"] as const;

// Environment variables with default values
const DEFAULT_VALUES = {
  VITE_ROOT_PATH: "/",
  VITE_OPENAI_API_KEY: null,
  VITE_OPENAI_MODEL: null,
} as const;

/**
 * Validates that all required environment variables are set
 */
function validateRequiredEnvVars(): void {
  const missingVars: string[] = [];

  for (const varName of REQUIRED_ENV_VARS) {
    const value = import.meta.env[varName];

    if (!value || value.trim() === "") {
      missingVars.push(varName);
    }
  }

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}\n` +
        "Please check your .env file and ensure all required variables are set.",
    );
  }
}

/**
 * Gets an environment variable value with proper validation
 */
function getEnvVar<T extends keyof ImportMetaEnv>(
  varName: T,
  required: boolean = false,
): string {
  const value = import.meta.env[varName];

  if (required && (!value || value.trim() === "")) {
    throw new Error(`Required environment variable ${varName} is not set`);
  }

  return value || "";
}

/**
 * Gets an environment variable with a default value
 */
function getEnvVarWithDefault(
  varName: keyof typeof DEFAULT_VALUES,
  defaultValue: string | null,
): string | null {
  const value = import.meta.env[varName];

  return value || defaultValue;
}

// Validate required environment variables on module load
validateRequiredEnvVars();

// Exported environment variables with proper validation and defaults
export const env = {
  // Required environment variables (will throw error if not set)
  WEBSITE_TITLE: getEnvVar("VITE_WEBSITE_TITLE", true),

  // Optional environment variables with defaults
  ROOT_PATH: getEnvVarWithDefault(
    "VITE_ROOT_PATH",
    DEFAULT_VALUES.VITE_ROOT_PATH,
  ),
  OPENAI_API_KEY: getEnvVarWithDefault(
    "VITE_OPENAI_API_KEY",
    DEFAULT_VALUES.VITE_OPENAI_API_KEY,
  ),
  OPENAI_MODEL: getEnvVarWithDefault(
    "VITE_OPENAI_MODEL",
    DEFAULT_VALUES.VITE_OPENAI_MODEL,
  ),
} as const;

// Helper functions for specific use cases
export const envHelpers = {
  /**
   * Get the root path with fallback to default
   */
  getRootPath(): string {
    return env.ROOT_PATH || "/";
  },
} as const;

// Type exports for better TypeScript support
export type EnvConfig = typeof env;
export type EnvHelpers = typeof envHelpers;
