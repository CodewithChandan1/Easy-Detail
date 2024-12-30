import { useEffect } from 'react';

export const useBackground = (categoryId) => {
  useEffect(() => {
    // Predefined backgrounds for different categories
    const backgrounds = {
      plants: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.2))',
      party: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='2' fill='rgba(255,255,255,0.2)'/%3E%3C/svg%3E")`,
      default: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))'
    };

    // Set the background style based on the categoryId
    document.body.style.background = backgrounds[categoryId] || backgrounds.default;
    document.body.style.backgroundSize = categoryId === 'party' ? '100px 100px' : 'cover';

    // If the category is 'party', add the confetti animation
    if (categoryId === 'party') {
      document.body.classList.add('animate-confetti');
    } else {
      document.body.classList.remove('animate-confetti');
    }

    // Cleanup the styles and animations when categoryId changes or component unmounts
    return () => {
      document.body.style.background = '';
      document.body.style.backgroundSize = '';
      document.body.classList.remove('animate-confetti');
    };
  }, [categoryId]); // Run effect when categoryId changes
};
