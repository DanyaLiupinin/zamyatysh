import {
    Header,
    Footer,
    Account as AccountSection
} from "@widgets";
import { Container, Content } from "@components";

export const Account = () => {

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <AccountSection />
                </Content>
            </Container>
            <Footer />
        </>
    );
};
