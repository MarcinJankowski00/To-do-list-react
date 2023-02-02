import './style.css';

const Section = ({ title, content, extraElementContent }) => (
    <section className="section">
        <div className="section__element">
            <h2 className="section__header">{title}</h2>
            {extraElementContent}
        </div>
        <div className="section__content">
            {content}
        </div>
    </section>
)

export default Section;