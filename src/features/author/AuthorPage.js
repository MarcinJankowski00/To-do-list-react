import React from 'react';
import Section from '../../common/Section';
import Container from '../../common/Container';
import { Text } from './styled'

function AuthorPage() {
    return (
        <Container>
            <header>
                <h1>O autorze</h1>
            </header>
            <Section
                title="Marcin Jankowski"
                content={
                    <Text>
                        Ukończyłem szkołę podstawową i gimnazjum w Knyszynie. Następnie ukończyłem liceum w Białymstoku na profilu mat-fiz-inf.
                        Aktualnie studiuje Ekonomie na Uniwersytecie w Białymstoku, oraz uczęstnicze w kursie Frontend developer.
                        Moimi pierwszym hobby jest siłownia. Ćwiczę parę razy w tygodniu w domowej siłowni, w piwnicy. 
                        Kolejnym hobby jest bieganie, biegam prawie codziennie. W wolnym czasie lubię pograć w gry, obejrzeć dobry film lub serial.
                    </Text>
                }
            />
        </Container>
    );
}

export default AuthorPage;