let quize=0;

document.getElementById('quize').addEventListener('click', () => {
    quize+=1;
    document.querySelector('.form-quize').innerHTML += `
        <form class="form col container p-4  my-4 card position-relative ${quize}quize" id='${quize}quize'>
            <h3 class="h3">
                Name Quize:
            </h3>
            <input class="form-name form-control w-75 my-3 " for="" name="${quize}quize" placeholder="Enter name quize" type="text ">
            
            <button type="button" class=" my-3 btn btn-outline-dark" onclick="appendQuestion('${quize}quize')">
                Create question
            </button>

            <button type="button" class="btn-close position-absolute m-2 end-0 top-0" aria-label="Закрыть"></button>
        </form>`;
        
});
function appendQuestion(id) {
    $(`#${id}`).append (`
    <div class="form-question container card my-3 p-3  position-relative">

        <div class="form-answer-name col" id="answer">
            <h3 class="h3">
                Name question:
            </h3>
            <input class="form-answer--input form-control w-75  my-3" for="form-control"  name="question" placeholder="Enter question" type="text">
            <button type="button" class="btn-close m-2 position-absolute end-0 top-0" aria-label="Закрыть"></button>
        </div>

        <button type="button" class=" btn btn-outline-dark my-3 " onclick="appendAnsver('${quize}quize');">
            Create answer
        </button>
    </div>`);
};
function appendAnsver(id) {
    $(`#${id}`).append (`
    <div class="form-answer container py-3 col d-flex justify-content-end align-items-center">
        <input  class="form-answer--input form-control w-75 form-label my-3 me-0  name="answer-text" placeholder="Enter answer" type="text">
        <input class="form-answer--radio mx-2" type="radio" name="answer" id="flexRadioCheckedDisabled" >
        
        <button type="button" class="btn-close" aria-label="Закрыть"></button>
    </div> `);
};
