class Tasks {
  constructor() {
    this.index = 0;
    this.taskCollection = [];
  }

  addTask(task) {
    this.taskCollection.push(task);
    this.index += 1;
  }

  editTask(desc, idx) {
    this.taskCollection[idx].description = desc;
  }

  updateCompleted(newStatus, idx) {
    this.taskCollection[idx].completed = newStatus;
  }

  removeTask(idx) {
    this.taskCollection = this.taskCollection.filter((tsk) => tsk.index !== idx);
    this.index = 0;
    for (let j = 0; j < this.taskCollection.length; j += 1) {
      this.taskCollection[j].index = j;
      this.index += 1;
    }
  }

  removeAllCompleted = () => {
    for (let i = 0; i < this.taskCollection.length; i += 1) {
      const tsk = this.taskCollection[i];
      if (tsk.completed) {
        this.removeTask(i);
        i -= 1;
      }
    }
  }

  storeData() {
    const strData = JSON.stringify(this.taskCollection);
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
