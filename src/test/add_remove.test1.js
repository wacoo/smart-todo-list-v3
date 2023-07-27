import task  from '../tasks.js';
import Task from '../one_task.js'

const description = 'Eat break fast';
const description2 = 'Go to work';

const tsk1 = new Task();
const tsk2 = new Task();

describe('Test add and remove tasks', () => {
    test('test task.addTask()', () => {
        tsk1.index = 1;
        tsk1.description = description;
        tsk1.completed = false;

        task.addTask(tsk1);
        expect(task.taskCollection[0].description).toBe(description);
    });

    test('test task.removeTask()', () => {
        tsk2.index = 2;
        tsk2.description = description2;
        tsk2.completed = false;

        task.addTask(tsk2);
        task.removeTask(1);
        expect(task.taskCollection.length).toBe(1);
    });
});