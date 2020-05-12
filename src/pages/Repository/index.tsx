import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/28759636?v=4"
            alt="Rafael"
          />
          <div>
            <strong>rafaelsouz/aircnc</strong>
            <p>Blablablabla</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Fork</span>
          </li>
          <li>
            <strong>20</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="aaaa">
          <div>
            <strong>aaaaa</strong>
            <p>aaaaaa</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
