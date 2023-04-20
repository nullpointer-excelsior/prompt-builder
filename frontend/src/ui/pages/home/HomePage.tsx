import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import usePromptsActions from '../../../store/actions/usePromptsActions';
import getPrompts from '../../../core/application/getPrompts';
import PageContainer from '../../shared/components/PageContainer';

export default function HomePage() {

    const { setPrompts, setLoading } = usePromptsActions()
    const navigate = useNavigate();

    useEffect(() => {
      setLoading(true)
        getPrompts()
            .then(response => {
              setPrompts(response)
              navigate('/prompt/list')
            })
            .catch(err => {
              setLoading(false)
              console.error(err)
            })
    }, [])

  return (
    <PageContainer>
        <Outlet />
    </PageContainer>

      
  )
}

