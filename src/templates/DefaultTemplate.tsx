import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface DefaultTemplateProps {
    children: ReactNode;
}

const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    padding: 32px;
`;

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
    return <MainWrapper>{children}</MainWrapper>;
};

export default DefaultTemplate;
