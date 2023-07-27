import task from '../tasks.js';
import Task from '../one_task.js';

const tsk1 = new Task();
const tsk2 = new Task();
const tsk3 = new Task();
const tsk4 = new Task();

const description = 'Eat break fast';
const description2 = 'Go to work';
const status = true;

describe('Test edit and remove tasks functions', () => {
  test('test editTask()', () => {
    tsk1.index = 1;
    tsk1.description = description;
    tsk1.completed = false;

    task.addTask(tsk1);
    task.editTask(description2, 0);
    expect(task.taskCollection[0].description).toBe(description2);
  });

  test('test updateCompleted()', () => {
    tsk1.index = 1;
    tsk1.description = description;
    tsk1.completed = false;

    task.addTask(tsk1);
    task.updateCompleted(status, 0);
    expect(task.taskCollection[0].completed).toBe(true);
  });
});