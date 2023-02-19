// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ## Table of Contents

  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[license](#license)
  -[contribution](#contribution)
  -[tests](#tests)
  -[questions](#questions)
  -[github](#github)
  -[mail](#mail)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ## GitHub Profile
  ${data.github}

  ## E-mail address
  ${data.mail}
`;
}

module.exports = generateMarkdown;
