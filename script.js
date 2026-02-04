// Program combination selector
document.addEventListener('DOMContentLoaded', function() {
    const levelInputs = document.querySelectorAll('input[name="level"]');
    const goalInputs = document.querySelectorAll('input[name="goal"]');
    
    function updateCombination() {
        const selectedLevel = document.querySelector('input[name="level"]:checked');
        const selectedGoal = document.querySelector('input[name="goal"]:checked');
        
        if (selectedLevel && selectedGoal) {
            const levelValue = selectedLevel.id.replace('level-', '');
            const goalValue = selectedGoal.id.replace('goal-', '');
            const combinationId = levelValue + '-' + goalValue;
            const combinationInput = document.getElementById(combinationId);
            
            if (combinationInput) {
                combinationInput.checked = true;
            }
        }
    }
    
    levelInputs.forEach(input => {
        input.addEventListener('change', updateCombination);
    });
    
    goalInputs.forEach(input => {
        input.addEventListener('change', updateCombination);
    });
});