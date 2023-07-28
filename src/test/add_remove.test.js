import task from '../tasks.js';
import Task from '../one_task.js';
import MockLocalStorage from './mock_local_storage.js';

const description = 'Eat break fast';
const description2 = 'Go to work';
const description3 = 'Brush my teeth.';
const number = 12;

const tsk1 = new Task();
const tsk2 = new Task();
const tsk3 = new Task();

const mockStorage = new MockLocalStorage();

describe('Test add and remove tasks', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockStorage,
    });
  });

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

  test('test storeData() function', () => {
    task.storeData(number);
    expect(JSON.parse(localStorage.getItem('data'))).toBe(12);
  });

  test('test restoreData() function', () => {
    tsk3.index = 3;
    tsk3.description = description3;
    tsk3.completed = false;
    task.addTask(tsk3);
    task.storeData(task.taskCollection);
    task.taskCollection = [];
    task.restoreData();
    expect(task.taskCollection[1].description).toBe('Brush my teeth.');
  });
});
