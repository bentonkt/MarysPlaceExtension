// Check if the Scratch editor is fully loaded
window.addEventListener('load', function() {
    // Check for the existence of the Scratch global object
    if (window.Scratch) {
        // Listen for changes in the Scratch blocks
        observeScratchBlocks();
    }
});

function observeScratchBlocks() {
    // Get the Scratch blocks area
    const blocksArea = document.querySelector('.blocklyWorkspace');
    if (!blocksArea) return;

    // Use a MutationObserver to detect when blocks are added or removed
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.classList && node.classList.contains('blocklyBlock')) {
                        console.log('Block added:', node);
                        // Here, you can extract information about the block and save or send it elsewhere
                    }
                });
                mutation.removedNodes.forEach(node => {
                    if (node.classList && node.classList.contains('blocklyBlock')) {
                        console.log('Block removed:', node);
                        // Handle block removal if needed
                    }
                });
            }
        });
    });

    observer.observe(blocksArea, { childList: true, subtree: true });
}
