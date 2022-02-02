
const inputCheckbox = document.querySelectorAll('input[type="checkbox"');

for(let i of inputCheckbox){
    i.addEventListener('click',function(e){
        location.href = `/toggle-task?id=${e.target.attributes.id.value}`;
    });

}