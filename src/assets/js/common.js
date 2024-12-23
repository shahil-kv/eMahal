document.addEventListener('DOMContentLoaded', function () {
  // Close all dropdowns
  const closeAllDropdowns = () => {
    document
      .querySelectorAll('.dropdown-menu[data-show="true"]')
      .forEach((menu) => {
        menu.setAttribute('data-show', 'false');
      });
  };

  // Handle dropdown toggles
  document.addEventListener('click', function (e) {
    // Close all dropdowns if clicking outside any dropdown
    const dropdown = e.target.closest('[data-dropdown]');
    if (!dropdown) {
      closeAllDropdowns();
      return;
    }

    // Toggle the dropdown menu
    const menu = dropdown.querySelector('.dropdown-menu');
    const isOpen = menu.getAttribute('data-show') === 'true';

    // Close other dropdowns
    closeAllDropdowns();

    // Toggle the current dropdown
    menu.setAttribute('data-show', !isOpen);
  });

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
  });
});
