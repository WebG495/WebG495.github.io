document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://www.google.co.uk/imgres?q=schizophrenia%20types&imgurl=https%3A%2F%2Fmrsharrispsychology.school.blog%2Fwp-content%2Fuploads%2F2022%2F09%2Ftypes-of-schizophrenia.jpg&imgrefurl=https%3A%2F%2Fmrsharrispsychology.school.blog%2Fclassification-of-schizophrenia%2F&docid=7K-Y6qpN-28kZM&tbnid=KTHJSW1GYmHuXM&vet=12ahUKEwi4x8zvhsSIAxW2W0EAHTeeK6kQM3oECHEQAA..i&w=700&h=800&hcb=2&ved=2ahUKEwi4x8zvhsSIAxW2W0EAHTeeK6kQM3oECHEQAA")
        .then(response => response.json ())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height= 100;
        })
    }


})