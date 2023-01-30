

export class Player {


    constructor(name){
        this.name = name
        this.score = 0
    }

    get HTMLTemplate() {
    
        return `
    <div class="col-4 text-dark">
    <div class="card text-center selectable no-select" onclick="app.PlayerController('${this.name}')">
        <h5>${this.name}</h5>
        
    </div>
    </div>
    `
    }
    
}