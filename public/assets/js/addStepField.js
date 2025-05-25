
function addStepField(){
  const container = document.getElementById('steps-container');
  const newStep = document.createElement('div');
  newStep.classList.add('step-input');
  newStep.innerHTML = '<textarea name="steps[]" placeholder="Entrez l\'étape"></textarea>';
  container.appendChild(newStep);
}