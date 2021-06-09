import '@cypress/code-coverage/support';
import 'cypress-real-events/support';

const compareColor = (color, property) => targetElement => {
  const tempElement = document.createElement('div');
  tempElement.style.color = color;
  tempElement.style.display = 'none'; // make sure it doesn't actually render
  document.body.appendChild(tempElement); // append so that `getComputedStyle` actually works

  const tempColor = getComputedStyle(tempElement).color;
  const targetColor = getComputedStyle(targetElement[0])[property];

  document.body.removeChild(tempElement); // remove it because we're done with it
  expect(tempColor).to.equal(targetColor);
};

const compareBgImage = (image, property) => targetElement => {
  const tempElement = document.createElement('div');
  tempElement.style.background = image.replace(';', '');
  tempElement.style.display = 'none'; // make sure it doesn't actually render
  document.body.appendChild(tempElement); // append so that `getComputedStyle` actually works

  const tempImage = getComputedStyle(tempElement).backgroundImage;
  const targetImage = getComputedStyle(targetElement[0])[property];
  expect(tempImage).to.equal(targetImage);
};

Cypress.Commands.overwrite(
  'should',
  (originalFn, subject, expectation, ...args) => {
    const customMatchers = {
      'have.backgroundImage': compareBgImage(args[0], 'backgroundImage'),
      'have.backgroundColor': compareColor(args[0], 'backgroundColor'),
      'have.color': compareColor(args[0], 'color'),
      'have.borderColor': compareColor(args[0], 'borderColor'),
    };

    // See if the expectation is a string and if it is a member of Jest's expect
    if (typeof expectation === 'string' && customMatchers[expectation]) {
      return originalFn(subject, customMatchers[expectation]);
    }
    return originalFn(subject, expectation, ...args);
  },
);
