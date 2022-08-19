class Observer {
  constructor (
    private observers: any[] = []
  ) {}

  subscribe (func:any) {
    this.observers.push(func)
    // return "구독중"
  }

  unsubscribe (func:any) {
    this.observers = this.observers.filter(observer => observer !== func)
  }

  notify(data:any) {
    this.observers.forEach(observer => observer(data))
  }
}

export default new Observer();