// ============================================
// 🔥 DR. ATHOORY APPRECIATION MODE 🔥
// ============================================

const CONFIG = {
    // Name shown on the page
    valentineName: "Dr. Athoory",

    // Browser tab title
    pageTitle: "A Very Important Question 😌🔥",

    // Floating emojis in the background
    floatingEmojis: {
        hearts: ['🔥', '✨', '💫', '❤️‍🔥'],
        bears: ['😌', '👑']
    },

    // Questions and interactions
    questions: {
        first: {
            text: "Be honest… do you realize how hot you are?",
            yesBtn: "Obviously 😌",
            noBtn: "Not really",
            secretAnswer: "Confidence looks VERY good on you 🔥"
        },
        second: {
            text: "On a scale from 1 to ICONIC…",
            startText: "I’d say you’re",
            nextBtn: "Continue 👀"
        },
        third: {
            text: "So… should the world be warned about your level of hotness? 🔥",
            yesBtn: "Yes, immediately",
            noBtn: "Let them suffer"
        }
    },

    // Slider / meter messages
    loveMessages: {
        extreme: "This should be illegal honestly 🚨🔥",
        high: "Yeah… that’s dangerous level hot 😮‍🔥",
        normal: "Already above average, no debate."
    },

    // Final celebration screen
    celebration: {
        title: "Confirmed: Dr. Athoory is a menace 🔥👑",
        message: "Confidence, brains, and looks? That’s an unfair combo.",
        emojis: "🔥👑✨😌❤️‍🔥💫"
    },

    // Color scheme (more bold / confident)
    colors: {
        backgroundStart: "#1f1c2c",
        backgroundEnd: "#928dab",
        buttonBackground: "#ff4757",
        buttonHover: "#ff6b81",
        textColor: "#ffffff"
    },

    // Animations
    animations: {
        floatDuration: "14s",
        floatDistance: "60px",
        bounceSpeed: "0.45s",
        heartExplosionSize: 1.6
    },

    // Background Music (still works)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://dl.dropbox.com/scl/fi/h13h8e4sy1r91z8zuqyfp/Ghostly-Kisses-Heartbeat-Official-Video.mp3?rlkey=io203t49236vvq1ucsz3jbgdc&st=ps6wtw1g&dl=0,
        startText: "🎵 Set the mood",
        stopText: "🔇 Stop",
        volume: 0.5
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;
