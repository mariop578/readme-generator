function renderLicenseBadge(license) {
  if (license.length === 0) {
    return "";
  }

  const licenseURL = `https://img.shields.io/badge/license-${encodeURIComponent(
    license
  )}-brightgreen`;

  return `![License Badge](${licenseURL})`;
}

function renderLicenseLink(license) {
  if (license.length === 0) {
    return "";
  }

  return `[License](#license)`;
}

function renderLicenseSection(license) {
  if (license.length === 0) {
    return "";
  }

  return `## License

This project is licensed under the ${license} License - see the [LICENSE.md](LICENSE.md) file for details.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- ${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, feel free to reach out to me at ${
    data.email
  }. You can also visit [my GitHub profile](https://github.com/${
    data.username
  }).
`;
}

module.exports = generateMarkdown;
