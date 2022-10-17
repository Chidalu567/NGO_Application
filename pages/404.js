import styled from 'styled-components';


const PageNotFound = () => {
    return (
        <Container>
            <Text>Page Not Found</Text>
        </Container>
    )
}

// ---- Export for other files to use
export default PageNotFound;

// ----- UI components definition
const Container = styled.div`
    margin:0px;
    padding:0px;
`;
const Text = styled.h1`
    margin-left:50vw
`;