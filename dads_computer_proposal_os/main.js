
function generateOutput() {
  const project = document.getElementById('project').value;
  const about = document.getElementById('about').value;
  const pricing = document.getElementById('pricing').value;
  const style = document.getElementById('style').value;

  const text = `// ${project.toUpperCase()} //

:: ABOUT PROJECT ::
${about}

:: PRICING STRUCTURE ::
${pricing}

:: VISUAL STYLE ::
${style}

-- Dad's Computer Terminal Proposal v0.1`;

  document.getElementById('output').innerText = text;

  const element = document.createElement("div");
  element.innerText = text;
  html2pdf().from(element).save(`${project}_DadsDeck.pdf`);
}
