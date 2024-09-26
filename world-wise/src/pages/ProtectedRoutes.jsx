import PropTypes from 'prop-types';
import { useAuth } from '../contexts/FakeAuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/');
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}

ProtectedRoutes.propTypes = {
  children: PropTypes.object,
};

export default ProtectedRoutes;
