import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github-dark.css';
import CopyButtonPlugin from 'highlightjs-copy';
import 'highlightjs-copy/styles/highlightjs-copy.css';

import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

// Register languages with hljs core
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);

hljs.addPlugin(
    new CopyButtonPlugin({
        autohide: true,
    }),
);

const highlightCodeBlocks = async () => {

    for (const block of document.querySelectorAll('pre code')) {
        if (!block.classList.contains('hljs')) {
            hljs.highlightElement(block);
        }
    }
};
// Highlight code blocks on DOMContentLoaded, or immediately if the document is already loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        void highlightCodeBlocks();
    });
} else {
    void highlightCodeBlocks();
}
