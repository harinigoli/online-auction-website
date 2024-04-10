// Get reference to elements
const homeLink = document.getElementById('home-link');
const browseItemsLink = document.getElementById('browse-items-link');
const sellItemLink = document.getElementById('sell-item-link');
const myAccountLink = document.getElementById('my-account-link');
const contentContainer = document.getElementById('content');

// Add event listeners
homeLink.addEventListener('click', showHomePage);
browseItemsLink.addEventListener('click', showBrowseItemsPage);
sellItemLink.addEventListener('click', showSellItemPage);
myAccountLink.addEventListener('click', showMyAccountPage);

// Function to display home page content
function showHomePage(event) {
    event.preventDefault();
    contentContainer.innerHTML = `
        <h2>Welcome to the Online Auction Platform</h2>
        <p>This is the home page. Here you can find featured items, recent auctions, and more.</p>
    `;
}

// Function to display browse items page content
function showBrowseItemsPage(event) {
    event.preventDefault();
    contentContainer.innerHTML = `
        <h2>Browse Items</h2>
        <p>Here you can browse through available items for sale in the auction platform.</p>
    `;
}

// Function to display sell item page content
function showSellItemPage(event) {
    event.preventDefault();
    contentContainer.innerHTML = `
        <h2>Sell Item</h2>
        <p>If you have an item to sell, you can list it here for auction.</p>
    `;
}

// Function to display my account page content
function showMyAccountPage(event) {
    event.preventDefault();
    contentContainer.innerHTML = `
        <h2>My Account</h2>
        <p>Here you can view your account details, bidding history, and manage your listings.</p>
    `;
}

// Show home page by default
showHomePage(new Event('click'));
