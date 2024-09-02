let places = []
let isRunning = true
const userName = prompt("Qual seu nome?")

function addPlace() {
    let place = prompt("Qual lugar você gostaria de adicionar na lista de lugares já visitados?")

    if(confirm("Deseja realmente adicionar esse lugar?")){
        places.push(place)
    }
}

function removePlace() {
    if (places.length === 0) {
        alert("Você ainda não adicionou nenhum lugar.")
    } else {

        let promptMessage = "Qual lugar você deseja remover?\n"
        places.forEach((lugar, index) => {
            promptMessage += `${index + 1} - ${lugar}\n`
        })

        let indexToRemove = parseInt(prompt(promptMessage))
        
        if (indexToRemove && !isNaN(indexToRemove) && indexToRemove > 0 && indexToRemove <= places.length) {
            indexToRemove--
            let placeToRemove = places[indexToRemove]
      
            if (confirm(`Tem certeza que deseja remover ${placeToRemove}?`)) {
                places.splice(indexToRemove, 1)
                alert(`${placeToRemove} removido com sucesso!`)
            }
        } else {
            alert("Opção inválida. Por favor, escolha um número da lista.")
        }

    }
}

function listPlacesPrompt() {
    if (places.length === 0) {
        alert("Você ainda não adicionou nenhum lugar.")
    } else {
        let message = "Lugares visitados:\n"
        places.forEach((place, index) => {
            message += `${index + 1} - ${place}\n`
        })
        alert(message)
    }
}

function listPlacesHTML() {
    if (places.length > 0) {
        const list = document.getElementById("places")
    
        places.forEach((place) => {
            const newPlace = document.createElement('li')
            newPlace.textContent = place
            list.appendChild(newPlace)
        });

        isRunning = false
    } else {
        alert("Você ainda não adicionou nenhum lugar.")
    }
}

while (isRunning){
    let alternative = prompt(`
            ${userName}, selecione uma opção no menu abaixo.\n
            1 - Adicionar um lugar na lista de lugares já visitados.\n
            2 - Remover um lugar da lista de lugares já visitados.\n
            3 - Listar todos os lugares.\n
            4 - Mostrar todos os lugares no documento HTML.\n
            5 - Sair.
        `)
    
    switch (alternative) {
        case "1":
            addPlace()
            break
        case "2":
            removePlace()
            break
        case "3":
            listPlacesPrompt()
            break
        case "4":
            listPlacesHTML()
            break
    
        case "5":
            isRunning = false
            break

        default:
            alert("Opção inválida.")
    }
}