export class CounterService {
    activeActions: number = 0
    inactiveActions: number = 0

    changeCounter(type: string){
        if(type === 'active'){
            this.activeActions += 1
        } else {
            this.inactiveActions += 1
        }
    }
}