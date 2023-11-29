document.addEventListener('DOMContentLoaded', function () {
    const clickableTitles = document.querySelectorAll('.clickable-title');

    clickableTitles.forEach(title => {
      title.addEventListener('click', () => {
        const content = title.nextElementSibling;

        content.classList.toggle('hidden');
      });
    });
  });