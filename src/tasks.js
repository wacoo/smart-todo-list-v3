class Tasks {
  constructor() {
    this.index = 0;
    this.taskCollection = [];
  }

  addTask(task) {
    this.taskCollection.push(task);
    this.index += 1;
    this.storeData(this.taskCollection);
  }

  editTask(desc, idx) {
    this.taskCollection[idx].description = desc;
    this.storeData(this.taskCollection);
  }

  updateCompleted(newStatus, idx) {
    this.taskCollection[idx].completed = newStatus;
    this.storeData(this.taskCollection);
  }

  removeTask(idx) {
    this.taskCollection = this.taskCollection.filter((tsk) => tsk.index !== idx);
    this.index = 0;
    for (let j = 0; j < this.taskCollection.length; j += 1) {
      this.taskCollection[j].index = j;
      this.index += 1;
    }
    this.storeData(this.taskCollection);
  }

  removeAllCompleted = () => {
    for (let i = 0; i < this.taskCollection.length; i += 1) {
      const tsk = this.taskCollection[i];
      if (tsk.completed) {
        this.removeTask(i);
        i -= 1;
      }
    }
    this.storeData(this.taskCollection);
  }

  storeData = (data) => {
    const strData = JSON.stringify(data);
    localStorage.setItem('data', strData);
  }

  restoreData() {
    const strData = localStorage.getItem('data');
    if (strData) {
      this.taskCollection = JSON.parse(strData);
    }
  }
}

export default new Tasks();
