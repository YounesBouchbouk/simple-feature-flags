import { unstable_flag as flags } from "@vercel/flags/next";

/**
 * Feature flags configuration for badge template functionality.
 * These flags control various features and behaviors in the application.
 * Each flag is configured with a key, description, decision function,
 * and default value for consistent feature management.
 */

export const allowBadgeTemplate = flags({
  key: "badge_template",
  description: "Allow badge template",
  //decide: async () => process.env.BADGE_TEMPLATE_ENABLED === "true",
  decide : async () => {
    const response = await fetch("http://localhost:62851/flags.json");
    const data = await response.json();
    return data.badge_template.value;
  },
  defaultValue: true,
});


export const precomputeFlags = [allowBadgeTemplate] as const; 