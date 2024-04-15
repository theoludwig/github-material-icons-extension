import { observe } from 'selector-observer';

import { replaceIconInRow, replaceElementWithIcon } from './replace-icon';

// Monitor DOM elements that match a CSS selector.
export const observePage = (gitProvider, iconPack) => {
  observe(gitProvider.selectors.row, {
    add(row) {
      const callback = () => replaceIconInRow(row, gitProvider, iconPack);
      callback();
      gitProvider.onAdd(row, callback);
    },
  });
};

export const replaceAllIcons = (provider, iconPack) =>
  document.querySelectorAll('img[data-material-icons-extension-iconname]').forEach((iconEl) => {
    const iconName = iconEl.getAttribute('data-material-icons-extension-iconname');
    const fileName = iconEl.getAttribute('data-material-icons-extension-filename');
    if (iconName) replaceElementWithIcon(iconEl, iconName, fileName, iconPack, provider);
  });
