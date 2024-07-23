import React from 'react';
import Section from '../../common/Section';
import Container from '../../common/Container';

function AuthorPage() {
    return (
        <Container>
            <header>
                <h1>O autorze</h1>
            </header>
            <Section
                title="O autorze"
                content={
                    <a>
                        nanana
                    </a>
                }
            />
        </Container>
    );
}

export default AuthorPage;