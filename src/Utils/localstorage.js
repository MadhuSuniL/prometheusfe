// Fetch recent aliens from localStorage
export const getRecentAliens = () => {
    const storedAliens = localStorage.getItem('recentAliens');
    return storedAliens ? JSON.parse(storedAliens) : [];
};

// Append alien to recent aliens, ensuring the list behaves as a stack
export const appendAlienToRecentAliens = (alienName) => {
    let recentAliens = getRecentAliens();

    // Remove the alien if it already exists to avoid duplicates
    recentAliens = recentAliens.filter(alien => alien !== alienName);

    // Add the new alien to the start of the array
    recentAliens.unshift(alienName);

    // Slice the array to ensure it only contains the 10 most recent aliens
    if (recentAliens.length > 5) {
        recentAliens = recentAliens.slice(0, 5);
    }

    // Update localStorage with the new array
    localStorage.setItem('recentAliens', JSON.stringify(recentAliens));
};
