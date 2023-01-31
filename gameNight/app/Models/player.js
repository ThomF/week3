

export class Player {


    constructor(name){
        this.name = name
        this.score = 0
    }

    losePoint(score) {
        if (this.score) {
        this.score -= score
        console.log( this.name, `losing ${score} pts.`)
        }
    }
    addPoint(score) {
        if (this.score) {
        this.score += score
        console.log( this.name, `adding ${score} pts.`)
        }
    }
    get HTMLTemplate() {
    
        return `
    <div class="col-4 text-dark">
    <div class="card text-center selectable no-select">
        <h5>${this.name}</h5>
        <button class="btn btn-success" onclick="app.playerController.addPoint('${this.name}')"> + </button>
        <span id="point"> ${this.score}</span>
        <button class="btn btn-danger" onclick="app.playerController.losePoint('${this.name}')"> - </button>
        
    </div>
    </div>
    `
    }
    
}