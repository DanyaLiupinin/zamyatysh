import { Container, Content } from "@components";
import { Header, Login } from "@widgets";

export const LoginFS = () => {
    return (
        <>
            <Header />
            <Container>
                <Content>
                    <Login />
                </Content>
            </Container>
        </>
    );
};
