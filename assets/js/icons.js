// Initialize Lucide icons - include only the icons you need
import { createIcons, Sun, Moon, Search,UserRound, SendHorizontal, Share2, Globe } from 'lucide';

export function initIcons() {
  createIcons({
    icons: {
      Sun,
      Moon,
      Search,
      UserRound,
      SendHorizontal,
      Share2,
      Globe
    }
  });
}

// Auto-initialize icons
initIcons();