document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.floating-heart');

    // Add subtle parallax effect
    document.addEventListener('mousemove', (e) => {
        if (!heart) return;

        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        // Apply transform while maintaining the base rotation and scale from CSS animation
        // Note: CSS animation might override this if not handled carefully. 
        // Ideally, we should wrap the heart in a container for parallax, 
        // but for now let's just add the translation to the existing transform.
        // Since CSS animation uses 'transform', modifying it here will conflict.
        // A better approach for parallax on an animated element is to animate a wrapper.

        // However, to keep it simple and avoid HTML structure changes if not needed,
        // we can just log for now or apply to a wrapper if one existed.
        // Given the current CSS animation on .floating-heart, setting style.transform here 
        // will break the CSS animation (floatAndPulse).

        // Let's try to apply it to the container instead, if it doesn't have its own transform.
        const container = document.querySelector('.heart-container');
        if (container) {
            // The container is centered with translate(-50%, -50%), so we need to preserve that.
            container.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
    });
});