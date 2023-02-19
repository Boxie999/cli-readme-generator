// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ## Table of Contents

  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[license](#license)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
