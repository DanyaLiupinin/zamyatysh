import { Container } from "@components";
import { Content } from "@radix-ui/react-dropdown-menu";
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
