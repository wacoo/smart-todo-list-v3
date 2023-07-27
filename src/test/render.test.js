import task  from '../tasks.js';
import Task from '../one_task.js'

const tsk1 = new Task();
const tsk2 = new Task();
const tsk3 = new Task();
const tsk4 = new Task();

const description = 'Eat break fast';
const description2 = 'Go to work';
const status = true;

describe('Test edit and remove tasks functions', () => {
    /*test('test editTask()', () => {
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
    });*/

    test('test removeAllCompleted()', () => {
        tsk1.index = 1;
        tsk1.description = description;
        tsk1.completed = false;

        task.addTask(tsk1);

        tsk2.index = 2;
        tsk2.description = description;
        tsk2.completed = false;

        task.addTask(tsk2);

        tsk3.index = 3;
        tsk3.description = description;
        tsk3.completed = true;

        task.addTask(tsk3);

        tsk4.index = 4;
        tsk4.description = description;
        tsk4.completed = true;

        task.addTask(tsk4);

        task.removeAllCompleted();
        let completedCount = 0;

        task.taskCollection.forEach((ts) => {
            if(ts.completed === true) {
                completedCount += 1;
            }
        })
        expect(completedCount).toBe(1);
    });

});