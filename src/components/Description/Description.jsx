import s from "./Description.module.css";
import Paper from "../Paper/Paper";

const Description = () => {
  return (
    <Paper height={210}>
      <p className={s.text}>
        Опыт, концентрат знаний и возможность избежать большинство ошибок при
        приеме на работу. Мы знаем, что хотят большинство локальных и
        иностранных компаний и можем вам это дать. А еще мы постоянно
        совершенствуем наши курсы программирования, добавляя туда что-то новое.
        Вы можете лично ознакомиться с историями успеха наших выпускников, чтобы
        убедиться в эффективности нашей методики обучения. Да, мы начнем с азов
        и самой простой информации. Знаем, что большинство людей приходят к нам
        с нулевыми знаниями.
      </p>
    </Paper>
  );
};

export default Description;
