// Configuration for Call Carl
// IMPORTANT: For production, these should be environment variables or server-side secrets
// Never commit actual credentials to version control

const CONFIG = {
    // Supabase Configuration
    // Get these from your Supabase project settings: https://app.supabase.com/project/_/settings/api
    SUPABASE_URL: 'https://jlwubnfjxjzynfvinaab.supabase.co',
    SUPABASE_ANON_KEY: 'sb_publishable_exupIgAhWNOqTGbUmm7IcQ_2qhTe4H0',

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
