// 1. Функция проверки длины строки.

const strLength = (string, maxLength) =>
  string.length <= maxLength;


// 2. Функция для проверки, является ли строка палиндромом (читается одинаково слева направо \ справа налево).

const isPalindrome = (string) => {
  let stringReversed = '';
  const stringLowered = string.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    stringReversed = `${string[i]}${stringReversed}`.replaceAll(' ', '').toLowerCase();
  }
  return stringReversed === stringLowered;
};

// 3. Функция, которая извлекает все цифры из строки и возвращаетих в виде целого пложительного числа.

// 4. Выяснить, выходит ли встреча за рамки рабочего дня?

const isLegit = (workingDayStart, workingDayEnd, meetingStart, meetingDuration) => {
  const calcMinutes = (timeInHours) => {
    const array = timeInHours.split(':');
    return Number(array[0]) * 60 + Number(array[1]);
  };

  const workStartInMinutes = calcMinutes(workingDayStart);
  const workEndInMinutes = calcMinutes(workingDayEnd);
  const meetingStartInMinutes = calcMinutes(meetingStart);
  const meetingEndInMinutes = meetingStartInMinutes + meetingDuration;

  return meetingEndInMinutes <= workEndInMinutes && meetingStartInMinutes >= workStartInMinutes;
};


// Борьба с ESLint

strLength('Строка', 5);
isPalindrome('Строка');
isLegit('08:00', '14:30', '14:00', 90);

