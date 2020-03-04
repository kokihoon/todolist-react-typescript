import React from 'react';
import styled from 'styled-components';


const PageLoadingOverlay = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageLoading = () => {
  return (
    <PageLoadingOverlay>
        로딩중
    </PageLoadingOverlay>
  );
};

export default PageLoading;