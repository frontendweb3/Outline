// Import styles
import '../css/styles.css';

// Import utilities
import './alpine.js';  // Initialize Alpine.js
import './icons.js';   // Initialize Lucide icons

// Help Vite discover images for optimization
import.meta.glob('../images/**/*.{png,jpg,jpeg,svg,webp,avif}', { eager: true });

const syncCommentTheme = () => {
    const commentsScript = document.querySelector('script[data-ghost-comments]');
    const commentsRoot = document.getElementById('ghost-comments-root');
    const commentsFrame = commentsRoot?.querySelector('iframe[title="comments-frame"]');
    const commentsDocument = commentsFrame?.contentDocument;

    if (!commentsScript) {
        if (!commentsDocument && commentsFrame) {
            commentsFrame.addEventListener('load', syncCommentTheme, {once: true});
        }
        return;
    }

    commentsScript.dataset.colorScheme = 'dark';

    if (!commentsDocument) {
        if (commentsFrame) {
            commentsFrame.addEventListener('load', syncCommentTheme, {once: true});
        }

        return;
    }

    const commentSection = commentsDocument.querySelector('body > section.ghost-display-content');

    if (commentSection) {
        commentSection.classList.add('dark');
    } else if (commentsFrame) {
        commentsFrame.addEventListener('load', syncCommentTheme, {once: true});
    }
};

document.addEventListener('DOMContentLoaded', syncCommentTheme);
