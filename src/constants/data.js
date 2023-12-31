const RESULT_OPTION_1 = 'Пациенту показана инсулинотерапия';
const RESULT_OPTION_2 = 'Относительные показания к инсулинотерапии';
export const RESULT_OPTION_3 = 'Пациентам, не относящимся к категориям 1-4, показано назначение пероральной сахароснижающей терапии (с учетом противопоказаний к конкретному препарату согласно инструкции и возможности применения при COVID-19)';

export const DATA = {
  0: {
    title: 'Категория 1',
    questions: ['ИТ до COVID-19 для компенсации СД 2'],
    result: RESULT_OPTION_1,
  },
  1: {
    title: 'Категория 2',
    questions: [
      'Глюкоза плазмы крови натощак ≥ 10 ммоль/л',
      'Глюкоза плазмы через 2 часа после еды ≥ 13 ммоль/л',
      'Кетоацидоз или гиперосмолярное состояние',
      'Выраженные поздние осложнения СД, в т.ч. тяжелые формы полинейропатии, ретинопатии, нефропатии (СКФ<30 мл/мин/1,73 м2)',
      'Тяжелая сопутствующая соматическая патология',
      'Беременность и неконтролируемая диетой гипергликемия',
    ],
    result: RESULT_OPTION_1,
  },
  2: {
    title: 'Категория 3',
    questions: [
      'Тяжелое и крайне тяжелое течение COVID-19*',
      'Нарушения сознания и/или парентеральное питание',
    ],
    result: RESULT_OPTION_1,
  },
  3: {
    title: 'Категория 4',
    questions: ['Сопутствующая ишемическая болезнь сердца', 'SpO2 <95%'],
    result: RESULT_OPTION_2,
  },
};
