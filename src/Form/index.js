import './style.css';

const Form = () => (
    <form className="form">
        <input className="form__field" placeholder="Co jest do zrobienia?" autofocus id="input" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;