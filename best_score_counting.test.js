const { findBestStudent } = require('./best_score_counting');

describe('findBestStudent', () => {
  test('Finding student with max score', () => {
    const students = [
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Maria", score: 5, date: "2022-10-10" },
      { name: "Olga", score: 0, date: "" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
      { name: "Oleg", score: 9, date: "2022-10-01" },
      { name: "Zanna", score: 15, date: "2022-10-11" },
    ];
    expect(findBestStudent(students)).toEqual({ name: "Ivan", score: 35, date: "2022-10-11" });
  });


  test('Finding first student with max score with the same scores', () => {
    const students = [
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
    ];
    expect(findBestStudent(students)).toEqual({ name: "Ivan", score: 35, date: "2022-10-11" });
  });

  
  test('Returning student with 0 score if there is no one with higher score', () => {
    const students = [
      { name: "Irina", score: 0, date: "2022-10-11" },
      { name: "Vasily", score: 0, date: "2022-10-10" },
    ];
    expect(findBestStudent(students)).toEqual({ name: "Irina", score: 0, date: "2022-10-11" });
  });
});