import { Outlet } from 'react-router-dom';
import PageContainer from '../../shared/components/PageContainer';

export default function HomePage() {

  return (
    <PageContainer>
        <Outlet />
    </PageContainer>
  )
}

