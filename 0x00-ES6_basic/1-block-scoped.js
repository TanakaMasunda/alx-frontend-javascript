export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* no unused variables */
    const task = true;
    const task2 = false;
    /* no unused variables */
  }
  return [task, task2];
}
