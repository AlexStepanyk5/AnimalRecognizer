import React from "react";
import "./style.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "#FFE4C8",
  borderRadius: "24px",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openn, setOpenn] = React.useState(false);
  const handlleOpen = () => setOpenn(true);
  const handlleClose = () => setOpenn(false);

  const [oppen, setOppen] = React.useState(false);
  const handleOppen = () => setOppen(true);
  const handleClosse = () => setOppen(false);
  const publicURL = process.env.PUBLIC_URL;

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="meow">
          <div>
            <h3 className="slackey">Мяяв-в</h3>
            <h2 className="meow-text">
              Наше бачення - світ вільний від насильнства над тваринами: разом ми можемо рухати світ за тварин. Глобальний добробут для тварин. Краще життя для тварин.
            </h2>
          </div>
          <div className="social-media">
            <a target="blank" href="https://www.facebook.com/fcit.tneu.edu.ua">
              <img
                alt="facebook-img"
                src={`${publicURL}/images/facebook.svg`}
              />
            </a>
            <a target="blank" href="https://twitter.com/ZUNUniversity">
              <img alt="twitter-img" src={`${publicURL}/images/twitter.svg`} />
            </a>
            <a target="blank" href="https://www.linkedin.com/company/wunu/">
              <img
                alt="linkedin-img"
                src={`${publicURL}/images/linkedin.svg`}
              />
            </a>
            <a target="blank" href="https://www.instagram.com/kn.zunu/">
              <img
                alt="instagram-img"
                src={`${publicURL}/images/instagram.svg`}
              />
            </a>
          </div>
        </div>
        <div className="other">
          <div>
            <h3 className="slackey">Корисні посилання</h3>
            <ul className="main-font">
              <ul>
                <li onClick={handleOppen}>Часті запитання</li>
                <Modal
                  open={oppen}
                  onClose={handleClosse}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Питання, що ми часто отримуємо
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        <li>
                          П: Як працює процес адопції тварин на цьому вебсайті?
                          <br />
                          В: Щоб прийняти чотирилапого друга, перегляньте доступні списки та
                           знайдіть тваринку, яка відповідає вашим уподобанням. Зверніться до
                           власника тварини або притулку за вказаною контактною інформацією,
                           щоб дізнатися про улюбленця, поставити питання, що вас цікавлять і 
                           домовитися про зустріч і подальші дії.
                          <br />
                          <br />
                          П: Чи можу я викласти оголошення про адопцію свого чотирилапого друга на цьому сайті?
                          <br />
                          В: Звісно! Ми заохочуємо наших користувачів викладати оголошення при потребі.
                          Просто створіть акаунт, надайте потрібні деталі про вашого улюбленця (включаючи опис,
                          фото і всю іншу потрібну інформацію)
                          Усі, кого зацікавить ваше оголошення зможуть з вами зв'язатись.
                          <br />
                          <br />
                          П: Як я можу зв'язатись із власником чи притулком щодо адопції?
                          <br />
                          В: Кожна анкета містить контактну інформацію подавача (номер телефону, електронну адресу).
                          Просто зв'яжіться із контактною особою, задайте питання, що вас цікавлять та дізнайтесь
                          потреби тваринки.
                          <br />
                          <br />
                          П: Тварини на цьому вебсайті від окремих власників чи притулків?
                          <br />
                          В: Ми співпрацюємо із всіма - притулками та окремими власниками. 
                          Одні улюбленці публікуються власниками із різних причин, інші ж
                          тваринки, що тимчасово перебувають у притулках. Кожна анкета дає 
                          інформацію про те, в кого саме знаходиться тваринка.
                          <br />
                          <br />
                          П: Що якщо я стикнусь із проблемами під час адопції?
                          <br />
                          В: Якщо ви стикнетесь із проблемами під час адопції тварин, просто зверніться в нашу службу підтримки -
                          наша команда з радістю допоможе вам та впениться, що весь процес пройде чудово!
                          <br />
                          <br />
                          П: Як я можу допомогти тваринкам, чиї анкети розміщені на цьому вебсайті?
                          <br />
                          В: Наш вебсайт дає можливість донатити напряму тваринкам у притулках та нам для допомоги у благодійних зборах.
                          На додачу, ви можете сприяти процесу адопції тваринок, що тут розміщені - це найкраща допомога. Окрім цього, 
                          поширення може допомогти фінансово, що теж є дуже вагомим внеском.
                          <br />
                          <br />
                          Якщо у вас є інші запитання - без вагань зв'яжіться із нашою командою і ми будемо раді вам допомогти!
                        </li>
                        <br />
                      </ul>
                    </Typography>
                    <Button
                      sx={{
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FF5B2E",
                        transition: "all 0.3s ease 0s",
                        "&:hover": {
                          backgroundColor: "#FD3600",
                          boxShadow: "0px 8px 8px #723d00",
                          transform: "translateY(-5px)",
                        },
                      }}
                      variant="contained"
                      onClick={handleClosse}
                    >
                      Закрити
                    </Button>
                  </Box>
                </Modal>
              </ul>
              <ul>
                <li onClick={handlleOpen}>Політики приватності</li>
                <Modal
                  open={openn}
                  onClose={handlleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Політики приватності
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        <li>Дата набуття чинності: 20.01.2024</li>
                        <br />
                        <li>
                           Ця Політика конфіденційності описує, як ми збираємо, використовуємо та
                           захищаємо вашу особисту інформацію, коли ви відвідуєте наш
                           вебсайт. Ми прагнемо захищати вашу конфіденційність
                           та забезпечувати безпеку вашої особистої інформації. 
                           Використовуючи наш вебсайт, ви погоджуєтеся з
                           твердженнями, що містяться в цій Політиці конфіденційності.
                           <br />
                           1. Інформація, яку ми збираємо: ми можемо збирати особисту інформацію,
                           таку інформацію, як ваше ім’я, адреса електронної пошти, контактні
                           дані та будь-яку іншу інформацію, яку ви надаєте нам добровільно
                           через форми або взаємодії на нашому вебсайті.
                           <br />
                           2. Використання інформації: ми використовуємо зібрану
                           інформацію, щоб надати вам запитані дані, послуги, 
                           відповіді на ваші запити та щоб покращувати наш
                           вебсайт, дізнаватись вашу думку щодо оновлень. Ми також можемо
                           використовувати вашу інформацію для статистичного аналізу, щоб
                           покращити користувацький досвід.
                           <br />
                           3. Розкриття інформації: ми не продаємо, не торгуємо,
                           або іншим чином не передаємо вашу особисту інформацію
                           третіми особами без вашої згоди, за винятком
                           таких обставини: - Ми можемо поділитися вашими даними
                           з довіреними сторонніми постачальниками послуг, які 
                           допомагають нам у роботі нашого вебсайту та проведенні
                           аналізу нашої організації, якщо вони згодні зберігати
                           інформацію конфіденційно. - Ми можемо розкрити ваші
                           дані, якщо це вимагається законом або у відповідь на
                           дійсний законний запит, наприклад судовий наказ або
                           державний запит.
                           <br />
                           4. Файли cookie та технології відстеження: наш вебсайт може
                           використовувати файли cookie та подібні технології відстеження, щоб
                           покращувати ваш досвід перегляду, аналізувати тенденції та
                           збирати демографічну інформацію. Ви можете керувати
                           налаштуванням файлів cookie через налаштування вашого браузера.
                           <br />
                           5. Безпека даних: ми вживаємо розумних заходів, щоб
                           захистити вашу особисту інформацію від несанкціонованого доступу,
                           зміни, розкриття або знищення.
                           Однак зауважте, що жоден спосіб передачі або електронне зберігання 
                           не може бути повністю безпечним, і ми не можемо гарантують абсолютну безпеку.
                           <br />
                           6. Посилання третіх сторін: наш вебсайт може містити посилання на
                           вебсайти третіх осіб, які не знаходяться під нашим контролем.
                           Ми не несемо відповідальності за практику конфіденційності або
                           вміст таких вебсайтів. Заохочуємо вас переглянути політики 
                           конфіденційності цих вебсайтів перед наданням будь-якої особистої інформації.
                           <br />
                           7. Зміни в цій Політиці конфіденційності: Ми залишаємо за собою
                           право оновлювати або змінювати цю Політику конфіденційності в будь-який час. 
                           Будь-які зміни набудуть чинності негайно розміщення переглянутої Політики 
                           конфіденційності на нашому вебсайті. Ми рекомендуємо вам переглядати цю Політику 
                           конфіденційності періодично, щоб бути в курсі того, як ми збираємо,
                           використовуємо та захищаємо вашу особисту інформацію.
                           <br />
                           8. Зв’яжіться з нами: якщо у вас виникли запитання чи сумніви
                           щодо цієї Політики конфіденційності, будь ласка, зв'яжіться з нами.
                           <br />
                           <br />
                           Використовуючи наш вебсайт, ви підтверджуєте, що ви ознайомлені, зрозуміли і погоджуєтесь 
                           з умовами цієї Політики конфіденційності.
                        </li>
                        <br />
                      </ul>
                    </Typography>
                    <Button
                      sx={{
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FF5B2E",
                        transition: "all 0.3s ease 0s",
                        "&:hover": {
                          backgroundColor: "#FD3600",
                          boxShadow: "0px 8px 8px #723d00",
                          transform: "translateY(-5px)",
                        },
                      }}
                      variant="contained"
                      onClick={handlleClose}
                    >
                      Close
                    </Button>
                  </Box>
                </Modal>
              </ul>
              <ul>
                <li onClick={handleOpen}>Правила використання</li>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Правила та умови
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ul>
                        <li>
                          1. Стандартні положення та умови вебсайту, описані на цій сторінці,
                           керуватимуть використанням вами нашого вебсайту.
                           Назва вебсайту доступна за URL-адресою вебсайту.
                         </li>
                         <br />
                         <li>
                           2. Використовуючи наш веб-сайт, ви приймаєте ці умови та
                           умови в повному обсязі. Якщо ви не згодні з цими умовами
                           та умови або будь-яка частина цих умов і
                           умови, ви не повинні використовувати наш веб-сайт.
                         </li>
                         <br />
                         <li>
                           3. Права інтелектуальної власності: Ми та наші ліцензіари володіємо 
                           інтелектуальним продуктом права власності на вебсайт і матеріали на вебсайті. 
                           Усе це відповідно до наведеної нижче ліцензії права інтелектуальної власності.
                         </li>
                         <br />
                         <li>
                           4. Ліцензія на використання веб-сайту: Ви можете переглядати, завантажувати лише з метою 
                           кешування та друку сторінок вебсайту для вашого особистого користування відповідно до
                           обмежень, викладених тут та в інших місцях правил та умов.
                        </li>
                        <br />
                      </ul>
                    </Typography>
                    <Button
                      sx={{
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FF5B2E",
                        transition: "all 0.3s ease 0s",
                        "&:hover": {
                          backgroundColor: "#FD3600",
                          boxShadow: "0px 8px 8px #723d00",
                          transform: "translateY(-5px)",
                        },
                      }}
                      variant="contained"
                      onClick={handleClose}
                    >
                      Закрити
                    </Button>
                  </Box>
                </Modal>
              </ul>
            </ul>
          </div>
          <div>
            <h3 className="slackey">Для вас</h3>
            <ul className="main-font">
              <a href="/about">Про нас</a>
              <a href="/our-pets">Наші улюбленці</a>
              <a href="/blog">Блог</a>
            </ul>
          </div>
          <div>
            <h3 className="slackey">Контактна інформація</h3>
            <ul className="main-font">
              <a href="tel:+380252525250">+380252525250</a>
              <a href="https://goo.gl/maps/yqwMBbJ84u5jyTEt5" target="blank">
                Ternopil, Mykulynetska street, 46a
              </a>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="copyright">Copyright 2023</h2>
    </div>
  );
};

export default Footer;
