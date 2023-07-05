import { Segment, Header, Title, Content } from "./styled";

const Section = ({ title, content, extraElementContent }) => (
    <Segment className="section">
        <Header>
            <Title>
                {title}
            </Title>
            {extraElementContent}
        </Header>
        <Content>
            {content}
        </Content>
    </Segment>
);

export default Section;