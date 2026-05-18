// Configuration for Call Carl
// IMPORTANT: For production, these should be environment variables or server-side secrets
// Never commit actual credentials to version control

const CONFIG = {
    // Supabase Configuration
    // Get these from your Supabase project settings: https://app.supabase.com/project/_/settings/api
    SUPABASE_URL: 'https://gmyoukxngvqbvayjnktc.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdteW91a3huZ3ZxYnZheWpua3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMjEwMjgsImV4cCI6MjA5NDY5NzAyOH0.UDygmxemSqVMG64-vFxGjsiEb3k5UP9edqX-EWyLXWY',

    // Admin Panel Configuration
    ADMIN_PASSWORD: 'callcarlvincent771930',

    // Email Configuration (for email alerts)
    EMAIL_API_KEY: '',
    ALERT_EMAIL: 'hello@call-carl.com'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
