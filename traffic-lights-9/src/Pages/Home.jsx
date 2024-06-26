import Header from "../components/Header";
function Home() {
    return (
        <div className="container">
        <Header/>
        <div className="home">
                <h2>ЕКЗАМЕН</h2><br/>
                <h3>Мета: Розширити існуючий проєкт "Світлофор", який був створений під час семестрової роботи, <br/> додавши компонент "Пішохідний світлофор".  <br/> Основні завдання:</h3><br/>
                <h4>
                1. Створіть новий компонент PedestrianTrafficLight, який буде відображати два стани: "Чекай" (червоне світло) та "Йди" (зелене світло).<br/>
                2. Компонент повинен змінювати свій стан автоматично кожні 10 секунд, або за допомогою кнопки, яку може натиснути користувач.<br/>
                3. Забезпечте синхронізацію між автомобільним та пішохідним світлофорами. Пішохідне світло має бути "Чекай", коли автомобільний світлофор показує зелене світло.<br/>
                4. Додайте логіку, яка блокуватиме кнопку пішохідного світлофора, коли активне зелене світло автомобільного світлофора.<br/>
                5. Оновіть UI так, щоб він візуально представляв обидва світлофори (автомобільний і пішохідний).<br/>
                6. Забезпечте чітке відображення поточного стану світлофорів та кнопки для зміни стану пішохідного світлофора.<br/>
                7. Реалізувати можливість роботи з сервером <br/>
                8. Опублікувати проєкт<br/>
                9. Запушити роботу <br/>
                </h4>
        </div>
        </div>
    )
}
export default Home;